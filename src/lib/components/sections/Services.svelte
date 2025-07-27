<script lang="ts">
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';
  // Simple emoji icons instead of lucide
  const serviceIcons: Record<string, string> = {
    Users: '👤',
    TrendingUp: '🏢',
    Shield: '🏛️'
  };
  
  const services = [
    {
      id: 'individuals',
      title: 'INDYWIDUALNE OSOBY FIZYCZNE',
      description: 'Profesjonalne usługi księgowe dostosowane do potrzeb osób fizycznych prowadzących działalność gospodarczą.',
      icon: 'Users',
      href: '/services#services'
    },
    {
      id: 'sme',
      title: 'MIKRO, MAŁE I ŚREDNIE PRZEDSIĘBIORSTWA',
      description: 'Kompleksowa obsługa księgowa dla rozwijających się firm, optymalizacja kosztów i efektywności biznesowej.',
      icon: 'TrendingUp',
      href: '/services#services'
    },
    {
      id: 'companies',
      title: 'SPÓŁKI PRAWA CYWILNEGO I HANDLOWEGO',
      description: 'Specjalistyczne usługi księgowe dla spółek z uwzględnieniem specyfiki prawnej i podatkowej.',
      icon: 'Shield',
      href: '/services#services'
    }
  ];
</script>

<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        CO ROBIMY
      </h2>
      <p class="text-lg text-primary-600 max-w-3xl mx-auto">
        Proponujemy <strong>najlepsze i najbezpieczniejsze rozwiązania dotyczące obszarów optymalizacji kosztowej i podatkowej</strong>, tak aby biznes był bardziej efektywny i zyskowny. Doradzamy, tam, gdzie jest potrzebna nasza wiedza i doświadczenie, pomagamy znaleźć jak najlepsze rozwiązania dla Waszego biznesu.
      </p>
      <p class="text-lg text-primary-600 max-w-3xl mx-auto">
        Zachęcamy Państwa do zapoznania się z ofertą księgową, która jest skierowana zarówno do małych, średnich jak i dużych firm.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each services as service}
        <a href={service.href} class="block">
          <Card variant="bordered" class="hover:shadow-medium transition-all duration-200 text-center h-full cursor-pointer hover:border-primary-400">
            <div class="space-y-4">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span class="text-3xl">{serviceIcons[service.icon]}</span>
              </div>
              <h3 class="text-xl font-semibold text-primary-800">{service.title}</h3>
              <p class="text-primary-600">{service.description}</p>
            </div>
          </Card>
        </a>
      {/each}
    </div>
  </div>
</section> 