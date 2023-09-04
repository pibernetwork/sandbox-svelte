<script lang="ts">
  import type { PageMode } from '$lib/types';
  import { Modal } from 'flowbite-svelte';
  import type { ComponentType } from 'svelte';
  import PageHeader from '../Layout/PageHeader.svelte';

  let mode: PageMode = 'list';
  let selected: string | null = null;

  function changeMode(newMode: PageMode) {
    mode = newMode;

    switch (newMode) {
      case 'list': {
        selected = null;
        break;
      }
      case 'filters': {
        isFiltersOpen = true;
        break;
      }
      case 'create': {
        isCreateOpen = true;
        selected = null;
        break;
      }
      case 'edit': {
        isEditOpen = true;
        break;
      }
      case 'delete': {
        isDeleteOpen = true;
        break;
      }
      case 'view': {
        isViewOpen = true;
        break;
      }
    }
  }

  function changeModeEvent(event: CustomEvent<{ mode: PageMode }>) {
    changeMode(event.detail.mode);
  }

  function changeSelectedEvent(event: CustomEvent<{ selected: string | null }>) {
    console.log(event);
    selected = event.detail.selected;
  }

  let isFiltersOpen = false;
  let isCreateOpen = false;
  let isDeleteOpen = false;
  let isViewOpen = false;
  let isEditOpen = false;

  export let Table: ComponentType;
  export let Filter: ComponentType;
  export let Form: ComponentType;
  export let Delete: ComponentType;
  export let View: ComponentType;

  $: mode = isFiltersOpen === false ? 'list' : 'filters';
  $: mode = isCreateOpen === false ? 'list' : 'create';
  $: mode = isDeleteOpen === false ? 'list' : 'delete';
  $: mode = isViewOpen === false ? 'list' : 'view';
  $: mode = isEditOpen === false ? 'list' : 'edit';
  $: selected = mode === 'list' ? null : selected;
</script>

{selected}
<PageHeader on:changeMode={changeModeEvent} on:changeSelected={changeSelectedEvent} title="Table" />
<svelte:component
  this={Table}
  on:changeMode={changeModeEvent}
  on:changeSelected={changeSelectedEvent}
/>
{#if mode === 'filters'}
  <Modal title="Filters" bind:open={isFiltersOpen} autoclose>
    <svelte:component this={Filter} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{#if mode === 'create'}
  <Modal title="Create" bind:open={isCreateOpen} autoclose>
    <svelte:component this={Form} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{#if mode === 'view'}
  <Modal title="View" bind:open={isViewOpen} outsideclose>
    <svelte:component this={View} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{#if mode === 'delete'}
  <Modal title="Delete" bind:open={isDeleteOpen} autoclose>
    <svelte:component this={Delete} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{#if mode === 'edit'}
  <Modal title="Edit" bind:open={isEditOpen} autoclose>
    <svelte:component this={Form} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{mode}
