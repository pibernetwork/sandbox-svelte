<script lang="ts">
  import FilterAction from '$lib/components/Icons/FilterAction.svelte';
  import NewAction from '$lib/components/Icons/NewAction.svelte';
  import Filter from '$lib/components/Sandbox/Filter.svelte';
  import Form from '$lib/components/Sandbox/Form.svelte';
  import Table from '$lib/components/Sandbox/Table.svelte';
  import { Button, Heading, Modal } from 'flowbite-svelte';
  import SlotOneImp from '../Slot/SlotOneImp.svelte';

  type Mode = 'list' | 'view' | 'create' | 'edit' | 'delete' | 'filters';
  let mode: Mode = 'list';

  function changeMode(newMode: Mode) {
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

  function changeModeEvent(event: CustomEvent<{ mode: Mode }>) {
    console.log('change mode event');
    changeMode(event.detail.mode);
  }

  let isFiltersOpen = false;
  let isCreateOpen = false;
  let isDeleteOpen = false;
  let isViewOpen = false;
  let isEditOpen = false;

  $: mode = isFiltersOpen === false ? 'list' : 'filters';
  $: mode = isCreateOpen === false ? 'list' : 'create';
  $: mode = isDeleteOpen === false ? 'list' : 'delete';
  $: mode = isViewOpen === false ? 'list' : 'view';
  $: mode = isEditOpen === false ? 'list' : 'edit';
</script>

<SlotOneImp on:changeMode={changeModeEvent} />
<div class="flex items-center px-4 md:pr-10">
  <Heading tag="h1" class="col-span-3 mb-2 inline-block">Table</Heading>
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

<Table on:changeMode={changeModeEvent} />
{#if mode === 'filters'}
  <Modal title="Filters" bind:open={isFiltersOpen} autoclose outsideclose>
    <Filter></Filter>
  </Modal>
{/if}
{#if mode === 'create'}
  <Modal title="Create" bind:open={isCreateOpen} autoclose outsideclose>
    <Form></Form>
  </Modal>
{/if}
{#if mode === 'view'}
  <Modal title="View" bind:open={isViewOpen} autoclose outsideclose>
    <Form></Form>
  </Modal>
{/if}
{#if mode === 'delete'}
  <Modal title="Delete" bind:open={isDeleteOpen} autoclose outsideclose>
    <Form></Form></Modal
  >
{/if}
{#if mode === 'edit'}
  <Modal title="Edit" bind:open={isEditOpen} autoclose outsideclose>
    <Form></Form>
  </Modal>
{/if}
{mode}
