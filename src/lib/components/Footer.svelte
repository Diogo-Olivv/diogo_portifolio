<script lang="ts">
	import { t } from '$lib/i18n/store';
	import Socials from './Socials.svelte';
</script>

<footer
	class=" relative mt-20 overflow-hidden border-t bg-theme-mantle py-16 transition-colors duration-500"
	style="border-color: color-mix(in srgb, var(--tx-main) 10%, transparent);"
>
	<div class="container mx-auto max-w-5xl px-6">
		<div class="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
			<!-- Links -->
			<div
				class="flex w-full flex-col items-center gap-6 text-center md:w-auto md:items-start md:text-left"
			>
				<!-- Socials -->
				<div class="flex w-full flex-col gap-4">
					<h3 class=" text-sm font-light tracking-widest text-theme-text opacity-90">
						{$t('footer.socials')}
					</h3>

					<Socials />

					<!-- Roles -->
					<p class="text-sm font-medium text-theme-text opacity-80 md:text-base">
						{$t('footer.roles')}
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>
