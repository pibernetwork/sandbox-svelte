<script lang="ts">
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell
  } from 'flowbite-svelte';
  import SelectActions from '../Interface/SelectActions.svelte';
  import TableWrapper from '../Interface/Table.svelte';

  let page: number = 1;

  // need to have page here
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

<TableWrapper on:setState on:setMode bind:page>
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
            <SelectActions id={item.id} on:setState />
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</TableWrapper>
