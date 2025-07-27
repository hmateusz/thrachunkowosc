import { c as create_ssr_component, h as compute_rest_props, i as spread, j as escape_attribute_value, k as escape_object, f as add_attribute } from "./ssr.js";
import { cva } from "class-variance-authority";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["variant", "size", "href", "class"]);
  let { variant = "primary" } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  let { class: className = "" } = $$props;
  const buttonVariants = cva("inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg", {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-medium",
        secondary: "bg-primary-100 text-primary-800 hover:bg-primary-200",
        outline: "border border-primary-300 bg-transparent text-primary-700 hover:bg-primary-50",
        ghost: "text-primary-600 hover:bg-primary-100"
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg"
      }
    },
    defaultVariants: { variant: "primary", size: "md" }
  });
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(buttonVariants({ variant, size, class: className }))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      {
        class: escape_attribute_value(buttonVariants({ variant, size, class: className }))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "default" } = $$props;
  let { padding = "md" } = $$props;
  let { class: className = "" } = $$props;
  const cardVariants = cva("bg-white rounded-xl", {
    variants: {
      variant: {
        default: "",
        bordered: "border border-primary-200",
        elevated: "shadow-soft hover:shadow-medium transition-shadow duration-200"
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: { variant: "default", padding: "md" }
  });
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0) $$bindings.padding(padding);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${add_attribute("class", cardVariants({ variant, padding, class: className }), 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Button as B,
  Card as C
};
