<script>
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	export let data;	
</script>

<Accordion.Root class="m-8">
	{#each Object.entries(data) as [category, documents]}
		<Accordion.Item value={category}>
			<Accordion.Trigger>
				{category}
			</Accordion.Trigger>
			<Accordion.Content>
				<div class="flex flex-col gap-2">
					{#each documents as document}
						<Button href="/document/{document.id}" variant="outline">{document.name}</Button>
					{/each}
				</div>
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
