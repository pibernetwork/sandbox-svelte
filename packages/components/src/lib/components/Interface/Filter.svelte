<script lang="ts">
  import { createModeEvent } from '$lib/actions/mode';
  import { Button } from 'flowbite-svelte';

  const setMode = createModeEvent();

  function submitFilter() {
    setMode(null);
  }
</script>

<form action="#">
  <slot />
  <div class="mt-2">
    <Button aria-label="Save filters" on:click={submitFilter}>Filter</Button>

    <Button aria-label="Close filters" on:click={() => setMode(null)}>Close</Button>
  </div>
</form>
