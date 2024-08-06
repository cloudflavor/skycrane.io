<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '../components/navbar.svelte';

	onMount(() => {
		document.title = 'Skycrane';
		document.documentElement.setAttribute('data-theme', 'light');
	});
</script>

<div class="main-container">
	<Navbar />
	<slot />
</div>

<style lang="scss">
	@import '/styles/global.scss';
</style>
