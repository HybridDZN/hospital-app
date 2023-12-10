<script>
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	export let items;
</script>

<Accordion.Root>
	{#each items as { id, title, content } (title)}
		<Accordion.Item value={id}>
			<Accordion.Trigger>
				{title}
			</Accordion.Trigger>
			<Accordion.Content>
				<Button href="/document/{content}">{content}</Button>
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
