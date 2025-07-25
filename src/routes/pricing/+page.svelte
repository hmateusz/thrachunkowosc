<script lang="ts">
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';
  // Simple text icons
  const checkIcon = '✓';
  const starIcon = '⭐';
  
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: '$150',
      period: 'per return',
      description: 'Perfect for simple individual tax returns',
      features: [
        'Personal income tax return',
        'Standard deductions',
        'Electronic filing',
        'Basic tax advice',
        'Email support'
      ],
      recommended: false
    },
    {
      id: 'professional',
      name: 'Professional Package',
      price: '$300',
      period: 'per return',
      description: 'Comprehensive tax services for complex situations',
      features: [
        'Complex individual returns',
        'Itemized deductions',
        'Multiple income sources',
        'Investment reporting',
        'State and federal filing',
        'Phone consultations',
        'Amendment services'
      ],
      recommended: true
    },
    {
      id: 'business',
      name: 'Business Package',
      price: '$500',
      period: 'per return',
      description: 'Complete business tax solutions',
      features: [
        'Business tax returns',
        'Corporate/Partnership/LLC',
        'Quarterly estimates',
        'Business deductions',
        'Multi-state filing',
        'Ongoing consultation',
        'Priority support',
        'Financial statement prep'
      ],
      recommended: false
    }
  ];
  
  const additionalServices = [
    { service: 'Tax Planning Consultation', price: '$200/hour' },
    { service: 'Audit Representation', price: '$400/hour' },
    { service: 'Bookkeeping Services', price: '$250/month' },
    { service: 'Amendment Filing', price: '$150' },
    { service: 'Prior Year Returns', price: '$200' },
    { service: 'Multi-state Returns', price: '+$75 per state' }
  ];
</script>

<svelte:head>
  <title>Pricing - TaxPro Professional Tax Advisory</title>
  <meta name="description" content="Transparent pricing for professional tax services. Choose from our Basic, Professional, or Business packages. No hidden fees, competitive rates." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary-800">
        Transparent Pricing
      </h1>
      <p class="text-lg text-primary-600">
        Choose the package that best fits your needs. No hidden fees, no surprises - just professional tax services at competitive rates.
      </p>
    </div>
  </div>
</section>

<!-- Pricing Plans -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each pricingPlans as plan}
        <Card 
          variant={plan.recommended ? 'elevated' : 'bordered'} 
          class="relative h-full {plan.recommended ? 'ring-2 ring-primary-200' : ''}"
        >
          {#if plan.recommended}
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                <span>{starIcon}</span>
                <span>Most Popular</span>
              </div>
            </div>
          {/if}
          
          <div class="space-y-6 h-full flex flex-col">
            <!-- Header -->
            <div class="text-center space-y-4">
              <h3 class="text-2xl font-bold text-primary-800">{plan.name}</h3>
              <div class="space-y-1">
                <div class="text-4xl font-bold text-primary-600">{plan.price}</div>
                <div class="text-primary-500">{plan.period}</div>
              </div>
              <p class="text-primary-600">{plan.description}</p>
            </div>
            
            <!-- Features -->
            <div class="flex-1">
              <ul class="space-y-3">
                {#each plan.features as feature}
                  <li class="flex items-center space-x-3">
                    <span class="text-green-500 text-xl flex-shrink-0">{checkIcon}</span>
                    <span class="text-primary-700">{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>
            
            <!-- CTA -->
            <div class="pt-6">
              <Button 
                variant={plan.recommended ? 'primary' : 'outline'} 
                class="w-full" 
                size="lg"
                href="/contact"
              >
                Choose {plan.name}
              </Button>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>

<!-- Additional Services -->
<section class="section-padding bg-primary-50">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        Additional Services
      </h2>
      <p class="text-lg text-primary-600 max-w-2xl mx-auto">
        Need something specific? We offer additional services to complement our core packages.
      </p>
    </div>
    
    <Card variant="bordered" class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each additionalServices as item}
          <div class="flex justify-between items-center py-3 border-b border-primary-100 last:border-b-0">
            <span class="text-primary-800 font-medium">{item.service}</span>
            <span class="text-primary-600 font-semibold">{item.price}</span>
          </div>
        {/each}
      </div>
    </Card>
  </div>
</section>

<!-- FAQ Section -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        Pricing FAQ
      </h2>
    </div>
    
    <div class="max-w-3xl mx-auto space-y-6">
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">What's included in the base price?</h3>
          <p class="text-primary-600">
            Our base prices include preparation, review, electronic filing, and basic support. Additional complexity may result in additional fees, which we'll discuss upfront.
          </p>
        </div>
      </Card>
      
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">Do you offer payment plans?</h3>
          <p class="text-primary-600">
            Yes, we offer flexible payment options including payment plans for larger projects. Contact us to discuss options that work for your budget.
          </p>
        </div>
      </Card>
      
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">What if I need amendments?</h3>
          <p class="text-primary-600">
            Amendments due to our error are free. Amendments due to additional information or changes in circumstances are billed at our standard amendment rate.
          </p>
        </div>
      </Card>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-primary-600">
  <div class="container-custom text-center">
    <div class="max-w-2xl mx-auto space-y-6">
      <h2 class="text-3xl sm:text-4xl font-bold text-white">
        Ready to Get Started?
      </h2>
      <p class="text-lg text-primary-100">
        Schedule a free consultation to discuss your needs and get a personalized quote.
      </p>
      <Button variant="secondary" size="lg" href="/contact">
        Schedule Free Consultation
      </Button>
    </div>
  </div>
</section> 