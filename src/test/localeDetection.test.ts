import { describe, it, expect, vi, beforeEach } from 'vitest';
import { detectBestLocale } from '../i18n';

describe('detectBestLocale', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        // Default navigator reset
        Object.defineProperty(window.navigator, 'languages', { value: ['en'], configurable: true });
        Object.defineProperty(window.navigator, 'language', { value: 'en', configurable: true });
    });

    it('should prefer localStorage if available and supported', () => {
        localStorage.setItem('preferred-locale', 'pt');
        expect(detectBestLocale()).toBe('pt');
    });

    it('should ignore localStorage if not supported', () => {
        localStorage.setItem('preferred-locale', 'fr'); // fr not supported
        // navigator fallback to verify we skip the invalid local storage
        Object.defineProperty(window.navigator, 'languages', { value: ['es'], configurable: true });
        expect(detectBestLocale()).toBe('es');
    });

    it('should use navigator.languages exact match', () => {
        Object.defineProperty(window.navigator, 'languages', { value: ['ru'], configurable: true });
        expect(detectBestLocale()).toBe('ru');
    });

    it('should use navigator.languages prefix match (e.g. pt-BR -> pt)', () => {
        Object.defineProperty(window.navigator, 'languages', { value: ['pt-BR'], configurable: true });
        expect(detectBestLocale()).toBe('pt');
    });

    it('should fallback to en if nothing matches', () => {
        Object.defineProperty(window.navigator, 'languages', { value: ['fr-FR'], configurable: true });
        expect(detectBestLocale()).toBe('en');
    });

    it('should handle complex prioritization (stored > exact nav > prefix nav)', () => {
        // Scenario: User prefers 'de' (stored), browser is 'pt-BR', exact browser is 'ru' (unlikely scenario but tests priority)

        // Case 1: Stored wins
        localStorage.setItem('preferred-locale', 'de');
        Object.defineProperty(window.navigator, 'languages', { value: ['pt-BR'], configurable: true });
        expect(detectBestLocale()).toBe('de');

        // Case 2: No stored, exact browser wins
        localStorage.removeItem('preferred-locale');
        Object.defineProperty(window.navigator, 'languages', { value: ['zh', 'en'], configurable: true });
        expect(detectBestLocale()).toBe('zh');

        // Case 3: No stored, no exact, prefix wins
        Object.defineProperty(window.navigator, 'languages', { value: ['uk-UA'], configurable: true });
        expect(detectBestLocale()).toBe('uk');
    });
});
