<script>
  import { Button } from 'flowbite-svelte';
  import Bars from '../Icons/Bars.svelte';
  import ProfileCardIcon from '../Icons/ProfileCardIcon.svelte';

  import logo from '$lib/assets/logo.png';
  export let isMenuClose = true;
  export let isProfileClose = true;
</script>

<Button on:click={() => (isMenuClose = false)} class="mx-2 h-[44px] w-[44px] justify-self-start p-0"
  ><Bars /></Button
>
<a
  class="flex h-[44px] w-[94px] items-center justify-center rounded-lg bg-red-500 text-center text-neutral-300"
  href="/"
>
  <img alt="The project logo" src={logo} class="mx-2 h-[36px] w-[36px]" /> <span>Life</span>
</a>
<Button
  color="purple"
  on:click={() => (isProfileClose = false)}
  class="mx-2 h-[44px] w-[44px] justify-self-end p-0"
>
  <ProfileCardIcon /></Button
>
