<script lang="ts">
  import type { Pages } from '$lib/types';
  import { getContext } from 'svelte';

  const pages = getContext<Pages>('navigation').filter((page) => page.header);
</script>

<div
  class="col-span-3 flex items-stretch justify-around gap-x-[0.25rem] justify-self-stretch text-xs md:gap-x-2 md:text-base"
>
  {#if pages}
    {#each pages as page}
      <a href={page.url} class="flex-grow rounded bg-red-300 py-2 text-center">{page.title}</a>
    {/each}
  {/if}
</div>
