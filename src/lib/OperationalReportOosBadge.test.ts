import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { locale } from 'svelte-i18n';
import '../i18n';
import OperationalReport from './OperationalReport.svelte';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('ARK-132: Rótulo Explícito OOS Histórico vs Execução Shadow ao Vivo', () => {
  it('OperationalReport.svelte deve conter os badges OOS histórico e Shadow ao vivo', () => {
    locale.set('pt');
    const { container } = render(OperationalReport);

    // 1. Na Seção 04B (#sec-oos-proof), exibir badge de destaque
    // SIMULAÇÃO WALK-FORWARD OOS · DADOS HISTÓRICOS OKX (JUL–OUT/2026) / HISTORICAL OOS SIMULATION
    const secOos = container.querySelector('#sec-oos-proof');
    expect(secOos).not.toBeNull();
    const secOosText = secOos?.textContent ?? '';
    expect(secOosText).toContain('SIMULAÇÃO WALK-FORWARD OOS · DADOS HISTÓRICOS OKX (JUL–OUT/2026)');

    // Também na barra de resumo do ledger
    const summaryBar = secOos?.querySelector('.border.border-white\\/10.bg-white\\/\\[0\\.02\\]');
    expect(summaryBar).not.toBeNull();
    expect(summaryBar?.textContent).toContain('SIMULAÇÃO WALK-FORWARD OOS · DADOS HISTÓRICOS OKX (JUL–OUT/2026)');

    // 2. Na Seção 01, exibir badge contrastante
    // EXECUÇÃO AO VIVO · SHADOW MODE (18/NOV/2026)
    const secCenario = container.querySelector('#sec-cenario');
    expect(secCenario).not.toBeNull();
    const secCenarioText = secCenario?.textContent ?? '';
    expect(secCenarioText).toContain('EXECUÇÃO AO VIVO · SHADOW MODE (18/NOV/2026)');
  });

  it('docs/relatorio-quant-cascadas-sistemicas-nov2026.md deve espelhar a distinção no título da Seção 4.1', () => {
    const docPath = resolve(process.cwd(), 'docs/relatorio-quant-cascadas-sistemicas-nov2026.md');
    const docContent = readFileSync(docPath, 'utf-8');

    // Título da Seção 4.1 deve conter explicitamente a distinção / badge
    expect(docContent).toMatch(/### 4\.1 .*SIMULAÇÃO WALK-FORWARD OOS · DADOS HISTÓRICOS OKX \(JUL–OUT\/2026\)/i);
  });
});
