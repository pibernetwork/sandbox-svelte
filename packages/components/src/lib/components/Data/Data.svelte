<script lang="ts">
  import type { ModeEventProps } from '$lib/actions/mode';
  import type { SelectEventProps } from '$lib/actions/selected';
  import type { PageMode } from '$lib/types';
  import { Modal } from 'flowbite-svelte';
  import type { ComponentType } from 'svelte';
  import PageHeader from '../Layout/PageHeader.svelte';

  export let Table: ComponentType;
  export let Filter: ComponentType;
  export let Form: ComponentType;
  export let Delete: ComponentType;
  export let View: ComponentType;

  export let title: string;

  let mode: PageMode = null;
  let selected: string | null = null;

  let isOpen = false;

  function setMode(event: CustomEvent<ModeEventProps>) {
    mode = event.detail.mode;
  }

  function setSelected(event: CustomEvent<SelectEventProps>) {
    selected = event.detail.selected;
  }

  $: selected = mode === null ? null : selected;
  $: isOpen = mode !== null;
</script>

<PageHeader on:setMode={setMode} on:setSelected={setSelected} {title} />
<svelte:component this={Table} on:setMode={setMode} on:setSelected={setSelected} />
<Modal bind:open={isOpen} outsideclose>
  {#if mode === 'filters'}
    <svelte:component this={Filter} on:setMode={setMode} />
  {/if}
  {#if mode === 'create'}
    <svelte:component this={Form} on:setMode={setMode} />
  {/if}
  {#if mode === 'view'}
    <svelte:component this={View} on:setMode={setMode} {selected} />
  {/if}
  {#if mode === 'delete'}
    <svelte:component this={Delete} on:setMode={setMode} {selected} />
  {/if}
  {#if mode === 'edit'}
    <svelte:component this={Form} on:setMode={setMode} {selected} />
  {/if}
</Modal>
