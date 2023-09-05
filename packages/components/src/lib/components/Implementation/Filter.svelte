<script lang="ts">
  import { Input, Label } from 'flowbite-svelte';
  import Filter from '../Interface/Filter.svelte';

  function submitFilter() {
    console.log('Submit Filter');
  }
</script>

<Filter on:setState on:setMode {submitFilter}>
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
</Filter>
