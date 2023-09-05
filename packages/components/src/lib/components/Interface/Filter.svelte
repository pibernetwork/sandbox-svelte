<script lang="ts">
  import { createModeEvent } from '$lib/actions/mode';
  import { Button, Input, Label } from 'flowbite-svelte';

  const setMode = createModeEvent();

  function submitFilter() {
    setMode(null);
  }
</script>

<form action="#">
  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
  <div class="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
    <Label class="col-span-2 md:col-span-3">
      <span>Email</span>
      <Input type="email" name="email" placeholder="name@company.com" required />
    </Label>
    <Label>
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <Label>
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <Label>
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <Label>
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <Label>
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <Label>
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
    <Label>
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••" required />
    </Label>
  </div>
  <div class="mt-2">
    <Button aria-label="Save filters" on:click={submitFilter}>Filter</Button>

    <Button aria-label="Close filters" on:click={() => setMode(null)}>Close</Button>
  </div>
</form>
