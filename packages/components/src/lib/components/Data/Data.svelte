<script lang="ts">
  import type { PageMode } from '$lib/types';
  import { Modal } from 'flowbite-svelte';
  import type { ComponentType } from 'svelte';
  import PageHeader from '../Layout/PageHeader.svelte';

  let mode: PageMode = 'list';

  function changeMode(newMode: PageMode) {
    mode = newMode;

    switch (newMode) {
      case 'filters': {
        isFiltersOpen = true;
        break;
      }
      case 'create': {
        isCreateOpen = true;
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

  let isFiltersOpen = false;
  let isCreateOpen = false;
  let isDeleteOpen = false;
  let isViewOpen = false;
  let isEditOpen = false;

  export let Table: ComponentType;
  export let Filter: ComponentType;
  export let Form: ComponentType;

  $: mode = isFiltersOpen === false ? 'list' : 'filters';
  $: mode = isCreateOpen === false ? 'list' : 'create';
  $: mode = isDeleteOpen === false ? 'list' : 'delete';
  $: mode = isViewOpen === false ? 'list' : 'view';
  $: mode = isEditOpen === false ? 'list' : 'edit';
</script>

<PageHeader on:changeMode={changeModeEvent} title="Table" />
<svelte:component this={Table} on:changeMode={changeModeEvent} />
{#if mode === 'filters'}
  <Modal title="Filters" bind:open={isFiltersOpen} autoclose outsideclose>
    <svelte:component this={Filter} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{#if mode === 'create'}
  <Modal title="Create" bind:open={isCreateOpen} autoclose outsideclose>
    <svelte:component this={Form} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{#if mode === 'view'}
  <Modal title="View" bind:open={isViewOpen} autoclose outsideclose>
    <svelte:component this={Form} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{#if mode === 'delete'}
  <Modal title="Delete" bind:open={isDeleteOpen} autoclose outsideclose>
    <svelte:component this={Form} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{#if mode === 'edit'}
  <Modal title="Edit" bind:open={isEditOpen} autoclose outsideclose>
    <svelte:component this={Form} on:changeMode={changeModeEvent} />
  </Modal>
{/if}
{mode}
