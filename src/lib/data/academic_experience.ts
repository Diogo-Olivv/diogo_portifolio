import type { ExperienceEntry } from '$lib/models/experience_entry';

export const academicExperiences: ExperienceEntry[] = [
	{
		company: 'Universidade de Brasília (UnB)',
		technologies: ['Engenharia', 'Ciência de Dados'],
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
		technologies: ['Java', 'C++'],
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
