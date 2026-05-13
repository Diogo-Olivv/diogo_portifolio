<script lang="ts">
	import { t } from '$lib/i18n/store';
	import Icon from '@iconify/svelte';
</script>

<footer
	class="relative mt-20 overflow-hidden border-t py-16 transition-colors duration-500"
	style="border-color: color-mix(in srgb, var(--color-text) 10%, transparent); background-color: var(--color-bg-1);"
>
	<div class="container mx-auto max-w-5xl px-6">
		<div class="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
			<!-- Terminal -->
			<div
				class="flex-shrink-0 opacity-80 transition-transform duration-500 hover:scale-105 hover:opacity-100"
			>
				<Icon icon="ph:terminal-window-duotone" width="160" height="160" />
			</div>

			<div
				class="hidden h-32 w-px md:block"
				style="background-color: color-mix(in srgb, var(--color-text) 20%, transparent);"
			></div>

			<!-- Links -->
			<div
				class="flex w-full flex-col items-center gap-6 text-center md:w-auto md:items-start md:text-left"
			>
				<!-- Socials -->
				<div class="w-full">
					<h3
						class="mb-4 text-sm font-light tracking-widest opacity-90"
						style="color: var(--color-text);"
					>
						{$t('footer.socials')}
					</h3>

					<!-- Icons -->
					<div class="flex justify-center gap-5 md:justify-start" style="color: var(--color-text);">
						<!-- LinkedIn -->
						<a
							href="https://www.linkedin.com/in/diogo-oliveira-fe/"
							target="_blank"
							rel="noreferrer"
							class="transition-transform hover:scale-110"
							aria-label="LinkedIn"
						>
							<Icon icon="simple-icons:linkedin" class="h-7 w-7" />
						</a>
						<!-- GitHub -->
						<a
							href="https://github.com/Diogo-Olivv"
							target="_blank"
							rel="noreferrer"
							class="transition-transform hover:scale-110"
							aria-label="GitHub"
						>
							<Icon icon="simple-icons:github" class="h-7 w-7" />
						</a>
						<!-- Instagram -->
						<a
							href="https://www.instagram.com/diogo_o_ferreira/"
							target="_blank"
							rel="noreferrer"
							class="transition-transform hover:scale-110"
							aria-label="Instagram"
						>
							<Icon icon="simple-icons:instagram" class="h-7 w-7" />
						</a>
					</div>
				</div>

				<!-- Stacks -->
				<p class="text-sm font-medium opacity-80 md:text-base" style="color: var(--color-text);">
					{$t('footer.roles')}
				</p>
			</div>
		</div>
	</div>
</footer>
