<script lang="ts">
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';
  // Simple emoji icons
  const valueIcons: Record<string, string> = {
    Award: '🏆',
    Shield: '🛡️',
    Users: '👥',
    Clock: '⏰'
  };
  
  const values = [
    {
      icon: 'Award',
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our tax advisory services.'
    },
    {
      icon: 'Shield',
      title: 'Integrity',
      description: 'We maintain the highest standards of professional integrity and ethics.'
    },
    {
      icon: 'Users',
      title: 'Client-Focused',
      description: 'Your success is our priority. We tailor our services to your unique needs.'
    },
    {
      icon: 'Clock',
      title: 'Reliability',
      description: 'Count on us for timely, accurate, and dependable tax advisory services.'
    }
  ];
  
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Clients Served' },
    { number: '$2M+', label: 'Tax Savings Generated' },
    { number: '98%', label: 'Client Satisfaction' }
  ];
</script>

<svelte:head>
  <title>About Us - TaxPro Professional Tax Advisory</title>
  <meta name="description" content="Learn about TaxPro's experienced team of tax professionals. Dedicated to providing exceptional tax advisory services with integrity and expertise." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary-800">
        About TaxPro
      </h1>
      <p class="text-lg text-primary-600">
        We are a team of experienced tax professionals dedicated to helping individuals and businesses navigate the complex world of taxation with confidence and clarity.
      </p>
    </div>
  </div>
</section>

<!-- Stats Section -->
<section class="py-16 bg-white">
  <div class="container-custom">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      {#each stats as stat}
        <div class="text-center">
          <div class="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
            {stat.number}
          </div>
          <div class="text-primary-700 font-medium">
            {stat.label}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Story Section -->
<section class="section-padding bg-primary-50">
  <div class="container-custom">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
          Our Story
        </h2>
        <div class="space-y-4 text-primary-600">
          <p>
            Founded in 2014, TaxPro emerged from a simple belief: everyone deserves access to expert tax advice that's both comprehensive and understandable.
          </p>
          <p>
            Our founder, recognizing the complexity of modern tax law and the challenges faced by individuals and small businesses, set out to create a firm that would combine deep expertise with genuine care for client success.
          </p>
          <p>
            Today, we continue to uphold these founding principles while expanding our services to meet the evolving needs of our clients in an increasingly complex tax landscape.
          </p>
        </div>
      </div>
      
      <Card variant="elevated" class="relative">
        <div class="p-8">
          <blockquote class="text-lg text-primary-700 italic mb-4">
            "Our mission is to empower our clients with the knowledge and strategies they need to minimize their tax burden while ensuring full compliance with all regulations."
          </blockquote>
          <footer class="text-primary-600">
            — Sarah Johnson, Founder & CEO
          </footer>
        </div>
      </Card>
    </div>
  </div>
</section>

<!-- Values Section -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        Our Values
      </h2>
      <p class="text-lg text-primary-600 max-w-2xl mx-auto">
        These core values guide everything we do and shape the way we serve our clients.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each values as value}
        <Card variant="bordered" class="text-center hover:shadow-medium transition-all duration-200">
          <div class="space-y-4">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <span class="text-3xl">{valueIcons[value.icon]}</span>
            </div>
            <h3 class="text-xl font-semibold text-primary-800">{value.title}</h3>
            <p class="text-primary-600">{value.description}</p>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-primary-600">
  <div class="container-custom text-center">
    <div class="max-w-2xl mx-auto space-y-6">
      <h2 class="text-3xl sm:text-4xl font-bold text-white">
        Ready to Work Together?
      </h2>
      <p class="text-lg text-primary-100">
        Let's discuss how we can help you achieve your tax and financial goals.
      </p>
      <Button variant="secondary" size="lg" href="/contact">
        Schedule a Consultation
      </Button>
    </div>
  </div>
</section> 