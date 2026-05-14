<script lang="ts">
	import { t } from '$lib/i18n/store';
	import Socials from './Socials.svelte';
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden text-center">
	<div class="z-10 flex max-w-4xl flex-col items-center gap-16 p-8">
		<h1 class=" text-5xl font-extrabold tracking-tight text-theme-text md:text-7xl">
			{$t('hero.greeting')} <span class="text-theme-accent2">Diogo</span>
		</h1>

		<p class="text-lg leading-relaxed font-medium text-theme-text/80 md:text-2xl">
			{$t('hero.description_1')} <br class="hidden md:block" />
			{$t('hero.description_2')}
		</p>

		<Socials />
	</div>
</section>
