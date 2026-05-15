<script lang="ts">
	import AcademicExperiences from '$lib/components/AcademicExperiences.svelte';
	import JobExperiences from '$lib/components/JobExperiences.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import BackgroundGrid from '$lib/components/helpers/BackgroundGrid.svelte';
</script>

<svelte:head>
	<title>Diogo Oliveira</title>
	<meta name="description" content="Meu portifólio pessoal" />
</svelte:head>

<section class="min-w-full">
	<BackgroundGrid />

	<div id="home">
		<Hero />
	</div>

	<div id="career" class="mb-20 flex flex-col gap-30 p-5">
		<JobExperiences />
		<AcademicExperiences />
	</div>

	<div id="projects">
		<Projects />
	</div>
</section>

<style>
</style>
