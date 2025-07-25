<script lang="ts">
  import Card from '../common/Card.svelte';
  import Button from '../common/Button.svelte';
  // Simple emoji icons instead of lucide
  const serviceIcons: Record<string, string> = {
    Calculator: '🧮',
    TrendingUp: '📈', 
    Users: '👥',
    FileText: '📄'
  };
  
  const services = [
    {
      id: 'tax-preparation',
      title: 'Tax Preparation',
      description: 'Comprehensive tax preparation services for individuals and businesses.',
      icon: 'Calculator',
      features: ['Personal Tax Returns', 'Business Tax Filing', 'Amendment Services']
    },
    {
      id: 'tax-planning',
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize your tax liability year-round.',
      icon: 'TrendingUp',
      features: ['Tax Strategy', 'Deduction Optimization', 'Retirement Planning']
    },
    {
      id: 'business-consulting',
      title: 'Business Consulting',
      description: 'Expert guidance for business tax matters and compliance.',
      icon: 'Users',
      features: ['Corporate Tax', 'Payroll Services', 'Business Formation']
    },
    {
      id: 'audit-support',
      title: 'Audit Support',
      description: 'Professional representation and support during tax audits.',
      icon: 'FileText',
      features: ['IRS Representation', 'Document Preparation', 'Audit Defense']
    }
  ];
</script>

<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        Our Tax Services
      </h2>
      <p class="text-lg text-primary-600 max-w-2xl mx-auto">
        Comprehensive tax solutions tailored to your needs. From preparation to planning, we've got you covered.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {#each services as service}
        <Card variant="bordered" class="hover:shadow-medium transition-all duration-200">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl">{serviceIcons[service.icon]}</span>
              </div>
              <h3 class="text-xl font-semibold text-primary-800">{service.title}</h3>
            </div>
            
            <p class="text-primary-600">{service.description}</p>
            
            <ul class="space-y-2">
              {#each service.features as feature}
                <li class="flex items-center space-x-2">
                  <div class="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                  <span class="text-sm text-primary-600">{feature}</span>
                </li>
              {/each}
            </ul>
          </div>
        </Card>
      {/each}
    </div>
    
    <div class="text-center">
      <Button href="/services" size="lg">
        View All Services
      </Button>
    </div>
  </div>
</section> 