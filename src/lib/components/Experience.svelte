<script lang="ts">
	import AcademicExperiences from './helpers/AcademicExperiences.svelte';
	import JobExperiences from './helpers/JobExperiences.svelte';
</script>

<section id="experience" class="flex flex-col items-center bg-theme-base text-theme-text">
	<div class="flex flex-col gap-30">
		<JobExperiences />
		<AcademicExperiences />
	</div>
</section>
