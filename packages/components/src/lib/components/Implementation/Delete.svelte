<script lang="ts">
  import Delete from '../Interface/Delete.svelte';

  export let selected: string | null;
</script>

<Delete {selected} on:setState on:setMode>
  <div>Are you sure about deleting this item?</div>
</Delete>
