<script lang="ts">
  import type { PageMode } from '$lib/types';
  import { Button } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{ changeMode: { mode: PageMode } }>();
  function changeMode(mode: PageMode) {
    dispatch('changeMode', {
      mode
    });
  }
</script>

<div>View</div>

<div>
  <Button on:click={() => changeMode('edit')}>Edit</Button>
  <Button on:click={() => changeMode('delete')}>Delete</Button>
  <Button on:click={() => changeMode('list')}>Back</Button>
</div>
