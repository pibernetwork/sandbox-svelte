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

  function runFilter() {
    alert('Run Filter');
    changeMode('list');
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
  <div>
    <Button on:click={runFilter}>Filter</Button>

    <Button on:click={() => changeMode('list')}>Cancel</Button>
  </div>
</form>
