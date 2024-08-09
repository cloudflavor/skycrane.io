<script lang="ts">
	import { onMount } from 'svelte';

	import 'prismjs';
	import 'prismjs/themes/prism.css';
	import 'prismjs/components/prism-bash.min.js';
	import Prism from 'prismjs';

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<section class="section">
	<div class="columns">
		<div class="column">
			<div class="box is-rounded">
				<div class="hero is-small is-rounded">
					<div class="hero-body">
						<h1 class="title">Install</h1>
						<pre><code class="language-bash">$ cargo install skycrane --locked</code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
