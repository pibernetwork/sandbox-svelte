<script lang="ts">
  import { createStateEvent } from '$lib/actions/state';
  import DeleteAction from '$lib/components/Icons/DeleteAction.svelte';
  import ViewAction from '$lib/components/Icons/ViewAction.svelte';
  import Paginator from '$lib/components/Paginator/Paginator.svelte';
  import {
    Button,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';

  let page: number = 1;

  const setState = createStateEvent();

  function changePage(event: CustomEvent<{ page: number }>) {
    page = event.detail.page;
  }

  function navigate(mode: 'view' | 'delete', id: string | null) {
    setState({
      mode,
      selected: id,
      isOpen: true
    });
  }

  $: items = new Array(10)
    .fill({
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: '$2999'
    })
    .map((item, index) => {
      return {
        ...item,
        id: (page - 1) * 10 + index + 1
      };
    });
</script>

<Table striped hoverable shadow>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
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
        <TableBodyCell class="py-2">{item.id}</TableBodyCell>
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
            aria-label="Select item to view"
            aria-details={item.id}
            color="blue"
            class="h-[2rem] w-[2rem] justify-self-start p-0"
            on:click={() => navigate('view', item.id)}><ViewAction /></Button
          >
          <Button
            aria-label="Select item to delete"
            aria-details={item.id}
            color="red"
            class="h-[2rem] w-[2rem] justify-self-start p-0"
            on:click={() => navigate('delete', item.id)}><DeleteAction /></Button
          >
        </TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
<Paginator
  on:changePage={changePage}
  {page}
  prevPage={page - 1}
  nextPage={page + 1}
  hasNextPage={page < 10}
  hasPrevPage={page > 1}
  totalPages={10}
  totalNodes={100}
  start={41}
  end={50}
/>
