<script lang="ts">
  import FilterAction from '$lib/components/Icons/FilterAction.svelte';
  import NewAction from '$lib/components/Icons/NewAction.svelte';
  import Table from '$lib/components/Sandbox/Table.svelte';
  import { Button, Heading } from 'flowbite-svelte';
</script>

<div class="flex items-center px-4 md:pr-10">
  <Heading tag="h1" class="col-span-3 mb-2 inline-block">Table</Heading>
  <div class="flex">
    <Button color="yellow" class="mx-2 h-[2.25rem] w-[2.25rem] justify-self-start p-0"
      ><FilterAction /></Button
    >
    <Button color="green" class="mx-2 h-[2.25rem] w-[2.25rem] justify-self-start p-0"
      ><NewAction /></Button
    >
  </div>
</div>
<Table />
