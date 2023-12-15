<script>
	import '../app.pcss';
	import { navigating } from '$app/stores';
	import Header from "$lib/components/Header.svelte";
	import BarLoader from 'svelte-loading-spinners/BarLoader.svelte';
</script>

{#if $navigating}
	<div class="absolute w-[100vw] h-[100vh] bg-gray-200 opacity-80 flex items-center justify-center">
		<BarLoader size="60" color="#FF3E00" unit="px" />
	</div>
{/if}


<Header />
<slot />
