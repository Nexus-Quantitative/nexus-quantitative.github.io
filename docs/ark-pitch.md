# Ark Streams — Roteiro de Pitch para Investidores
> **Formato:** 3–5 minutos | Português | VC / Anjo Tech-Fintech
> **Rota futura no website:** `#/pitch`

---

## SLIDE 1 — Gancho & Missão

**Visual:** Fundo void preto. Gradiente cyan→violeta. Apenas o nome e a frase de missão.
Badge: `NEXUS QUANT // ARK STREAMS`

**Roteiro:**
> "Olá. Sou Patrick Serrano, Engenheiro de Software Sênior com background em Física e fundador da Nexus Quant.
>
> O mercado de cripto opera 24 horas por dia, 7 dias por semana, sem pausa.
> Mas as melhores metodologias de trading — as que realmente funcionam — foram projetadas para a mente humana. E a mente humana cansa.
>
> A missão do Ark Streams é simples:
> **Transformar setups clássicos de alta precisão em operações de nível institucional, executadas automaticamente, com latência mínima e zero interferência cognitiva.**"

---

## SLIDE 2 — O Problema

**Visual:** Diagrama mostrando três camadas de dor:
1. Mercado 24/7 vs. capacidade humana limitada
2. Ferramentas de varejo lentas e desconexas do contexto macro
3. Metodologias avançadas (Profitunity, Elder) impossíveis de executar manualmente com consistência

**Roteiro:**
> "O problema não é falta de metodologia. Existem sistemas provados — Bill Williams, Elder Triple Screen, Swing Failure Pattern — com décadas de validação.
>
> O problema é **execução**.
>
> As plataformas de varejo disponíveis são lentas, engessadas, e não conseguem combinar contexto macro com execução intraday em tempo real. O trader que tenta operar essas estratégias manualmente está lutando contra o próprio hardware — o cérebro humano.
>
> Fadiga, viés cognitivo, e latência manual são os verdadeiros inimigos do alpha."

---

## SLIDE 3 — A Solução: Arquitetura

**Visual:** Diagrama do pipeline orientado a eventos.
`Binance WS → FractalEngine → NATS JetStream → Estratégias (FSM) → PaperBroker`
Componente interativo: `ReactorCore` simulando o fluxo de dados ao vivo.

**Roteiro:**
> "Foi por isso que construí o Ark Streams do zero.
>
> É um motor de execução proprietário em Go, orientado a eventos via NATS JetStream como barramento central.
> Ele ingere o feed da Binance em tempo real, calcula indicadores via FractalEngine — Alligator, AO, AC, MFI — e aciona estratégias implementadas como máquinas de estado finito.
>
> Isso garante que cada decisão de entrada seja determinística, auditável, e desacoplada do ruído emocional.
>
> O contexto macro — DXY, WTI, S&P500, IBOV — é ingerido via Yahoo Finance e pesa nas decisões de bias direcional. O sistema enxerga o mercado inteiro antes de apertar o gatilho."

---

## SLIDE 4 — Tração Atual

**Visual:** Print do dashboard com sinais do Alligator e posições do PaperBroker.
Métricas do paper trading: drawdown, MFE/MAE, win rate por estratégia.

**Roteiro:**
> "Hoje, o Ark Streams opera como uma plataforma de research e paper trading de alta performance.
>
> O motor central está validado: concorrência, gestão de estado, pipeline de eventos — tudo resolvido e estável.
> O PaperBroker simula execução real com pyramiding, rastreamento de MFE e MAE, e gestão de risco fracionária.
>
> Três estratégias operando em paralelo sobre BTC e XAU, em 7 timeframes simultaneamente.
>
> A base de engenharia pesada está pronta. O que ainda não está é a camada de produto."

---

## SLIDE 5 — O Salto Comercial & O Pedido

**Visual:** Roadmap em três fases com timeline:
- **T1 — Q3 2026:** Multi-tenant + Auth + Isolamento de contas
- **T2 — Q4 2026:** Execução real (Binance/Bitget API) + Monitoramento (Prometheus/Grafana)
- **T3 — Q1 2027:** Compliance + Go-to-market B2B (prop-firms, family offices)

**Roteiro:**
> "Para transformar essa infraestrutura técnica em um produto comercial, precisamos de três evoluções:
>
> **Primeiro:** Arquitetura multi-tenant — isolar contas, adicionar autenticação robusta, escalar o motor para múltiplos usuários simultâneos.
>
> **Segundo:** Plugar o motor na execução real da Bitget e Binance, com monitoramento de produção e circuit breakers.
>
> **Terceiro:** Compliance e go-to-market — o alvo inicial são prop-firms e family offices que já operam cripto e precisam de infraestrutura de execução, não de mais uma plataforma de gráficos.
>
> O capital desta rodada será alocado diretamente nessas três frentes.
>
> A engenharia central já existe. O moat técnico já está construído. Agora é o momento de escalar a operação.
>
> Estou buscando [X] para os próximos 18 meses. Vamos conversar?"

---

## Notas de Apresentação

| Slide | Duração Alvo | Tom |
|-------|-------------|-----|
| 1 — Missão | ~30s | Direto, confiante |
| 2 — Problema | ~45s | Empático, claro |
| 3 — Solução | ~75s | Técnico, mas acessível |
| 4 — Tração | ~45s | Factual, sem hype |
| 5 — Ask | ~45s | Firme, convidativo |

**Total estimado:** ~4 minutos

---

## Pendências para Completar

- [ ] Definir o valor do ask (ticket da rodada)
- [ ] Levantar métricas reais do paper trading (drawdown, win rate, Sharpe estimado)
- [ ] Tamanho do mercado endereçável (TAM de prop-firms cripto / HFT retail)
- [ ] Modelo de receita definido (SaaS por seat? Revenue share? Licença B2B?)
