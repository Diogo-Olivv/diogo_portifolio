<section>
	<div class="absolute inset-0 -z-10 bg-theme-base"></div>
	<div class="bg-grid-pattern absolute inset-0"></div>
	<div class="bg-gradient-glow absolute inset-0"></div>
</section>

<style>
	.bg-grid-pattern {
		background-image:
			linear-gradient(to right, var(--bg-surface0) 1px, transparent 1px),
			linear-gradient(to bottom, var(--bg-surface0) 1px, transparent 1px);

		background-size: 3rem 3rem;

		mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%);
		-webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%);
	}

	.bg-gradient-glow {
		background: radial-gradient(circle at 50% -20%, var(--ac-1) 0%, transparent 60%);
		opacity: 0.15;
	}
</style>
