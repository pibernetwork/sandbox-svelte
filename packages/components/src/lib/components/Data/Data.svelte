<script lang="ts">
  import type { ModeEventProps } from '$lib/actions/mode';
  import type { SelectEventProps } from '$lib/actions/selected';
  import type { PageMode } from '$lib/types';
  import { Modal } from 'flowbite-svelte';
  import type { ComponentType } from 'svelte';
  import PageHeader from '../Layout/PageHeader.svelte';

  export let title: string;

  export let Table: ComponentType;
  export let Filter: ComponentType;
  export let Form: ComponentType;
  export let Delete: ComponentType;
  export let View: ComponentType;

  let mode: PageMode = null;
  let selected: string | null = null;

  let isOpen = false;

  function changeMode(event: CustomEvent<ModeEventProps>) {
    mode = event.detail.mode;

    if (mode === null) {
      selected = null;
      return;
    }

    isOpen = true;
  }

  function changeSelected(event: CustomEvent<SelectEventProps>) {
    selected = event.detail.selected;
  }

  $: selected = mode === null ? null : selected;
</script>

<PageHeader on:changeMode={changeMode} on:changeSelected={changeSelected} {title} />
<svelte:component this={Table} on:changeMode={changeMode} on:changeSelected={changeSelected} />
<Modal bind:open={isOpen} outsideclose>
  {#if mode === 'filters'}
    <svelte:component this={Filter} on:changeMode={changeMode} />
  {/if}
  {#if mode === 'create'}
    <svelte:component this={Form} on:changeMode={changeMode} />
  {/if}
  {#if mode === 'view'}
    <svelte:component this={View} on:changeMode={changeMode} {selected} />
  {/if}
  {#if mode === 'delete'}
    <svelte:component this={Delete} on:changeMode={changeMode} {selected} />
  {/if}
  {#if mode === 'edit'}
    <svelte:component this={Form} on:changeMode={changeMode} {selected} />
  {/if}
</Modal>
