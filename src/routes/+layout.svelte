<script module>
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Diogo Oliveira</title>
</svelte:head>

<div class="app">
	<Navbar />

	<main>{@render children()}</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
