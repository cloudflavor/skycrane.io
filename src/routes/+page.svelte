<script lang="ts">
	import MainHero from '../components/main-hero.svelte';
	import Install from '../components/install.svelte';
	import ReadmeContent from '../components/readme-content.svelte';
	import CodeExamples from '../components/code-examples.svelte';
</script>

<div class="container">
	<section class="section">
		<MainHero />
	</section>
	<section class="section">
		<Install />
	</section>
	<section class="section">
		<ReadmeContent />
	</section>
	<section class="section">
		<CodeExamples />
	</section>
</div>
