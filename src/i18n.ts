import { register, init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';

const en = {
    common: {
        change_language: 'Change language to {name}',
        toggle_theme: 'Toggle light/dark theme',
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
        toggle_theme: 'Alternar tema claro/escuro',
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
        toggle_theme: 'Alternar tema claro/oscuro',
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

addMessages('en', en);
addMessages('pt', pt);
addMessages('es', es);

init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
});
