<script lang="ts">
	import { resolve } from '$app/paths';
	import Icon from '@iconify/svelte';

	// O $props() recebe o retorno da função 'load' do +page.ts
	let { data } = $props();
	let project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} | Diogo Oliveira</title>
</svelte:head>

<main class="container mx-auto max-w-4xl px-6 py-24">
	<a
		href={resolve('/#projects')}
		class="mb-10 inline-flex items-center gap-2 text-theme-subtext transition-colors hover:text-theme-accent1"
	>
		<span>←</span> Voltar para o Portfólio
	</a>

	<header class="mb-12">
		<h1 class="text-4xl font-extrabold text-theme-text md:text-5xl">{project.title}</h1>

		<div class="mt-6 flex flex-wrap items-center gap-6 font-mono text-sm text-theme-subtext">
			<div class="flex items-center gap-2">
				<Icon icon="lucide:calendar" class="h-4 w-4" />
				{project.period}
			</div>

			{#if project.links.github}
				<a
					href={project.links.github}
					target="_blank"
					class="flex items-center gap-2 transition-colors hover:text-theme-accent1"
				>
					<Icon icon="lucide:github" class="h-4 w-4" />
					Código Fonte
				</a>
			{/if}

			{#if project.links.live}
				<a
					href={project.links.live}
					target="_blank"
					class="flex items-center gap-2 transition-colors hover:text-theme-accent1"
				>
					<Icon icon="lucide:external-link" class="h-4 w-4" />
					Site Ao Vivo
				</a>
			{/if}
		</div>
	</header>

	<section class="mb-12 flex flex-wrap gap-3">
		{#each project.technologies as tech (tech)}
			<a
				href={tech.url}
				target="_blank"
				class="group flex items-center gap-2 rounded bg-theme-surface0 px-3 py-1.5 font-mono text-sm transition-all hover:-translate-y-0.5 hover:shadow-sm"
				style="border-bottom: 2px solid {tech.color};"
			>
				{#if tech.isImage}
					<img
						src={tech.icon}
						alt={tech.name}
						class="h-4 w-4 object-contain transition-transform group-hover:scale-110"
					/>
				{:else}
					<Icon icon={tech.icon} class="h-4 w-4 transition-transform group-hover:scale-110" />
				{/if}
				<span
					class="text-theme-text transition-colors group-hover:text-[var(--tech-color)]"
					style="--tech-color: {tech.color};"
				>
					{tech.name}
				</span>
			</a>
		{/each}
	</section>

	<article
		class="prose max-w-none text-lg prose-invert prose-headings:text-theme-accent2 prose-p:leading-relaxed prose-p:text-theme-text prose-li:text-theme-text"
	>
		{#each project.longDescription.split('\n') as paragraph (paragraph)}
			{#if paragraph.trim() !== ''}
				<p>{paragraph}</p>
			{/if}
		{/each}
	</article>
</main>
