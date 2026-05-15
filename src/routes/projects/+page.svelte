<script lang="ts">
	import { projects } from '$lib/data/experiences';
	import ProjectCard from '$lib/components/helpers/ProjectCard.svelte';
	import { t } from '$lib/i18n/store';

	import { PersonalizedIcons as p } from '$lib/data/icon';
	import Icon from '@iconify/svelte';
</script>

<section class="z-10 py-20">
	<div class="container mx-auto p-8">
		<div class="mb-8 flex flex-row items-center gap-4 text-4xl font-bold">
			<Icon icon={p.folder.icon} class={p.folder.colorClass} />
			<h1>{$t('projects.title')}</h1>
		</div>

		{#if projects.length > 0}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each projects as project (project.slug)}
					<ProjectCard {project} />
				{/each}
			</div>
		{:else}
			<p class="text-theme-subtext1">No Projects</p>
		{/if}
	</div>
</section>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
