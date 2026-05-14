import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

// Diz ao SvelteKit que essas páginas devem ser pré-renderizadas no build (SSG)
export const prerender = true;

// Esta função injeta os dados do projeto no arquivo +page.svelte
export function load({ params }) {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, 'Projeto não encontrado');
	}

	return { project };
}

// Essencial para o adapter-static: Informa quais URLs dinâmicas ele deve gerar no build
export function entries() {
	return projects.map((p) => ({ slug: p.slug }));
}
