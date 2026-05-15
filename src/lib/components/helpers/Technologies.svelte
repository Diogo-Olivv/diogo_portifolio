<script lang="ts">
	import type { Technology } from '$lib/data/technologies';
	import Icon from '@iconify/svelte';
	let { techs }: { techs: Technology[] } = $props();
</script>

<section>
	<div class="mt-4 flex flex-wrap gap-3">
		{#each techs as tech (tech.name)}
			<a
				href={tech.url}
				target="_blank"
				rel="external noopener noreferrer"
				title={`${tech.name}`}
				class="group text-md flex items-center gap-2 rounded-md border border-theme-surface1 bg-theme-surface0 px-3 py-1 font-mono shadow-sm transition-all duration-300 hover:border-[var(--tech-color)]/50"
				style="--tech-color: {tech.color} ;"
			>
				{#if tech.isImage}
					<img src={tech.icon} alt={tech.name} class="h-4 w-4" />
				{:else}
					<Icon icon={tech.icon} class="h-4 w-4" />
				{/if}

				<span class="font-large text-(--tech-color)/80 transition-colors duration-300">
					{tech.name}
				</span>
			</a>
		{/each}
	</div>
</section>
