<script lang="ts">
  import { cva } from 'class-variance-authority';
  
  interface CardProps {
    variant?: 'default' | 'bordered' | 'elevated';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    class?: string;
  }
  
  export let variant: CardProps['variant'] = 'default';
  export let padding: CardProps['padding'] = 'md';
  let className: string = '';
  export { className as class };
  
  const cardVariants = cva(
    'bg-white rounded-xl',
    {
      variants: {
        variant: {
          default: '',
          bordered: 'border border-primary-200',
          elevated: 'shadow-soft hover:shadow-medium transition-shadow duration-200'
        },
        padding: {
          none: '',
          sm: 'p-4',
          md: 'p-6',
          lg: 'p-8'
        }
      },
      defaultVariants: {
        variant: 'default',
        padding: 'md'
      }
    }
  );
</script>

<div class={cardVariants({ variant, padding, class: className })}>
  <slot />
</div> 