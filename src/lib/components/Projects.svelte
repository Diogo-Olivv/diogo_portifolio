<script lang="ts">
	import { projects } from '$lib/data/experiences';
	import { t } from '$lib/i18n/store';
	import ProjectVisual from './helpers/ProjectVisual.svelte';
</script>

<section id="projects" class="py-20">
	<div class=" flex flex-col items-center">
		<h3 class="mb-12 text-4xl font-bold tracking-[0.2em] text-theme-accent3 uppercase opacity-70">
			{$t('nav.projects')}
		</h3>

		<div class=" w-full">
			{#each projects.slice(0, 3) as project (project.slug)}
				<ProjectVisual {project} />
			{/each}
		</div>
	</div>
</section>
