<script lang="ts">
	import type { ExperienceEntry } from '$lib/models/experience_entry';
	import { locale } from '$lib/i18n/store';

	let { item }: { item: ExperienceEntry } = $props();

	let text = $derived(item.translations[$locale]);
</script>

<div
	class="group relative border-l-2 border-theme-surface0 pl-8 transition-colors duration-300 hover:border-theme-accent1"
>
	<div
		class="absolute top-1.5 -left-[9px] h-4 w-4 rounded-full bg-theme-surface0 transition-colors duration-300 group-hover:bg-theme-accent1"
	></div>

	<div class="mb-4 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
		<div>
			<h2 class="text-3xl font-bold text-theme-accent1/80">{item.company}</h2>
			<p class="text-xl font-medium text-theme-accent2">{text.role}</p>
		</div>

		<span
			class="text-md rounded-full px-3 py-1 font-mono whitespace-nowrap opacity-70 transition-all sm:mt-1
            {item.current ? ' font-bold text-theme-accent1' : null}"
		>
			{text.period}
		</span>
	</div>

	<ul class="mb-6 text-theme-subtext">
		{#each text.description as desc (desc)}
			<li class="text-md flex items-start gap-2 leading-relaxed">
				<span class="mt-1 text-[0.5rem] text-theme-accent1/80">▶</span>
				<span>{desc}</span>
			</li>
		{/each}
	</ul>

	<div class="flex flex-wrap gap-2">
		{#each item.technologies as tech (tech)}
			<span
				class="rounded border border-theme-surface1 bg-theme-surface0 px-2 py-0.5 font-mono text-sm"
			>
				{tech}
			</span>
		{/each}
	</div>
</div>
