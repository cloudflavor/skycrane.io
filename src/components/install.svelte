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

<div class="box is-rounded pl-6 pr-6 pt-1 ml-6 mr-6 mt-6">
	<div class="hero is-small mt-6 is-rounded">
		<div class="hero-body">
			<h1 class="title">Install</h1>
			<pre><code class="language-bash">$ cargo install skycrane --locked</code></pre>
		</div>
	</div>
</div>
