<script lang="ts">
  import { Button, Heading, Input, Label, Modal } from 'flowbite-svelte';
  let defaultModal = true;
</script>

<Heading tag="h1">Filter Modal</Heading>
<Button on:click={() => (defaultModal = true)}>Default modal</Button>
<Modal title="Filters" bind:open={defaultModal} outsideclose>
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
    <Button type="submit" class="mt-4 w-full">Login to your account</Button>
  </form>
</Modal>
