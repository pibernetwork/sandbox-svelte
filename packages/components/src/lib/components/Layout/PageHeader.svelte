<script lang="ts">
  import type { PageMode } from '$lib/types';
  import { Button, Heading } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';
  import FilterAction from '../Icons/FilterAction.svelte';
  import NewAction from '../Icons/NewAction.svelte';

  export let title: string;

  const dispatch = createEventDispatcher<{ changeMode: { mode: PageMode } }>();
  function changeMode(mode: PageMode) {
    dispatch('changeMode', {
      mode
    });
  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div class="flex items-center px-4 md:pr-10">
  <Heading tag="h1" class="col-span-3 mb-2 inline-block">{title}</Heading>
  <div class="flex">
    <Button
      color="yellow"
      class="mx-2 h-[2.25rem] w-[2.25rem] justify-self-start p-0"
      on:click={() => changeMode('filters')}><FilterAction /></Button
    >
    <Button
      color="green"
      class="mx-2 h-[2.25rem] w-[2.25rem] justify-self-start p-0"
      on:click={() => changeMode('create')}><NewAction /></Button
    >
  </div>
</div>
