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
