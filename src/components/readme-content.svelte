<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(async () => {
		if (browser) {
			// Dynamically import PrismJS only on the client side
			const [
				{ default: Prism },
				_prismCSS,
				_prismBash
			] = await Promise.all([
				import('prismjs'),
				import('prismjs/themes/prism-okaidia.css'),  // Using a darker theme for better visibility
				import('prismjs/components/prism-bash.min.js')
			]);
			
			Prism.highlightAll();
		}
	});
</script>

<section class="section">
	<div class="columns">
		<div class="column">
			<div class="content has-text-white">
				<h1 class="has-text-light-green">Skycrane automates infrastructure</h1>
				
				<div class="mb-5">
					<p>
						<a href="https://skycrane.io" class="has-text-light-green">Skycrane</a> is an Infrastructure as Code (IaC) tool that uses WASI
						plugins to securely and efficiently manage cloud resources across multiple providers.
					</p>
					
					<p>
						It allows users to define resources using
						<a href="https://github.com/bazelbuild/starlark" target="_blank" class="has-text-light-green">Starlark</a>, a Python-like configuration language.
					</p>
					
					<p>
						Resource specifications for each plugin are maintained in the
						<a href="https://github.com/cloudflavor/skyforge" target="_blank" class="has-text-light-green">Skyforge</a> repository, enabling a standardized
						approach to resource definition across different cloud platforms.
					</p>
					
					<p>
						Drawing inspiration from kustomize, Skycrane provides a streamlined way to manage
						different environments such as dev, staging and production, allowing for easy
						customization and overlay of configurations.
					</p>
				</div>
				
				<div class="mb-5">
					<h2 class="has-text-light-green">Status</h2>
					<p>Skycrane is currently in development and is not yet ready for production use!</p>
				</div>
				
				<div class="mb-5">
					<h2 class="has-text-light-green">Init</h2>
					<p>
						Initialize a new repository with a plugin specification.
						It will also validate that the plugin is loaded successfully.
					</p>
					<pre><code class="language-bash">$ skycrane init ~/projects/rust/skyforge/crates/plugins/hetzner/spec
2024-07-28T19:48:35.649086Z  INFO skycrane::commands: Initializing new repository at "/path/to/skyforge/crates/plugins/hetzner/spec"
2024-07-28T19:48:35.837392Z  INFO skycrane::wasm::engine: Plugin hetzner.wasm loaded successfully!</code></pre>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Improve the appearance of links and spacing */
	.content a.has-text-light-green {
		color: #9EDF50 !important;
		text-decoration: underline;
	}
	
	.content a.has-text-light-green:hover {
		opacity: 0.9;
		color: #9EDF50 !important;
	}
	
	h1, h2 {
		margin-bottom: 1rem;
	}
	
	pre {
		border-radius: 6px;
		margin: 1.5em 0;
	}
</style>