<script lang="ts">
	let { images }: { images: string[] } = $props();

	let currentIndex = $state(0);

	const next = () => (currentIndex = (currentIndex + 1) % images.length);
	const prev = () => (currentIndex = (currentIndex - 1 + images.length) % images.length);
	const goTo = (index: number) => (currentIndex = index);
</script>

<div
	class="group relative aspect-video w-full overflow-hidden rounded-xl border border-theme-surface1 bg-theme-base shadow-lg"
>
	<div
		class="flex h-full w-full transition-transform duration-500 ease-in-out"
		style="transform: translateX(-{currentIndex * 100}%);"
	>
		{#each images as img, i (img)}
			<img
				src={img}
				alt="Screenshot {i + 1}"
				class="h-full w-full shrink-0 object-cover"
				loading="lazy"
			/>
		{/each}
	</div>

	<button
		onclick={prev}
		class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-theme-crust/80 p-2 text-theme-text opacity-0 transition-opacity group-hover:opacity-100 hover:bg-theme-surface1"
		aria-label="Anterior"
	>
		◀
	</button>
	<button
		onclick={next}
		class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-theme-crust/80 p-2 text-theme-text opacity-0 transition-opacity group-hover:opacity-100 hover:bg-theme-surface1"
		aria-label="Próximo"
	>
		▶
	</button>

	<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
		{#each images as img, i (img)}
			<button
				onclick={() => goTo(i)}
				class="h-2 w-2 rounded-full transition-all duration-300 {currentIndex === i
					? 'w-4 bg-theme-accent1'
					: 'bg-theme-text/50 hover:bg-theme-text/80'}"
				aria-label="Ir para a imagem {i + 1}"
			></button>
		{/each}
	</div>
</div>
