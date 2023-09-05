<script lang="ts">
  import { Input, Label } from 'flowbite-svelte';
  import Form from '../Interface/Form.svelte';

  export let selected: string | null;

  function submitForm() {
    console.log('Muahhhh');
  }
</script>

<Form {selected} on:setState on:setMode {submitForm}>
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
</Form>
