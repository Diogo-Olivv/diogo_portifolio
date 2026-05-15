<script lang="ts">
	import Technologies from '$lib/components/helpers/Technologies.svelte';
	import { locale, t } from '$lib/i18n/store';
	import Icon from '@iconify/svelte';
	import { PersonalizedIcons as p } from '$lib/data/icon.js';
	import type { Project } from '$lib/data/experiences';
	import { resolve } from '$app/paths';

	let { project }: { project: Project } = $props();
	let projectText = $derived(project.translations[$locale]);
</script>

<svelte:head>
	<title>{project.title} | Diogo Oliveira</title>
</svelte:head>

<section class="relative z-10 container mx-auto max-w-4xl p-8 py-20">
	<div class="flex flex-col items-start gap-4">
		<div class="mb-8 w-full">
			<a href={resolve(`/projects/${project.slug}`)}>
				<img
					class="h-full w-full object-cover object-center"
					src={project.image}
					alt={project.slug}
				/>
			</a>
		</div>

		<div class="flex flex-col">
			<div class="flex min-w-4xl flex-row justify-between">
				<h1 class=" text-4xl font-bold text-theme-accent3">{project.title}</h1>
				<div class="mr-20 flex flex-row gap-4">
					{#if project.links?.github}
						<a
							href={project.links.github}
							target="_blank"
							rel="external noopener noreferrer"
							aria-label={project.slug}
							class="hover:scale-110 hover:brightness-120 {p.github.colorClass}"
						>
							<Icon icon={p.github.icon} class="h-10 w-10" />
						</a>
					{/if}
					{#if project.links?.live}
						<a
							href={project.links.live}
							target="_blank"
							rel="external noopener noreferrer"
							class="text-theme-gray hover:scale-110 hover:brightness-120"
						>
							<Icon icon="majesticons:open" class="h-11 w-11" />
						</a>
					{/if}
				</div>
			</div>

			<h2 class="font-mono text-lg text-theme-accent1">{projectText.period}</h2>
		</div>

		<p class="text-md line-clamp-3 text-theme-subtext">{projectText.description}</p>

		<div class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold text-theme-text">{$t('projects.technologies')}</h2>
			<Technologies techs={project.technologies} />
		</div>
	</div>
</section>
