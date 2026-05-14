<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import Carousel from './Carousel.svelte';

	let { project }: { project: Project } = $props();
</script>

<div
	class="flex flex-col gap-8 border-b border-theme-surface0 py-10 last:border-0 md:flex-row md:items-center"
>
	<div class="flex w-full flex-col justify-center md:w-1/2">
		<h3 class="text-3xl font-bold text-theme-accent1">{project.title}</h3>
		<p class="mt-1 text-lg font-medium text-theme-subtext">{project.role}</p>
		<p class="mb-6 font-mono text-sm text-theme-text/60">{project.period}</p>

		<ul class="mb-8 space-y-3">
			{#each project.shortDescription as desc (desc)}
				<li class="flex items-start gap-3 leading-relaxed text-theme-text">
					<span class="mt-1.5 text-[0.6rem] text-theme-accent2">⬤</span>
					{desc}
				</li>
			{/each}
		</ul>

		<div>
			<a
				href={`/projects/${project.slug}`}
				class="inline-flex items-center gap-2 rounded-lg bg-theme-surface0 px-6 py-3 font-semibold text-theme-accent1 transition-all hover:-translate-y-1 hover:bg-theme-surface1"
			>
				Ver detalhes do projeto
				<span class="text-xl">→</span>
			</a>
		</div>
	</div>

	<div class="w-full md:w-1/2">
		<Carousel images={project.images} />
	</div>
</div>
