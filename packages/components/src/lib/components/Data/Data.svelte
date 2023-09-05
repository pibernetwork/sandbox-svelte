<script lang="ts">
  import type { ModeEventProps } from '$lib/actions/mode';
  import type { SetStateProps } from '$lib/actions/state';
  import type { PageMode } from '$lib/types';
  import { Modal } from 'flowbite-svelte';

  import PageHeader from '$lib/components/Layout/PageHeader.svelte';
  import type DeleteWrapper from '$lib/components/Sandbox/Delete.svelte';
  import type FilterWrapper from '$lib/components/Sandbox/Filter.svelte';
  import type FormWrapper from '$lib/components/Sandbox/Form.svelte';
  import type TableWrapper from '$lib/components/Sandbox/Table.svelte';
  import type ViewWrapper from '$lib/components/Sandbox/View.svelte';

  export let Table: typeof TableWrapper;
  export let Filter: typeof FilterWrapper;
  export let Form: typeof FormWrapper;
  export let Delete: typeof DeleteWrapper;
  export let View: typeof ViewWrapper;

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

  $: selected = mode === null ? null : selected;
</script>

<PageHeader on:setMode={setMode} {title} on:setState={setState} />
<svelte:component this={Table} on:setMode={setMode} on:setState={setState} />
<Modal bind:open={isOpen} outsideclose>
  {#if mode === 'filters'}
    <svelte:component this={Filter} on:setMode={setMode} on:setState={setState} />
  {/if}
  {#if mode === 'create'}
    <svelte:component this={Form} on:setMode={setMode} on:setState={setState} selected={null} />
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
