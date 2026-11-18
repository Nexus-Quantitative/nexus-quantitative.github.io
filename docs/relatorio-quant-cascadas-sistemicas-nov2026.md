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
