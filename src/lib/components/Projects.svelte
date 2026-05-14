<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { t } from '$lib/i18n/store';
	import ProjectCard from './helpers/ProjectCard.svelte';
</script>

<section id="projects" class="py-20">
	<div class="flex flex-col items-center">
		<h3 class="mb-20 text-4xl font-bold tracking-[0.2em] text-theme-accent3 uppercase opacity-70">
			{$t('nav.projects')}
		</h3>

		<div class="w-full space-y-24">
			{#each projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>