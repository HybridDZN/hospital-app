<script>
	import Content from '$lib/components/Content.svelte';
	export let data;
	let items;

	function dataAggregator(data) {
		let output = [];
		let count = 0;
		for (let item in data) {
			output.push({
				id: count,
				title: item,
				content: data[item]
			});
		}
		count += 1;
		return output;
	}
	items = dataAggregator(data);
</script>

<Content {items} />
