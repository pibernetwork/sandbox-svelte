<script lang="ts">
  import { createModeEvent } from '$lib/actions/mode';
  import { Button, Heading } from 'flowbite-svelte';
  import FilterAction from '../Icons/FilterAction.svelte';
  import NewAction from '../Icons/NewAction.svelte';

  export let title: string;

  const setMode = createModeEvent();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div class="flex items-center px-4 md:pr-10">
  <Heading tag="h1" class="col-span-3 mb-2 inline-block">{title}</Heading>
  <div class="flex">
    <Button
      aria-label="Go to filters"
      color="yellow"
      class="mx-2 h-[2.25rem] w-[2.25rem] justify-self-start p-0"
      on:click={() => setMode('filters')}><FilterAction /></Button
    >
    <Button
      aria-label="Go to create"
      color="green"
      class="mx-2 h-[2.25rem] w-[2.25rem] justify-self-start p-0"
      on:click={() => setMode('create')}><NewAction /></Button
    >
  </div>
</div>
