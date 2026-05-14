export interface LocalizedContent {
	role: string;
	period: string;
	description: string[];
}

export interface ExperienceEntry {
	company: string;
	technologies: string[];
	current: boolean;
	translations: {
		pt: LocalizedContent;
		en: LocalizedContent;
	};
}
