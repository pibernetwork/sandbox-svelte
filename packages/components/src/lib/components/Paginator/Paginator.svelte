<script lang="ts">
  import { getPaginatorPages } from '$lib/utils/pages';
  import { Button, ButtonGroup } from 'flowbite-svelte';
  import ChevronDoubleLeft from '../Icons/ChevronDoubleLeft.svelte';
  import ChevronDoubleRight from '../Icons/ChevronDoubleRight.svelte';
  import ChevronLeft from '../Icons/ChevronLeft.svelte';
  import ChevronRight from '../Icons/ChevronRight.svelte';

  export let page: number;
  export let totalPages: number;
  export let totalNodes: number;

  export let start: number;
  export let end: number;

  export let hasNextPage: boolean;
  export let hasPrevPage: boolean;
  export let nextPage: number | null;
  export let prevPage: number | null;
  export let currentPage: number;

  function changePage(newPage: number | null | undefined) {
    if (newPage === null || newPage === undefined) {
      return undefined;
    }
    currentPage = newPage;
  }

  $: items = getPaginatorPages(page, totalPages);

  const paginationItemClass = 'w-10 justify-center p-0';
</script>

<div class="mt-4 grid grid-rows-2 items-center justify-items-center py-2 md:flex">
  <div class="flex h-[3rem] px-4">
    <ButtonGroup>
      <Button class={paginationItemClass} on:click={() => changePage(1)}>
        <ChevronDoubleLeft />
      </Button>
      {#if hasPrevPage}
        <Button class={paginationItemClass} on:click={() => changePage(prevPage)}>
          <ChevronLeft />
        </Button>
      {/if}
      {#each items as item}
        <Button
          class={paginationItemClass}
          color={item.page === page ? 'red' : undefined}
          on:click={() => changePage(item.page)}>{item.page}</Button
        >
      {/each}
      {#if hasNextPage}
        <Button class={paginationItemClass} on:click={() => changePage(nextPage)}>
          <ChevronRight />
        </Button>
      {/if}
      <Button class={paginationItemClass} on:click={() => changePage(totalPages)}>
        <ChevronDoubleRight />
      </Button>
    </ButtonGroup>
  </div>
  <div class="text-sm">
    <div>Showing {start} to {end} of {totalNodes} entries</div>
    <div>Page {page} of {totalPages}</div>
  </div>
</div>
