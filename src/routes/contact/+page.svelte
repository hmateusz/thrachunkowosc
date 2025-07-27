<script lang="ts">
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';

  const icons: Record<string, string> = {
    Mail: '✉️',
    Phone: '📞',
    MapPin: '📍',
    Clock: '⏰'
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Telefon',
      value: '+48 722 381 309',
      description: ''
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'thajduczek@thrachunkowosc.pl',
      description: ''
    },
    {
      icon: 'MapPin',
      title: 'Biuro',
      value: 'Ul. Piłsudskiego 6/3',
      description: '44-200 Rybnik'
    },
    {
      icon: 'Clock',
      title: 'Godziny pracy',
      value: 'Pn-Pt: 9:00-18:00',
      description: ''
    }
  ];

  const subjects = [
    'Zapytanie ogólne',
    'Usługi księgowe',
    'Optymalizacja podatkowa',
    'Założenie działalności',
    'Przejęcie księgowości',
    'Inne'
  ];
</script>

<svelte:head>
  <title>Kontakt - Tatiana Hajduczek – rachunkowość</title>
  <meta name="description" content="Skontaktuj się z Tatianą Hajduczek w sprawie profesjonalnych usług księgowych. Umów konsultację lub uzyskaj odpowiedzi na pytania. Telefon, email i godziny pracy." />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-white section-padding">
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary-800">
        Kontakt
      </h1>
      <p class="text-lg text-primary-600">
        Potrzebujesz profesjonalnych usług księgowych? Skontaktuj się z nami. Jesteśmy tutaj, aby pomóc Ci w prowadzeniu księgowości i optymalizacji podatkowej Twojej firmy.
      </p>
    </div>
  </div>
</section>

<section class="section-padding bg-white">
  <div class="container-custom">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- Office Map Placeholder -->
        <Card variant="bordered">
          <div class="aspect-video bg-primary-50 rounded-lg flex items-center justify-center">
            <div class="text-center space-y-2">
              <span class="text-4xl">{icons.MapPin}</span>
              <p class="text-primary-600 font-medium">Lokalizacja biura</p>
              <p class="text-primary-500 text-sm">Zapraszamy do naszego biura</p>
            </div>
          </div>
        </Card>

      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-primary-800 mb-6">Skontaktuj się z nami</h2>
          <div class="space-y-6">
            {#each contactInfo as info}
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">{icons[info.icon]}</span>
                </div>
                <div>
                  <h3 class="font-semibold text-primary-800">{info.title}</h3>
                  <p class="text-primary-700 font-medium">{info.value}</p>
                  <p class="text-primary-600 text-sm">{info.description}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Quick Actions -->
        <Card variant="elevated">
          <div class="space-y-4">
            <h3 class="font-semibold text-primary-800">Potrzebujesz natychmiastowej pomocy?</h3>
            <div class="space-y-3">
              <Button variant="outline" class="w-full justify-start" href="tel:+48722381309">
                <span class="mr-2">{icons.Phone}</span>
                Zadzwoń: +48 722 381 309
              </Button>
              <Button variant="outline" class="w-full justify-start" href="mailto:thajduczek@thrachunkowosc.pl">
                <span class="mr-2">{icons.Mail}</span>
                Email: thajduczek@thrachunkowosc.pl
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="section-padding bg-primary-50">
  <div class="container-custom">
    <div class="text-center space-y-4 mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-primary-800">
        Często zadawane pytania
      </h2>
      <p class="text-lg text-primary-600 max-w-2xl mx-auto">
        Masz pytania? Oto odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług księgowych.
      </p>
    </div>
    
    <div class="max-w-3xl mx-auto space-y-6">
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">Jak szybko możecie przejąć księgowość mojej firmy?</h3>
          <p class="text-primary-600">
            Przejęcie księgowości może nastąpić już od następnego miesiąca. Zapewniamy płynne przejście i analizę poprzedniej dokumentacji.
          </p>
        </div>
      </Card>
      
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">Czy oferujecie usługi zdalne?</h3>
          <p class="text-primary-600">
            Tak! Większość naszych usług można realizować zdalnie. Zapewniamy bezpieczne systemy wymiany dokumentów i regularny kontakt.
          </p>
        </div>
      </Card>
      
      <Card variant="bordered">
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-primary-800">Jakie dokumenty są potrzebne do rozpoczęcia współpracy?</h3>
          <p class="text-primary-600">
            Na wstępie potrzebujemy podstawowych dokumentów firmowych i dokumentacji z poprzedniego okresu. Szczegółową listę otrzymacie podczas pierwszej konsultacji.
          </p>
        </div>
      </Card>
    </div>
  </div>
</section> 