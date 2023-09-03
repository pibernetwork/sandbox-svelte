<script lang="ts">
  import { page } from '$app/stores';

  import { CloseButton, Drawer } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';

  export let isClose = true;

  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn
  };

  $: $page.url && (isClose = true);
</script>

<Drawer
  placement="right"
  transitionType="fly"
  transitionParams={transitionParamsRight}
  bind:hidden={isClose}
  id="sidebar6"
>
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      Info
    </h5>
    <CloseButton on:click={() => (isClose = true)} class="mb-4 dark:text-white" />
  </div>
  <div class="flex flex-col gap-y-2">
    <a href="/profile" class="block rounded bg-red-300 py-2 text-center">Profile</a>
  </div>
</Drawer>
