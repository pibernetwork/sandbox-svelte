<script lang="ts">
  import { getPaginatorPages } from '$lib/utils/pages';
  import { Button, ButtonGroup } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';
  import ChevronDoubleLeft from '../Icons/ChevronDoubleLeft.svelte';
  import ChevronDoubleRight from '../Icons/ChevronDoubleRight.svelte';
  import ChevronLeft from '../Icons/ChevronLeft.svelte';
  import ChevronRight from '../Icons/ChevronRight.svelte';

  const dispatch = createEventDispatcher<{ changePage: { page: number } }>();

  function changePageEvent(newPage: number | null | undefined) {
    if (newPage === null || newPage === undefined) {
      return undefined;
    }

    dispatch('changePage', {
      page: newPage
    });
  }

  export let page: number;
  export let totalPages: number;
  export let totalNodes: number;

  export let start: number;
  export let end: number;

  export let hasNextPage: boolean;
  export let hasPrevPage: boolean;
  export let nextPage: number | null;
  export let prevPage: number | null;

  $: items = getPaginatorPages(page, totalPages);

  const paginationItemClass = 'w-10 justify-center p-0';
</script>

<div class="mt-4 grid grid-rows-2 items-center justify-items-center py-2 md:flex">
  <div class="flex h-[3rem] px-4">
    <ButtonGroup role="navigation" aria-label="Pagination Navigation">
      <Button
        class={paginationItemClass}
        on:click={() => changePageEvent(1)}
        disabled={!hasPrevPage}
        data-testid="prev-all"
      >
        <ChevronDoubleLeft />
      </Button>

      <Button
        class={paginationItemClass}
        on:click={() => changePageEvent(prevPage)}
        disabled={!hasPrevPage}
        data-testid="next-prev"
      >
        <ChevronLeft />
      </Button>

      {#each items as item}
        <Button
          class={paginationItemClass + (item.small === false ? ' hidden md:flex' : '')}
          color={item.page === page ? 'red' : undefined}
          on:click={() => changePageEvent(item.page)}
          role="button"
          data-testid={`page-${item.page}`}>{item.page}</Button
        >
      {/each}

      <Button
        class={paginationItemClass}
        on:click={() => changePageEvent(nextPage)}
        disabled={!hasNextPage}
        data-testid="next"
      >
        <ChevronRight />
      </Button>

      <Button
        class={paginationItemClass}
        on:click={() => changePageEvent(totalPages)}
        disabled={!hasNextPage}
        data-testid="next-all"
      >
        <ChevronDoubleRight />
      </Button>
    </ButtonGroup>
  </div>
  <div class="text-sm">
    <div>Showing {start} to {end} of {totalNodes} entries</div>
    <div>Page {page} of {totalPages}</div>
  </div>
</div>
