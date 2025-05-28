<script lang="ts">
</script>

<section class="section">
	<div class="columns">
		<div class="column">
			<div class="content has-text-white">
				<h1 class="has-text-light-green">Skycrane automates infrastructure</h1>
				
				<p>
					<a href="https://skycrane.io">Skycrane</a> is an Infrastructure as Code (IaC) tool that uses WASI
					plugins to securely and efficiently manage cloud resources across multiple providers.
				</p>
				
				<p>
					It allows users to define resources using
					<a href="https://github.com/bazelbuild/starlark" target="_blank">Starlark</a>, a Python-like configuration language.
				</p>
				
				<p>
					Resource specifications for each plugin are maintained in the
					<a href="https://github.com/cloudflavor/skyforge" target="_blank">Skyforge</a> repository, enabling a standardized
					approach to resource definition across different cloud platforms.
				</p>
				
				<p>
					Drawing inspiration from kustomize, Skycrane provides a streamlined way to manage
					different environments such as dev, staging and production, allowing for easy
					customization and overlay of configurations.
				</p>
				
				<h2 class="has-text-light-green">Status</h2>
				<p>Skycrane is currently in development and is not yet ready for production use!</p>
				
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
</section>