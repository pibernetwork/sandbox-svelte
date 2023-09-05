<script>
  import Interface from '$lib/components/Interface/Data.svelte';
  import Delete from '$lib/components/Interface/Delete.svelte';
  import Filter from '$lib/components/Interface/Filter.svelte';
  import Form from '$lib/components/Interface/Form.svelte';
  import Table from '$lib/components/Interface/Table.svelte';
  import View from '$lib/components/Interface/View.svelte';
</script>

<Interface {Table} {Filter} {Form} {Delete} {View} title="Table 3 - v1.0.0" />
