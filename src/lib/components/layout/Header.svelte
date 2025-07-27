<script lang="ts">
  import { page } from '$app/stores';
  import Button from '../common/Button.svelte';
  // Simple mobile menu without external icons
  let MenuIcon = '☰';
  let CloseIcon = '✕';

  let mobileMenuOpen = false;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Kim jesteśmy', href: '/about' },
    { name: 'Co robimy', href: '/services' },
    { name: 'Cennik', href: '/pricing' },
    { name: 'Kontakt', href: '/contact' }
  ];

  $: currentPath = $page.url.pathname;
</script>

<header class="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
  <div class="container-custom">
    <div class="flex items-center justify-between h-24">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="flex items-center">
            <img src="https://thrachunkowosc.pl/wp-content/uploads/2017/11/logo-retina.png" alt="Tatiana Hajduczek – rachunkowość" class="h-20" />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        {#each navigation as item}
          <a
            href={item.href}
            class="text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200 {currentPath === item.href ? 'text-primary-800 font-semibold' : ''}"
          >
            {item.name}
          </a>
        {/each}
      </nav>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          type="button"
          class="text-primary-600 hover:text-primary-800 p-2"
          on:click={() => mobileMenuOpen = !mobileMenuOpen}
        >
          <span class="text-2xl">
            {mobileMenuOpen ? CloseIcon : MenuIcon}
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t border-primary-200">
        <nav class="flex flex-col space-y-3">
          {#each navigation as item}
            <a
              href={item.href}
              class="text-primary-600 hover:text-primary-800 font-medium py-2 transition-colors duration-200 {currentPath === item.href ? 'text-primary-800 font-semibold' : ''}"
              on:click={() => mobileMenuOpen = false}
            >
              {item.name}
            </a>
          {/each}
          <div class="pt-3">
            <Button href="/contact" class="w-full">Kontakt</Button>
          </div>
        </nav>
      </div>
    {/if}
  </div>
</header>