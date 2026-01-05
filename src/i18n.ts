import { register, init, getLocaleFromNavigator, addMessages, _ } from 'svelte-i18n';
import { derived } from 'svelte/store';

const en = {
    common: {
        change_language: 'Change language to {name}',

        loading: 'LOADING...'
    },
    hero: {
        status: 'SYSTEMS OPERATIONAL',
        title: 'NEXUS QUANT',
        subtitle: 'Proprietary Quantitative Research & Automated Decision Systems.',
        cta: '[ VIEW PHILOSOPHY ]'
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
        card1: { title: 'QUANTITATIVE ANALYSIS', text: 'Rapid hypothesis testing, statistical modeling, and backtesting using the Python data science ecosystem.' },
        card2: { title: 'PRODUCTION RUNTIME', text: 'Our proprietary execution engine. Built on functional programming principles to ensure concurrency safety and fault tolerance.' },
        card3: { title: 'IMMUTABLE LEDGER', text: 'Full traceability of every decision state. We utilize time-travel database capabilities for rigorous post-trade auditing.' }
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
        ago: '{n}s ago'
    },
    footer: {
        rights: '© {year} Nexus Quant. All rights reserved.',
        location: 'Rio de Janeiro, BR // Global Operations'
    },
    presentation: {
        title: 'From Physics to Fintech to Healthcare',
        subtitle: 'Engineering Resilient Systems',
        section1: {
            title: 'Hi, I\'m Patrick Serrano.',
            text: "I am a Senior Software Engineer with a background in Physics. That scientific foundation is crucial to who I am as a developer. It taught me to view software not just as lines of code, but as complex, physical systems that have limits, entropy, and a need for absolute determinism. For the past 7 years, I’ve been applying this scientific method to build high-stakes financial systems using Clojure. Today, I want to walk you through that journey and explain why I'm ready to apply this rigor to the Healthcare domain."
        },
        section2: {
            title: 'THE BRIDGE',
            subtitle: 'Fintech ↔ Healthcare',
            intro: "For the last seven years, I worked at Moleque de Ideias , a software boutique where I grew from an intern to a Lead Software Engineer. My main focus there was orchestrating complex financial flows. The biggest challenge wasn't just processing payments, but handling the chaos of integrating multiple external actors like VTEX, Adyen, Mercado Pago, and others.",
            part1: {
                title: 'THE CHAOS (Ingestion)',
                intro: "In Fintech, this 'Chaos' was VTEX, Cielo, and legacy ERPs sending messy data. In Healthcare, this is your EMRs, Lab Results, and Wearables. The problem is the same: High fragmentation, low consistency."
            },
            part2: {
                title: 'THE REFINERY (Processing)',
                intro: "Here we use Malli to act as the immune system, rejecting bad data. We use Datomic to create an immutable patient timeline. We never overwrite reality."
            },
            part3: {
                title: 'THE VALUE (Intelligence)',
                intro: "Outputting raw data is useless. In Fintech, we turned data into UBLE—revenue recovery alerts. In your platform, this translates to Clinical Decision Support. We take the clean data and push actionable insights to the doctor."
            }
        },
        section3: {
            title: 'THE PURSUIT OF BITEMPORALITY',
            role: 'Nexus Quant Pivot',
            subtitle: 'Architecting Safety-Critical Systems via Isolation & Bitemporality.',
            subtitle2: 'Engineered to react to the world in real-time, maintaining a perfect and auditable memory of the past.',
            intro: "In July 2025, after 7 years, I felt I had completed a full cycle there. I had a burning desire to build a high-frequency trading system from scratch to test specific architectural theories I had—specifically around Event Sourcing and Bitemporality.",
            intro2: "So I founded Nexus Quant to solve a critical engineering problem: How to run automated trading bots with real, significant capital without losing sleep.",
            step1: {
                title: 'Strategy Engine (The Brain)',
                what: 'This is the \'Brain\'. It ingests market data and suggests trades.',
                parallel: 'In your world, this is the AI Diagnostic Tool or a Doctor inputting a prescription. It\'s intelligent, but it can make mistakes based on bad data.'
            },
            step2: {
                title: 'Risk Guard + Execution (The Shield)',
                what: 'This is the Ark Core. It is physically isolated using Polylith. It doesn\'t care why the strategy wants to buy; it checks if it is safe to buy.',
                magic: 'If the Strategy \'hallucinates\' and tries to bet 100% of the capital, this Guard cuts the circuit. It creates a hard boundary.',
                parallel: 'This is exactly what a Clinical Decision Support System does. If a doctor prescribes a dosage that is 10x too high (fatal error), the system intercepts it before it reaches the patient (Execution).'
            },
            step3: {
                title: 'Capital / Assets (The Vault)',
                what: 'The immutable state. The real money.',
                parallel: 'This is the Patient\'s Health. We treat it as the ultimate resource that must be protected from \'software bugs\'.'
            },
            bitemporality: {
                title: 'Why XTDB? Bitemporality in Action',
                intro: 'Because in high-frequency environments, data arrives late.',
                trading: 'In Trading: A price correction arrives 5ms late.',
                healthcare: 'In Healthcare: A lab result is updated 2 hours after the diagnosis.',
                conclusion: 'With Ark Engine\'s Bitemporality, I can insert that late data into the past (Valid Time) without breaking the audit trail of what the system knew at that moment (Transaction Time). This allows for Retroactive Correction of patient records—a crucial feature for medical legal compliance.'
            },
            demo: {
                instruction: 'Click "INJECT RISK" to see the architecture in action:',
                step1: 'The Strategy (Brain) turns RED (Error!)',
                step2: 'The Risk Guard (Shield) PULSES and blocks the flow',
                step3: 'The Capital (Vault) remains GREEN and SAFE',
                conclusion: 'See this? The Strategy failed. It tried to execute a disastrous trade. But because of the Polylith isolation, the Risk Guard caught it. The Capital is untouched. This architecture buys you safety. Whether it\'s protecting a portfolio or flagging a drug interaction, the mechanism is identical.'
            }
        },
        section4: {
            title: 'THE CONVERGENCE',
            subtitle: 'Engineering Continuity',
            text: "The engineering problems in Trading and Fintech are identical to the problems in Healthcare.",
            headers: ['FINTECH REALITY (My Background)', 'HEALTHCARE REALITY (Your Challenge)'],
            rows: {
                source: {
                    fintech: { title: 'Fragmented Ecosystems', detail: '(VTEX, Getnet, Adyen, ClearSale)' },
                    healthcare: { title: 'Disparate Sources', detail: '(EMR, Lab Results, different hospitals, physician offices)' }
                },
                norm: {
                    fintech: { title: 'Strict Contract Enforcement', detail: '(Malli Schemas at the Edge)' },
                    healthcare: { title: 'Protocol Standardization', detail: '(FHIR / HL7 Interoperability)' }
                },
                audit: {
                    fintech: { title: 'Immutable Ledger', detail: '(Datomic Transaction Log)' },
                    healthcare: { title: 'Longitudinal Patient Records', detail: '(Auditability & Legal Compliance)' }
                },
                decision: {
                    fintech: { title: 'Revenue Recovery Algorithms', detail: '(Real-time Superset Dashboards)' },
                    healthcare: { title: 'Clinical Decision Support', detail: '(Evidence-Based Alerts & Insights)' }
                }
            },
            closing: "I am looking to transplant the architectural heart of a high-frequency mission-critical system into your healthcare platform."
        },
        section5: {
            title: 'READY TO DEPLOY',
            text: "I am ready to bring architectural maturity to your team, helping you turn messy data into a resilient Clinical Decision Platform starting Day 1."
        }
    }
};

const pt = {
    common: {
        change_language: 'Alterar idioma para {name}',

        loading: 'CARREGANDO...'
    },
    hero: {
        status: 'SISTEMAS OPERACIONAIS',
        title: 'NEXUS QUANT',
        subtitle: 'Pesquisa Quantitativa Proprietária e Sistemas de Decisão Automatizados.',
        cta: '[ VER FILOSOFIA ]'
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
        card1: { title: 'ANÁLISE QUANTITATIVA', text: 'Teste rápido de hipóteses, modelagem estatística e backtesting usando o ecossistema de ciência de dados Python.' },
        card2: { title: 'RUNTIME DE PRODUÇÃO', text: 'Nosso motor de execução proprietário. Construído sobre princípios de programação funcional para garantir segurança de concorrência e tolerância a falhas.' },
        card3: { title: 'LEDGER IMUTÁVEL', text: 'Rastreabilidade total de cada estado de decisão. Utilizamos recursos de banco de dados de viagem no tempo para auditoria pós-trade rigorosa.' }
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
        ago: '{n}s atrás'
    },
    footer: {
        rights: '© {year} Nexus Quant. Todos os direitos reservados.',
        location: 'Rio de Janeiro, BR // Operações Globais'
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
        cta: '[ VER FILOSOFÍA ]'
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
        ago: 'hace {n}s'
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
        cta: '[ ПОСМОТРЕТЬ ФИЛОСОФИЮ ]'
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
        ago: '{n}с назад'
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
        cta: '[ ПЕРЕГЛЯНУТИ ФІЛОСОФІЮ ]'
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
        ago: '{n}с тому'
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
        cta: '[ 查看理念 ]'
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
        ago: '{n}秒前'
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
        cta: '[ 哲学を見る ]'
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
        ago: '{n}秒前'
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
        cta: '[ PHILOSOPHIE ANSEHEN ]'
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
        ago: 'vor {n}s'
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


const supportedLocales = ['en', 'pt', 'es', 'ru', 'uk', 'zh', 'ja', 'de'];

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
