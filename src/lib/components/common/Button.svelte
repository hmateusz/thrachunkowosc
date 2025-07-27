<script lang="ts">
  import { cva } from 'class-variance-authority';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  
  interface ButtonProps extends HTMLButtonAttributes {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    href?: string;
  }
  
  export let variant: ButtonProps['variant'] = 'primary';
  export let size: ButtonProps['size'] = 'md';
  export let href: ButtonProps['href'] = undefined;
  let className: string = '';
  export { className as class };
  
  const buttonVariants = cva(
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg',
    {
      variants: {
        variant: {
          primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-medium',
          secondary: 'bg-primary-100 text-primary-800 hover:bg-primary-200',
          outline: 'border border-primary-300 bg-transparent text-primary-700 hover:bg-primary-50',
          ghost: 'text-primary-600 hover:bg-primary-100'
        },
        size: {
          sm: 'h-8 px-3 text-sm',
          md: 'h-10 px-4',
          lg: 'h-12 px-6 text-lg'
        }
      },
      defaultVariants: {
        variant: 'primary',
        size: 'md'
      }
    }
  );
</script>

{#if href}
  <a
    href={href}
    class={buttonVariants({ variant, size, class: className })}
    {...$$restProps}
  >
    <slot />
  </a>
{:else}
  <button
    class={buttonVariants({ variant, size, class: className })}
    {...$$restProps}
    on:click
  >
    <slot />
  </button>
{/if} 