<script lang="ts">
  import View from '../Interface/View.svelte';

  export let selected: string | null;
</script>

<View {selected} on:setState on:setMode>
  <div>View 1</div>
</View>
