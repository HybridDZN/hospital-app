<script>
	import { PdfViewer } from 'svelte-pdf-simple';
	export let data;
</script>


<PdfViewer props = {{
	url: data.url
}}/>