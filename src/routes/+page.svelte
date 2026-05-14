<script lang="ts">
	import AcademicExperiences from '$lib/components/AcademicExperiences.svelte';
	import JobExperiences from '$lib/components/JobExperiences.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head>
	<title>Diogo Oliveira</title>
	<meta name="description" content="Meu portifólio pessoal" />
</svelte:head>

<section>
	<section id="home">
		<Hero />
	</section>

	<section id="experience">
		<div class="flex flex-col gap-30">
			<JobExperiences />
			<AcademicExperiences />
		</div>
	</section>

	<section>
		<Projects />
	</section>
</section>

<style>
</style>
