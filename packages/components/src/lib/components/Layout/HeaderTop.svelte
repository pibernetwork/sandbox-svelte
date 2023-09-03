<script>
  import { Button } from 'flowbite-svelte';
  import Bars from '../Icons/Bars.svelte';
  import ProfileCardIcon from '../Icons/ProfileCardIcon.svelte';

  import logo from '$lib/assets/logo.png';
  export let isMenuClose = true;
  export let isProfileClose = true;
</script>

<Button
  on:click={() => (isMenuClose = false)}
  class="mx-2 h-[2.75rem] w-[2.75rem] justify-self-start p-0"><Bars /></Button
>
<a
  class="flex h-[2.75rem] items-center justify-center rounded-lg bg-red-500 px-4 text-center text-neutral-300"
  href="/"
>
  <img alt="The project logo" src={logo} class="mx-2 h-[2.25rem] w-[2.25rem] rounded" />
  <span>Life</span>
</a>
<Button
  color="purple"
  on:click={() => (isProfileClose = false)}
  class="mx-2 h-[2.75rem] w-[2.75rem] justify-self-end p-0"
>
  <ProfileCardIcon /></Button
>
