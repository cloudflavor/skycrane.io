<script lang="ts">
	import { onMount } from 'svelte';

	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';

	onMount(() => {
		document.title = 'Skycrane';
		document.documentElement.setAttribute('data-theme', 'light');
	});
</script>

<div class="area is-flex is-flex-direction-column">
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
	<section class="section">
		<Navbar />
	</section>
	<section class="section pt-0">
		<slot />
	</section>
	<Footer />
</div>

<style lang="scss">
	@import '/styles/global.scss';
</style>
