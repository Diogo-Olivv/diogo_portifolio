import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/experiences.js';

export const prerender = true;

export function load({ params }) {
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, 'Projeto não encontrado');
	}

	return { project };
}

export function entries() {
	return projects.map((p) => ({ slug: p.slug }));
}