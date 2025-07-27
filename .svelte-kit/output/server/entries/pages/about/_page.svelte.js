import { c as create_ssr_component, v as validate_component, e as each, d as escape } from "../../../chunks/ssr.js";
import { C as Card, B as Button } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const valueIcons = {
    Award: "🏆",
    Shield: "🛡️",
    Users: "🤝",
    Clock: "💼"
  };
  const values = [
    {
      icon: "Award",
      title: "Rzetelność i najwyższa jakość",
      description: "Zapewniamy najwyższy standard usług księgowych z dbałością o każdy szczegół i profesjonalne podejście do każdego zlecenia."
    },
    {
      icon: "Shield",
      title: "Bezpieczeństwo",
      description: "Gwarantujemy pełne bezpieczeństwo danych finansowych i zgodność z wszystkimi przepisami prawa podatkowego i księgowego."
    },
    {
      icon: "Users",
      title: "Partnerstwo",
      description: "Podchodzimy do każdego klienta jak do partnera biznesowego, budujemy długotrwałe relacje oparte na zaufaniu i wzajemnym szacunku."
    },
    {
      icon: "Clock",
      title: "Osobiste zaangażowanie",
      description: "Każdy projekt traktujemy indywidualnie, angażując się osobiście w sukces naszych klientów i ich rozwój biznesowy."
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-o8h218_START -->${$$result.title = `<title>Kim jesteśmy - Tatiana Hajduczek – rachunkowość</title>`, ""}<meta name="description" content="Poznaj Tatianę Hajduczek - doświadczoną specjalistkę z Uniwersytetu Ekonomicznego w Katowicach, oferującą profesjonalne usługi księgowe."><!-- HEAD_svelte-o8h218_END -->`, ""}  <section class="bg-gradient-to-br from-primary-50 to-white section-padding" data-svelte-h="svelte-1izqr5b"><div class="container-custom"><div class="max-w-3xl mx-auto text-center space-y-6"><h1 class="text-4xl sm:text-5xl font-bold text-primary-800">KIM JESTEŚMY</h1> <p class="text-lg text-primary-600">Założycielka biura jest absolwentką Uniwersytetu Ekonomicznego w Katowicach gdzie ukończyła studia o specjalności rachunkowość, a także studiów podyplomowych w Akademii Leona Koźmińskiego w Warszawie – Międzynarodowe Standardy Rachunkowości, Międzynarodowe Standardy Sprawozdawczości Finansowej oraz w Szkole Głównej Handlowej w Warszawie – Zarządzanie wartością firmy.</p></div></div></section>  <section class="section-padding bg-white"><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div class="space-y-6" data-svelte-h="svelte-lljaxr"><h2 class="text-3xl sm:text-4xl font-bold text-primary-800">Doświadczenie i wykształcenie</h2> <div class="space-y-4 text-primary-600"><div class="p-4 bg-primary-50 rounded-lg"><h4 class="font-semibold text-primary-800 mb-2">🎓 Uniwersytet Ekonomiczny w Katowicach</h4> <p>Studia magisterskie - specjalność rachunkowość</p></div> <div class="p-4 bg-primary-50 rounded-lg"><h4 class="font-semibold text-primary-800 mb-2">📚 Akademia Leona Koźmińskiego w Warszawie</h4> <p>Studia podyplomowe: Międzynarodowe Standardy Rachunkowości, Międzynarodowe Standardy Sprawozdawczości Finansowej</p></div> <div class="p-4 bg-primary-50 rounded-lg"><h4 class="font-semibold text-primary-800 mb-2">💼 Szkoła Główna Handlowa w Warszawie</h4> <p>Studia podyplomowe: Zarządzanie wartością firmy</p></div></div></div> ${validate_component(Card, "Card").$$render($$result, { variant: "elevated", class: "relative" }, {}, {
    default: () => {
      return `<div class="p-8" data-svelte-h="svelte-1t22qe9"><blockquote class="text-lg text-primary-700 italic mb-4">&quot;Ciągle rozwijamy się aby spełnić Państwa oczekiwania. Naszym celem jest świadczenie najlepszych i najbezpieczniejszych usług księgowych.&quot;</blockquote> <footer class="text-primary-600">— Tatiana Hajduczek, Założycielka</footer></div>`;
    }
  })}</div></div></section>  <section class="section-padding bg-primary-50"><div class="container-custom"><div class="text-center space-y-4 mb-16" data-svelte-h="svelte-1p5ja96"><h2 class="text-3xl sm:text-4xl font-bold text-primary-800">NASZE ATUTY</h2> <p class="text-lg text-primary-600 max-w-2xl mx-auto">Te podstawowe wartości kierują wszystkim, co robimy i kształtują sposób, w jaki obsługujemy naszych klientów.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8">${each(values, (value) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        variant: "bordered",
        class: "text-center hover:shadow-medium transition-all duration-200 bg-white"
      },
      {},
      {
        default: () => {
          return `<div class="space-y-4"><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto"><span class="text-3xl">${escape(valueIcons[value.icon])}</span></div> <h3 class="text-xl font-semibold text-primary-800">${escape(value.title)}</h3> <p class="text-primary-600">${escape(value.description)}</p></div> `;
        }
      }
    )}`;
  })}</div></div></section>  <section class="section-padding bg-primary-600"><div class="container-custom text-center"><div class="max-w-2xl mx-auto space-y-6"><h2 class="text-3xl sm:text-4xl font-bold text-white" data-svelte-h="svelte-1lhqy3z">Gotowy na współpracę?</h2> <p class="text-lg text-primary-100" data-svelte-h="svelte-1damf2j">Skontaktuj się z nami, aby omówić jak możemy pomóc w prowadzeniu księgowości Twojej firmy.</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      size: "lg",
      href: "/contact"
    },
    {},
    {
      default: () => {
        return `Skontaktuj się z nami`;
      }
    }
  )}</div></div></section>`;
});
export {
  Page as default
};
