import { writable, derived } from 'svelte/store';
import { translations } from './translations';

type TranslationRecord = {
	[key: string]: string | TranslationRecord;
};

type AllTranslations = Record<'pt' | 'en', TranslationRecord>;

export const locale = writable<'pt' | 'en'>('pt');

export const t = derived(locale, ($locale) => {
	return (key: string) => {
		const keys = key.split('.');

		let currentTranslationNode: TranslationRecord | string | undefined = (
			translations as AllTranslations
		)[$locale];

		for (const k of keys) {
			if (
				currentTranslationNode === undefined ||
				currentTranslationNode === null ||
				typeof currentTranslationNode === 'string'
			) {
				currentTranslationNode = undefined; // Mark as not found
				break;
			}

			currentTranslationNode = currentTranslationNode[k];
		}

		return typeof currentTranslationNode === 'string' ? currentTranslationNode : key;
	};
});
