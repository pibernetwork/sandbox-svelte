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
  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit {selected}</h3>
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
    <Button on:click={submitForm}>Save</Button>
    <Button on:click={() => setMode(null)}>Cancel</Button>
    <Button on:click={() => setMode('view')}>View</Button>
  </div>
</form>
