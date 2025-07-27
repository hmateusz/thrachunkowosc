import { c as create_ssr_component, v as validate_component, e as each, d as escape, f as add_attribute } from "../../../chunks/ssr.js";
import { C as Card, B as Button } from "../../../chunks/Card.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapContainer;
  const icons = {
    Mail: "✉️",
    Phone: "📞",
    MapPin: "📍",
    Clock: "⏰"
  };
  const contactInfo = [
    {
      icon: "Phone",
      title: "Telefon",
      value: "+48 722 381 309",
      description: ""
    },
    {
      icon: "Mail",
      title: "Email",
      value: "thajduczek@thrachunkowosc.pl",
      description: ""
    },
    {
      icon: "MapPin",
      title: "Biuro",
      value: "Ul. Piłsudskiego 6/3",
      description: "44-200 Rybnik"
    },
    {
      icon: "Clock",
      title: "Godziny pracy",
      value: "Pn-Pt: 7:30-15:30",
      description: ""
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1teorxm_START -->${$$result.title = `<title>Kontakt - Tatiana Hajduczek – rachunkowość</title>`, ""}<meta name="description" content="Skontaktuj się z Tatianą Hajduczek w sprawie profesjonalnych usług księgowych. Umów konsultację lub uzyskaj odpowiedzi na pytania. Telefon, email i godziny pracy."><!-- HEAD_svelte-1teorxm_END -->`, ""}  <section class="bg-gradient-to-br from-primary-50 to-white section-padding" data-svelte-h="svelte-1op1x0z"><div class="container-custom"><div class="max-w-3xl mx-auto text-center space-y-6"><h1 class="text-4xl sm:text-5xl font-bold text-primary-800">Kontakt</h1> <p class="text-lg text-primary-600">Potrzebujesz profesjonalnych usług księgowych? Skontaktuj się z nami. Jesteśmy tutaj, aby pomóc Ci w prowadzeniu księgowości i optymalizacji podatkowej Twojej firmy.</p></div></div></section> <section class="section-padding bg-white"><div class="container-custom"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"> ${validate_component(Card, "Card").$$render($$result, { variant: "bordered" }, {}, {
    default: () => {
      return `<div class="space-y-4"><div class="flex items-center space-x-2"><span class="text-2xl">${escape(icons.MapPin)}</span> <h3 class="text-lg font-semibold text-primary-800" data-svelte-h="svelte-11bv6vq">Lokalizacja biura</h3></div> <div class="w-full h-64 sm:h-80 md:h-96 bg-primary-50 rounded-lg overflow-hidden"${add_attribute("this", mapContainer, 0)} data-svelte-h="svelte-1qre6mx"></div> <div class="text-center space-y-2"><p class="text-primary-700 font-medium" data-svelte-h="svelte-1ga7c6y">Ul. Piłsudskiego 6/3, 44-200 Rybnik</p> ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "outline",
          size: "sm",
          href: "https://maps.google.com/?q=Ul.+Piłsudskiego+6/3,+44-200+Rybnik",
          target: "_blank"
        },
        {},
        {
          default: () => {
            return `Otwórz w Google Maps`;
          }
        }
      )}</div></div>`;
    }
  })}  <div class="space-y-8"><div><h2 class="text-2xl font-bold text-primary-800 mb-6" data-svelte-h="svelte-1amr1bp">Skontaktuj się z nami</h2> <div class="space-y-6">${each(contactInfo, (info) => {
    return `<div class="flex items-start space-x-4"><div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"><span class="text-xl">${escape(icons[info.icon])}</span></div> <div><h3 class="font-semibold text-primary-800">${escape(info.title)}</h3> <p class="text-primary-700 font-medium">${escape(info.value)}</p> <p class="text-primary-600 text-sm">${escape(info.description)}</p></div> </div>`;
  })}</div></div>  ${validate_component(Card, "Card").$$render($$result, { variant: "elevated" }, {}, {
    default: () => {
      return `<div class="space-y-4"><h3 class="font-semibold text-primary-800" data-svelte-h="svelte-vhikls">Potrzebujesz natychmiastowej pomocy?</h3> <div class="space-y-3">${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "outline",
          class: "w-full justify-start",
          href: "tel:+48722381309"
        },
        {},
        {
          default: () => {
            return `<span class="mr-2">${escape(icons.Phone)}</span>
                Zadzwoń: +48 722 381 309`;
          }
        }
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          variant: "outline",
          class: "w-full justify-start",
          href: "mailto:thajduczek@thrachunkowosc.pl"
        },
        {},
        {
          default: () => {
            return `<span class="mr-2">${escape(icons.Mail)}</span>
                Email: thajduczek@thrachunkowosc.pl`;
          }
        }
      )}</div></div>`;
    }
  })}</div></div></div></section>`;
});
export {
  Page as default
};
