<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Card from '$lib/components/common/Card.svelte';
  import Button from '$lib/components/common/Button.svelte';

  let mapContainer: HTMLDivElement;
  let map: google.maps.Map;
  let marker: google.maps.Marker;
  let mapError = false;

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
      value: 'Pn-Pt: 7:30-15:30',
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

  const officeLocation = { lat: 50.0894, lng: 18.5435 };

  onMount(() => {
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      initMap();
    };
    
    script.onerror = () => {
      console.error('Failed to load Google Maps API');
      mapError = true;
    };
    
    document.head.appendChild(script);
  });

  function initMap() {
    if (!mapContainer) return;

    try {
      const latLng = new google.maps.LatLng(officeLocation.lat, officeLocation.lng);

      map = new google.maps.Map(mapContainer, {
        center: latLng,
        zoom: 16,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      });

      marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Tatiana Hajduczek – rachunkowość',
        animation: google.maps.Animation.DROP
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 5px 0; color: #1e3a8a; font-weight: bold;">Tatiana Hajduczek</h3>
            <p style="margin: 0; color: #374151;">Ul. Piłsudskiego 6/3<br>44-200 Rybnik</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Trigger resize after a short delay to ensure proper rendering on mobile
      setTimeout(() => {
        if (map) {
          google.maps.event.trigger(map, 'resize');
          map.setCenter(latLng);
        }
      }, 100);
    } catch (error) {
      console.error('Error initializing map:', error);
      mapError = true;
    }
  }
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

        <!-- Office Map -->
        <Card variant="bordered">
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">{icons.MapPin}</span>
              <h3 class="text-lg font-semibold text-primary-800">Lokalizacja biura</h3>
            </div>
            <div 
              bind:this={mapContainer}
              class="w-full h-64 sm:h-80 md:h-96 bg-primary-50 rounded-lg overflow-hidden"
            >
              {#if mapError}
                <div class="w-full h-full flex items-center justify-center">
                  <div class="text-center space-y-4">
                    <div class="text-4xl">🗺️</div>
                    <p class="text-primary-600">Mapa tymczasowo niedostępna</p>
                    <Button variant="outline" size="sm" href="https://maps.google.com/?q=Ul.+Piłsudskiego+6/3,+44-200+Rybnik" target="_blank">
                      Otwórz w Google Maps
                    </Button>
                  </div>
                </div>
              {:else}
                <!-- Map will be loaded here -->
              {/if}
            </div>
            <div class="text-center space-y-2">
              <p class="text-primary-700 font-medium">Ul. Piłsudskiego 6/3, 44-200 Rybnik</p>
              <Button variant="outline" size="sm" href="https://maps.google.com/?q=Ul.+Piłsudskiego+6/3,+44-200+Rybnik" target="_blank">
                Otwórz w Google Maps
              </Button>
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
