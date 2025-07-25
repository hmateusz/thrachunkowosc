<script lang="ts">
  import Button from '../common/Button.svelte';
  import Card from '../common/Card.svelte';
  // Simple check icon
  const checkIcon = '✓';
  
  const benefits = [
    'Expert tax consultation',
    'Maximize your deductions',
    'Year-round support'
  ];
</script>

<section class="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div class="container-custom">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Content -->
      <div class="space-y-8">
        <div class="space-y-4">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 leading-tight">
            Professional Tax Advisory
            <span class="text-primary-600">Services</span>
          </h1>
          <p class="text-lg text-primary-600 max-w-lg">
            Navigate complex tax regulations with confidence. Our expert advisors help you optimize your tax strategy and maximize your savings.
          </p>
        </div>
        
        <div class="space-y-3">
          {#each benefits as benefit}
            <div class="flex items-center space-x-3">
              <span class="text-green-500 text-xl">{checkIcon}</span>
              <span class="text-primary-700">{benefit}</span>
            </div>
          {/each}
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <Button size="lg" href="/contact">
            Get Free Consultation
          </Button>
          <Button variant="outline" size="lg" href="/services">
            Our Services
          </Button>
        </div>
      </div>
      
      <!-- Visual Element -->
      <div class="relative">
        <Card variant="elevated" class="relative z-10">
          <div class="p-8 text-center space-y-6">
            <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto">
              <span class="text-white text-2xl font-bold">%</span>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-primary-800 mb-2">Save Up To</h3>
              <p class="text-4xl font-bold text-primary-600">30%</p>
              <p class="text-primary-600">On Your Tax Bill</p>
            </div>
            <div class="text-sm text-primary-500">
              *Average savings with professional tax optimization
            </div>
          </div>
        </Card>
        
        <!-- Background decoration -->
        <div class="absolute -top-4 -left-4 w-full h-full bg-primary-100 rounded-xl -z-10"></div>
      </div>
    </div>
  </div>
</section> 