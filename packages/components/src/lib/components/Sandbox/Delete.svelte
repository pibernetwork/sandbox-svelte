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
  <Button on:click={deleteItem}>Confirm</Button>

  <Button on:click={() => setMode(null)}>Close</Button>
</div>
