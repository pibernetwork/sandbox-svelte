<script lang="ts">
  import type { ModeEventProps } from '$lib/actions/mode';
  import type { SelectEventProps } from '$lib/actions/selected';
  import type { SetStateProps } from '$lib/actions/state';
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

  function setState(event: CustomEvent<SetStateProps>) {
    mode = event.detail.mode;
    selected = event.detail.selected;
    isOpen = event.detail.isOpen;
  }

  function setMode(event: CustomEvent<ModeEventProps>) {
    mode = event.detail.mode;
    if (mode !== null) {
      isOpen = true;
    } else {
      isOpen = false;
    }
  }

  function setSelected(event: CustomEvent<SelectEventProps>) {
    selected = event.detail.selected;
  }

  $: selected = mode === null ? null : selected;
</script>

<PageHeader on:setMode={setMode} on:setSelected={setSelected} {title} on:setState={setState} />
<svelte:component
  this={Table}
  on:setMode={setMode}
  on:setSelected={setSelected}
  on:setState={setState}
/>
<Modal bind:open={isOpen} outsideclose>
  {#if mode === 'filters'}
    <svelte:component this={Filter} on:setMode={setMode} on:setState={setState} />
  {/if}
  {#if mode === 'create'}
    <svelte:component this={Form} on:setMode={setMode} on:setState={setState} />
  {/if}
  {#if mode === 'view'}
    <svelte:component this={View} on:setMode={setMode} {selected} on:setState={setState} />
  {/if}
  {#if mode === 'delete'}
    <svelte:component this={Delete} on:setMode={setMode} {selected} on:setState={setState} />
  {/if}
  {#if mode === 'edit'}
    <svelte:component this={Form} on:setMode={setMode} {selected} on:setState={setState} />
  {/if}
</Modal>
