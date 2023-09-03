<script lang="ts">
  let isMenuClose = true;
  let isProfileClose = true;

  import HeaderMenu from '$lib/components/Layout/HeaderMenu.svelte';
  import HeaderTop from '$lib/components/Layout/HeaderTop.svelte';
  import MenuNavigation from '$lib/components/Layout/MenuNavigation.svelte';
  import MenuProfile from '$lib/components/Layout/MenuProfile.svelte';
</script>

<header>
  <div
    class="grid min-w-[320px] grid-cols-3 grid-rows-[4rem_3rem] items-center justify-items-center bg-neutral-200 px-2 md:grid-rows-[4.5rem_3rem] md:px-12 lg:grid-rows-[5rem_3rem]"
  >
    <HeaderTop bind:isMenuClose bind:isProfileClose />
    <HeaderMenu />
  </div>
  <MenuNavigation bind:isClose={isMenuClose} />
  <MenuProfile bind:isClose={isProfileClose} />
</header>
