# RELATÓRIO OPERACIONAL — NEXUS QUANT
## Mesa de Operações · Semana 01/06/2026 – 05/06/2026

---

### 1. Metadados

| Campo | Valor |
|---|---|
| Destinatário | Operador de Mercado |
| Gerado em | 2026-05-31 |
| Validade | 2026-06-01 a 2026-06-05 (revisão na abertura diária) |
| Metodologia | Triple Screen (Alexander Elder) + Sistema de Impulso + convenções Nexus |
| Base de dados | Snapshots de gráfico fornecidos (Investing.com, semanal + diário) |
| Indicadores | Maré: MME(17) + MACD(12,26,9). Onda: Estocástico(5,3,3). Volatilidade: ATR(14) |
| Regra de execução | Avaliar somente em barra FECHADA do screen relevante. Não antecipar barra viva. |

**Legenda de status**
- `ARMED` — permissão ativa; aguardando gatilho de entrada.
- `STANDBY` — sem permissão no momento (viés contrário, sobre-estendido ou aguardando confirmação). **Não operar.**
- `IN_POSITION` — posição aberta (estado de runtime).
- Convicção: `FULL` (impulso semanal confirmado) · `HALF` (semana em transição).

> **Aviso de validade dos dados:** os níveis abaixo refletem os snapshots fornecidos. Revalidar todos os preços, médias e osciladores na abertura semanal antes de armar qualquer ordem. Este relatório é um framework de decisão com risco definido, não previsão nem garantia de resultado.

---

### 2. Regime Macro — Resumo Executivo

**Classificação: RISK-ON ESTREITO.**

Apetite a risco concentrado em large-cap US (S&P em máximas, re-acelerando), enquanto ouro, Brent, BTC e Bovespa corrigem ou caem. Não é risk-off amplo — se fosse, o S&P não faria máxima. Complexo de commodities rolando junto (ouro topou, Brent em queda forte) sugere pressão disinflacionária. Real estruturalmente forte vs dólar.

**Scoreboard de viés (Triple Screen)**

| Ativo | Maré (semanal) | Onda (diário) | Viés | Status | Convicção |
|---|---|---|---|---|---|
| BTC/USD | Baixa (impulso azul→vermelho pendente) | Baixa, estocástico subindo | SHORT | ARMED | HALF |
| XAU/USD (Ouro) | Topo, impulso vermelho | Baixa, estocástico subindo p/ sobrecompra | SHORT | ARMED | FULL |
| S&P 500 | Alta forte, impulso verde | Alta, estocástico ~90 sobrecomprado | LONG | STANDBY | FULL |
| Bovespa | Topo, cruzamento baixista | Baixa forte, estocástico baixo | SHORT | ARMED | FULL |
| USD/BRL | Baixa, momentum desacelerando | Repique, estocástico ~65 subindo | SHORT | STANDBY | HALF |
| Brent | Topo após spike, vermelho | Baixa forte, estocástico ~11 sobrevendido | SHORT | STANDBY | FULL |

**Prioridade de monitoramento (alinhamento + proximidade do gatilho)**
1. XAU/USD — short amadurecendo (estocástico subindo na resistência)
2. Bovespa — tendência mais limpa; vigiar repique para short
3. BTC/USD — primário; short condicional no suporte
4. USD/BRL — short de repique perto de 5,11
5. Brent — short, porém estendido (aguardar repique)
6. S&P 500 — long, porém sobrecomprado (aguardar pullback)

**Implicação para o BTC:** o viés vendedor do BTC não tem risk-off macro amplo por trás (S&P forte é o contrapeso). Tratar o short como **correção dentro de tendência**, não início de bear macro: alvos mais modestos, vigilância redobrada na invalidação por reclaim.

---

### 3. ATIVO PRIMÁRIO — BTC/USD (Playbook detalhado)

**Maré (semanal):** preço 75.708,0 abaixo da MME(17) 76.533,35. Histograma MACD positivo porém desacelerando — barra semanal nova menor que a anterior (topo mais baixo). Impulso **azul** (transição); vira **vermelho** quando o histograma confirmar o topo mais baixo no fechamento semanal = gatilho Elder.

**Onda (diário):** preço abaixo da MME descendente. Estocástico %K 42,08 / %D 28,63, subindo (banda superior 89,03). Repique contra-tendência em curso — ainda não sobrecomprado.

**Permissão:** SHORT-only. Convicção HALF até o fechamento semanal confirmar o impulso vermelho; após confirmação, escala para FULL.

**Níveis**
| Tipo | Valor |
|---|---|
| Suporte (decisão) | 73.936 |
| Resistência (zona) | 76.533 – 76.606 |
| Topo recente | 78.268 |
| Alvo estendido | 58.334 |

**Cenários (FSM ElderGator)**

- **Cenário A — venda no repique.**
  Gatilho: preço repica à zona 76.533–76.606 **e** estocástico 1h sobrecomprado **e** vira para baixo.
  Confirmação: rompe a mínima da barra 15m anterior (sell-stop).
  Ação: `EnterShort`. Stop acima de 76.606 (~76.800). Alvo 73.936.
  Invalidação: fechamento acima de 76.533.

- **Cenário B — venda na continuação.**
  Gatilho: fechamento abaixo de 73.936.
  Confirmação: reteste por baixo rejeitado + rompe mínima 15m.
  Ação: `EnterShort`. Stop acima de 73.936 (~74.100). Alvo escalonado: parcial em ~72.000, runner para 58.334.
  Invalidação: recompõe e fecha de volta acima de 73.936.

- **Cenário C — sem trade.**
  Condição: maré deixa de ser baixista **ou** reclaim/fechamento acima de 76.533.
  Ação: `CancelSetups` — puxar ordens pendentes; seguir ARMED sem entradas.

**Saídas em posição (prioridade):** 1) stop atingido · 2) alvo atingido · 3) reversão de onda no suporte (estocástico virando para cima ≤ 1% acima de 73.936). Pós-saída → ARMED (nunca STANDBY).

---

### 4. CONTEXTO MACRO — Ativos secundários

#### 4.1 XAU/USD (Ouro)
- **Maré:** preço 4.529,57 na/abaixo da MME achatada. MACD cruzou para baixo, histograma −79,87. Impulso vermelho. Topo formado após forte alta.
- **Onda:** preço abaixo da MME diária 4.576,27 (descendente). Estocástico %K 68,77 / %D 56,19, subindo para sobrecompra. ATR 101,35.
- **Viés/Status:** SHORT · ARMED · FULL.
- **Níveis:** Resistência 4.576,27 (MME diária) / 4.632,41 (topo). Suporte 4.519,21 / ~4.500.
- **Gatilho:** estocástico atinge topo da faixa e vira na resistência 4.576. Stop > 4.576 (ou > 4.632). Alvo 4.519 → 4.500.
- **Invalidação:** fechamento acima de 4.632,41.

#### 4.2 S&P 500
- **Maré:** preço 7.580,06 muito acima da MME(17) 7.088,78 (ascendente). MACD-H +102,89 re-acelerando. Impulso verde.
- **Onda:** preço acima da MME diária 7.369,23. Estocástico %K 90,88 / %D 90,08 — profundamente sobrecomprado. ATR 68,83.
- **Viés/Status:** LONG · STANDBY (sobrecomprado) · FULL.
- **Níveis:** Resistência/topo 7.599,38 (máxima semanal). Suporte 7.369,23 (MME diária) / 7.088,78 (MME semanal).
- **Gatilho:** **não comprar sobrecompra.** Aguardar pullback diário (estocástico ao fundo da faixa) em direção a 7.369 para comprar a favor da maré. Stop abaixo do swing/MME diária. Alvo nova máxima.
- **Invalidação:** fechamento diário sustentado abaixo de 7.369; estrutural abaixo de 7.088.

#### 4.3 Bovespa
- **Maré:** preço 173.787 abaixo/na MME flexionando. MACD cruzado para baixo, histograma −3.485,92. Impulso vermelho. Topo confirmado.
- **Onda:** preço bem abaixo da MME diária 177.870 (descendente forte). Estocástico %K 18,94 / %D 34,34 — baixo, %K abaixo de %D. ATR 2.606,67.
- **Viés/Status:** SHORT · ARMED · FULL. **Tendência mais limpa do grupo (duas telas alinhadas).**
- **Níveis:** Resistência 177.870 (MME diária) / 180.055 (semanal). Suporte/mínima recente 172.686.
- **Gatilho:** estocástico já no fundo (repique exaurido) → short fresco apenas no próximo repique à sobrecompra na zona 177.870; senão, continuação no rompimento de 172.686 com reteste. Stop > 177.870. Alvo abaixo de 172.686.
- **Invalidação:** recuperação e fechamento acima de 177.870.

#### 4.4 USD/BRL
- **Maré:** preço 5,0368 abaixo da EMA(17) 5,1099 (descendente). MACD-H −0,0048 — levemente negativo, desacelerando. Dólar estruturalmente fraco vs real.
- **Onda:** repique — preço acima da MME diária 4,9950 (virou para cima). Estocástico %D 66,89 / %K 64,81, subindo.
- **Viés/Status:** SHORT (vender repique) · STANDBY · HALF.
- **Níveis:** Resistência 5,1099 (EMA semanal — underside). Suporte 4,9950 (MME diária) / ~4,85 (mínima recente).
- **Gatilho:** estocástico topa e preço rejeita a underside da EMA semanal ~5,11. Stop > 5,11 (~5,13). Alvo 4,9950 → 4,85.
- **Invalidação:** fechamento semanal acima de 5,1099.

#### 4.5 Brent
- **Maré:** preço 93,46 voltando à MME ~94,37 após spike a 125,55. MACD cruzado para baixo, histograma −1,95. Impulso vermelho.
- **Onda:** preço bem abaixo da MME diária 101,06 (descendente). Estocástico %D 13,07 / %K 11,51 — profundamente sobrevendido. ATR 5,45.
- **Viés/Status:** SHORT, porém **estendido** · STANDBY · FULL.
- **Níveis:** Resistência 94,37 (MME semanal) / 101,06 (MME diária). Suporte/mínima recente 92,48.
- **Gatilho:** **não vender no sobrevendido.** Aguardar repique à sobrecompra na zona 101,06 para short, ou contar com bounce de reversão à média (risco para shorts no curto prazo). Stop > 101,06. Alvo abaixo de 92,48.
- **Invalidação:** fechamento acima de 101,06.

---

### 5. Disciplina e Gestão de Risco

- **Regra dos 2%:** nunca arriscar mais que 2% da conta por trade. Definir o stop primeiro; dimensionar a posição pelo stop.
- **Regra dos 6%:** se as perdas do mês atingirem 6% da conta, encerrar o operacional até virar o mês.
- **Convicção e tamanho:** `HALF` (semana de transição / impulso semanal não confirmado) = meia mão. `FULL` somente com impulso semanal confirmado.
- **Stop não-negociável:** definido na barra de entrada, não ajustado contra a posição durante o trade.
- **Sessão sem trade é resultado válido:** em semana de transição, esperar zero entradas em vários ativos. Não forçar setup fora de gatilho.
- **Hierarquia de telas:** nunca operar contra a maré. Long só onde a maré é de alta (S&P); short nos demais conforme cada gatilho.

---

### 6. Camada de Dados (JSON) — fonte para o dashboard

```json
{
  "relatorio": {
    "titulo": "Relatório Operacional Semanal — Nexus Quant",
    "destinatario": "Operador de Mercado",
    "gerado_em": "2026-05-31",
    "validade_inicio": "2026-06-01",
    "validade_fim": "2026-06-05",
    "metodologia": "Triple Screen (Elder) + Sistema de Impulso + convencoes Nexus",
    "base_dados": "Snapshots de grafico fornecidos (W+D). Revalidar na abertura.",
    "regra_execucao": "Avaliar somente em barra fechada do screen relevante.",
    "legenda_status": {
      "ARMED": "permissao ativa, aguardando gatilho",
      "STANDBY": "sem permissao, nao operar",
      "IN_POSITION": "posicao aberta (runtime)"
    },
    "conviccao": { "FULL": "impulso semanal confirmado", "HALF": "semana em transicao" }
  },
  "regime_macro": {
    "classificacao": "RISK_ON_ESTREITO",
    "descricao": "Apetite a risco concentrado em large-cap US; commodities e alt-risk corrigindo. Nao e risk-off amplo.",
    "drivers": [
      "S&P em maximas, momentum reacelerando",
      "Ouro e Brent em correcao (pressao disinflacionaria)",
      "Real estruturalmente forte vs dolar",
      "BTC alinhado ao complexo alt-risk, desalinhado do S&P"
    ],
    "implicacao_btc": "Short do BTC = correcao dentro de tendencia, nao bear macro. Alvos modestos; vigiar invalidacao por reclaim."
  },
  "prioridade_monitoramento": ["XAUUSD", "BOVESPA", "BTCUSD", "USDBRL", "BRENT", "SP500"],
  "ativos": [
    {
      "symbol": "BTCUSD",
      "papel": "primario",
      "mare_semanal": { "close": 75708.0, "ma17": 76533.35, "relacao_ma": "abaixo", "macd_hist": "positivo_desacelerando", "impulso": "azul_para_vermelho_pendente" },
      "onda_diaria": { "close": 73970.2, "relacao_ma": "abaixo_descendente", "stoch_k": 42.08, "stoch_d": 28.63, "stoch_zona": "neutra_subindo", "stoch_banda_sup": 89.03 },
      "vies": "SHORT", "status": "ARMED", "conviccao": "HALF",
      "niveis": { "suporte": 73936.0, "resistencia_zona": [76533.0, 76606.5], "topo_recente": 78268.4, "alvo_estendido": 58334.0 },
      "gatilhos": [
        { "id": "A", "nome": "venda_no_repique", "condicao": "preco em 76533-76606 + estocastico 1h sobrecomprado e virando + rompe minima 15m", "acao": "EnterShort", "stop": 76800.0, "alvo": 73936.0 },
        { "id": "B", "nome": "venda_na_continuacao", "condicao": "fechamento < 73936 + reteste rejeitado + rompe minima 15m", "acao": "EnterShort", "stop": 74100.0, "alvo": [72000.0, 58334.0] }
      ],
      "invalidacao": "fechamento semanal acima de 76533 / impulso nao-vermelho"
    },
    {
      "symbol": "XAUUSD",
      "papel": "macro",
      "mare_semanal": { "close": 4529.57, "relacao_ma": "na_ou_abaixo_achatada", "macd_hist": -79.8726, "impulso": "vermelho" },
      "onda_diaria": { "close": 4529.57, "ma17": 4576.27, "relacao_ma": "abaixo_descendente", "stoch_k": 68.77, "stoch_d": 56.19, "stoch_zona": "subindo_para_sobrecompra", "atr14": 101.35 },
      "vies": "SHORT", "status": "ARMED", "conviccao": "FULL",
      "niveis": { "suporte": [4519.21, 4500.0], "resistencia": [4576.27, 4632.41] },
      "gatilhos": [ { "id": "A", "nome": "venda_no_repique", "condicao": "estocastico topa a faixa e vira na resistencia 4576", "acao": "EnterShort", "stop": 4632.0, "alvo": [4519.0, 4500.0] } ],
      "invalidacao": "fechamento acima de 4632.41"
    },
    {
      "symbol": "SP500",
      "papel": "macro",
      "mare_semanal": { "close": 7580.06, "ma17": 7088.78, "relacao_ma": "muito_acima_ascendente", "macd_hist": 102.8892, "impulso": "verde" },
      "onda_diaria": { "close": 7473.47, "ma17": 7369.23, "relacao_ma": "acima_ascendente", "stoch_k": 90.88, "stoch_d": 90.08, "stoch_zona": "sobrecomprado", "atr14": 68.83 },
      "vies": "LONG", "status": "STANDBY", "conviccao": "FULL",
      "niveis": { "suporte": [7369.23, 7088.78], "resistencia": [7599.38] },
      "gatilhos": [ { "id": "A", "nome": "compra_no_pullback", "condicao": "estocastico ao fundo da faixa + preco volta a MME diaria 7369", "acao": "EnterLong", "stop": "abaixo_swing_diario", "alvo": "nova_maxima" } ],
      "invalidacao": "fechamento diario sustentado abaixo de 7369"
    },
    {
      "symbol": "BOVESPA",
      "papel": "macro",
      "mare_semanal": { "close": 173787.0, "relacao_ma": "abaixo_flexionando", "macd_hist": -3485.9210, "impulso": "vermelho" },
      "onda_diaria": { "close": 173787.0, "ma17": 177870.33, "relacao_ma": "muito_abaixo_descendente", "stoch_k": 18.94, "stoch_d": 34.34, "stoch_zona": "baixo_k_abaixo_d", "atr14": 2606.67 },
      "vies": "SHORT", "status": "ARMED", "conviccao": "FULL",
      "niveis": { "suporte": [172686.0], "resistencia": [177870.0, 180055.0] },
      "gatilhos": [
        { "id": "A", "nome": "venda_no_repique", "condicao": "proximo repique a sobrecompra na zona 177870", "acao": "EnterShort", "stop": 177870.0, "alvo": 172686.0 },
        { "id": "B", "nome": "continuacao", "condicao": "rompimento de 172686 com reteste", "acao": "EnterShort", "stop": "acima_reteste", "alvo": "abaixo_172686" }
      ],
      "invalidacao": "fechamento acima de 177870"
    },
    {
      "symbol": "USDBRL",
      "papel": "macro",
      "mare_semanal": { "close": 5.0368, "ma17": 5.1099, "relacao_ma": "abaixo_descendente", "macd_hist": -0.0048, "impulso": "vermelho_desacelerando" },
      "onda_diaria": { "close": 5.0368, "ma17": 4.9950, "relacao_ma": "acima_repique", "stoch_k": 64.81, "stoch_d": 66.89, "stoch_zona": "subindo" },
      "vies": "SHORT", "status": "STANDBY", "conviccao": "HALF",
      "niveis": { "suporte": [4.9950, 4.85], "resistencia": [5.1099] },
      "gatilhos": [ { "id": "A", "nome": "venda_no_repique", "condicao": "estocastico topa + rejeicao da EMA semanal 5.11", "acao": "EnterShort", "stop": 5.13, "alvo": [4.9950, 4.85] } ],
      "invalidacao": "fechamento semanal acima de 5.1099"
    },
    {
      "symbol": "BRENT",
      "papel": "macro",
      "mare_semanal": { "close": 93.46, "ma17": 94.37, "relacao_ma": "voltando_a_ma", "macd_hist": -1.9536, "impulso": "vermelho" },
      "onda_diaria": { "close": 93.46, "ma17": 101.06, "relacao_ma": "muito_abaixo_descendente", "stoch_k": 11.51, "stoch_d": 13.07, "stoch_zona": "sobrevendido", "atr14": 5.45 },
      "vies": "SHORT", "status": "STANDBY", "conviccao": "FULL",
      "niveis": { "suporte": [92.48], "resistencia": [94.37, 101.06] },
      "gatilhos": [ { "id": "A", "nome": "venda_no_repique", "condicao": "repique a sobrecompra na zona 101.06 (nao vender sobrevendido)", "acao": "EnterShort", "stop": 101.06, "alvo": "abaixo_92.48" } ],
      "invalidacao": "fechamento acima de 101.06"
    }
  ],
  "gestao_risco": {
    "regra_2pct": "max 2% por trade; dimensionar pelo stop",
    "regra_6pct": "parar o mes em -6%",
    "tamanho_por_conviccao": { "FULL": "mao cheia", "HALF": "meia mao" },
    "stop": "definido na entrada, nao-negociavel",
    "hierarquia": "nunca operar contra a mare"
  }
}
```
