<script lang="ts">
  import '../app.css';

  import { Footer, FooterCopyright } from 'flowbite-svelte';

  import Header from '$lib/components/Layout/Header.svelte';
  import type { Pages } from '$lib/types';
  import { setContext } from 'svelte';

  const pages: Pages = [
    {
      title: 'Life',
      url: '/'
    },
    {
      title: 'Schedule',
      url: '/schedule'
    },
    {
      title: 'Nutritions',
      url: '/nutritions'
    },
    {
      title: 'Sports',
      url: '/sports'
    },
    {
      title: 'Work',
      url: '/work'
    },
    {
      title: 'Money',
      url: '/money'
    },
    {
      title: 'Ideas',
      url: '/ideas'
    }
  ];

  setContext('navigation', pages);
</script>

<Header />
<main class="min-h-[calc(100vh_-_12rem)] bg-neutral-300 px-2 md:px-12">
  <slot />
</main>

<Footer class="h-10">
  <FooterCopyright href="/" by="Piber Network " />
</Footer>
