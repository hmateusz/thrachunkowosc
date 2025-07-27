import { c as create_ssr_component, e as each, v as validate_component, d as escape } from "../../../chunks/ssr.js";
import { C as Card, B as Button } from "../../../chunks/Card.js";
const checkIcon = "✓";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pricingServices = [
    {
      service: "RYCZAŁT EWIDENCJONOWANY",
      price: "OD 80 zł miesięcznie"
    },
    {
      service: "KSIĘGA PRZYCHODÓW I ROZCHODÓW",
      price: "OD 100 zł miesięcznie"
    },
    {
      service: "KSIĘGI HANDLOWE",
      price: "OD 500 zł miesięcznie"
    },
    {
      service: "KADRY I PŁACE",
      price: "OD 25 zł miesięcznie za pracownika"
    }
  ];
  const promotions = [
    {
      title: "Na start",
      description: "Dla firm, które rozpoczynają działalność – pierwszy miesiąc za 1,00 zł, dwa kolejne 50% rabatu"
    },
    {
      title: "Nowy klient",
      description: "Dla firm podpisujących umowę z biurem – dwa pierwsze miesiące 50% rabatu"
    },
    {
      title: "Polecony",
      description: "Za polecenie innej firmie naszego biura rachunkowego skutkującego podpisaniem umowy o współpracy 50 % rabatu na usługi księgowe za jeden miesiąc"
    }
  ];
  const pricingFactors = [
    "zakres świadczonych usług",
    "nakład i złożoność prac",
    "czasochłonność",
    "skalę i specyfikę prowadzonej działalności gospodarczej",
    "formę organizacyjną",
    "indywidualne potrzeby i oczekiwania"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-19e0hob_START -->${$$result.title = `<title>Cennik - Tatiana Hajduczek – rachunkowość</title>`, ""}<meta name="description" content="Konkurencyjne ceny usług księgowych. Ryczałt ewidencjonowany, księga przychodów i rozchodów, księgi handlowe, kadry i płace. Promocje dla nowych klientów."><!-- HEAD_svelte-19e0hob_END -->`, ""}  <section class="bg-gradient-to-br from-primary-50 to-white section-padding" data-svelte-h="svelte-1pzmlz5"><div class="container-custom"><div class="max-w-3xl mx-auto text-center space-y-6"><h1 class="text-4xl sm:text-5xl font-bold text-primary-800">CENNIK</h1> <p class="text-lg text-primary-600">Oferujemy konkurencyjne ceny w zamian za najwyższą jakość usług</p></div></div></section>  <section class="section-padding bg-white"><div class="container-custom"><div class="max-w-4xl mx-auto space-y-12"> <div class="text-center space-y-6"><p class="text-xl text-primary-600 leading-relaxed" data-svelte-h="svelte-f8k16l">Ceny usług ustalamy indywidualnie. W tej sprawie najlepiej skontaktować się z nami telefonicznie lub mailowo. Bierzemy pod uwagę przede wszystkim:</p> <div class="space-y-4 mt-10 max-w-3xl mx-auto">${each(pricingFactors, (factor) => {
    return `<div class="flex items-center space-x-4"><span class="text-green-500 text-2xl flex-shrink-0">${escape(checkIcon)}</span> <span class="text-lg text-primary-700 font-medium">${escape(factor)}</span> </div>`;
  })}</div> <p class="text-xl text-primary-600 mt-10 font-medium" data-svelte-h="svelte-1os2umz">Poniżej podajemy orientacyjne ceny najczęściej świadczonych usług.</p></div>  ${validate_component(Card, "Card").$$render($$result, { variant: "bordered", class: "mt-12" }, {}, {
    default: () => {
      return `<div class="overflow-x-auto"><table class="w-full"><thead data-svelte-h="svelte-1ytf7jl"><tr class="border-b border-primary-200"><th class="text-left py-6 px-8 font-bold text-primary-800 text-lg">USŁUGA</th> <th class="text-right py-6 px-8 font-bold text-primary-800 text-lg">CENA</th></tr></thead> <tbody>${each(pricingServices, (service) => {
        return `<tr class="border-b border-primary-100 last:border-b-0"><td class="py-6 px-8 text-primary-700 text-lg font-medium">${escape(service.service)}</td> <td class="py-6 px-8 text-right font-bold text-primary-600 text-lg">${escape(service.price)}</td> </tr>`;
      })}</tbody></table></div>`;
    }
  })}</div></div></section>  <section class="section-padding bg-primary-50"><div class="container-custom"><div class="text-center space-y-4 mb-16" data-svelte-h="svelte-t3j2tn"><h2 class="text-4xl sm:text-5xl font-bold text-primary-800">UWAGA PROMOCJE</h2></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">${each(promotions, (promotion) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        variant: "bordered",
        class: "bg-white hover:shadow-medium transition-all duration-200"
      },
      {},
      {
        default: () => {
          return `<div class="space-y-6 text-center p-8"><h3 class="text-2xl font-bold text-primary-800">${escape(promotion.title)}</h3> <p class="text-lg text-primary-600 leading-relaxed">${escape(promotion.description)}</p></div> `;
        }
      }
    )}`;
  })}</div></div></section>  <section class="section-padding bg-primary-600"><div class="container-custom text-center"><div class="max-w-2xl mx-auto space-y-6"><h2 class="text-3xl sm:text-4xl font-bold text-white" data-svelte-h="svelte-1lhqy3z">Gotowy na współpracę?</h2> <p class="text-lg text-primary-100" data-svelte-h="svelte-1t6cw2i">Skontaktuj się z nami, aby otrzymać indywidualną wycenę dostosowaną do Twoich potrzeb.</p> ${validate_component(Button, "Button").$$render(
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
