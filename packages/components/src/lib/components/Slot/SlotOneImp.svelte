<script>
  import InternalComponent from './InternalComponent.svelte';
  import SlotOne from './SlotOne.svelte';
</script>

<SlotOne>
  <svelte:fragment slot="test1"><InternalComponent /></svelte:fragment>
  <svelte:fragment slot="test2">Hehehe</svelte:fragment>
  <svelte:fragment slot="test3">Hihihi</svelte:fragment>
</SlotOne>
