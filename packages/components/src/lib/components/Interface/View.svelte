<script lang="ts">
  import { createModeEvent } from '$lib/actions/mode';
  import type { PageMode } from '$lib/types';
  import { Button } from 'flowbite-svelte';

  export let selected: string | null;

  const setMode = createModeEvent();

  function callMode(mode: PageMode) {
    setMode(mode);
  }
</script>

<div>View {selected}</div>
<slot />
<div>
  <Button on:click={() => callMode('edit')}>Edit</Button>
  <Button on:click={() => callMode('delete')}>Delete</Button>
  <Button on:click={() => callMode(null)}>Back</Button>
</div>
