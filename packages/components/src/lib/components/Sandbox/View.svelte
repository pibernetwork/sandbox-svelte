<script lang="ts">
  import { createModeEvent } from '$lib/actions/mode';
  import { Button } from 'flowbite-svelte';
  export let selected: string | null;
  const setMode = createModeEvent();
</script>

<div>View {selected}</div>

<div>
  <Button on:click={() => setMode('edit')}>Edit</Button>
  <Button on:click={() => setMode('delete')}>Delete</Button>
  <Button on:click={() => setMode('list')}>Back</Button>
</div>
