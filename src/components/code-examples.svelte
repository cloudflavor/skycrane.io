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
				_prismRust,
				_prismPython  // For Starlark syntax highlighting (using Python as it's similar)
			] = await Promise.all([
				import('prismjs'),
				import('prismjs/themes/prism-okaidia.css'),  // Using a darker theme for better visibility
				import('prismjs/components/prism-bash.min.js'),
				import('prismjs/components/prism-rust.min.js'),
				import('prismjs/components/prism-python.min.js')
			]);
			
			Prism.highlightAll();
		}
	});
</script>

<section class="section">
	<div class="columns">
		<div class="column">
			<div class="content has-text-white">
				<h2 class="has-text-light-green">Example: Hetzner Plugin Specification</h2>
				
				<h3 class="has-text-light-green">base.star</h3>
				<p>Defines the plugin module, capabilities, and file system mounts:</p>
				<pre><code class="language-python">"""
Hetzner infrastructure as Code

This plugin provides a way to interact with Hetzner Cloud API and manage
resources in a declarative way using starlark.

The plugin provides the following capabilities:
- Inherit process args from the host
- Inherit process stdio from the host
- Inherit process stdout from the host
- Inherit process environment from the host
- Mount files inside wasi
- Mount directory inside wasi
"""

module(
    name = "hetzner",
    version = "v0.1.0",
    # capabilities represents a set of capabilities that the plugin gains all
    # capabilities in starlark map to the capabilities of WASI and are described here
    # https://docs.rs/wasmtime-wasi/latest/wasmtime_wasi/struct.WasiCtxBuilder.html#
    capabilities = capabilities(
        inherits = [
            # inherit process args from the host
            INHERIT_ARGS,
            # inherit process stdio from the host
            INHERIT_STDIO,
            # inherit process stdout from the host
            INHERIT_STDOUT,
            # inherit process environment from the host
            INHERIT_ENV,
        ],
        # mounts is a list of mounts that the plugin can use
        # this gives the WASI module access to the host filesystem
        mounts = [
            # mount a dir inside WASI with full capabilities, read, write files,
            # mutate directory.
            mount(
                host_path = "/var/run/",
                guest_path = "/var/run/",
                dir_perms = {
                    "read": true,
                    "mutate": true,
                },
                file_perms = {
                    "read": true,
                    "write": true,
                },
            ),
            # mount a dir inside WASI with read only capabilities
            mount(
                host_path = "/var/lib/hetzner",
                guest_path = "/mnt/hetzner",
                dir_perms = {
                    "read": true,
                    "mutate": false,
                },
                file_perms = {
                    "read": true,
                    "write": false,
                },
            ),
        ],
    ),
)</code></pre>

				<h3 class="has-text-light-green">Plugin Implementation (lib.rs)</h3>
				<p>Rust implementation of the Hetzner plugin:</p>
				<pre><code class="language-rust">use skyforge_sdk::skyforge_plugin;

struct Hetzner;
use exports::cloudflavor::skyforge::plugin_api::Error as ApiError;

#[skyforge_plugin]
impl SkyforgePlugin for Hetzner {
    fn get_version_impl() -> String {
        "0.1.0".to_string()
    }

    fn verify_config_impl(config: Config) -> Result<(), ApiError> {
        println!("Config: {:?}", config);
        Ok(())
    }
}</code></pre>
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