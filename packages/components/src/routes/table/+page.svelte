<script>
  import Data from '$lib/components/Data/Data.svelte';
  import Delete from '$lib/components/Sandbox/Delete.svelte';
  import Filter from '$lib/components/Sandbox/Filter.svelte';
  import Form from '$lib/components/Sandbox/Form.svelte';
  import Table from '$lib/components/Sandbox/Table.svelte';
  import View from '$lib/components/Sandbox/View.svelte';
</script>

<Data {Table} {Filter} {Form} {Delete} {View} title="Table v1.0.0" />
