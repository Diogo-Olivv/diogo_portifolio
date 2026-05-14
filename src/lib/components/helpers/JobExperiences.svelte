<script>
	import { jobExperiences } from '$lib/data/job_experience';
	import { t } from '$lib/i18n/store';
	import ExperienceItem from './ExperienceItem.svelte';
</script>

<section>
	<div class="flex flex-col items-center">
		<h3 class="mb-20 text-4xl font-bold tracking-[0.2em] text-theme-accent3 uppercase opacity-70">
			{$t('experience.professional')}
		</h3>
		<div class="space-y-12">
			{#each jobExperiences as job (job)}
				<ExperienceItem item={job} />
			{/each}
		</div>
	</div>
</section>
