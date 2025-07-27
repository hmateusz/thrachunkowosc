import { c as create_ssr_component, e as each, v as validate_component, d as escape, f as add_attribute } from "../../chunks/ssr.js";
import { B as Button, C as Card } from "../../chunks/Card.js";
import "class-variance-authority";
const checkIcon = "✓";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const benefits = [
    "Rzetelność i najwyższa jakość",
    "Bezpieczeństwo",
    "Partnerstwo",
    "Osobiste zaangażowanie"
  ];
  return `<section class="bg-gradient-to-br from-primary-50 to-white section-padding"><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div class="space-y-8"><div class="space-y-4" data-svelte-h="svelte-1vxm5lp"><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 leading-tight">KSIĘGOWOŚĆ DLA
            <span class="text-primary-600">TWOJEJ FIRMY</span></h1> <p class="text-lg text-primary-600 max-w-lg">Ciągle rozwijamy się aby spełnić Państwa oczekiwania</p></div> <div class="space-y-3"><h3 class="text-xl font-semibold text-primary-800 mb-4" data-svelte-h="svelte-wdompf">NASZE ATUTY</h3> ${each(benefits, (benefit) => {
    return `<div class="flex items-center space-x-3"><span class="text-green-500 text-xl">${escape(checkIcon)}</span> <span class="text-primary-700">${escape(benefit)}</span> </div>`;
  })}</div> <div class="flex flex-col sm:flex-row gap-4">${validate_component(Button, "Button").$$render($$result, { size: "lg", href: "/contact" }, {}, {
    default: () => {
      return `Kontakt`;
    }
  })} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      size: "lg",
      href: "/services"
    },
    {},
    {
      default: () => {
        return `Co robimy`;
      }
    }
  )}</div></div>  <div class="relative">${validate_component(Card, "Card").$$render(
    $$result,
    {
      variant: "elevated",
      class: "relative z-10"
    },
    {},
    {
      default: () => {
        return `<div class="p-8 text-center space-y-6" data-svelte-h="svelte-1aysn4o"><div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto"><span class="text-white text-2xl font-bold">📊</span></div> <div><h3 class="text-2xl font-bold text-primary-800 mb-2">ŚWIADCZYMY USŁUGI DLA</h3> <div class="space-y-2 text-sm text-primary-600"><p class="font-semibold">INDYWIDUALNYCH OSÓB FIZYCZNYCH</p> <p class="font-semibold">MIKRO, MAŁYCH I ŚREDNICH PRZEDSIĘBIORSTW</p> <p class="font-semibold">SPÓŁEK PRAWA CYWILNEGO I HANDLOWEGO</p></div></div></div>`;
      }
    }
  )}  <div class="absolute -top-4 -left-4 w-full h-full bg-primary-100 rounded-xl -z-10"></div></div></div></div></section>`;
});
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const serviceIcons = {
    Users: "👤",
    TrendingUp: "🏢",
    Shield: "🏛️"
  };
  const services = [
    {
      id: "individuals",
      title: "INDYWIDUALNE OSOBY FIZYCZNE",
      description: "Profesjonalne usługi księgowe dostosowane do potrzeb osób fizycznych prowadzących działalność gospodarczą.",
      icon: "Users",
      href: "/services#individuals"
    },
    {
      id: "sme",
      title: "MIKRO, MAŁE I ŚREDNIE PRZEDSIĘBIORSTWA",
      description: "Kompleksowa obsługa księgowa dla rozwijających się firm, optymalizacja kosztów i efektywności biznesowej.",
      icon: "TrendingUp",
      href: "/services#sme"
    },
    {
      id: "companies",
      title: "SPÓŁKI PRAWA CYWILNEGO I HANDLOWEGO",
      description: "Specjalistyczne usługi księgowe dla spółek z uwzględnieniem specyfiki prawnej i podatkowej.",
      icon: "Shield",
      href: "/services#companies"
    }
  ];
  return `<section class="section-padding bg-white"><div class="container-custom"><div class="text-center space-y-4 mb-16" data-svelte-h="svelte-1dydjd4"><h2 class="text-3xl sm:text-4xl font-bold text-primary-800">CO ROBIMY</h2> <p class="text-lg text-primary-600 max-w-3xl mx-auto">Proponujemy <strong>najlepsze i najbezpieczniejsze rozwiązania dotyczące obszarów optymalizacji kosztowej i podatkowej</strong>, tak aby biznes był bardziej efektywny i zyskowny. Doradzamy, tam, gdzie jest potrzebna nasza wiedza i doświadczenie, pomagamy znaleźć jak najlepsze rozwiązania dla Waszego biznesu.</p> <p class="text-lg text-primary-600 max-w-3xl mx-auto">Zachęcamy Państwa do zapoznania się z ofertą księgową, która jest skierowana zarówno do małych, średnich jak i dużych firm.</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${each(services, (service) => {
    return `<a${add_attribute("href", service.href, 0)} class="block">${validate_component(Card, "Card").$$render(
      $$result,
      {
        variant: "bordered",
        class: "hover:shadow-medium transition-all duration-200 text-center h-full cursor-pointer hover:border-primary-400"
      },
      {},
      {
        default: () => {
          return `<div class="space-y-4"><div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto"><span class="text-3xl">${escape(serviceIcons[service.icon])}</span></div> <h3 class="text-xl font-semibold text-primary-800">${escape(service.title)}</h3> <p class="text-primary-600">${escape(service.description)}</p></div> `;
        }
      }
    )} </a>`;
  })}</div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1rsy10r_START -->${$$result.title = `<title>Tatiana Hajduczek – rachunkowość</title>`, ""}<meta name="description" content="Księgowość dla Twojej firmy. Świadczymy najlepsze i najbezpieczniejsze usługi księgowe dla osób fizycznych, małych i średnich przedsiębiorstw oraz spółek."><!-- HEAD_svelte-1rsy10r_END -->`, ""} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Services, "Services").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
