<script>
  import Data from '$lib/components/Data/Data.svelte';
  import { default as Filter, default as Form } from '$lib/components/Sandbox/Filter.svelte';
  import Table from '$lib/components/Sandbox/Table.svelte';
</script>

<Data {Table} {Filter} {Form} />
