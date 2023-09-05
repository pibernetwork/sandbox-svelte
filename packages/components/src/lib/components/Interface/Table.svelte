<script lang="ts">
  import Paginator from '$lib/components/Paginator/Paginator.svelte';

  export let page: number = 1;
  // export let sortBy: string;
  // export let sortOrder: string;

  // type T = $$Generic;

  function changePage(event: CustomEvent<{ page: number }>) {
    page = event.detail.page;
  }

  // function changeSort(event: CustomEvent<{ sortBy: string; sortOrder: string }>) {
  //   sortBy = event.detail.sortBy;
  //   sortOrder = event.detail.sortOrder;
  // }
</script>

<slot />
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
