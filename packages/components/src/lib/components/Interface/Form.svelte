<script lang="ts">
  import { createModeEvent } from '$lib/actions/mode';
  import { Button, Input, Label } from 'flowbite-svelte';

  export let selected: string | null;

  const setMode = createModeEvent();

  function submitForm() {
    setMode(null);
  }
</script>

<form action="#">
  {#if selected}
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit {selected}</h3>
  {:else}
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create</h3>
  {/if}
  <div class="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
    <Label class="col-span-2 md:col-span-3">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="col-span-2 md:col-span-3">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label class="col-span-2 md:col-span-3">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
  </div>
  <div class="mt-2">
    {#if selected}
      <Button aria-label="Save" on:click={submitForm}>Save</Button>
    {:else}
      <Button aria-label="Create" on:click={submitForm}>Create</Button>
    {/if}
    <Button aria-label="Cancel" on:click={() => setMode(null)}>Cancel</Button>
    {#if selected}
      <Button aria-label="Go to View" on:click={() => setMode('view')}>View</Button>
    {/if}
  </div>
</form>
