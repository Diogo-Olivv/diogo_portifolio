<script>
	import { jobExperiences } from '$lib/data/experiences';
	import { t } from '$lib/i18n/store';
	import ExperienceItem from './helpers/ExperienceItem.svelte';
</script>

<section>
	<div class=" flex flex-col items-center">
		<h3
			class="min-x-4xl mb-20 text-4xl font-bold tracking-[0.2em] text-theme-accent3 uppercase opacity-70"
		>
			{$t('experience.professional')}
		</h3>
		<div class="min-w-full space-y-12">
			{#each jobExperiences as job (job)}
				<ExperienceItem item={job} />
			{/each}
		</div>
	</div>
</section>
