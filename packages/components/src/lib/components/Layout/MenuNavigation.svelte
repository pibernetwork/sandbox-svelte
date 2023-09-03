<script lang="ts">
  import { page } from '$app/stores';
  import type { Pages } from '$lib/types';

  import { CloseButton, Drawer } from 'flowbite-svelte';
  import { getContext } from 'svelte';
  import { sineIn } from 'svelte/easing';
  export let isClose = true;

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

  $: $page.url && (isClose = true);

  const pages = getContext<Pages>('navigation');
</script>

<Drawer transitionType="fly" {transitionParams} bind:hidden={isClose}>
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      Life Menu
    </h5>
    <CloseButton on:click={() => (isClose = true)} class="mb-4 dark:text-white" />
  </div>
  <div class="flex flex-col gap-y-2">
    {#if pages}
      {#each pages as page}
        <a href={page.url} class="block rounded bg-red-300 py-2 text-center">{page.title}</a>
      {/each}
    {/if}
  </div>
</Drawer>
