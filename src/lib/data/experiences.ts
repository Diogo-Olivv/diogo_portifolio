import { techDictionary as t, type Technology } from './technologies';

import leoni_hub from '$lib/images/projects/leoni_hub.png';


export interface LocalizedContent {
	role: string;
	period: string;
	description: string[];
	longDescription?: string;

}

export interface ExperienceEntry {
	company: string;
	technologies: Technology[];
	current: boolean;
	translations: {
		pt: LocalizedContent;
		en: LocalizedContent;
	};
}

export interface Project {
	slug: string;		// For generating dinamic pages
	title: string;
	image: string;
	technologies: Technology[];
	links: {
		github?: string;
		live?: string;
	};
	translations: {
		pt: LocalizedContent;
		en: LocalizedContent;
	};
}


export const jobExperiences: ExperienceEntry[] = [
	{
		company: 'PMI (Project Management Institute)',
		technologies: [
			t.springboot,
			t.java,
			t.javascript,
			t.typescript,
			t.fastapi,
			t.angular,
			t.html,
			t.css,
			t.tailwind
		],
		current: true,
		translations: {
			pt: {
				role: 'Desenvolvedor Full Stack & Gerente de Projetos',
				period: 'Jan 2026 — Presente',
				description: [
					'Liderança técnica no desenvolvimento de um sistema de votação global.',
					'Gerenciamento de stakeholders e aplicação de metodologias ágeis.',
					'Arquitetura de soluções escaláveis utilizando tecnologias modernas.'
				]
			},
			en: {
				role: 'Full Stack Developer & Project Manager',
				period: 'Jan 2026 — Present',
				description: [
					'Technical leadership in the development of a global voting system.',
					'Stakeholder management and application of agile methodologies.',
					'Architecture of scalable solutions using modern technologies.'
				]
			}
		}
	},
	{
		company: 'BBTS (Banco do Brasil Tecnologias e Serviços)',
		technologies: [t.javascript, t.servicenow],
		current: false,
		translations: {
			pt: {
				role: 'Desenvolvedor Low-Code (Estagiário)',
				period: 'Jul 2024 — Fev 2025',
				description: [
					'Desenvolvimento de soluções corporativas focadas em automação de processos.',
					'Colaboração em equipes multidisciplinares seguindo o framework Scrum.',
					'Otimização de fluxos de trabalho internos.'
				]
			},
			en: {
				role: 'Low-Code Developer (Intern)',
				period: 'Jul 2024 — Feb 2025',
				description: [
					'Development of corporate solutions focused on process automation.',
					'Collaboration in multidisciplinary teams following the Scrum framework.',
					'Optimization of internal workflows.'
				]
			}
		}
	}
];

export const academicExperiences: ExperienceEntry[] = [
	{
		company: 'Universidade de Brasília (UnB)',
		technologies: [t.svelte],
		current: true,
		translations: {
			pt: {
				role: 'Estudante de Engenharia de Software',
				period: '2023 — Presente',
				description: ['7º semestre.', 'Foco em Machine Learning e Green AI.']
			},
			en: {
				role: 'Software Engineering Student',
				period: '2023 — Present',
				description: ['7th semester.', 'Focus on Machine Learning and Green AI.']
			}
		}
	},
	{
		company: 'Universidade de Brasília (UnB)',
		technologies: [t.svelte],
		current: false,
		translations: {
			pt: {
				role: 'Monitor de Orientação a Objetos',
				period: 'Fev 2025 — Jul 2025',
				description: ['Auxílio a alunos em Java e C++.', 'Apoio pedagógico em Estruturas de Dados.']
			},
			en: {
				role: 'Object-Oriented Programming Tutor',
				period: 'Feb 2025 — Jul 2025',
				description: [
					'Assisting students with Java and C++.',
					'Pedagogical support in Data Structures.'
				]
			}
		}
	}
];

export const projects: Project[] = [
	{
		slug: 'leoni-hub',
		title: 'Leoni Hub',
		image: leoni_hub,	
		technologies: [t.javascript, t.react, t.nodejs, t.postgresql, t.html, t.css],
		links: {
			github: 'https://github.com/Diogo-Olivv/seu-repo',
			live: 'https://github.com/Diogo-Olivv/seu-repo',
		},
		translations: {
			pt: {
				role: 'Tech Lead & Full-Stack',
				period: 'Fev 2025 — Jul 2025',
				description: [
					'Sistema B2B construído para um cliente real do varejo de vestuário.',
					'Otimização do processamento e gestão do estoque em tempo real.',
					'Aumento da velocidade do fluxo operacional em mais de 70%.'
				],
				longDescription: `
					Este foi um projeto desafiador onde atuei como Líder Técnico. O principal problema do cliente era a lentidão e a falta de sincronia no controle de peças físicas versus vendas digitais. 
					
					Projetamos uma arquitetura robusta no backend utilizando Node.js e PostgreSQL para garantir a integridade das transações (ACID). No frontend, focamos em uma interface responsiva e de carregamento rápido com React.
					
					Principais Desafios:
					- Sincronização em tempo real de inventário.
					- Criação de dashboards de análise de vendas.
				`
			},
			en: {
				role: 'Tech Lead & Full-Stack',
				period: 'Feb 2025 — Jul 2025',
				description: [
					'B2B system built for a real retail clothing client.',
					'Optimization of real-time inventory processing and management.',
					'Increased operational flow speed by more than 70%.'
				],
				longDescription: `
					This was a challenging project where I served as Technical Lead. The client's main problem was slowness and lack of synchrony in controlling physical parts versus digital sales. 
					
					We designed a robust architecture on the backend using Node.js and PostgreSQL to ensure transaction integrity (ACID). On the frontend, we focused on a responsive and fast-loading interface with React.
					
					Main Challenges:
					- Real-time inventory synchronization.
					- Creation of sales analysis dashboards.
				`
			}
		}
	},
	{
		slug: 'leoni-huba',
		title: 'Leoni Hub',
		image: leoni_hub,	
		technologies: [t.javascript, t.react, t.nodejs, t.postgresql, t.html, t.css],
		links: {
			github: 'https://github.com/Diogo-Olivv/seu-repo',
			live: 'https://github.com/Diogo-Olivv/seu-repo',
		},
		translations: {
			pt: {
				role: 'Tech Lead & Full-Stack',
				period: 'Fev 2025 — Jul 2025',
				description: [
					'Sistema B2B construído para um cliente real do varejo de vestuário.',
					'Otimização do processamento e gestão do estoque em tempo real.',
					'Aumento da velocidade do fluxo operacional em mais de 70%.'
				],
				longDescription: `
					Este foi um projeto desafiador onde atuei como Líder Técnico. O principal problema do cliente era a lentidão e a falta de sincronia no controle de peças físicas versus vendas digitais. 
					
					Projetamos uma arquitetura robusta no backend utilizando Node.js e PostgreSQL para garantir a integridade das transações (ACID). No frontend, focamos em uma interface responsiva e de carregamento rápido com React.
					
					Principais Desafios:
					- Sincronização em tempo real de inventário.
					- Criação de dashboards de análise de vendas.
				`
			},
			en: {
				role: 'Tech Lead & Full-Stack',
				period: 'Feb 2025 — Jul 2025',
				description: [
					'B2B system built for a real retail clothing client.',
					'Optimization of real-time inventory processing and management.',
					'Increased operational flow speed by more than 70%.'
				],
				longDescription: `
					This was a challenging project where I served as Technical Lead. The client's main problem was slowness and lack of synchrony in controlling physical parts versus digital sales. 
					
					We designed a robust architecture on the backend using Node.js and PostgreSQL to ensure transaction integrity (ACID). On the frontend, we focused on a responsive and fast-loading interface with React.
					
					Main Challenges:
					- Real-time inventory synchronization.
					- Creation of sales analysis dashboards.
				`
			}
		}
	}
	
];