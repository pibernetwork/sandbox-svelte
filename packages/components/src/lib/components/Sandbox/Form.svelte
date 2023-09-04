<script lang="ts">
  import type { PageMode } from '$lib/types';
  import { Button, Input, Label } from 'flowbite-svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{ changeMode: { mode: PageMode } }>();
  function changeMode(mode: PageMode) {
    dispatch('changeMode', {
      mode
    });
  }
  function submitForm() {
    alert('Submit Form');
  }
</script>

<form action="#">
  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
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
    <Button on:click={() => changeMode('list')}>Cancel</Button>
    <Button on:click={() => changeMode('view')}>View</Button>
  </div>
</form>
