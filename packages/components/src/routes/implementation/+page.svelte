<script lang="ts">
  import Delete from '$lib/components/Implementation/Delete.svelte';
  import Filter from '$lib/components/Implementation/Filter.svelte';
  import Form from '$lib/components/Implementation/Form.svelte';
  import View from '$lib/components/Implementation/View.svelte';
  import Interface from '$lib/components/Interface/Data.svelte';
  import Table from '$lib/components/Interface/Table.svelte';
</script>

<Interface {Table} {Filter} {Form} {Delete} {View} title="Implementation - v1.0.0" />
