<script lang="ts">
	import type { Project } from '$lib/data/experiences';
	import { locale } from '$lib/i18n/store';
	import Technologies from './Technologies.svelte';

	let { project }: { project: Project } = $props();
	let projectText = $derived(project.translations[$locale]);
</script>

<section>
	<div>
		<a
			// eslint-disable-next-line svelte/no-navigation-without-resolve
			href={`/projects/${project.slug}`}
			class="border-surface0 bg-base hover:border-accent group block space-y-3 rounded-xl border p-5 shadow-lg transition-colors duration-200"
		>
			<img
				src={project.image}
				alt={project.image}
				class="mb-4 aspect-video w-full rounded-md object-cover object-center"
				style:view-transition-name="project-img-{project.slug}"
			/>
			<div class="flex items-center justify-between gap-3 pe-3">
				<h2
					class="text-text group-hover:text-accent min-w-0 flex-1 truncate text-xl font-semibold"
					style:view-transition-name="project-title-{project.slug}"
				>
					{project.title}
				</h2>
				<p class="text-overlay1 shrink-0 text-xs whitespace-nowrap">
					{projectText.period}
				</p>
			</div>
			<p class="text-subtext0 line-clamp-3 text-sm">{projectText.description}</p>

			<div class="text-xs">
				<Technologies techs={project.technologies} />
			</div>
		</a>
	</div>
</section>
