<script lang="ts">
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';
  import { onMount } from 'svelte';
  // Simple emoji icons
  const serviceIcons: Record<string, string> = {
    Calculator: '📊',
    Users: '👤',
    TrendingUp: '🏢',
    Shield: '🏛️',
    FileText: '📄',
    Clock: '⏰'
  };
  
  const services = [
    {
      id: 'individuals',
      title: 'Usługi dla osób fizycznych',
      description: 'Profesjonalne usługi księgowe dostosowane do potrzeb osób fizycznych prowadzących działalność gospodarczą.',
      icon: 'Users',
      features: [
        'Prowadzenie ksiąg rachunkowych',
        'Rozliczenia podatkowe',
        'Sporządzanie deklaracji',
        'Optymalizacja podatkowa',
        'Wsparcie w rozliczeniach rocznych',
        'Doradztwo w zakresie przepisów'
      ]
    },
    {
      id: 'sme',
      title: 'Mikro, małe i średnie przedsiębiorstwa',
      description: 'Kompleksowa obsługa księgowa dla rozwijających się firm, optymalizacja kosztów i efektywności biznesowej.',
      icon: 'TrendingUp',
      features: [
        'Pełna księgowość',
        'Sprawozdania finansowe',
        'Rozliczenia VAT i CIT',
        'Obsługa kadrowo-płacowa',
        'Optymalizacja kosztowa',
        'Monitoring przepisów prawnych'
      ]
    },
    {
      id: 'companies',
      title: 'Spółki prawa cywilnego i handlowego',
      description: 'Specjalistyczne usługi księgowe dla spółek z uwzględnieniem specyfiki prawnej i podatkowej.',
      icon: 'Shield',
      features: [
        'Księgowość spółek',
        'Rozliczenia wspólników',
        'Sprawozdania dla KRS',
        'Optymalizacja podatkowa spółek',
        'Wsparcie w przekształceniach',
        'Compliance prawny'
      ]
    }
  ];

  const advantages = [
    {
      title: 'Rzetelność i najwyższa jakość',
      description: 'Zapewniamy najwyższy standard usług księgowych z dbałością o każdy szczegół.',
      icon: '🏆'
    },
    {
      title: 'Bezpieczeństwo',
      description: 'Gwarantujemy pełne bezpieczeństwo danych finansowych i zgodność z przepisami.',
      icon: '🛡️'
    },
    {
      title: 'Partnerstwo',
      description: 'Podchodzimy do każdego klienta jak do partnera biznesowego.',
      icon: '🤝'
    },
    {
      title: 'Osobiste zaangażowanie',
      description: 'Każdy projekt traktujemy indywidualnie, angażując się w sukces klientów.',
      icon: '💼'
    }
  ];

  onMount(() => {
    // Add smooth scrolling behavior
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  });
</script>

<svelte:head>
  <title>Co robimy - Tatiana Hajduczek – rachunkowość</title>
  <meta name="description" content="Oferujemy najlepsze i najbezpieczniejsze rozwiązania księgowe dla osób fizycznych, małych i średnich przedsiębiorstw oraz spółek. Optymalizacja kosztowa i podatkowa." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary-800">
        CO ROBIMY
      </h1>
      <p class="text-lg text-primary-600">
        Proponujemy <strong>najlepsze i najbezpieczniejsze rozwiązania dotyczące obszarów optymalizacji kosztowej i podatkowej</strong>, tak aby biznes był bardziej efektywny i zyskowny. Doradzamy, tam, gdzie jest potrzebna nasza wiedza i doświadczenie, pomagamy znaleźć jak najlepsze rozwiązania dla Waszego biznesu.
      </p>
      <p class="text-lg text-primary-600">
        Zachęcamy Państwa do zapoznania się z ofertą księgową, która jest skierowana zarówno do małych, średnich jak i dużych firm.
      </p>
    </div>
  </div>
</section>

<!-- Services Grid -->
<section id="services" class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        ŚWIADCZYMY USŁUGI DLA
      </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each services as service}
        <div id={service.id}>
          <Card variant="bordered" class="h-full hover:shadow-medium transition-all duration-200">
            <div class="space-y-6 h-full flex flex-col text-center">
              <!-- Header -->
              <div class="space-y-4">
                <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <span class="text-3xl">{serviceIcons[service.icon]}</span>
                </div>
                
                <div>
                  <h3 class="text-xl font-semibold text-primary-800 mb-2">{service.title}</h3>
                  <p class="text-primary-600">{service.description}</p>
                </div>
              </div>
              
              <!-- Features -->
              <div class="flex-1">
                <ul class="space-y-3 text-left">
                  {#each service.features as feature}
                    <li class="flex items-center space-x-3">
                      <div class="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span class="text-sm text-primary-600">{feature}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Advantages Section -->
<section class="section-padding bg-primary-50">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        NASZE ATUTY
      </h2>
      <p class="text-lg text-primary-600 max-w-2xl mx-auto">
        Te podstawowe wartości kierują wszystkim, co robimy i kształtują sposób, w jaki obsługujemy naszych klientów.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each advantages as advantage}
        <Card variant="bordered" class="hover:shadow-medium transition-all duration-200 bg-white">
          <div class="space-y-4 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
              <span class="text-3xl">{advantage.icon}</span>
            </div>
            <h3 class="text-xl font-semibold text-primary-800">{advantage.title}</h3>
            <p class="text-primary-600">{advantage.description}</p>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>

<!-- Approach Section -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        Nasze podejście
      </h2>
      <p class="text-lg text-primary-600 max-w-2xl mx-auto">
        Ciągle rozwijamy się aby spełnić Państwa oczekiwania
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
          1
        </div>
        <h3 class="text-xl font-semibold text-primary-800">Analiza</h3>
        <p class="text-primary-600">
          Dokładnie analizujemy Państwa sytuację finansową i specyfikę działalności.
        </p>
      </div>
      
      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
          2
        </div>
        <h3 class="text-xl font-semibold text-primary-800">Optymalizacja</h3>
        <p class="text-primary-600">
          Proponujemy najlepsze rozwiązania w zakresie optymalizacji kosztowej i podatkowej.
        </p>
      </div>
      
      <div class="text-center space-y-4">
        <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
          3
        </div>
        <h3 class="text-xl font-semibold text-primary-800">Wsparcie</h3>
        <p class="text-primary-600">
          Zapewniamy ciągłe wsparcie i doradztwo, aby Państwa biznes był bardziej efektywny.
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
        Gotowy na współpracę?
      </h2>
      <p class="text-lg text-primary-100">
        Skontaktuj się z nami, aby omówić jak możemy pomóc w prowadzeniu księgowości Twojej firmy.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" size="lg" href="/contact">
          Skontaktuj się z nami
        </Button>
        <Button variant="outline" size="lg" href="/pricing" class="text-white border-white hover:bg-white hover:text-primary-600">
          Zobacz cennik
        </Button>
      </div>
    </div>
  </div>
</section> 