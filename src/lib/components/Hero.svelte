<script lang="ts">
	import { t } from '$lib/i18n/store';
</script>

<section
	id="home"
	class="relative flex min-h-screen items-center justify-center overflow-hidden text-center"
	style="background-color: var(--color-bg-0);"
>
	<!-- Elemento visual de fundo: Grid sutil inspirado em jasoncameron.dev -->
	<div
		class="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-10"
		style="background-image: linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px); background-size: 32px 32px;"
	></div>

	<div class="z-10 max-w-4xl p-8">
		<h1
			class="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl"
			style="color: var(--color-text);"
		>
			{$t('hero.greeting')} <span style="color: var(--color-theme-2);">Diogo</span>
		</h1>

		<!-- Copywriting mais alinhado com o seu verdadeiro potencial -->
		<p
			class="mb-10 text-lg leading-relaxed font-medium md:text-2xl"
			style="color: var(--color-text); opacity: 0.8;"
		>
			{$t('hero.description_1')} <br class="hidden md:block" />
			{$t('hero.description_2')}
		</p>

		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="#projects"
				class="rounded-full px-8 py-3 font-bold transition-transform hover:scale-105 active:scale-95"
				style="background-color: var(--color-theme-2); color: var(--color-bg-0);"
			>
				{$t('hero.btn_projects')}
			</a>
			<a
				href="#experience"
				class="hover:bg-opacity-10 rounded-full border-2 px-8 py-3 font-bold"
				style="border-color: var(--color-theme-2); color: var(--color-theme-2);"
			>
				{$t('hero.btn_trajectory')}
			</a>
		</div>
	</div>
</section>
