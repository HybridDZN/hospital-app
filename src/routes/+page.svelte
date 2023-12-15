<script>
	import Content from '$lib/components/Content.svelte';
	import Upload from '$lib/components/Upload.svelte'
	export let data;
</script>

<Content {data} />
<Upload />
