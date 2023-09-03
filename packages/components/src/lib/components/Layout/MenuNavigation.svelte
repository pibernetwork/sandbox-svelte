<script lang="ts">
  import { page } from '$app/stores';

  import { CloseButton, Drawer } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
  export let isClose = true;

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };

  $: $page.url && (isClose = true);
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
    <a href="/sports" class="block rounded bg-red-300 py-2 text-center">Sports</a>
    <a href="/nutritions" class="block rounded bg-red-300 py-2 text-center">Nutrition</a>
    <a href="/schedule" class="block rounded bg-red-300 py-2 text-center">Schedule</a>
    <a href="/money" class="block rounded bg-red-300 py-2 text-center">Money</a>
    <a href="/work" class="block rounded bg-red-300 py-2 text-center">Work</a>
    <a href="/ideas" class="block rounded bg-red-300 py-2 text-center">Ideas</a>
  </div>
</Drawer>
