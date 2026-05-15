<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, t } from '$lib/i18n/store';
	import Icon from '@iconify/svelte';
	import { resolve } from '$app/paths';

	let menuOpen = false;
	let isDark = true;

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	const toggleTheme = () => {
		isDark = !isDark;
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	const toggleLanguage = () => {
		locale.update((current) => (current === 'pt' ? 'en' : 'pt'));
	};

	onMount(() => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			isDark = true;
			document.documentElement.classList.add('dark');
		} else {
			isDark = false;
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<nav
	class="fixed top-0 z-50 w-full shadow-sm backdrop-blur-md"
	style="background-color: color-mix(in srgb, var(--color-bg-0) 85%, transparent); color: var(--tx-main);"
>
	<div class="relative container mx-auto flex items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a
			href={resolve('/')}
			class="text-2xl font-extrabold tracking-tight text-theme-accent2 transition-transform hover:scale-105"
		>
			Diogo<span class="text-theme-text">.dev</span>
		</a>

		<!-- Links -->
		<ul class="items-center gap-8 md:flex">
			<li>
				<a href={resolve('/#career')} class="font-medium transition-opacity hover:opacity-70"
					>{$t('nav.career')}</a
				>
			</li>
			<li>
				<a href={resolve('/projects')} class="font-medium transition-opacity hover:opacity-70"
					>{$t('nav.projects')}</a
				>
			</li>
			<li>
				<a href="#skills" class="font-medium transition-opacity hover:opacity-70"
					>{$t('nav.skills')}</a
				>
			</li>
		</ul>

		<!-- Buttons -->
		<div class="flex items-center gap-4">
			<!-- Toggle Language  -->
			<button
				on:click={toggleLanguage}
				class="rounded border border-transparent px-2 py-1 text-sm font-bold uppercase transition-colors hover:border-gray-500/30"
			>
				{$locale == 'pt' ? '🇧🇷' : '🇺🇸'}
				{$locale}
			</button>

			<div class="hidden h-5 w-px bg-current opacity-20 md:block"></div>

			<!-- Toggle Theme -->
			<button
				on:click={toggleTheme}
				class="rounded-full p-2 hover:bg-gray-500/10"
				aria-label="Alternar tema"
			>
				{#if isDark}
					<!-- Sun Icon -->
					<Icon icon="lucide:sun" class="h-5 w-5" />
				{:else}
					<!-- Moon Icon -->
					<Icon icon="lucide:moon" class="h-5 w-5" />
				{/if}
			</button>

			<!-- Toggle Mobile Menu -->
			<button on:click={toggleMenu} class="ml-2 p-1 focus:outline-none md:hidden">
				{#if menuOpen}
					<Icon icon="lucide:x" class="h-6 w-6" />
				{:else}
					<Icon icon="lucide:menu" class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Dropdown Mobile -->
	{#if menuOpen}
		<div class="border-t border-gray-500/20 md:hidden" style="background-color: var(--color-bg-0);">
			<ul class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
				<li>
					<a href="#about" class="font-medium transition-opacity hover:opacity-70"
						>{$t('nav.about')}</a
					>
				</li>
				<li>
					<a href="#skills" class="font-medium transition-opacity hover:opacity-70"
						>{$t('nav.skills')}</a
					>
				</li>
				<li>
					<a href="#projects" class="font-medium transition-opacity hover:opacity-70"
						>{$t('nav.projects')}</a
					>
				</li>
				<li>
					<a href="#contact" class="font-medium transition-opacity hover:opacity-70"
						>{$t('nav.contact')}</a
					>
				</li>
			</ul>
		</div>
	{/if}
</nav>
