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

  function deleteItem() {
    alert('Delete Item');
    changeMode('list');
  }
</script>

<div>Delete</div>

<div>
  <Button on:click={deleteItem}>Confirm</Button>

  <Button on:click={() => changeMode('list')}>Close</Button>
</div>
