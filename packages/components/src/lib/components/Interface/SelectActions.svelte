<script lang="ts">
  import { createStateEvent } from '$lib/actions/state';
  import { Button } from 'flowbite-svelte';
  import DeleteAction from '../Icons/DeleteAction.svelte';
  import ViewAction from '../Icons/ViewAction.svelte';

  const setState = createStateEvent();
  function navigate(mode: 'view' | 'delete', id: string | null) {
    setState({
      mode,
      selected: id,
      isOpen: true
    });
  }
  export let id: string;
</script>

<Button
  aria-label="Select item to view"
  aria-details={id}
  color="blue"
  class="h-[2rem] w-[2rem] justify-self-start p-0"
  on:click={() => navigate('view', id)}><ViewAction /></Button
>
<Button
  aria-label="Select item to delete"
  aria-details={id}
  color="red"
  class="h-[2rem] w-[2rem] justify-self-start p-0"
  on:click={() => navigate('delete', id)}><DeleteAction /></Button
>
