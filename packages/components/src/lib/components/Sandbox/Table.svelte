<script lang="ts">
  import DeleteAction from '$lib/components/Icons/DeleteAction.svelte';
  import ViewAction from '$lib/components/Icons/ViewAction.svelte';
  import Paginator from '$lib/components/Paginator/Paginator.svelte';
  import type { PageMode } from '$lib/types';
  import {
    Button,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatchMode = createEventDispatcher<{ changeMode: { mode: PageMode } }>();
  const dispatchSelected = createEventDispatcher<{ changeSelected: { selected: string | null } }>();

  const items = new Array(10).fill({
    name: 'Apple MacBook Pro 17"',
    color: 'Silver',
    category: 'Laptop',
    price: '$2999'
  });

  let currentPage: number = 1;

  function changePage(event: CustomEvent<{ page: number }>) {
    currentPage = event.detail.page;
  }

  function navigate(mode: 'view' | 'delete', id: string | null) {
    dispatchMode('changeMode', {
      mode
    });
    dispatchSelected('changeSelected', {
      selected: id
    });
  }
</script>

<Table striped hoverable shadow>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Actions</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each items as item}
      <TableBodyRow>
        <TableBodyCell class="py-2">{item.name}</TableBodyCell>
        <TableBodyCell class="py-2">{item.color}</TableBodyCell>
        <TableBodyCell class="py-2">{item.category}</TableBodyCell>
        <TableBodyCell class="py-2">{item.price}</TableBodyCell>
        <TableBodyCell class="py-2">{item.name}</TableBodyCell>
        <TableBodyCell class="py-2">{item.color}</TableBodyCell>
        <TableBodyCell class="py-2">{item.category}</TableBodyCell>
        <TableBodyCell class="py-2">{item.price}</TableBodyCell>
        <TableBodyCell class="py-2">{item.name}</TableBodyCell>
        <TableBodyCell class="py-2">{item.color}</TableBodyCell>
        <TableBodyCell class="py-2">
          <Button
            color="blue"
            class="h-[2rem] w-[2rem] justify-self-start p-0"
            on:click={() => navigate('view', '123')}><ViewAction /></Button
          >
          <Button
            color="red"
            class="h-[2rem] w-[2rem] justify-self-start p-0"
            on:click={() => navigate('delete', '321')}><DeleteAction /></Button
          >
        </TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
<Paginator
  on:changePage={changePage}
  page={currentPage}
  prevPage={currentPage - 1}
  nextPage={currentPage + 1}
  hasNextPage={currentPage < 10}
  hasPrevPage={currentPage > 1}
  totalPages={10}
  totalNodes={100}
  start={41}
  end={50}
/>
