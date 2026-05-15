<script lang="ts">
	import { socials } from '$lib/data/socials';
	import Icon from '@iconify/svelte';
</script>

<section>
	<div class="flex items-center gap-4">
		{#each socials as social (social.name)}
			<a
				href={social.url}
				target="_blank"
				rel="external noopener noreferrer"
				aria-label={social.name}
				class="hover:scale-110 hover:brightness-120 {social.icon.colorClass}"
			>
				<Icon icon={social.icon.icon} class="h-7 w-7" />
			</a>
		{/each}
	</div>
</section>
