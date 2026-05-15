import type { PersonalizedIcon } from "./icon";
import { PersonalizedIcons as p} from "./icon";

export interface SocialLink {
	name: string;
	url: string;
	icon: PersonalizedIcon;
}

export const socials: SocialLink[] = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/diogo-oliveira-fe/',
		icon: p.linkedin
	},
	{
		name: 'GitHub',
		url: 'https://github.com/Diogo-Olivv',
		icon: p.github
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/diogo_o_ferreira/',
		icon: p.instagram
	}
];
