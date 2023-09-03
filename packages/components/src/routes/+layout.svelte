<script lang="ts">
  import '../app.css';

  import { Footer, FooterCopyright } from 'flowbite-svelte';

  import Header from '$lib/components/Layout/Header.svelte';
</script>

<Header />
<main class="min-h-[calc(100vh_-_12rem)] bg-neutral-300 px-2 md:px-12">
  <slot />
</main>

<Footer class="h-10">
  <FooterCopyright href="/" by="Piber Network " />
</Footer>
