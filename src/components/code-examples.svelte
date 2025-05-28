<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(async () => {
		if (browser) {
			// Dynamically import PrismJS only on the client side
			const [
				{ default: Prism },
				_prismCSS,
				_prismBash,
				_prismPython  // For Starlark syntax highlighting (using Python as it's similar)
			] = await Promise.all([
				import('prismjs'),
				import('prismjs/themes/prism-okaidia.css'),  // Using a darker theme for better visibility
				import('prismjs/components/prism-bash.min.js'),
				import('prismjs/components/prism-python.min.js')
			]);
			
			Prism.highlightAll();
		}
	});

	// Pre-escaped HTML code blocks
	const baseStarCode = `module(
  name = "hetzner",
  version = "v0.1.0",
)`;

	const networkStarCode = `network(
  name = "network",
  cidr = "10.0.0.1/16",
)`;
</script>

<section class="section">
	<div class="columns">
		<div class="column">
			<div class="content has-text-white">
				<h2 class="has-text-light-green">Example: Hetzner Plugin Specification</h2>
				
				<h3 class="has-text-light-green">base.star</h3>
				<p>Defines the basic plugin module information:</p>
				<pre><code class="language-python">{@html baseStarCode}</code></pre>

				<h3 class="has-text-light-green">network.star</h3>
				<p>Defines a network resource with CIDR configuration:</p>
				<pre><code class="language-python">{@html networkStarCode}</code></pre>
			</div>
		</div>
	</div>
</section>

<style>
	/* Add some styling for code blocks */
	pre {
		border-radius: 6px;
		margin: 1.5em 0;
	}
	
	code {
		font-family: 'Fira Code', monospace;
		font-size: 14px;
		line-height: 1.4;
	}
	
	h3 {
		margin-top: 1.5em;
	}
</style>