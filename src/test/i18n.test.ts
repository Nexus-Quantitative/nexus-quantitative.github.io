import { describe, it, expect, vi } from 'vitest';
import { dictionary, locale, _ } from 'svelte-i18n';
import { get } from 'svelte/store';
import '../i18n'; // Import to trigger side-effects (addMessages, init)

describe('i18n Configuration', () => {
    it('should have translations for all supported languages', () => {
        const $dictionary = get(dictionary);
        const supportedLocales = ['en', 'pt', 'es', 'ru', 'uk', 'zh', 'ja', 'de'];

        supportedLocales.forEach((lang) => {
            expect($dictionary[lang]).toBeDefined();
            expect($dictionary[lang]).toHaveProperty('common');
            expect($dictionary[lang]).toHaveProperty('hero');
            // Check a specific key to ensure content is there
            expect($dictionary[lang]['common']).toHaveProperty('loading');
        });
    });

    it('should switch to Russian and translate correctly', async () => {
        locale.set('ru');
        // Wait for store update if necessary, though svelte stores are usually synchronous in this context if not async fetching
        const $_ = get(_);
        // We need to pass the key. Using the store value as a function.
        // svelte-i18n derived store returns a formatter function
        expect($_('common.loading')).toBe('ЗАГРУЗКА...');
        expect($_('hero.status')).toBe('СИСТЕМЫ РАБОТАЮТ');
    });

    it('should switch to Ukrainian and translate correctly', async () => {
        locale.set('uk');
        const $_ = get(_);
        expect($_('common.loading')).toBe('ЗАВАНТАЖЕННЯ...');
    });

    it('should switch to Chinese and translate correctly', async () => {
        locale.set('zh');
        const $_ = get(_);
        expect($_('common.loading')).toBe('加载中...');
    });

    it('should switch to Japanese and translate correctly', async () => {
        locale.set('ja');
        const $_ = get(_);
        expect($_('common.loading')).toBe('読み込み中...');
    });

    it('should switch to German and translate correctly', async () => {
        locale.set('de');
        const $_ = get(_);
        expect($_('common.loading')).toBe('LÄDT...');
    });
});
