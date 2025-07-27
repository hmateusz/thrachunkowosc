<script lang="ts">
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';
  // Simple text icons
  const checkIcon = '✓';
  
  const pricingServices = [
    {
      service: 'RYCZAŁT EWIDENCJONOWANY',
      price: 'OD 80 zł miesięcznie'
    },
    {
      service: 'KSIĘGA PRZYCHODÓW I ROZCHODÓW',
      price: 'OD 100 zł miesięcznie'
    },
    {
      service: 'KSIĘGI HANDLOWE',
      price: 'OD 500 zł miesięcznie'
    },
    {
      service: 'KADRY I PŁACE',
      price: 'OD 25 zł miesięcznie za pracownika'
    }
  ];

  const promotions = [
    {
      title: 'Na start',
      description: 'Dla firm, które rozpoczynają działalność – pierwszy miesiąc za 1,00 zł, dwa kolejne 50% rabatu'
    },
    {
      title: 'Nowy klient',
      description: 'Dla firm podpisujących umowę z biurem – dwa pierwsze miesiące 50% rabatu'
    },
    {
      title: 'Polecony',
      description: 'Za polecenie innej firmie naszego biura rachunkowego skutkującego podpisaniem umowy o współpracy 50 % rabatu na usługi księgowe za jeden miesiąc'
    }
  ];

  const pricingFactors = [
    'zakres świadczonych usług',
    'nakład i złożoność prac',
    'czasochłonność',
    'skalę i specyfikę prowadzonej działalności gospodarczej',
    'formę organizacyjną',
    'indywidualne potrzeby i oczekiwania'
  ];
</script>

<svelte:head>
  <title>Cennik - Tatiana Hajduczek – rachunkowość</title>
  <meta name="description" content="Konkurencyjne ceny usług księgowych. Ryczałt ewidencjonowany, księga przychodów i rozchodów, księgi handlowe, kadry i płace. Promocje dla nowych klientów." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary-800">
        CENNIK
      </h1>
      <p class="text-lg text-primary-600">
        Oferujemy konkurencyjne ceny w zamian za najwyższą jakość usług
      </p>
    </div>
  </div>
</section>

<!-- Pricing Information -->
<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="max-w-4xl mx-auto space-y-12">
      <!-- Introduction -->
      <div class="text-center space-y-6">
        <p class="text-xl text-primary-600 leading-relaxed">
          Ceny usług ustalamy indywidualnie. W tej sprawie najlepiej skontaktować się z nami telefonicznie lub mailowo. Bierzemy pod uwagę przede wszystkim:
        </p>
        
        <div class="space-y-4 mt-10 max-w-3xl mx-auto">
          {#each pricingFactors as factor}
            <div class="flex items-center space-x-4">
              <span class="text-green-500 text-2xl flex-shrink-0">{checkIcon}</span>
              <span class="text-lg text-primary-700 font-medium">{factor}</span>
            </div>
          {/each}
        </div>
        
        <p class="text-xl text-primary-600 mt-10 font-medium">
          Poniżej podajemy orientacyjne ceny najczęściej świadczonych usług.
        </p>
      </div>

      <!-- Pricing Table -->
      <Card variant="bordered" class="mt-12">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-primary-200">
                <th class="text-left py-6 px-8 font-bold text-primary-800 text-lg">USŁUGA</th>
                <th class="text-right py-6 px-8 font-bold text-primary-800 text-lg">CENA</th>
              </tr>
            </thead>
            <tbody>
              {#each pricingServices as service}
                <tr class="border-b border-primary-100 last:border-b-0">
                  <td class="py-6 px-8 text-primary-700 text-lg font-medium">{service.service}</td>
                  <td class="py-6 px-8 text-right font-bold text-primary-600 text-lg">{service.price}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>
</section>

<!-- Promotions Section -->
<section class="section-padding bg-primary-50">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-4xl sm:text-5xl font-bold text-primary-800">
        UWAGA PROMOCJE
      </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {#each promotions as promotion}
        <Card variant="bordered" class="bg-white hover:shadow-medium transition-all duration-200">
          <div class="space-y-6 text-center p-8">
            <h3 class="text-2xl font-bold text-primary-800">{promotion.title}</h3>
            <p class="text-lg text-primary-600 leading-relaxed">{promotion.description}</p>
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
        Gotowy na współpracę?
      </h2>
      <p class="text-lg text-primary-100">
        Skontaktuj się z nami, aby otrzymać indywidualną wycenę dostosowaną do Twoich potrzeb.
      </p>
      <Button variant="secondary" size="lg" href="/contact">
        Skontaktuj się z nami
      </Button>
    </div>
  </div>
</section> 