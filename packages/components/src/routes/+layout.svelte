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
      title: 'Table 1',
      url: '/table-1',
      header: true
    },
    {
      title: 'Table 2',
      url: '/table-2',
      header: true
    },
    {
      title: 'Table 3',
      url: '/table-3',
      header: true
    },
    {
      title: 'Filter Modal',
      url: '/filter-modal',
      header: true
    },
    {
      title: 'Schedule',
      url: '/schedule',
      header: true
    },
    {
      title: 'Nutritions',
      url: '/nutritions',
      header: true
    },
    {
      title: 'Sports',
      url: '/sports',
      header: true
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
<main class="min-h-[calc(100vh_-_12rem)] bg-neutral-300 px-2 py-2 md:px-12">
  <slot />
</main>

<Footer class="h-10">
  <FooterCopyright href="/" by="Piber Network " />
</Footer>
