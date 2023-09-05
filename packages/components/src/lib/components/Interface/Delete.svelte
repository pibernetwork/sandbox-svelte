<script lang="ts">
  import { createModeEvent } from '$lib/actions/mode';
  import { Button } from 'flowbite-svelte';

  export let selected: string | null;

  const setMode = createModeEvent();

  function deleteItem() {
    setMode(null);
  }
</script>

<div>Delete {selected}</div>

<div>
  <Button aria-label="Confirm delete" on:click={deleteItem}>Confirm</Button>
  <Button aria-label="Cancel delete" on:click={() => setMode(null)}>Cancel</Button>
</div>
