import { register, init, getLocaleFromNavigator, addMessages, _ } from 'svelte-i18n';
import { derived } from 'svelte/store';

const en = {
    common: {
        change_language: 'Change language to {name}',
        loading: 'LOADING...'
    },
    nav: {
        reports: '[ QUANT REPORT ]',
        terminal: '[ LIVE TERMINAL ]'
    },
    research: {
        section_title: '>_ FEATURED QUANT RESEARCH',
        badge: 'QUANT-RES-2026-11 // 18 NOV 2026',
        eyebrow: 'MICROSTRUCTURE MONOGRAPH · OKX PERPETUALS & ARK STREAMS',
        title: 'Systemic Liquidation Cascades, Passive Liquidity Provision & Automated Quant Doctrine',
        summary: 'Empirical dissection of the 24+ systemic deleveraging clusters (Oct 20 → Nov 18, 2026) across BTC ($82.2k → $62.6k) and 1,061 instruments, out-of-sample validation of Post-Only Stink-Bid ladders (+18.20% OOS, Sharpe +5.34), and instant 30d cold-start hardening deployed in production.',
        kpi_peak: 'Peak $10.12M (11.33x)',
        kpi_symbols: 'OKX pairs warmed',
        meta_line: 'COMPLETE 24-CLUSTER CHRONOLOGY · LIVE ALPHA_SHADOW AUDIT · PRs #78–#80',
        cta: '[ READ FULL ARTICLE & TELEMETRY → ]'
    },
    hero: {
        status: 'SYSTEMS OPERATIONAL',
        title: 'NEXUS QUANT',
        subtitle: 'Proprietary Quantitative Research & Automated Decision Systems.',
        cta: '[ OVERVIEW ]',
        cta_reports: '[ QUANT RESEARCH & REPORT ]',
        cta_ark: '[ ARK STREAMS DECK ]',
        cta_terminal: '[ LIVE TERMINAL ]'
    },
    philosophy: {
        title: '>_ MISSION DIRECTIVE',
        hero_text: 'We approach financial markets as <span class="text-white font-medium">complex physical systems</span>. By bridging <span class="text-white font-medium">stochastic research</span> with <span class="text-white font-medium">deterministic software engineering</span>, we build decision engines that thrive in chaos.',
        p1: { title: 'Precision', text: 'We prioritize data integrity and correctness over raw speculative speed.' },
        p2: { title: 'Automation', text: 'Removing human cognitive bias from critical execution workflows.' },
        p3: { title: 'Resilience', text: 'Systems designed to maintain 99.9% uptime in adversarial environments.' }
    },
    stack: {
        title: '>_ ARCHITECTURE',
        card1: { title: 'QUANTITATIVE RESEARCH', text: 'Statistical modeling, causal 30d quantile calibration, and 111-day walk-forward out-of-sample validation across 1.5M+ liquidation microstructure events.' },
        card2: { title: 'PRODUCTION RUNTIME', text: 'Built in Go over NATS JetStream: 25 autonomous 1m strategy engines (MajorCascadeStinkBid + AltCascadeDeepBid F1) with 30d instant archive warmup and Post-Only No-Chase execution.' },
        card3: { title: 'IMMUTABLE LEDGER', text: 'Full decision state traceability across LIQUIDATIONS_ARCHIVE (279k+ events), STRATEGY_STATE KV buckets, and forensically reconciled alpha_shadow ledgers.' }
    },
    evolution: {
        title: '>_ SYSTEM EVOLUTION',
        phase1: {
            period: '2023 - 2025',
            name: 'Phase 1: Functional Foundation',
            tech: 'Clojure / JVM / Polylith',
            description: 'Focus on mathematical correctness, immutable data structures, and REPL-driven development. Established deterministic state-machine discipline.'
        },
        phase2: {
            period: '2026 - Present',
            name: 'Phase 2: Event-Driven Microstructure',
            tech: 'Go / NATS JetStream / Post-Only Maker',
            description: 'Production cluster monitoring 1,061+ perpetual instruments in real time. Replaced lagging directional indicators with causal systemic liquidation tracking (MKRatio), passive Stink-Bid ladders, and stale-replay hardening.'
        }
    },
    metrics: {
        title: ':: SYSTEM STATUS ::',
        header: { component: 'COMPONENT', status: 'STATUS', latency: 'LATENCY', heartbeat: 'HEARTBEAT' },
        status_labels: {
            connected: 'CONNECTED',
            running: 'RUNNING',
            guarded: 'GUARDED',
            synced: 'SYNCED'
        },
        ago: '{n}s ago',
        enter_terminal: '[ ENTER FULL LIVE TERMINAL ]'
    },
    footer: {
        rights: '© {year} Nexus Quant. All rights reserved.',
        location: 'Rio de Janeiro, BR // Global Operations'
    },
    presentation: {
        title: 'Tech Interview',
        subtitle: 'Quantitative Trading Engine in Clojure',
        section1: {
            title: 'Project Overview',
            text: "Ark Engine is a quantitative trading engine built in Clojure, following a Polylith architecture for modularity and testability. It operates in the Crypto/Binance domain using a Functional, Event-Driven, and Asynchronous paradigm."
        },
        section2: {
            title: 'Architecture Deep Dive',
            subtitle: 'Polylith: Bases, Components, Projects',
            intro: "The system is structured into Bases (cli-runner), Components (orchestrator, strategy-engine, connector, temporal-db), and Projects. This decoupling ensures the strategy engine is pure logic, knowing nothing about Binance, enabling REPL-Driven Development.",
            part1: {
                title: 'Orchestrator (The Brain)',
                intro: "Coordinates data, strategy, and execution. It manages the main application loop using core.async and recursion."
            },
            part2: {
                title: 'Strategy Engine (The Logic)',
                intro: "Pure functions taking immutable data (Candles) and returning results (Signals) with no side effects. Extremely testable."
            },
            part3: {
                title: 'Connector (The Hands)',
                intro: "Handles side effects: talking to exchanges (Binance) to execute orders based on the strategy's decisions."
            }
        },
        section3: {
            title: 'Code Walkthrough',
            role: 'Mental Model',
            subtitle: 'Tick -> Fetch -> Compute -> Decide -> Act -> Recur',
            subtitle2: 'A non-blocking event loop that wakes up on candle close, processes data purely, executes side effects, and recurs with new state.',
            intro: "1. Tick: Time boundaries trigger wake-up. 2. Fetch: Pull history from Temporal DB. 3. Compute: Run indicators (TA4J) via pure functions.",
            intro2: "4. Decide: Logic determines buy/sell. 5. Act: Connector executes order. 6. Recur: New position state passed to next loop iteration.",
            step1: {
                title: 'Orchestrator',
                what: 'The coordinator. Manages the lifecycle and state recursion.',
                parallel: 'Like a Conductor ensuring all instruments play in time.'
            },
            step2: {
                title: 'Strategy Engine',
                what: 'The pure logic. Calculates indicators and signals.',
                magic: 'Referential Transparency: Same input always equals same output.',
                parallel: 'Like a Calculator: 2+2 is always 4, regardless of the weather.'
            },
            step3: {
                title: 'Connector',
                what: 'The side-effect handler. Executes trades.',
                parallel: 'The hands that actually move the chips on the table.'
            },
            bitemporality: {
                title: 'State Management (Recursion)',
                intro: 'We avoid global atoms for the main loop state.',
                trading: 'State exists only on the stack via (loop [state init] ... (recur new-state)).',
                healthcare: 'This ensures the state lifecycle is tightly bound to the process.',
                conclusion: 'Data consistency is maintained through immutability. Each iteration creates a fresh state map derived from the previous one, without mutation.'
            },
            demo: {
                instruction: 'Click "INJECT VOLATILITY" to see the engine handle load:',
                step1: 'The Orchestrator maintains the loop.',
                step2: 'The Strategy computes signals purely.',
                step3: 'The Connector executes safely.',
                conclusion: 'This architecture allows us to test the Strategy in isolation using just data maps, without mocking complex exchange APIs.'
            }
        },
        section4: {
            title: 'Libraries & Talking Points',
            subtitle: 'Key Tech Stack & Interview Answers',
            text: "Core technologies and standard responses for technical questions.",
            headers: ['KEY LIBRARY / CONCEPT', 'ROLE / APPLICATION'],
            rows: {
                source: {
                    fintech: { title: 'core.async', detail: '(Concurrency)' },
                    healthcare: { title: 'CSP (Communicating Sequential Processes)', detail: '(Non-blocking management of the main loop)' }
                },
                norm: {
                    fintech: { title: 'Tick', detail: '(Time)' },
                    healthcare: { title: 'Better Time Intepretation', detail: '(Superior to Java 8 Date/Time for intervals)' }
                },
                audit: {
                    fintech: { title: 'Carmine', detail: '(Redis)' },
                    healthcare: { title: 'Hot State / Pub-Sub', detail: '(Telemetry and fast persistence)' }
                },
                decision: {
                    fintech: { title: 'Polylith', detail: '(Architecture)' },
                    healthcare: { title: 'Monorepo Tooling', detail: '(Enforces strict component isolation)' }
                }
            },
            closing: "Why Clojure? Data processing fits naturally with immutable maps. REPL allows interactive debugging against real market data."
        },
        section5: {
            title: 'READY FOR QUESTIONS',
            text: "Ready to discuss Architecture, Concurrency, or Strategy Implementation details."
        }
    },
    arkStreams: {
        title: 'Ark Streams',
        subtitle: 'Real-time trading intelligence. Every event durable. Every decision replayable.',
        section1: {
            title: 'The Problem',
            text: 'Most trading tools are stateless: they poll an API, compute an indicator, and forget. Ark Streams publishes every candle, every indicator update, every signal as a durable NATS event — making the entire pipeline replayable from day one.',
            cap1: 'Watch live strategy decisions form in real time, timeframe by timeframe',
            cap2: 'Replay historical market sessions through the same engine that runs live',
            cap3: 'Run grid searches over strategy parameters against stored data',
            cap4: 'Observe macro context (WTI, DXY, SP500, IBOV) alongside crypto price action'
        },
        section2: {
            title: 'NATS JetStream — The Backbone',
            subtitle: 'Collectors // FractalEngine // Strategy // API',
            intro: 'Every component is fully decoupled. Collectors publish raw candles. The FractalEngine enriches them with indicators. Strategies consume the enriched stream and emit signals. Nothing talks directly — everything flows through NATS subjects.',
            part1: {
                title: 'Data Ingestion',
                intro: 'Bitget WebSocket (OHLCV, liquidations, private positions), Binance (funding rate, OI), Yahoo Finance REST — polling WTI, BRENT, SP500, DXY, IBOV, USDBRL every hour.'
            },
            part2: {
                title: 'Processing Pipeline',
                intro: 'FractalEngine runs one instance per symbol × timeframe. Publishes AnalyzedEvent to market.analyzed.* and writes the latest snapshot to KV: MARKET_STATE.'
            },
            part3: {
                title: 'Persistent Streams',
                intro: 'MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (last 50 transitions).'
            }
        },
        section3: {
            title: 'FractalEngine — The Analytical Core',
            role: 'Bill Williams Indicator Suite',
            subtitle: 'Raw Candle → Enriched AnalyzedEvent → market.analyzed.*',
            subtitle2: 'One engine instance per symbol × timeframe. Warms up from REST history before subscribing to the live stream — indicators are fully converged before any strategy sees data.',
            step1: { title: 'Collectors', what: 'Ingest raw OHLCV from Bitget, Binance, and Yahoo Finance.', parallel: '' },
            step2: { title: 'FractalEngine', what: 'Compute the full Bill Williams suite. Publish AnalyzedEvent to NATS.', magic: '', parallel: '' },
            step3: { title: 'Strategy', what: 'Subscribe to market.analyzed.*. Emit TradeSignal to signals.trade.*.', parallel: '' }
        },
        section4: {
            title: 'AlligatorTrend — The Strategy',
            subtitle: 'All 6 entry filters must pass simultaneously before a signal is emitted',
            headers: ['FILTER', 'LONG', 'SHORT'],
            rows: {
                runtime: {
                    fintech: { title: 'Alligator Transition', detail: 'Bias just turned Bullish' },
                    healthcare: { title: 'Alligator Transition', detail: 'Bias just turned Bearish' }
                },
                messaging: {
                    fintech: { title: 'Alligator Spread', detail: 'Jaw/teeth/lips spread > threshold' },
                    healthcare: { title: 'Alligator Spread', detail: 'Same' }
                },
                ui: {
                    fintech: { title: 'BB Squeeze Gate', detail: 'BB width > 50th pct (300 bars)' },
                    healthcare: { title: 'BB Squeeze Gate', detail: 'Same' }
                },
                deployment: {
                    fintech: { title: 'Awesome Oscillator', detail: 'AO > 0, accelerating (green bar)' },
                    healthcare: { title: 'Awesome Oscillator', detail: 'AO < 0, accelerating (red bar)' }
                }
            },
            closing: 'Exit: 2×ATR(14) TP/SL · Alligator trend reversal · Teeth touch (2-bar debounce) · PaperBroker with pyramiding, MFE/MAE, FixedFractionalRM'
        },
        section5: {
            title: 'GROWTH PATH',
            text: 'Symbol-agnostic by design — every new collector auto-feeds all downstream consumers via wildcard NATS subscriptions.'
        },
        footer: {
            memory: 'Events: Durable',
            latency: 'Latency: Ultra-Low',
            stack: 'Stack: Go + NATS'
        },
        conclusion: 'Every candle matters.\nEvery signal survives.\nBuilt to scale.'
    }
};

const pt = {
    common: {
        change_language: 'Alterar idioma para {name}',
        loading: 'CARREGANDO...'
    },
    nav: {
        reports: '[ RELATÓRIO QUANT ]',
        terminal: '[ TERMINAL AO VIVO ]'
    },
    research: {
        section_title: '>_ PESQUISA QUANT EM DESTAQUE',
        badge: 'QUANT-RES-2026-11 // 18 NOV 2026',
        eyebrow: 'MONOGRAFIA DE MICROESTRUTURA · PERPÉTUOS OKX & ARK STREAMS',
        title: 'Cascatas Sistêmicas de Liquidação, Provisão Passiva de Liquidez e o Proceder Quant',
        summary: 'Dissecação empírica dos 24+ clusters sistêmicos (20/Out → 18/Nov/2026) no BTC ($82,2k → $62,6k) e em 1.061 ativos, validação OOS das escadas Post-Only Stink-Bid (+18,20% líquido, Sharpe +5,34) e hardening com warmup instantâneo de 30 dias em produção.',
        kpi_peak: 'Pico $10,12M (11,33x)',
        kpi_symbols: 'ativos OKX aquecidos',
        meta_line: 'CRONOLOGIA COMPLETA 24 EVENTOS · AUDITORIA ALPHA_SHADOW · PRs #78–#80',
        cta: '[ LER ARTIGO & TELEMETRIA COMPLETA → ]'
    },
    hero: {
        status: 'SISTEMAS OPERACIONAIS',
        title: 'NEXUS QUANT',
        subtitle: 'Pesquisa Quantitativa Proprietária e Sistemas de Decisão Automatizados.',
        cta: '[ VISÃO GERAL ]',
        cta_reports: '[ PESQUISA & RELATÓRIO QUANT ]',
        cta_ark: '[ APRESENTAÇÃO ARK STREAMS ]',
        cta_terminal: '[ TERMINAL EM TEMPO REAL ]'
    },
    philosophy: {
        title: '>_ DIRETRIZ DA MISSÃO',
        hero_text: 'Abordamos os mercados financeiros como <span class="text-white font-medium">sistemas físicos complexos</span>. Ao unir <span class="text-white font-medium">pesquisa estocástica</span> com <span class="text-white font-medium">engenharia de software determinística</span>, construímos motores de decisão que prosperam no caos.',
        p1: { title: 'Precisão', text: 'Priorizamos a integridade e correção dos dados em vez da velocidade especulativa bruta.' },
        p2: { title: 'Automação', text: 'Removendo o viés cognitivo humano dos fluxos críticos de execução.' },
        p3: { title: 'Resiliência', text: 'Sistemas projetados para manter 99,9% de disponibilidade em ambientes adversos.' }
    },
    stack: {
        title: '>_ ARQUITETURA',
        card1: { title: 'PESQUISA QUANTITATIVA', text: 'Modelagem estatística, calibração de quantis causais de 30 dias e validação walk-forward OOS de 111 dias sobre 1,5M+ eventos de liquidação.' },
        card2: { title: 'RUNTIME DE PRODUÇÃO', text: 'Construído em Go sobre NATS JetStream: 25 motores autônomos 1m (MajorCascadeStinkBid + AltCascadeDeepBid F1) com warmup instantâneo de 30d e execução Post-Only No-Chase.' },
        card3: { title: 'LEDGER IMUTÁVEL', text: 'Rastreabilidade integral de cada decisão em LIQUIDATIONS_ARCHIVE (279k+ eventos), KV STRATEGY_STATE e livros auditáveis em alpha_shadow.' }
    },
    evolution: {
        title: '>_ EVOLUÇÃO DO SISTEMA',
        phase1: {
            period: '2023 - 2025',
            name: 'Fase 1: Fundação Funcional',
            tech: 'Clojure / JVM / Polylith',
            description: 'Foco em corretude matemática, estruturas de dados imutáveis e desenvolvimento orientado a REPL. Consolidou a disciplina determinística de máquina de estados.'
        },
        phase2: {
            period: '2026 - Presente',
            name: 'Fase 2: Microestrutura Orientada a Eventos',
            tech: 'Go / NATS JetStream / Post-Only Maker',
            description: 'Cluster em produção monitorando 1.061+ contratos perpétuos em tempo real. Substituição de indicadores defasados por rastreamento causal sistêmico (MKRatio), escadas Stink-Bid passivas e bloqueio de replay obsoleto.'
        }
    },
    metrics: {
        title: ':: STATUS DO SISTEMA ::',
        header: { component: 'COMPONENTE', status: 'STATUS', latency: 'LATÊNCIA', heartbeat: 'HEARTBEAT' },
        status_labels: {
            connected: 'CONECTADO',
            running: 'EXECUTANDO',
            guarded: 'PROTEGIDO',
            synced: 'SINCRONIZADO'
        },
        ago: '{n}s atrás',
        enter_terminal: '[ ENTRAR NO TERMINAL AO VIVO ]'
    },
    footer: {
        rights: '© {year} Nexus Quant. Todos os direitos reservados.',
        location: 'Rio de Janeiro, BR // Operações Globais'
    },
    arkStreams: {
        title: 'Ark Streams',
        subtitle: 'Inteligência de trading em tempo real. Todo evento durável. Toda decisão reproduzível.',
        section1: {
            title: 'O Problema',
            text: 'A maioria das ferramentas de trading é stateless: consultam uma API, calculam um indicador e esquecem. O Ark Streams publica cada candle, cada atualização de indicador, cada sinal como um evento durável no NATS — tornando o pipeline inteiramente reproduzível desde o primeiro dia.',
            cap1: 'Acompanhe decisões da estratégia se formando em tempo real, timeframe por timeframe',
            cap2: 'Reproduza sessões históricas pelo mesmo engine que roda ao vivo',
            cap3: 'Execute grid searches sobre parâmetros da estratégia contra dados armazenados',
            cap4: 'Observe contexto macro (WTI, DXY, SP500, IBOV) ao lado do price action crypto'
        },
        section2: {
            title: 'NATS JetStream — O Backbone',
            subtitle: 'Collectors // FractalEngine // Strategy // API',
            intro: 'Cada componente é totalmente desacoplado. Collectors publicam candles brutos. O FractalEngine os enriquece com indicadores. Estratégias consomem o stream enriquecido e emitem sinais. Nada se fala diretamente — tudo flui por subjects NATS.',
            part1: {
                title: 'Ingestão de Dados',
                intro: 'Bitget WebSocket (OHLCV, liquidações, posições privadas), Binance (funding rate, OI), Yahoo Finance REST — polling de WTI, BRENT, SP500, DXY, IBOV, USDBRL a cada hora.'
            },
            part2: {
                title: 'Pipeline de Processamento',
                intro: 'FractalEngine roda uma instância por símbolo × timeframe. Publica AnalyzedEvent em market.analyzed.* e escreve o snapshot mais recente em KV: MARKET_STATE.'
            },
            part3: {
                title: 'Streams Persistentes',
                intro: 'MARKET_DATA (7d) · SIGNALS (30d) · POSITIONS (30d) · STRATEGY (365d) · KV: MARKET_STATE + STRATEGY_STATE (últimas 50 transições).'
            }
        },
        section3: {
            title: 'FractalEngine — O Núcleo Analítico',
            role: 'Suite de Indicadores Bill Williams',
            subtitle: 'Candle Bruto → AnalyzedEvent Enriquecido → market.analyzed.*',
            subtitle2: 'Uma instância por símbolo × timeframe. Aquece via REST antes de assinar o stream ao vivo — indicadores totalmente convergidos antes de qualquer estratégia ver dados.',
            step1: { title: 'Collectors', what: 'Ingestão de OHLCV bruto via Bitget, Binance e Yahoo Finance.', parallel: '' },
            step2: { title: 'FractalEngine', what: 'Calcula a suite completa Bill Williams. Publica AnalyzedEvent no NATS.', magic: '', parallel: '' },
            step3: { title: 'Strategy', what: 'Assina market.analyzed.*. Emite TradeSignal em signals.trade.*.', parallel: '' }
        },
        section4: {
            title: 'AlligatorTrend — A Estratégia',
            subtitle: 'Todos os 6 filtros de entrada devem passar simultaneamente antes de um sinal ser emitido',
            headers: ['FILTRO', 'LONG', 'SHORT'],
            rows: {
                runtime: {
                    fintech: { title: 'Transição Alligator', detail: 'Bias acabou de virar Bullish' },
                    healthcare: { title: 'Transição Alligator', detail: 'Bias acabou de virar Bearish' }
                },
                messaging: {
                    fintech: { title: 'Spread Alligator', detail: 'Jaw/teeth/lips spread > threshold' },
                    healthcare: { title: 'Spread Alligator', detail: 'Mesmo' }
                },
                ui: {
                    fintech: { title: 'BB Squeeze Gate', detail: 'Largura BB > percentil 50 (300 barras)' },
                    healthcare: { title: 'BB Squeeze Gate', detail: 'Mesmo' }
                },
                deployment: {
                    fintech: { title: 'Awesome Oscillator', detail: 'AO > 0, acelerando (barra verde)' },
                    healthcare: { title: 'Awesome Oscillator', detail: 'AO < 0, acelerando (barra vermelha)' }
                }
            },
            closing: 'Saída: 2×ATR(14) TP/SL · Reversão de tendência Alligator · Toque nos dentes (debounce 2 barras) · PaperBroker com pirâmide, MFE/MAE, FixedFractionalRM'
        },
        section5: {
            title: 'PLANO DE CRESCIMENTO',
            text: 'Agnóstico a símbolo por design — cada novo collector alimenta automaticamente todos os consumidores downstream via assinaturas wildcard no NATS.'
        },
        footer: {
            memory: 'Eventos: Duráveis',
            latency: 'Latência: Ultra-Baixa',
            stack: 'Stack: Go + NATS'
        },
        conclusion: 'Todo candle importa.\nTodo sinal sobrevive.\nConstruído para escalar.'
    }
};

const es = {
    common: {
        change_language: 'Cambiar idioma a {name}',

        loading: 'CARGANDO...'
    },
    hero: {
        status: 'SISTEMAS OPERATIVOS',
        title: 'NEXUS QUANT',
        subtitle: 'Investigación Cuantitativa Propietaria y Sistemas de Decisión Automatizados.',
        cta: '[ VER FILOSOFÍA ]',
        cta_terminal: '[ TERMINAL EN VIVO ]'
    },
    philosophy: {
        title: '>_ DIRECTRIZ DE MISIÓN',
        hero_text: 'Abordamos los mercados financieros como <span class="text-white font-medium">sistemas físicos complexes</span>. Al unir <span class="text-white font-medium">investigación estocástica</span> con <span class="text-white font-medium">ingeniería de software determinística</span>, construimos motores de decisión que prosperan en el caos.',
        p1: { title: 'Precisión', text: 'Priorizamos la integridad y corrección de los datos sobre la velocidad especulativa bruta.' },
        p2: { title: 'Automatización', text: 'Eliminando el sesgo cognitivo humano de los flujos de ejecución críticos.' },
        p3: { title: 'Resiliencia', text: 'Sistemas diseñados para mantener un 99,9% de disponibilidad en entornos adversos.' }
    },
    stack: {
        title: '>_ ARQUITETURA',
        card1: { title: 'ANÁLISIS CUANTITATIVO', text: 'Pruebas rápidas de hipótesis, modelado estadístico y backtesting utilizando el ecosistema de ciencia de datos de Python.' },
        card2: { title: 'RUNTIME DE PRODUCCIÓN', text: 'Nuestro motor de ejecución patentado. Basado en principios de programación funcional para garantizar la seguridad de concurrencia y la tolerancia a fallos.' },
        card3: { title: 'LIBRO INMUTABLE', text: 'Trazabilidad completa de cada estado de decisión. Utilizamos capacidades de base de datos de viaje en el tiempo para una auditoría post-negociación rigurosa.' }
    },
    metrics: {
        title: ':: ESTADO DEL SISTEMA ::',
        header: { component: 'COMPONENTE', status: 'ESTADO', latency: 'LATENCIA', heartbeat: 'LATIDO' },
        status_labels: {
            connected: 'CONECTADO',
            running: 'EJECUTANDO',
            guarded: 'PROTEGIDO',
            synced: 'SINCRONIZADO'
        },
        ago: 'hace {n}s',
        enter_terminal: '[ INGRESAR AL TERMINAL EN VIVO ]'
    },
    footer: {
        rights: '© {year} Nexus Quant. Todos los derechos reservados.',
        location: 'Río de Janeiro, BR // Operaciones Globales'
    }
};

const ru = {
    common: {
        change_language: 'Сменить язык на {name}',

        loading: 'ЗАГРУЗКА...'
    },
    hero: {
        status: 'СИСТЕМЫ РАБОТАЮТ',
        title: 'NEXUS QUANT',
        subtitle: 'Собственные количественные исследования и автоматизированные системы принятия решений.',
        cta: '[ ПОСМОТРЕТЬ ФИЛОСОФИЮ ]',
        cta_terminal: '[ ЖИВОЙ ТЕРМИНАЛ ]'
    },
    philosophy: {
        title: '>_ ДИРЕКТИВА МИССИИ',
        hero_text: 'Мы рассматриваем финансовые рынки как <span class="text-white font-medium">сложные физические системы</span>. Объединяя <span class="text-white font-medium">стохастические исследования</span> с <span class="text-white font-medium">детерминированной программной инженерией</span>, мы создаем механизмы принятия решений, процветающие в хаосе.',
        p1: { title: 'Точность', text: 'Мы ставим целостность и корректность данных выше грубой спекулятивной скорости.' },
        p2: { title: 'Автоматизация', text: 'Исключение человеческого когнитивного искажения из критически важных рабочих процессов исполнения.' },
        p3: { title: 'Устойчивость', text: 'Системы, разработанные для поддержания 99,9% времени безотказной работы в агрессивных средах.' }
    },
    stack: {
        title: '>_ АРХИТЕКТУРА',
        card1: { title: 'КОЛИЧЕСТВЕННЫЙ АНАЛИЗ', text: 'Быстрое тестирование гипотез, статистическое моделирование и бэктестинг с использованием экосистемы науки о данных Python.' },
        card2: { title: 'ПРОИЗВОДСТВЕННАЯ СРЕДА', text: 'Наш собственный механизм исполнения. Построен на принципах функционального программирования для обеспечения безопасности параллелизма и отказоустойчивости.' },
        card3: { title: 'НЕИЗМЕНЯЕМЫЙ РЕЕСТР', text: 'Полная прослеживаемость каждого состояния принятия решения. Мы используем возможности баз данных с путешествием во времени для строгого аудита после сделок.' }
    },
    metrics: {
        title: ':: СОСТОЯНИЕ СИСТЕМЫ ::',
        header: { component: 'КОМПОНЕНТ', status: 'СТАТУС', latency: 'ЗАДЕРЖКА', heartbeat: 'СЕРДЦЕБИЕНИЕ' },
        status_labels: {
            connected: 'ПОДКЛЮЧЕНО',
            running: 'ЗАПУЩЕНО',
            guarded: 'ОХРАНЯЕТСЯ',
            synced: 'СИНХРОНИЗИРОВАНО'
        },
        ago: '{n}с назад',
        enter_terminal: '[ ОТКРЫТЬ РЕАЛ-ТАЙМ ТЕРМИНАЛ ]'
    },
    footer: {
        rights: '© {year} Nexus Quant. Все права защищены.',
        location: 'Рио-де-Жанейро, БР // Глобальные операции'
    }
};

const uk = {
    common: {
        change_language: 'Змінити мову на {name}',

        loading: 'ЗАВАНТАЖЕННЯ...'
    },
    hero: {
        status: 'СИСТЕМИ ПРАЦЮЮТЬ',
        title: 'NEXUS QUANT',
        subtitle: 'Власні кількісні дослідження та автоматизовані системи прийняття рішень.',
        cta: '[ ПЕРЕГЛЯНУТИ ФІЛОСОФІЮ ]',
        cta_terminal: '[ ЖИВИЙ ТЕРМІНАЛ ]'
    },
    philosophy: {
        title: '>_ ДИРЕКТИВА МІСІЇ',
        hero_text: 'Ми розглядаємо фінансові ринки як <span class="text-white font-medium">складні фізичні системи</span>. Поєднуючи <span class="text-white font-medium">стохастичні дослідження</span> з <span class="text-white font-medium">детермінованою програмною інженерією</span>, ми створюємо механізми прийняття рішень, що процвітають у хаосі.',
        p1: { title: 'Точність', text: 'Ми ставимо цілісність і коректність даних вище грубої спекулятивної швидкості.' },
        p2: { title: 'Автоматизація', text: 'Виключення людського когнітивного упередження з критично важливих робочих процесів виконання.' },
        p3: { title: 'Стійкість', text: 'Системи, розроблені для підтримки 99,9% часу безвідмовної роботи в агресивних середовищах.' }
    },
    stack: {
        title: '>_ АРХІТЕКТУРА',
        card1: { title: 'КІЛЬКІСНИЙ АНАЛІЗ', text: 'Швидке тестування гіпотез, статистичне моделювання та бектестування з використанням екосистеми науки про дані Python.' },
        card2: { title: 'ВИРОБНИЧЕ СЕРЕДОВИЩЕ', text: 'Наш власний механізм виконання. Побудований на принципах функціонального програмування для забезпечення безпеки паралелізму та відмовостійкості.' },
        card3: { title: 'НЕЗМІННИЙ РЕЄСТР', text: 'Повна простежуваність кожного стану прийняття рішення. Ми використовуємо можливості баз даних з подорожжю в часі для суворого аудиту після угод.' }
    },
    metrics: {
        title: ':: СТАН СИСТЕМИ ::',
        header: { component: 'КОМПОНЕНТ', status: 'СТАТУС', latency: 'ЗАТРИМКА', heartbeat: 'СЕРЦЕБИТТЯ' },
        status_labels: {
            connected: 'ПІДКЛЮЧЕНО',
            running: 'ЗАПУЩЕНО',
            guarded: 'ОХОРОНЯЄТЬСЯ',
            synced: 'СИНХРОНІЗОВАНО'
        },
        ago: '{n}с тому',
        enter_terminal: '[ ВІДКРИТИ РЕАЛ-ТАЙМ ТЕРМІНАЛ ]'
    },
    footer: {
        rights: '© {year} Nexus Quant. Всі права захищені.',
        location: 'Ріо-де-Жанейро, БР // Глобальні операції'
    }
};

const zh = {
    common: {
        change_language: '更改语言为 {name}',

        loading: '加载中...'
    },
    hero: {
        status: '系统运行正常',
        title: 'NEXUS QUANT',
        subtitle: '专有定量研究和自动决策系统。',
        cta: '[ 查看理念 ]',
        cta_terminal: '[ 实时终端 ]'
    },
    philosophy: {
        title: '>_ 任务指令',
        hero_text: '我们将金融市场视为<span class="text-white font-medium">复杂的物理系统</span>。通过将<span class="text-white font-medium">随机研究</span>与<span class="text-white font-medium">确定性软件工程</span>相结合，我们构建了在混乱中蓬勃发展的决策引擎。',
        p1: { title: '精确性', text: '我们优先考虑数据的完整性和正确性，而不是单纯的投机速度。' },
        p2: { title: '自动化', text: '从关键执行工作流中消除人类认知偏差。' },
        p3: { title: '弹性', text: '旨在在对抗性环境中保持 99.9% 正常运行时间的系统。' }
    },
    stack: {
        title: '>_ 架构',
        card1: { title: '定量分析', text: '使用 Python 数据科学生态系统进行快速假设检验、统计建模和回测。' },
        card2: { title: '生产运行环境', text: '我们的专有执行引擎。建立在函数式编程原则之上，以确保并发安全和容错能力。' },
        card3: { title: '不可变账本', text: '每个决策状态的完全可追溯性。我们利用时间旅行数据库功能进行严格的交易后审计。' }
    },
    metrics: {
        title: ':: 系统状态 ::',
        header: { component: '组件', status: '状态', latency: '延迟', heartbeat: '心跳' },
        status_labels: {
            connected: '已连接',
            running: '运行中',
            guarded: '受保护',
            synced: '已同步'
        },
        ago: '{n}秒前',
        enter_terminal: '[ 进入实时交易终端 ]'
    },
    footer: {
        rights: '© {year} Nexus Quant. 保留所有权利。',
        location: '里约热内卢, 巴西 // 全球运营'
    }
};

const ja = {
    common: {
        change_language: '言語を{name}に変更',

        loading: '読み込み中...'
    },
    hero: {
        status: 'システム稼働中',
        title: 'NEXUS QUANT',
        subtitle: '独自の定量的研究および自動意思決定システム。',
        cta: '[ 哲学を見る ]',
        cta_terminal: '[ ライブ端末 ]'
    },
    philosophy: {
        title: '>_ ミッション指令',
        hero_text: '私たちは金融市場を<span class="text-white font-medium">複雑な物理システム</span>として捉えています。<span class="text-white font-medium">確率的研究</span>と<span class="text-white font-medium">決定論的ソフトウェア工学</span>を融合させることで、混沌の中で繁栄する意思決定エンジンを構築します。',
        p1: { title: '精度', text: '私たちは、単なる投機的な速度よりもデータの整合性と正確性を優先します。' },
        p2: { title: '自動化', text: '重要な実行ワークフローから人間の認知的バイアスを排除します。' },
        p3: { title: '回復力', text: '敵対的な環境でも99.9%の稼働率を維持するように設計されたシステム。' }
    },
    stack: {
        title: '>_ アーキテクチャ',
        card1: { title: '定量的分析', text: 'Pythonデータサイエンスエコシステムを使用した迅速な仮説検証、統計モデリング、およびバックテスト。' },
        card2: { title: '本番ランタイム', text: '当社独自の実行エンジン。並行性の安全性とフォールトトレランスを確保するために、関数型プログラミングの原則に基づいて構築されています。' },
        card3: { title: '不変台帳', text: 'すべての意思決定状態の完全な追跡可能性。厳格な取引後監査のためにタイムトラベルデータベース機能を利用しています。' }
    },
    metrics: {
        title: ':: システムステータス ::',
        header: { component: 'コンポーネント', status: 'ステータス', latency: 'レイテンシ', heartbeat: 'ハートビート' },
        status_labels: {
            connected: '接続済み',
            running: '実行中',
            guarded: '保護中',
            synced: '同期済み'
        },
        ago: '{n}秒前',
        enter_terminal: '[ リアルタイム端末に入る ]'
    },
    footer: {
        rights: '© {year} Nexus Quant. 全著作権所有。',
        location: 'リオデジャネイロ, ブラジル // グローバルオペレーション'
    }
};

const de = {
    common: {
        change_language: 'Sprache ändern zu {name}',

        loading: 'LÄDT...'
    },
    hero: {
        status: 'SYSTEME BETRIEBSBEREIT',
        title: 'NEXUS QUANT',
        subtitle: 'Proprietäre quantitative Forschung & automatisierte Entscheidungssysteme.',
        cta: '[ PHILOSOPHIE ANSEHEN ]',
        cta_terminal: '[ LIVE-TERMINAL ]'
    },
    philosophy: {
        title: '>_ MISSIONSDIREKTIVE',
        hero_text: 'Wir betrachten Finanzmärkte als <span class="text-white font-medium">komplexe physikalische Systeme</span>. Durch die Verbindung von <span class="text-white font-medium">stochastischer Forschung</span> mit <span class="text-white font-medium">deterministischer Softwareentwicklung</span> bauen wir Entscheidungsmaschinen, die im Chaos gedeihen.',
        p1: { title: 'Präzision', text: 'Wir priorisieren Datenintegrität und Korrektheit gegenüber roher spekulativer Geschwindigkeit.' },
        p2: { title: 'Automatisierung', text: 'Entfernung menschlicher kognitiver Verzerrungen aus kritischen Ausführungsabläufen.' },
        p3: { title: 'Resilienz', text: 'Systeme, die entwickelt wurden, um in feindlichen Umgebungen eine Verfügbarkeit von 99,9% aufrechtzuerhalten.' }
    },
    stack: {
        title: '>_ ARCHITEKTUR',
        card1: { title: 'QUANTITATIVE ANALYSE', text: 'Schnelles Testen von Hypothesen, statistische Modellierung und Backtesting unter Verwendung des Python-Data-Science-Ökosystems.' },
        card2: { title: 'PRODUKTIONS-LAUFZEITUMGEBUNG', text: 'Unsere proprietäre Ausführungs-Engine. Aufgebaut auf Prinzipien der funktionalen Programmierung zur Gewährleistung von Nebenläufigkeitssicherheit und Fehlertoleranz.' },
        card3: { title: 'UNVERÄNDERLICHES HAUPTBUCH', text: 'Vollständige Rückverfolgbarkeit jedes Entscheidungszustands. Wir nutzen Zeitreise-Datenbankfunktionen für rigorose Nachhandelsprüfungen.' }
    },
    metrics: {
        title: ':: SYSTEMSTATUS ::',
        header: { component: 'KOMPONENTE', status: 'STATUS', latency: 'LATENZ', heartbeat: 'HEARTBEAT' },
        status_labels: {
            connected: 'VERBUNDEN',
            running: 'LÄUFT',
            guarded: 'GESCHÜTZT',
            synced: 'SYNCHRONISIERT'
        },
        ago: 'vor {n}s',
        enter_terminal: '[ LIVE-TERMINAL ÖFFNEN ]'
    },
    footer: {
        rights: '© {year} Nexus Quant. Alle Rechte vorbehalten.',
        location: 'Rio de Janeiro, BR // Globale Operationen'
    }
};

addMessages('en', en);
addMessages('pt', pt);
addMessages('es', es);
addMessages('ru', ru);
addMessages('uk', uk);
addMessages('zh', zh);
addMessages('ja', ja);
addMessages('de', de);


const supportedLocales = ['en', 'pt'];

export function detectBestLocale(): string {
    if (typeof window === 'undefined') return 'en';

    // 1. Check localStorage
    try {
        const saved = localStorage.getItem('preferred-locale');
        if (saved && supportedLocales.includes(saved)) {
            return saved;
        }
    } catch (e) {
        // Accessing localStorage might fail in some privacy modes
    }

    // 2. Check navigator languages
    const browserLocales = navigator.languages || [navigator.language];

    for (const locale of browserLocales) {
        if (!locale) continue;

        // Exact match
        if (supportedLocales.includes(locale)) {
            return locale;
        }

        // Base language match (e.g. en-US -> en)
        const code = locale.split('-')[0];
        if (supportedLocales.includes(code)) {
            return code;
        }
    }

    return 'en';
}

init({
    fallbackLocale: 'en',
    initialLocale: detectBestLocale(),
});
