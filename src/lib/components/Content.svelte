<script>
	import * as Accordion from '$lib/components/ui/accordion';
	export let items;
</script>

<Accordion.Root>
	{#each items as { id, title, content } (id)}
		<Accordion.Item value={id}>
			<Accordion.Trigger>{title}</Accordion.Trigger>
			<Accordion.Content>{content}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
