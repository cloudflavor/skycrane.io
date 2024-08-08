<script lang="ts">
	import { onMount } from 'svelte';

	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';

	onMount(() => {
		document.title = 'Skycrane';
		document.documentElement.setAttribute('data-theme', 'light');
	});
</script>

<div class="area">
	<ul class="circles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
	<Navbar />
	<slot />
</div>

<Footer />

<style lang="scss">
	@import '/styles/global.scss';
</style>
