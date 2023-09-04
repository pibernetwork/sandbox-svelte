<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';
  import ViewAction from '../Icons/ViewAction.svelte';

  type Mode = 'list' | 'view' | 'create' | 'edit' | 'delete' | 'filters';
  const dispatch = createEventDispatcher<{ changeMode: { mode: Mode } }>();

  function changeMode(mode: Mode) {
    console.log(mode);
    dispatch('changeMode', {
      mode
    });
  }
</script>

<Button
  color="blue"
  class="h-[2rem] w-[2rem] justify-self-start p-0"
  on:click={() => changeMode('view')}><ViewAction /></Button
>
