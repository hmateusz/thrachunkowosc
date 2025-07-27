import { c as create_ssr_component, b as subscribe, e as each, d as escape, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import "class-variance-authority";
let MenuIcon = "☰";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPath;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Kim jesteśmy",
      href: "/about"
    },
    { name: "Co robimy", href: "/services" },
    { name: "Cennik", href: "/pricing" },
    { name: "Kontakt", href: "/contact" }
  ];
  currentPath = $page.url.pathname;
  $$unsubscribe_page();
  return `<header class="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50"><div class="container-custom"><div class="flex items-center justify-between h-24"> <div class="flex-shrink-0" data-svelte-h="svelte-1709lv9"><a href="/" class="flex items-center"><img src="https://thrachunkowosc.pl/wp-content/uploads/2017/11/logo-retina.png" alt="Tatiana Hajduczek – rachunkowość" class="h-20"></a></div>  <nav class="hidden md:flex items-center space-x-8">${each(navigation, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="${"text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200 " + escape(
      currentPath === item.href ? "text-primary-800 font-semibold" : "",
      true
    )}">${escape(item.name)} </a>`;
  })}</nav>  <div class="md:hidden"><button type="button" class="text-primary-600 hover:text-primary-800 p-2"><span class="text-2xl">${escape(MenuIcon)}</span></button></div></div>  ${``}</div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer class="bg-primary-50 border-t border-primary-200 py-6"><div class="container-custom"><div class="text-center"><p class="text-primary-500">© ${escape(currentYear)} Tatiana Hajduczek. Wszelkie prawa zastrzeżone.</p></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen flex flex-col bg-white">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="flex-1">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
