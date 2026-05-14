import { techDictionary as t } from './technologies';
import type { Technology } from '$lib/data/technologies';

export interface Project {
	slug: string; // Ex: 'leoni-hub' (usado na URL /projects/leoni-hub)
	title: string;
	role: string;
	period: string;
	shortDescription: string[]; // Tópicos para a página inicial (estilo Natsha)
	longDescription: string; // Texto detalhado para a página interna (estilo Jason)
	images: string[]; // URLs ou imports das imagens para o carrossel
	technologies: Technology[]; // Reutilizando nosso dicionário!
	links: {
		github?: string;
		live?: string;
	};
}

export const projects: Project[] = [
	{
		slug: 'sistema-estoque-leoni',
		title: 'Leoni Hub - Gestão de Estoque',
		role: 'Tech Lead & Full-Stack',
		period: 'Fev 2025 - Jul 2025',
		shortDescription: [
			'Sistema B2B construído para um cliente real do varejo de vestuário.',
			'Otimização do processamento e gestão do estoque em tempo real.',
			'Aumento da velocidade do fluxo operacional em mais de 70%.'
		],
		longDescription: `
			Este foi um projeto desafiador onde atuei como Líder Técnico. O principal problema do cliente era a lentidão e a falta de sincronia no controle de peças físicas versus vendas digitais. 
			
			Projetamos uma arquitetura robusta no backend utilizando Node.js e PostgreSQL para garantir a integridade das transações (ACID). No frontend, focamos em uma interface responsiva e de carregamento rápido com React.
			
			**Principais Desafios:**
			- Sincronização em tempo real de inventário.
			- Criação de dashboards de análise de vendas.
		`,
		// Coloque links de imagens reais depois
		images: [
			'https://via.placeholder.com/800x450/1e1e2e/cba6f7?text=Dashboard+1',
			'https://via.placeholder.com/800x450/1e1e2e/89b4fa?text=Estoque+2',
			'https://via.placeholder.com/800x450/1e1e2e/a6e3a1?text=Login+3'
		],
		technologies: [t.javascript, t.react, t.nodejs, t.postgresql, t.html, t.css],
		links: {
			github: 'https://github.com/Diogo-Olivv/seu-repo',
			live: 'https://seusite.com'
		}
	}
];
