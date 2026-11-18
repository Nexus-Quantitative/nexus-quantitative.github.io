# Relatório Técnico & Pesquisa Quantitativa — Nexus Quant
## Anatomia das Cascatas Sistêmicas de Liquidação, Arquitetura `Ark Streams` e o Proceder do Operador Quant Automatizado

**Documento:** `QUANT-RES-2026-11`  
**Data de Referência:** 18 de novembro de 2026 (`16:18 UTC`)  
**Regime de Mercado:** `DELEVERAGING EM ESCADA · PÓS-CASCATA SISTÊMICA`  
**Infraestrutura Auditada:** `Ark Streams v2026` (`Go` + `NATS JetStream` + `OKX`/`Bitget` Feeds + `alpha_shadow`)  

---

## Sumário Executivo

Entre **20 de outubro e 18 de novembro de 2026**, o mercado de perpétuos cripto atravessou uma desalavancagem estrutural de **`$82.204 → $62.646` no Bitcoin** (`−23,8%`) e de **`$2.444 → $1.733` no Ethereum** (`−29,1%`). Ao contrário do que sugere a leitura superficial de gráficos diários, essa queda não foi um deslizamento linear de preço: ela se materializou em **24+ clusters discretos de liquidação sistêmica (`MKRatio >= 2,0x P95`)**, onde o motor de risco da exchange despejou dezenas de milhões de dólares em ordens forçadas a mercado em janelas curtas de 5 minutos.

Em resposta direta ao comportamento empírico observado em **1,50 milhão+ de eventos reais** e validado fora da amostra em **111 dias contínuos (`2026-07-04 → 2026-10-22`)**, o ecossistema **Nexus Quant** aposentou sinais direcionais manuais baseados em osciladores defasados e consolidou em produção uma arquitetura determinística de **Provisão Passiva de Liquidez Condicionada a Eventos Extremos (*Event-Conditioned Passive Liquidity Provision*)**:

- **`MajorCascadeStinkBid`** em operação nos **Core 4 Majors** (`BTCUSDT`, `ETHUSDT`, `XRPUSDT`, `XAUUSDT`): `+18,20%` líquidos compostos no OOS de 111 dias (`Sharpe +5,34`, `Win Rate 69,1%`, `Profit Factor 6,31`, `MaxDD 0,89%` sem alavancagem).
- **`AltCascadeDeepBid` (Strategy F1 — Shadow Mode)** em operação simultânea em **21 altcoins**, condicionado por confirmação sistêmica global (`SystemicLiquidationTracker` monitorando `1.061` instrumentos em `market.liquidation.>`).
- **Hardening de Produção (PRs #78, #79 e #80 — `18/Nov/2026`):** Proteção contra *backlog* obsoleto (`MaxBarAgeMs = 120s`), unificação estrita de *buckets* de 1 minuto, e **Warmup Causal Instantâneo $O(N)$ de 30 dias** drenando **`279.783` eventos** históricos de `LIQUIDATIONS_ARCHIVE` na inicialização — validado ao vivo minutos depois durante a cascata de `16:12 UTC` em `SOLUSDT` e `NEARUSDT` (`MKRatio = 2,77x`).

---

## 1. Cenário Atual de Mercado (`18 de Novembro de 2026`)

Leitura direta dos contratos perpétuos (`USDT-FUTURES`) e do histórico de 30 dias na OKX às `16:17 UTC` de `18/11/2026`:

| Ativo | Último Preço | Faixa 24h (`Low – High`) | Funding Rate | Leitura Microestrutural |
| :--- | :---: | :---: | :---: | :--- |
| **`BTCUSDT`** | **`$62.656,8`** | `$62.645,7 – $65.236,6` | `+0,0067%` | Novo teste da zona mínima semanal (`$62,6k–$62,8k`) após repique da cascata de `14:40 UTC` ceder |
| **`ETHUSDT`** | **`$1.758,01`** | `$1.755,01 – $1.835,19` | `+0,0007%` | Funding próximo de zero; liderou liquidações recentes (`$2,01M` em 5m às `14:40 UTC`) |
| **`SOLUSDT`** | **`$72,957`** | `$71,649 – $75,739` | `-0,0046%` | Acabou de acionar gatilho **F1 Shadow** às `16:12 UTC` (`$417,9k` em 5m / `2,90x P95`) |
| **`XRPUSDT`** | **`$0,9712`** | `$0,9518 – $1,0073` | `-0,0040%` | Funding negativo moderado; desalavancagem de varejo controlada |
| **`XAUUSDT`** | **`$3.756,36`** | `$3.749,57 – $3.878,72` | `+0,0101%` | Ativo em margem cruzada com cripto; vulnerável a liquidações mecânicas em flushes sistêmicos |

### Diagnóstico Operacional do Dia

1. **Descida em Escada por Desalavancagem Mecânica:** Desde o topo de `$82.204` (`20/10`), o mercado perdeu suportes em blocos discretos — `$80,9k` (`22/10`), `$76,1k` (`05/11`), `$74,2k` (`08/11`), `$69,3k` (`13/11`), `$63,8k` (`14/11`), `$62,8k` (`15/11`) e hoje `$62,65k` (`18/11`) — sempre demarcados por picos multi-ativo de liquidação forçada de *longs*.
2. **Higiene de Funding & Ausência de Euforia Compradora:** As taxas de *funding* estão próximas da neutralidade (`+0,0007%` em ETH, `-0,0046%` em SOL, `-0,0040%` em XRP, `+0,0067%` em BTC), indicando que grande parte da alavancagem comprada em excesso foi expurgada nos eventos dos dias `08/11`, `13/11` e `14/11`.
3. **Eventos Intradiários de Hoje (`18/11`):**
   - **`14:40 UTC`:** Cascata sistêmica na cesta Core de **`$3.151.213`** em 5m (**`MKRatio = 3,53x`**), com **`ETHUSDT` liquidando `$2,01M`** em `$1.767` (`BTC $63.059`), gerando repique imediato até `$63,8k+` no BTC e `$1.785+` no ETH antes da nova rodada de pressão vendedora.
   - **`16:12 UTC`:** Nova onda de pressão empurrou `BTC` a `$62.645,7`, elevando o **`MKRatio` global para `2,77x`** (`2,766x > 2,0x` do gate sistêmico), disparando ordens limitadas passivas em shadow na `AltCascadeDeepBid` para **`SOLUSDT`** (`liq5m = $417.877 >= P95 $144.217`, limite a **`$70,8416`**, `-313 bps`) e **`NEARUSDT`** (`liq5m = $70.595 >= P95 $68.122`, limite a **`$3,0974`**, `-313 bps`).

---

## 2. A Física das Liquidações Forçadas e a Régua Causal de 30 Dias

### O Que Significa Exatamente `"Liquidado Long (SELL) $X"`?

Quando um trader posicionado comprado (*Long*) atinge o preço de manutenção de margem, a exchange toma o controle da posição e envia uma **ordem de venda a mercado forçada (`side == "SELL"`)** para encerrar o contrato contra o livro de ofertas. Portanto:
- Um evento marcado como **`SELL`** representa a **morte compulsória de um comprador alavancado (*Long*)**, gerando pressão vendedora mecânica e insensível a preço.
- Agregados de **24 horas** (ex.: `$3,82M` de BTC liquidados em 24h) somam centenas de micro-liquidações diluídas ao longo do dia — **o livro absorve fluxo diluído sem deslocamento de preço**.
- O que desloca o preço perpétuo abaixo do valor justo global (Spot/ETF/CME) é a **velocidade de chegada (*burst*) na janela móvel de 5 minutos (`liq_long_5m`)**, medida contra a distribuição causal móvel dos últimos **30 dias (`43.200` minutos)** do próprio ativo e do mercado global.

### As Duas Réguas Empíricas dos Últimos 30 Dias (`19/Out → 18/Nov/2026`)

1. **Régua da Cesta Analítica Core (`23` principais ativos OKX · `5.436` janelas 5m não-nulas, deduplicadas):**

| Percentil / Limiar (5 Minutos) | Volume USD | Razão (`MKRatio`) | Interpretação Quantitativa |
| :--- | :---: | :---: | :--- |
| **Mediana (`P50`)** | **$23.424** | `0,03x` | Ruído ordinário de alavancagem de varejo |
| **Percentil 90 (`P90`)** | **$448.229** | `0,50x` | Estresse vendedora localizado / intradiário |
| **Percentil 95 (`P95` — Base)** | **$893.554** | **`1,00x`** | Estresse sistêmico moderado |
| **Gatilho Sistêmico (`2,0x P95`)** | **$1.787.108** | **`2,00x`** | **Cascata Sistêmica Confirmada** |
| **Percentil 99 (`P99`)** | **$3.022.857** | **`3,38x`** | Capitulação extrema multi-ativo |

2. **Régua de Produção do `SystemicLiquidationTracker` (`1.061` subjects OKX · `279.783` eventos · `21.548` janelas 5m não-nulas):**
   - Ao monitorar todos os `1.061` instrumentos em `market.liquidation.>`, o volume de janelas calmas não-nulas quadrupilica (`21.548` vs `5.436`), fixando o **`P95` causal global de produção em `$521.458`** (`2,0x MKRatio = ~$1,043M` em 5m).
   - Limiares individuais carregados diretamente do `LIQUIDATIONS_ARCHIVE` na inicialização de hoje (`18/11 13:03 BRT`):
     - **Majors (`Quantile = 0,99`):** `BTCUSDT = $1.182.477` (`16.369` msgs) · `ETHUSDT = $823.525` (`18.871` msgs) · `XAUUSDT = $655.443` (`3.908` msgs) · `XRPUSDT = $313.787` (`5.294` msgs).
     - **Altcoins F1 (`Quantile = 0,95`):** `SOLUSDT = $143.925` · `ZECUSDT = $136.311` · `XRPUSDT = $125.266` · `DOGEUSDT = $112.886` · `HYPEUSDT = $112.117` · `PEPEUSDT = $75.963` · `NEARUSDT = $68.122` · `UNIUSDT = $64.710` · `BNBUSDT = $61.869` · `SUIUSDT = $59.363` · `LINKUSDT = $57.799`.

> *Nota metodológica:* Conforme documentado em `SPRINT_NOV2026_E.md`, houve hiato de coletores entre `23/10 03:41Z` e `05/11 15:40Z`, e a janela de coletor duplo entre `05/11` e `07/11` foi integralmente deduplicada por `(ts, price, usd_value, side)`.

---

## 3. Cronologia Completa das Cascatas Sistêmicas (`20/Out → 18/Nov/2026`)

Todos os **24 clusters sistêmicos principais (`MKRatio >= 2,0x` sobre a cesta Core de 23 ativos)** observados até `14:40 UTC` de hoje, acrescidos do evento `16:12 UTC` observado ao vivo em produção (`#25` na régua global de 1.061 ativos):

| # | Data / Hora (UTC) | Total 5m (Longs) | `MKRatio` | Amplitude (`>= $10k`) | BTC / ETH no Clímax | Epicentro da Cascata (Top Liquidados em 5m) | Comportamento / Morfologia |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **24** | **18/11 14:40** *(Hoje)* | **$3,15M** | **3,53x** | `16 / 23` | `$63.059` / `$1.767` | `ETH $2,01M`, `SOL $272k`, `XRP $178k`, `BTC $153k` | Varredura de ETH `> P99`; repique imediato p/ `$63,8k+` / `$1.785+` |
| **23** | **17/11 15:50** *(Ontem)* | **$4,19M** | **4,69x** | `15 / 23` | `$63.366` / `$1.752` | `ETH $1,78M`, `BTC $1,08M`, `DOGE $305k`, `SOL $188k` | Cravou a mínima do dia antes do short squeeze até `$65.236` / `$1.835` |
| **22** | **16/11 15:03** | **$2,04M** | **2,28x** | `7 / 23` | `$64.801` / `$1.822` | `SOL $735k`, `ETH $619k`, `ZEC $345k`, `BTC $270k` | Flush localizado em SOL/ETH/ZEC na perda dos `$65k` |
| **21** | **15/11 01:04** | **$1,91M** | **2,14x** | `15 / 23` | `$62.812` / `$1.733` | `BTC $1,16M`, `DOGE $113k`, `SOL $102k`, `ETH $83k` | Varredura da mínima de `15/11` (`$62,8k`) e reversão em V |
| **20** | **14/11 22:11** | **$3,97M** | **4,44x** | `15 / 23` | `$63.818` / `$1.751` | `BTC $1,52M`, `ETH $1,11M`, `SOL $347k`, `DOGE $320k` | 2ª perna do clímax noturno; esgotou vendedores em `$63,8k` |
| **19** | **14/11 20:55** | **$5,97M** | **6,69x** | **`23 / 23`** | `$64.842` / `$1.794` | `XAU $1,38M`, `SOL $848k`, `ETH $661k`, `BTC $626k` | **100% da cesta atingida**; contágio cripto + ouro (`XAU`) |
| **18** | **14/11 16:13** | **$3,05M** | **3,42x** | **`23 / 23`** | `$65.084` / `$1.821` | `BTC $785k`, `ETH $447k`, `SOL $319k`, `ZEC $221k` | Flush sincronizado nos 23 ativos no teste dos `$65k` |
| **17** | **14/11 03:33** | **$3,19M** | **3,57x** | `15 / 23` | `$66.221` / `$1.855` | `BTC $1,79M`, `ETH $645k`, `XRP $209k`, `SOL $167k` | Continuação da perda de `$67k` na sessão asiática |
| **16** | **14/11 02:31** | **$2,18M** | **2,44x** | `7 / 23` | `$67.338` / `$1.897` | `BTC $1,32M`, `ETH $472k`, `XAU $232k`, `SOL $75k` | Rompimento inicial do suporte de `$67,5k` |
| **15** | **13/11 03:23** | **$6,42M** | **7,19x** | `19 / 23` | `$69.347` / `$1.962` | `BTC $4,38M`, `BNB $762k`, `ETH $235k`, `SOL $225k` | **3ª maior do mês**: capitulação na perda dos `$70k` / `$2.000` |
| **14** | **13/11 00:40** | **$4,39M** | **4,91x** | `3 / 23` | `$70.664` / `$2.006` | `BTC $4,25M`, `ETH $102k`, `ZEC $17k` | Onda precursora concentrada quase 100% em BTC (`$4,25M`) |
| **13** | **12/11 16:59** | **$1,92M** | **2,15x** | `10 / 23` | `$70.517` / `$2.007` | `ETH $689k`, `SOL $329k`, `XAU $275k`, `BTC $267k` | Primeiro estresse do suporte psicológico de `$70,5k` |
| **12** | **11/11 23:10** | **$1,99M** | **2,23x** | `12 / 23` | `$73.514` / `$2.078` | `PEPE $881k`, `ETH $431k`, `SOL $251k`, `BTC $132k` | Réplica com desalavancagem de memecoins (`PEPE`) |
| **11** | **11/11 22:32** | **$4,15M** | **4,64x** | `5 / 23` | `$74.163` / `$2.119` | `BTC $3,87M`, `ETH $122k`, `LINK $61k`, `SOL $38k` | Liquidação concentrada em BTC (`$3,87M` em 5m) |
| **10** | **10/11 16:37** | **$1,99M** | **2,23x** | `9 / 23` | `$73.633` / `$2.055` | `BTC $1,33M`, `ETH $216k`, `XRP $141k`, `DOGE $98k` | Exaustão final da tarde antes de estabilização |
| **09** | **10/11 15:44** | **$4,38M** | **4,90x** | `21 / 23` | `$73.232` / `$2.022` | `ETH $1,64M`, `SOL $672k`, `BTC $469k`, `DOGE $437k` | Clímax NY em 21 ativos na defesa de `$2.000` em ETH |
| **08** | **10/11 13:34** | **$2,12M** | **2,37x** | `5 / 23` | `$74.749` / `$2.094` | `BTC $1,66M`, `ETH $290k`, `XAU $100k` | Abertura americana rompendo `$75k` |
| **07** | **09/11 15:39** | **$2,19M** | **2,45x** | `12 / 23` | `$73.927` / `$2.118` | `ETH $878k`, `SOL $391k`, `BTC $220k`, `PEPE $212k` | Varredura de domingo à tarde liderada por ETH e SOL |
| **06** | **09/11 07:14** | **$4,01M** | **4,49x** | `12 / 23` | `$73.875` / `$2.113` | `BTC $2,84M`, `ETH $571k`, `ZEC $157k`, `XAU $124k` | Réplica asiática pós-colapso de `08/11` |
| **05** | **08/11 21:55** | **$10,12M** | **11,33x** | **`23 / 23`** | `$74.292` / `$2.125` | `ETH $4,36M`, `BTC $1,48M`, `ZEC $731k`, `XAU $496k` | **MAIOR CASCATA DO MÊS (`11,33x P95`)**: 23/23 ativos varridos |
| **04** | **08/11 18:10** | **$1,94M** | **2,17x** | `15 / 23` | `$75.605` / `$2.186` | `ETH $653k`, `BTC $568k`, `SOL $141k`, `UNI $117k` | Tremor precursor 3h45 antes do mega-flush de `$10,12M` |
| **03** | **05/11 15:54** | **$9,57M** | **10,71x** | **`23 / 23`** | `$76.120` / `$2.257` | `ETH $2,26M`, `BTC $1,94M`, `XAU $1,20M`, `SOL $882k` | **2ª MAIOR CASCATA DO MÊS (`10,71x P95`)**: choque cripto + ouro |
| **02** | **22/10 16:51** | **$4,43M** | **4,96x** | `21 / 23` | `$80.905` / `$2.390` | `BTC $1,48M`, `ETH $926k`, `SOL $448k`, `DOGE $314k` | Perda estrutural da faixa dos `$81k` |
| **01** | **20/10 15:15** | **$3,19M** | **3,56x** | `13 / 23` | `$82.204` / `$2.444` | `BTC $1,43M`, `ETH $1,08M`, `SOL $246k`, `DOGE $125k` | Primeiro grande evento sistêmico no topo de `$82,2k` |

### Três Leis Empíricas Extraídas (`684` Clusters OOS)

1. **Assimetria Estrutural Majors vs. Altcoins:** Nos **`189` clusters OOS de Majors (`spread < 0,05%`)**, o repique médio pós-cascata apresentou **$t\text{-stat} = +7,81$ (`+15m`) e $+6,22$ (`+30m`)**, porque arbitradores institucionais Spot/ETF absorvem o vácuo mecânico do perpétuo (`BTC`, `ETH`, `XRP`, `XAU`). Em contraste, ordens passivas rasas (`-15/-30 bps`) em altcoins (`Mid n=451`, `Microcap n=44`) sofrem **seleção adversa tóxica** — altcoins exigem confirmação sistêmica (`MKRatio >= 2,0x`) **e** profundidade calibrada pela volatilidade ($\text{depth}_{\text{bps}} = 7 \cdot \sigma_{1\text{m}} \sqrt{5}$).
2. **Morfologia "Precursor → Clímax" (Dupla Onda):** Cascatas acima de `4,0x P95` repetidamente chegam em pares separados por 30 minutos a 3h45 (`08/11` `18:10 → 21:55`; `11/11` `22:32 → 23:10`; `13/11` `00:40 → 03:23`; `14/11` `20:55 → 22:11`). O **cooldown de 30 minutos** e a expiração **No-Chase em 5 minutos** filtram entradas prematuras na primeira onda que rompe suporte.
3. **Contágio de Margem Cruzada com Ouro Tokenizado (`XAUUSDT`):** Em `05/11` (`$1,20M`), `08/11` (`$496k`) e `14/11` (`$1,38M`), `XAUUSDT` figurava entre os 4 maiores ativos liquidados em pleno colapso cripto. Traders em margem unificada na OKX sofrem liquidação forçada de suas posições de ouro para cobrir chamadas de margem em BTC/ETH — gerando deslocamentos puramente mecânicos sem deterioração equivalente no ouro físico.

---

## 4. O Sistema Atual (`Ark Streams` — Arquitetura Dual de Produção)

O sistema roda continuamente em produção (`ark_stream`, `ark_executor`, `ark_notifier`, `ark_nats` na VPS `nexus`, deploy `505dfa6`) sob dois motores especializados:

### Motor A — `MajorCascadeStinkBid` (Live/Paper · Core 4 Majors)
- **Ativos:** `BTCUSDT`, `ETHUSDT`, `XRPUSDT`, `XAUUSDT` (`1m`).
- **Gatilho Causal:** `liq_long_5m(t) >= causal_p99_30d(t)` + cooldown de `30 minutos`.
- **Execução Passiva (Escada Back-Loaded):**
  - **Tranche 1 (`35%`):** `Post-Only Limit Buy` em `close[t] * (1 - 0,0015)` (`-15 bps`).
  - **Tranche 2 (`65%`):** `Post-Only Limit Buy` em `close[t] * (1 - 0,0030)` (`-30 bps`), com ancoragem dinâmica opcional no bolsão de maior liquidez do Heatmap CoinGlass entre `-15` e `-45 bps` e invalidação intradiária pós-consumo por 12h (`ARK-201`).
  - **Conviction Sizing (`1,5x`):** Quando `liq_long_5m / P99 >= 2,0x`, escala o tamanho para `1,50x`.
  - **Regra `No-Chase` (`5m`):** Preenchimentos verificados via candles `1m` e ticks `BBO 1Hz` (`RequireCrossFill = true`). Tranches não preenchidas até `t+5m` são canceladas a custo zero.
  - **Saída:** *Time-stop* em `+30 minutos` (`t+31m`) e stop catastrófico de retaguarda em `-250 bps`.
- **Resultados OOS (`111 dias`, `133` clusters, spread pessimista + taxas, capital `1x`):**
  - **Retorno Líquido Composto:** **`+18,20%`** | **Sharpe:** **`+5,34`** | **MaxDD:** **`0,89%`** | **Win Rate:** **`69,1%`** (`55` preenchidos) | **Profit Factor:** **`6,31`**.
  - **Estresse extremos:** Sem os Top 5 melhores trades ainda soma `+7,97%`; com `-10 bps` extras de derrapagem por perna entrega **`+13,37%` (Sharpe `+4,29`)**.

### Motor B — `AltCascadeDeepBid` (`Strategy F1 · Shadow Mode` · 21 Altcoins)
- **Cesta de 21 Altcoins (`1m` dedicado por símbolo):** `AAVE`, `ADA`, `ARB`, `AVAX`, `BCH`, `BNB`, `DOGE`, `ENA`, `FIL`, `HYPE`, `LINK`, `LTC`, `NEAR`, `PEPE`, `SOL`, `SUI`, `TRUMP`, `UNI`, `WLD`, `XRP`, `ZEC`.
- **Dupla Condição (*Double Gate*):**
  1. Cascata individual extrema (`liq_long_5m >= P95 causal 30d` do próprio ativo); **E**
  2. Confirmação sistêmica global via `SystemicLiquidationTracker` (**`MKRatio = sum_5m_global / P95_global >= 2,0x`** sobre todos os `1.061` instrumentos).
- **Bid Profundo por Volatilidade:** Ordem única `100%` com profundidade $\text{depth}_{\text{bps}} = 7 \cdot \sigma_{1\text{m}} \cdot \sqrt{5}$, janela passiva de `30 minutos`, *hold horizon* de `+60 minutos`, preenchimento estrito (`low < P_limit`) e contabilidade contínua em `/app/logs/shadow/alpha_shadow.jsonl` (com tiers de atrito de `12 bps` e `20 bps` em alocações de `$1k`, `$10k` e `$50k`).


### 4.1 Prova Forense Auditável: Todos os 133 Sinais Emitidos & 55 Trades Executados no OOS (`2026-07-04 → 2026-10-22`)

- **Operação Executada (Contraparte):** sempre **`LONG` (`Post-Only Limit BUY` em `-15 bps` / `-30 bps`, saída após `+30m`)** — compramos passivamente na absorção do vácuo de liquidez.
- **Contra Qual Estratégia:** **`MajorCascadeStinkBid`** (Core 4 Majors: `BTCUSDT`, `ETHUSDT`, `XRPUSDT`, `XAUUSDT`, gatilho `>= P99` causal 30d + dedup 30m).
- **Contra Qual Liquidação (Fluxo Alvo):** **`LONG LIQ (Forced SELL)`** — ordens de venda a mercado despejadas à força pela engine de margem da OKX liquidando compradores alavancados.

Cada número de performance reportado (**`+18,20%` composto líquidos**, **`+16,90%` soma simples**, **Sharpe `+5,34`**, **Win Rate `69,1%` (`38W / 17L`)**, **Profit Factor `6,31`**, **MaxDD `0,89%`**) decorre dos **133 gatilhos causais** abaixo sob custo pessimista (`Maker 2 bps` + `Taker 5 bps` + `0,5 × calm_pct` spread):

#### Ledger Completo dos 55 Trades Executados (`Operação LONG · Estratégia MajorCascadeStinkBid · Contra LONG LIQ / Forced SELL`)

| Trade # | Sig # | Timestamp (UTC) | Ativo | Estratégia | Liquidação Alvo | Operação | Liq 5m (USD) | P99 Causal | Mult | `L1 (-15)` / `L2 (-30)` | Status | Taker +30m | Net Trade | Equity Comp. |
| :---: | :---: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | #3 | `2026-07-06 12:00` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $882,952 | $699,869 | `1.26x` | $62,175.70 / $62,082.29 | `FULL` | `-0.33%` | **`-0.192%`** | **`-0.19%`** |
| **2** | #4 | `2026-07-06 12:43` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $2,473,964 | $699,869 | `3.54x` | $61,697.22 / $61,604.53 | `PARTIAL` | `-0.40%` | **`-0.111%`** | **`-0.30%`** |
| **3** | #7 | `2026-07-08 02:32` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $703,464 | $539,220 | `1.30x` | $1,743.76 / $1,741.14 | `FULL` | `+0.62%` | **`+0.930%`** | **`+0.62%`** |
| **4** | #11 | `2026-07-11 23:22` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $277,565 | $162,318 | `1.71x` | $1.0994 / $1.0978 | `PARTIAL` | `-0.37%` | **`-0.080%`** | **`+0.54%`** |
| **5** | #12 | `2026-07-13 00:39` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $671,871 | $566,264 | `1.19x` | $1,809.68 / $1,806.96 | `FULL` | `+0.24%` | **`+0.406%`** | **`+0.95%`** |
| **6** | #13 | `2026-07-13 03:33` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $914,377 | $713,415 | `1.28x` | $62,714.89 / $62,620.67 | `PARTIAL` | `-0.16%` | **`-0.044%`** | **`+0.91%`** |
| **7** | #16 | `2026-07-16 07:36` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $716,407 | $577,050 | `1.24x` | $1,907.73 / $1,904.87 | `PARTIAL` | `-0.29%` | **`-0.077%`** | **`+0.83%`** |
| **8** | #21 | `2026-07-16 23:19` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $886,688 | $577,050 | `1.54x` | $1,859.71 / $1,856.91 | `FULL` | `-0.02%` | **`+0.254%`** | **`+1.09%`** |
| **9** | #24 | `2026-07-23 12:42` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,085,128 | $589,559 | `1.84x` | $1,900.73 / $1,897.88 | `FULL` | `-0.43%` | **`-0.153%`** | **`+0.93%`** |
| **10** | #27 | `2026-07-24 13:07` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $927,752 | $727,316 | `1.28x` | $64,314.68 / $64,218.07 | `PARTIAL` | `-0.36%` | **`-0.091%`** | **`+0.84%`** |
| **11** | #30 | `2026-07-29 12:16` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $818,744 | $670,401 | `1.22x` | $1,902.37 / $1,899.51 | `PARTIAL` | `-0.06%` | **`+0.051%`** | **`+0.89%`** |
| **12** | #38 | `2026-08-06 02:19` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $302,278 | $265,288 | `1.14x` | $1.0417 / $1.0402 | `PARTIAL` | `+0.19%` | **`+0.216%`** | **`+1.11%`** |
| **13** | #39 | `2026-08-06 13:06` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $402,814 | $277,945 | `1.45x` | $4,241.03 / $4,234.66 | `FULL` | `+0.27%` | **`+0.544%`** | **`+1.66%`** |
| **14** | #43 | `2026-08-11 14:38` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $269,773 | $265,080 | `1.02x` | $1.0017 / $1.0002 | `PARTIAL` | `-0.54%` | **`-0.171%`** | **`+1.48%`** |
| **15** | #44 | `2026-08-11 15:37` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $834,195 | $719,171 | `1.16x` | $63,451.28 / $63,355.96 | `PARTIAL` | `-0.01%` | **`+0.055%`** | **`+1.54%`** |
| **16** | #51 | `2026-08-19 15:30` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $619,575 | $617,289 | `1.00x` | $2,057.58 / $2,054.49 | `PARTIAL` | `+1.36%` | **`+0.809%`** | **`+2.36%`** |
| **17** | #52 | `2026-08-19 20:51` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $2,003,455 | $617,289 | `3.25x` | $2,205.08 / $2,201.76 | `FULL` | `+3.08%` | **`+2.922%`** | **`+5.33%`** |
| **18** | #53 | `2026-08-20 03:00` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,128,345 | $645,936 | `1.75x` | $2,242.83 / $2,239.46 | `PARTIAL` | `-0.40%` | **`-0.106%`** | **`+5.22%`** |
| **19** | #55 | `2026-08-20 18:54` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,257,988 | $247,535 | `5.08x` | $1.2406 / $1.2388 | `FULL` | `-0.16%` | **`-0.230%`** | **`+4.97%`** |
| **20** | #59 | `2026-08-21 09:02` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,068,771 | $667,648 | `1.60x` | $78,256.84 / $78,139.28 | `FULL` | `-0.21%` | **`-0.503%`** | **`+4.45%`** |
| **21** | #60 | `2026-08-21 12:00` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $376,954 | $277,809 | `1.36x` | $1.3490 / $1.3469 | `PARTIAL` | `+0.62%` | **`+0.481%`** | **`+4.95%`** |
| **22** | #61 | `2026-08-21 14:02` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $708,445 | $667,648 | `1.06x` | $76,782.95 / $76,667.61 | `PARTIAL` | `+0.20%` | **`+0.194%`** | **`+5.15%`** |
| **23** | #63 | `2026-08-21 22:20` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $375,068 | $277,809 | `1.35x` | $1.4267 / $1.4245 | `FULL` | `+1.08%` | **`+1.522%`** | **`+6.75%`** |
| **24** | #68 | `2026-08-23 05:09` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,103,584 | $849,837 | `1.30x` | $2,368.45 / $2,364.89 | `PARTIAL` | `-0.09%` | **`+0.104%`** | **`+6.86%`** |
| **25** | #69 | `2026-08-23 14:42` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,281,367 | $397,935 | `3.22x` | $1.4657 / $1.4635 | `FULL` | `-0.19%` | **`+2.215%`** | **`+9.23%`** |
| **26** | #71 | `2026-08-24 13:40` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $782,468 | $746,692 | `1.05x` | $78,351.20 / $78,233.49 | `FULL` | `+0.55%` | **`+0.925%`** | **`+10.24%`** |
| **27** | #72 | `2026-08-24 15:43` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,418,589 | $927,769 | `1.53x` | $2,491.38 / $2,487.63 | `FULL` | `+0.04%` | **`+0.251%`** | **`+10.51%`** |
| **28** | #74 | `2026-08-25 02:45` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,260,967 | $959,647 | `1.31x` | $2,511.70 / $2,507.92 | `FULL` | `-0.39%` | **`-0.110%`** | **`+10.39%`** |
| **29** | #82 | `2026-09-02 10:50` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $740,075 | $375,118 | `1.97x` | $1.3112 / $1.3093 | `PARTIAL` | `+0.09%` | **`+0.139%`** | **`+10.54%`** |
| **30** | #84 | `2026-09-04 12:31` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,652,527 | $376,815 | `4.39x` | $1.4058 / $1.4037 | `FULL` | `+0.33%` | **`+0.460%`** | **`+11.05%`** |
| **31** | #87 | `2026-09-07 22:39` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $812,916 | $771,002 | `1.05x` | $78,713.55 / $78,595.30 | `PARTIAL` | `+0.23%` | **`+0.201%`** | **`+11.28%`** |
| **32** | #88 | `2026-09-08 18:48` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,504,966 | $931,867 | `1.61x` | $2,479.75 / $2,476.03 | `FULL` | `+0.09%` | **`+0.202%`** | **`+11.50%`** |
| **33** | #92 | `2026-09-10 23:14` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $577,438 | $379,309 | `1.52x` | $1.3280 / $1.3260 | `PARTIAL` | `+0.27%` | **`+0.319%`** | **`+11.86%`** |
| **34** | #93 | `2026-09-11 14:09` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,258,734 | $948,544 | `1.33x` | $2,614.15 / $2,610.23 | `FULL` | `-0.09%` | **`-0.221%`** | **`+11.61%`** |
| **35** | #94 | `2026-09-11 15:54` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $947,767 | $779,642 | `1.22x` | $77,468.62 / $77,352.24 | `FULL` | `+0.24%` | **`+0.204%`** | **`+11.84%`** |
| **36** | #95 | `2026-09-11 18:06` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,479,849 | $779,642 | `1.90x` | $76,936.72 / $76,821.14 | `PARTIAL` | `-0.02%` | **`+0.120%`** | **`+11.97%`** |
| **37** | #97 | `2026-09-15 14:50` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,038,597 | $1,000,934 | `1.04x` | $2,399.85 / $2,396.25 | `FULL` | `+0.90%` | **`+0.539%`** | **`+12.57%`** |
| **38** | #99 | `2026-09-15 20:19` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $552,710 | $414,761 | `1.33x` | $1.2752 / $1.2733 | `FULL` | `+0.91%` | **`+1.098%`** | **`+13.80%`** |
| **39** | #100 | `2026-09-16 18:35` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,708,744 | $813,086 | `2.10x` | $75,137.12 / $75,024.25 | `FULL` | `+1.12%` | **`+1.173%`** | **`+15.14%`** |
| **40** | #101 | `2026-09-17 13:33` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $875,553 | $820,808 | `1.07x` | $76,211.11 / $76,096.62 | `FULL` | `-0.05%` | **`+0.234%`** | **`+15.41%`** |
| **41** | #104 | `2026-09-20 02:54` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,045,327 | $838,518 | `1.25x` | $80,335.42 / $80,214.73 | `PARTIAL` | `-0.09%` | **`+0.046%`** | **`+15.46%`** |
| **42** | #105 | `2026-09-22 01:02` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,187,748 | $931,867 | `1.27x` | $2,741.60 / $2,737.48 | `PARTIAL` | `+0.31%` | **`+0.147%`** | **`+15.63%`** |
| **43** | #106 | `2026-09-22 22:03` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $371,121 | $367,235 | `1.01x` | $1.5609 / $1.5585 | `FULL` | `+0.55%` | **`+0.704%`** | **`+16.44%`** |
| **44** | #108 | `2026-09-23 13:05` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $390,396 | $363,335 | `1.07x` | $1.5577 / $1.5553 | `FULL` | `+0.72%` | **`+1.064%`** | **`+17.68%`** |
| **45** | #109 | `2026-09-23 16:01` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,565,764 | $906,814 | `1.73x` | $2,639.61 / $2,635.65 | `FULL` | `+0.83%` | **`+0.962%`** | **`+18.80%`** |
| **46** | #113 | `2026-09-28 01:49` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $931,983 | $915,341 | `1.02x` | $2,648.05 / $2,644.07 | `PARTIAL` | `-0.17%` | **`+0.097%`** | **`+18.92%`** |
| **47** | #117 | `2026-09-30 14:23` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,219,581 | $895,528 | `1.36x` | $83,709.45 / $83,583.69 | `PARTIAL` | `-0.13%` | **`+0.035%`** | **`+18.96%`** |
| **48** | #120 | `2026-10-07 02:01` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,115,793 | $952,454 | `1.17x` | $2,617.52 / $2,613.59 | `FULL` | `-0.37%` | **`-0.265%`** | **`+18.64%`** |
| **49** | #121 | `2026-10-07 12:27` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $552,235 | $419,331 | `1.32x` | $4,085.16 / $4,079.03 | `FULL` | `+0.06%` | **`+0.181%`** | **`+18.86%`** |
| **50** | #122 | `2026-10-08 15:20` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $5,464,718 | $897,723 | `6.09x` | $81,495.17 / $81,372.75 | `FULL` | `-0.53%` | **`-0.093%`** | **`+18.75%`** |
| **51** | #123 | `2026-10-08 16:49` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,096,496 | $952,454 | `1.15x` | $2,417.18 / $2,413.55 | `PARTIAL` | `-0.14%` | **`+0.013%`** | **`+18.76%`** |
| **52** | #125 | `2026-10-15 02:22` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,983,196 | $944,474 | `2.10x` | $2,378.85 / $2,375.27 | `FULL` | `-0.01%` | **`-0.265%`** | **`+18.45%`** |
| **53** | #129 | `2026-10-18 19:23` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,203,400 | $972,363 | `1.24x` | $2,358.14 / $2,354.59 | `PARTIAL` | `-1.08%` | **`-0.467%`** | **`+17.90%`** |
| **54** | #131 | `2026-10-20 15:14` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,205,099 | $937,468 | `1.28x` | $82,258.73 / $82,135.15 | `PARTIAL` | `-0.01%` | **`+0.021%`** | **`+17.92%`** |
| **55** | #132 | `2026-10-22 16:50` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | **`LONG (Maker BUY)`** | $1,325,863 | $943,971 | `1.41x` | $80,903.56 / $80,782.02 | `PARTIAL` | `+0.31%` | **`+0.241%`** | **`+18.20%`** |

<details>
<summary><strong>Expandir todos os 78 Sinais Expirados por No-Chase (Ordem LONG cancelada a $0,00 sem tocar -15 bps em 5m)</strong></summary>

| Sig # | Timestamp (UTC) | Ativo | Estratégia | Liquidação Alvo | Operação Pretendida | Liq 5m (USD) | P99 Causal | Mult | `L1 (-15 bps)` (Não tocada) | Taker +30m (Contrafactual) | Impacto |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| #1 | `2026-07-05 01:33` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $925,472 | $569,552 | `1.62x` | $1,759.00 | `-0.00%` | `0.000% (No-Chase)` |
| #2 | `2026-07-06 05:03` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $258,650 | $256,256 | `1.01x` | $4,153.46 | `-0.06%` | `0.000% (No-Chase)` |
| #5 | `2026-07-07 22:00` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $843,314 | $162,252 | `5.20x` | $1.1062 | `+0.23%` | `0.000% (No-Chase)` |
| #6 | `2026-07-08 01:37` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $4,468,039 | $539,220 | `8.29x` | $1,748.18 | `-0.01%` | `0.000% (No-Chase)` |
| #8 | `2026-07-08 08:30` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $627,142 | $539,220 | `1.16x` | $1,728.51 | `+0.11%` | `0.000% (No-Chase)` |
| #9 | `2026-07-10 13:27` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $275,947 | $257,262 | `1.07x` | $4,088.16 | `+0.11%` | `0.000% (No-Chase)` |
| #10 | `2026-07-10 14:21` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $630,672 | $627,381 | `1.00x` | $1,776.96 | `-0.05%` | `0.000% (No-Chase)` |
| #14 | `2026-07-13 18:20` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $727,316 | $713,415 | `1.02x` | $61,758.62 | `+0.12%` | `0.000% (No-Chase)` |
| #15 | `2026-07-13 21:31` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $976,161 | $566,264 | `1.72x` | $1,754.73 | `+0.22%` | `0.000% (No-Chase)` |
| #17 | `2026-07-16 12:40` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $981,357 | $717,854 | `1.37x` | $63,821.92 | `+0.15%` | `0.000% (No-Chase)` |
| #18 | `2026-07-16 13:46` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $320,008 | $273,053 | `1.17x` | $3,994.20 | `-0.03%` | `0.000% (No-Chase)` |
| #19 | `2026-07-16 18:33` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $777,582 | $165,578 | `4.70x` | $1.0880 | `+0.28%` | `0.000% (No-Chase)` |
| #20 | `2026-07-16 19:35` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $330,662 | $273,053 | `1.21x` | $3,971.53 | `+0.00%` | `0.000% (No-Chase)` |
| #22 | `2026-07-17 13:11` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $2,899,337 | $724,015 | `4.00x` | $62,649.98 | `-0.41%` | `0.000% (No-Chase)` |
| #23 | `2026-07-20 00:52` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $298,411 | $185,563 | `1.61x` | $1.0922 | `+0.40%` | `0.000% (No-Chase)` |
| #25 | `2026-07-23 15:06` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $4,404,006 | $727,316 | `6.05x` | $64,725.97 | `-0.07%` | `0.000% (No-Chase)` |
| #26 | `2026-07-24 00:33` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $664,716 | $622,139 | `1.07x` | $1,862.20 | `+0.25%` | `0.000% (No-Chase)` |
| #28 | `2026-07-27 22:40` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,373,288 | $727,316 | `1.89x` | $64,103.70 | `-0.92%` | `0.000% (No-Chase)` |
| #29 | `2026-07-28 01:34` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $308,878 | $258,650 | `1.19x` | $4,045.42 | `-0.22%` | `0.000% (No-Chase)` |
| #31 | `2026-07-29 19:47` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,132,604 | $754,335 | `1.50x` | $63,416.93 | `-0.12%` | `0.000% (No-Chase)` |
| #32 | `2026-08-03 01:38` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $933,765 | $665,144 | `1.40x` | $1,865.19 | `-0.27%` | `0.000% (No-Chase)` |
| #33 | `2026-08-03 03:46` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,227,125 | $665,144 | `1.84x` | $1,848.23 | `+0.06%` | `0.000% (No-Chase)` |
| #34 | `2026-08-05 10:10` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $167,858 | $149,543 | `1.12x` | $1.0603 | `+0.01%` | `0.000% (No-Chase)` |
| #35 | `2026-08-05 11:31` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $265,288 | $149,543 | `1.77x` | $1.0583 | `-0.12%` | `0.000% (No-Chase)` |
| #36 | `2026-08-05 13:11` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,059,436 | $693,609 | `1.53x` | $1,864.05 | `-0.11%` | `0.000% (No-Chase)` |
| #37 | `2026-08-05 23:00` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $154,304 | $149,543 | `1.03x` | $1.0589 | `-0.01%` | `0.000% (No-Chase)` |
| #40 | `2026-08-07 03:56` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $364,586 | $265,288 | `1.37x` | $1.0181 | `-0.17%` | `0.000% (No-Chase)` |
| #41 | `2026-08-10 13:40` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,470,912 | $668,489 | `2.20x` | $1,898.31 | `-0.21%` | `0.000% (No-Chase)` |
| #42 | `2026-08-10 15:25` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $718,268 | $708,132 | `1.01x` | $64,208.14 | `-0.25%` | `0.000% (No-Chase)` |
| #45 | `2026-08-12 12:30` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $309,660 | $308,878 | `1.00x` | $4,391.10 | `+0.28%` | `0.000% (No-Chase)` |
| #46 | `2026-08-13 07:53` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $934,180 | $688,870 | `1.36x` | $63,728.66 | `-0.21%` | `0.000% (No-Chase)` |
| #47 | `2026-08-13 09:06` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $616,654 | $608,605 | `1.01x` | $1,882.02 | `-0.07%` | `0.000% (No-Chase)` |
| #48 | `2026-08-13 15:59` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $645,286 | $608,605 | `1.06x` | $1,876.46 | `-0.14%` | `0.000% (No-Chase)` |
| #49 | `2026-08-14 00:26` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $397,362 | $330,662 | `1.20x` | $4,342.88 | `-0.16%` | `0.000% (No-Chase)` |
| #50 | `2026-08-14 01:10` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $416,572 | $330,662 | `1.26x` | $4,325.50 | `-0.18%` | `0.000% (No-Chase)` |
| #54 | `2026-08-20 11:56` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,209,243 | $645,936 | `1.87x` | $2,290.93 | `-0.78%` | `0.000% (No-Chase)` |
| #56 | `2026-08-21 00:04` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $418,353 | $277,809 | `1.51x` | $1.2575 | `+0.21%` | `0.000% (No-Chase)` |
| #57 | `2026-08-21 02:03` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $990,167 | $691,547 | `1.43x` | $2,343.69 | `+0.13%` | `0.000% (No-Chase)` |
| #58 | `2026-08-21 02:33` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $776,406 | $667,648 | `1.16x` | $74,551.40 | `-0.65%` | `0.000% (No-Chase)` |
| #62 | `2026-08-21 17:24` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $428,807 | $277,809 | `1.54x` | $1.3831 | `-0.30%` | `0.000% (No-Chase)` |
| #64 | `2026-08-21 23:01` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $364,659 | $277,809 | `1.31x` | $1.4329 | `+1.10%` | `0.000% (No-Chase)` |
| #65 | `2026-08-22 06:36` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,267,093 | $848,055 | `1.49x` | $2,420.87 | `+0.46%` | `0.000% (No-Chase)` |
| #66 | `2026-08-22 14:07` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $769,637 | $748,668 | `1.03x` | $76,915.35 | `-0.17%` | `0.000% (No-Chase)` |
| #67 | `2026-08-23 03:42` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $816,588 | $753,892 | `1.08x` | $76,771.27 | `+0.01%` | `0.000% (No-Chase)` |
| #70 | `2026-08-24 00:26` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $384,328 | $366,340 | `1.05x` | $4,594.30 | `+0.24%` | `0.000% (No-Chase)` |
| #73 | `2026-08-24 17:02` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,428,428 | $927,769 | `1.54x` | $2,461.18 | `-0.67%` | `0.000% (No-Chase)` |
| #75 | `2026-08-25 13:25` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $388,093 | $384,328 | `1.01x` | $4,604.98 | `-0.08%` | `0.000% (No-Chase)` |
| #76 | `2026-08-26 00:09` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $991,677 | $973,771 | `1.02x` | $2,433.42 | `-0.06%` | `0.000% (No-Chase)` |
| #77 | `2026-08-28 16:25` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,062,599 | $691,187 | `1.54x` | $76,982.65 | `+0.78%` | `0.000% (No-Chase)` |
| #78 | `2026-08-30 23:29` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,043,493 | $716,876 | `1.46x` | $77,532.43 | `-0.39%` | `0.000% (No-Chase)` |
| #79 | `2026-08-31 02:03` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,211,703 | $402,381 | `3.01x` | $4,424.35 | `-0.43%` | `0.000% (No-Chase)` |
| #80 | `2026-09-01 12:37` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $615,297 | $418,228 | `1.47x` | $4,352.06 | `-0.46%` | `0.000% (No-Chase)` |
| #81 | `2026-09-01 18:12` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $767,103 | $748,186 | `1.02x` | $77,074.12 | `-0.86%` | `0.000% (No-Chase)` |
| #83 | `2026-09-03 16:18` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $812,713 | $745,197 | `1.09x` | $80,600.52 | `+0.23%` | `0.000% (No-Chase)` |
| #85 | `2026-09-06 07:14` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $771,644 | $769,632 | `1.00x` | $79,523.54 | `-0.03%` | `0.000% (No-Chase)` |
| #86 | `2026-09-07 07:41` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,109,911 | $909,994 | `1.22x` | $2,473.57 | `+0.09%` | `0.000% (No-Chase)` |
| #89 | `2026-09-09 22:08` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $795,913 | $776,406 | `1.02x` | $77,661.93 | `+0.11%` | `0.000% (No-Chase)` |
| #90 | `2026-09-10 07:34` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $921,992 | $782,227 | `1.18x` | $77,783.15 | `+0.06%` | `0.000% (No-Chase)` |
| #91 | `2026-09-10 12:47` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $952,454 | $932,182 | `1.02x` | $2,418.10 | `-0.70%` | `0.000% (No-Chase)` |
| #96 | `2026-09-14 21:02` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,232,296 | $990,000 | `1.25x` | $2,544.20 | `-0.16%` | `0.000% (No-Chase)` |
| #98 | `2026-09-15 18:49` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,138,417 | $810,711 | `1.40x` | $74,894.89 | `+0.92%` | `0.000% (No-Chase)` |
| #102 | `2026-09-18 19:55` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $512,054 | $444,963 | `1.15x` | $4,375.63 | `+0.05%` | `0.000% (No-Chase)` |
| #103 | `2026-09-20 01:36` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,076,792 | $954,365 | `1.13x` | $2,609.87 | `+0.01%` | `0.000% (No-Chase)` |
| #107 | `2026-09-23 12:17` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,801,029 | $851,235 | `2.12x` | $85,222.37 | `+0.15%` | `0.000% (No-Chase)` |
| #110 | `2026-09-25 15:39` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,113,877 | $875,043 | `1.27x` | $2,668.63 | `+0.35%` | `0.000% (No-Chase)` |
| #111 | `2026-09-26 18:51` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,071,836 | $388,802 | `2.76x` | $1.5173 | `+0.19%` | `0.000% (No-Chase)` |
| #112 | `2026-09-28 01:02` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $748,648 | $417,231 | `1.79x` | $4,220.06 | `-0.22%` | `0.000% (No-Chase)` |
| #114 | `2026-09-28 07:14` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $499,219 | $417,231 | `1.20x` | $4,160.75 | `-0.35%` | `0.000% (No-Chase)` |
| #115 | `2026-09-28 07:49` | `XRPUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $405,044 | $391,509 | `1.03x` | $1.4696 | `+0.27%` | `0.000% (No-Chase)` |
| #116 | `2026-09-28 14:43` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,517,180 | $915,341 | `1.66x` | $2,655.28 | `-0.14%` | `0.000% (No-Chase)` |
| #118 | `2026-10-02 15:57` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $546,558 | $421,087 | `1.30x` | $4,126.40 | `+0.13%` | `0.000% (No-Chase)` |
| #119 | `2026-10-02 17:14` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $2,232,328 | $931,689 | `2.40x` | $2,675.00 | `-0.05%` | `0.000% (No-Chase)` |
| #124 | `2026-10-14 14:39` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,225,431 | $894,995 | `1.37x` | $2,413.94 | `+0.03%` | `0.000% (No-Chase)` |
| #126 | `2026-10-15 05:51` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $996,781 | $896,763 | `1.11x` | $80,507.56 | `+0.15%` | `0.000% (No-Chase)` |
| #127 | `2026-10-16 17:18` | `BTCUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $2,155,703 | $939,769 | `2.29x` | $80,746.60 | `+0.60%` | `0.000% (No-Chase)` |
| #128 | `2026-10-18 13:34` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,224,925 | $972,363 | `1.26x` | $2,379.31 | `-0.17%` | `0.000% (No-Chase)` |
| #130 | `2026-10-19 16:03` | `ETHUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $1,309,630 | $1,071,371 | `1.22x` | $2,385.37 | `+0.19%` | `0.000% (No-Chase)` |
| #133 | `2026-10-22 19:03` | `XAUUSDT` | `MajorCascadeStinkBid` | `LONG LIQ (Forced SELL)` | `LONG (Maker BUY · Expirada)` | $597,203 | $499,219 | `1.20x` | $4,028.65 | `-0.13%` | `0.000% (No-Chase)` |

</details>
---

## 5. Engenharia de Hardening & Confiabilidade em Produção

Nas entregas de hoje (`18/11/2026`, PRs #78, #79 e #80), fechamos quatro vetores críticos de risco operacional típicos de sistemas orientados a eventos:

1. **Bloqueio de Replay Obsoleto Pós-Restart (`ARK-115`):** Consumidores duráveis do `FractalEngine` suprimem publicações durante *drain* de *backlog*, e `MajorCascadeStinkBid` descarta em `AnalyzeCandle` qualquer candle com idade superior a `MaxBarAgeMs = 120.000ms` antes de tocar histórico, FSM ou sinais.
2. **Alinhamento Exato de Buckets & Deduplicação $O(1)$ (`ARK-110..114`):** Padronização de timestamps fechados (`StartTime + 59.999ms`) e ring-buffer deduplicador por `(ts, price, usd_value)` contra rajadas de coletores paralelos.
3. **Warmup Causal Instantâneo de 30 Dias (PRs #79 & #80):** Na inicialização, cada estratégia e o `SystemicLiquidationTracker` drenam `LIQUIDATIONS_ARCHIVE` usando `PullMaxMessages(5000)` (`90s`/`15s` de deadline), reconstruindo em passe $O(N)$ (`~12s` para `279.783` eventos globais) toda a matriz de 43.200 minutos móveis antes da chegada do primeiro candle ao vivo.
4. **Coleta 1m Completa na Cesta F1:** Provisionamento de coletores Bitget 1m e instâncias `FractalEngine` dedicadas para ativos da cesta de altcoins que ainda não estavam no catálogo base.

---

## 6. Nosso Proceder e Considerações como Operadores Quant Automatizados

Como operadores quantitativos com execução automatizada em ambiente adversarial, nosso proceder diário diante do mercado atual repousa em **cinco diretrizes inegociáveis**:

1. **Prover Liquidez no Pânico Alheio, Jamais Perseguir Tendência após Estiramento:** Em regimes de desalavancagem em escada (`$82k → $62,6k`), vender rompimentos esticados ou comprar *breakouts* no tato gera expectativa negativa após spread e taxas. Nosso *edge* estatístico não está em "adivinhar o fundo macro", mas em **alugar liquidez passiva por 30 a 60 minutos exatos** quando a engine da corretora força vendas insensíveis a preço contra arbitragens Spot/ETF.
2. **O Axioma `No-Chase` (`Oportunidade Perdida Custa $0; Perseguir Custa o Edge`):** Mais de `50%` das cascatas não voltam para preencher `-15` ou `-30 bps` nos 5 minutos seguintes (`No-Chase` expira sem execução). Tentativas manuais de "entrar a mercado para não ficar de fora" transformam uma estratégia de Sharpe `+5,34` em uma estratégia que empata no zero a zero pagando taxas *Taker*.
3. **Substituição de Heurísticas Subjetivas por Microestrutura Causal:** Abandonamos sinalizações discricionárias semanais em troca de percentis causais móveis de 30 dias (`P99` nos Majors, `P95 + MKRatio >= 2,0x` nas Altcoins) sem parâmetros mágicos congelados em USD nominais — o próprio sistema se recalibra à medida que a liquidez do mercado muda.
4. **Simetria Bit-Exata entre Backtest, Shadow e Runtime Live:** O mesmo código Go que alimenta os testes de equivalência (`TestBarBucketEquivalence`, `TestStaleReplay`) roda em `alpha_shadow.jsonl` e emite sinais em `signals.trade.*`. Divergências operacionais como falta de warmup pós-deploy ou backlog de restart são tratadas como bugs críticos de alpha.
5. **Governança Escalonada de Capital (*Shadow-to-Live Gates*):**
   - **Core 4 Majors (`MajorCascadeStinkBid`):** Lógica validada fora da amostra com aprovação estatística e execução passiva *Post-Only* como núcleo prioritário de alocação em dias de cascata sistêmica (`MKRatio >= 2,0x`).
   - **21 Altcoins (`AltCascadeDeepBid` F1):** Mantido rigorosamente em **Shadow Mode** com contabilidade pessimizadora em produção (como observado hoje às `16:12 UTC` em `SOLUSDT` e `NEARUSDT`) até acumular massa crítica de preenchimentos reais ao vivo confirmando viabilidade líquida acima de `20 bps` de atrito.
   - **Disciplina de Inatividade:** Em janelas calmas (`MKRatio < 0,5x`, *funding* neutro), o melhor proceder operacional é **zero ordens enviadas** — capital em caixa rendendo reserva até a próxima chamada de margem coletiva.

---

*Nexus Quant // Pesquisa Proprietária & Sistemas Automatizados de Decisão — Rio de Janeiro, BR*
