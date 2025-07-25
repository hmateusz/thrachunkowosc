<script lang="ts">
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';
  // Simple emoji icons
  const serviceIcons: Record<string, string> = {
    Calculator: '🧮',
    Users: '👥',
    TrendingUp: '📈',
    Shield: '🛡️',
    FileText: '📄',
    Clock: '⏰'
  };
  
  const services = [
    {
      id: 'individual-tax',
      title: 'Individual Tax Preparation',
      description: 'Comprehensive tax preparation for individuals and families.',
      icon: 'Calculator',
      features: [
        'Personal income tax returns',
        'State and federal filing',
        'Deduction optimization',
        'Electronic filing available',
        'Amendment services',
        'Multi-state returns'
      ],
      startingPrice: '$150'
    },
    {
      id: 'business-tax',
      title: 'Business Tax Services',
      description: 'Complete tax solutions for businesses of all sizes.',
      icon: 'Users',
      features: [
        'Corporate tax returns',
        'Partnership returns',
        'LLC tax filing',
        'Quarterly estimates',
        'Payroll tax services',
        'Business formation'
      ],
      startingPrice: '$300'
    },
    {
      id: 'tax-planning',
      title: 'Tax Planning & Strategy',
      description: 'Proactive tax planning to minimize your tax liability.',
      icon: 'TrendingUp',
      features: [
        'Year-round tax strategy',
        'Retirement planning',
        'Investment planning',
        'Estate tax planning',
        'Business succession',
        'Quarterly reviews'
      ],
      startingPrice: '$200'
    },
    {
      id: 'audit-support',
      title: 'Audit Representation',
      description: 'Professional representation during IRS audits and examinations.',
      icon: 'Shield',
      features: [
        'IRS audit representation',
        'State audit support',
        'Document preparation',
        'Correspondence handling',
        'Appeal assistance',
        'Resolution negotiation'
      ],
      startingPrice: '$400'
    },
    {
      id: 'bookkeeping',
      title: 'Bookkeeping Services',
      description: 'Accurate bookkeeping to keep your finances organized.',
      icon: 'FileText',
      features: [
        'Monthly bookkeeping',
        'Accounts reconciliation',
        'Financial statements',
        'Expense tracking',
        'Invoice management',
        'QuickBooks setup'
      ],
      startingPrice: '$250'
    },
    {
      id: 'consulting',
      title: 'Tax Consulting',
      description: 'Expert advice on complex tax matters and regulations.',
      icon: 'Clock',
      features: [
        'Tax law interpretation',
        'Compliance guidance',
        'Transaction planning',
        'Entity restructuring',
        'Tax research',
        'Custom solutions'
      ],
      startingPrice: '$175'
    }
  ];
</script>

<svelte:head>
  <title>Tax Services - TaxPro Professional Tax Advisory</title>
  <meta name="description" content="Comprehensive tax services including preparation, planning, business consulting, and audit support. Expert tax solutions for individuals and businesses." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary-800">
        Our Tax Services
      </h1>
      <p class="text-lg text-primary-600">
        Comprehensive tax solutions designed to meet your unique needs. From preparation to strategic planning, we provide expert guidance every step of the way.
      </p>
    </div>
  </div>
</section>

<!-- Services Grid -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service}
        <Card variant="bordered" class="h-full hover:shadow-medium transition-all duration-200">
          <div class="space-y-6 h-full flex flex-col">
            <!-- Header -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span class="text-2xl">{serviceIcons[service.icon]}</span>
                </div>
                <span class="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                  Starting at {service.startingPrice}
                </span>
              </div>
              
              <div>
                <h3 class="text-xl font-semibold text-primary-800 mb-2">{service.title}</h3>
                <p class="text-primary-600">{service.description}</p>
              </div>
            </div>
            
            <!-- Features -->
            <div class="flex-1">
              <ul class="space-y-3">
                {#each service.features as feature}
                  <li class="flex items-center space-x-3">
                    <div class="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                    <span class="text-sm text-primary-600">{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>
            
            <!-- CTA -->
            <div class="pt-4">
              <Button variant="outline" class="w-full" href="/contact">
                Get Quote
              </Button>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>

<!-- Process Section -->
<section class="section-padding bg-primary-50">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        Our Process
      </h2>
      <p class="text-lg text-primary-600 max-w-2xl mx-auto">
        We follow a proven process to ensure accurate, timely, and beneficial tax services for all our clients.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
          1
        </div>
        <h3 class="text-xl font-semibold text-primary-800">Consultation</h3>
        <p class="text-primary-600">
          We start with a comprehensive consultation to understand your unique tax situation and goals.
        </p>
      </div>
      
      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
          2
        </div>
        <h3 class="text-xl font-semibold text-primary-800">Analysis</h3>
        <p class="text-primary-600">
          Our experts analyze your financial information and identify opportunities for optimization.
        </p>
      </div>
      
      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
          3
        </div>
        <h3 class="text-xl font-semibold text-primary-800">Execution</h3>
        <p class="text-primary-600">
          We execute the tax strategy, prepare your returns, and provide ongoing support throughout the year.
        </p>
      </div>
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
        Contact us today to schedule a consultation and discover how we can help optimize your tax strategy.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" size="lg" href="/contact">
          Schedule Consultation
        </Button>
        <Button variant="outline" size="lg" href="/pricing" class="text-white border-white hover:bg-white hover:text-primary-600">
          View Pricing
        </Button>
      </div>
    </div>
  </div>
</section> 