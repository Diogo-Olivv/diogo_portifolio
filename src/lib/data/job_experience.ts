import type { ExperienceEntry } from '$lib/models/experience_entry';

export const jobExperiences: ExperienceEntry[] = [
	{
		company: 'PMI (Project Management Institute)',
		technologies: ['SvelteKit', 'TypeScript', 'Node.js'],
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
		company: 'BBTS (Banco do Brasil)',
		technologies: ['Low-code', 'SQL', 'Process Automation'],
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
