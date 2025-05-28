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
				<h1 class="has-text-light-green">Skycrane: Infrastructure as Code Redefined</h1>
				
				<div class="mb-5">
					<p>
						Skycrane is an Infrastructure as Code (IaC) tool that uses WASI
						plugins to securely and efficiently manage cloud resources across multiple providers.
					</p>
					
					<p>
						It allows users to define resources using
						Starlark, a Python-like configuration language that provides a familiar syntax
						for infrastructure definitions while maintaining security and simplicity.
					</p>
					
					<p>
						Resource specifications for each plugin are maintained in the
						Skyforge repository, enabling a standardized approach to resource definition 
						across different cloud platforms.
					</p>
					
					<p>
						Drawing inspiration from kustomize, Skycrane provides a streamlined way to manage
						different environments such as dev, staging and production, allowing for easy
						customization and overlay of configurations.
					</p>
				</div>
				
				<div class="mb-5">
					<h2 class="has-text-light-green">Current Status</h2>
					<p>Skycrane is currently in development and is not yet ready for production use!</p>
				</div>
				
				<div class="mb-5">
					<h2 class="has-text-light-green">Installation</h2>
					<p>Install Skycrane using Cargo:</p>
					<pre><code class="language-bash">$ cargo install skycrane</code></pre>
				</div>
				
				<div class="mb-5">
					<h2 class="has-text-light-green">Getting Started</h2>
					<p>
						Initialize a new repository with a plugin specification.
						This command will also validate that the plugin is loaded successfully.
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
	h1, h2 {
		margin-bottom: 1rem;
	}
	
	pre {
		border-radius: 6px;
		margin: 1.5em 0;
	}
</style>