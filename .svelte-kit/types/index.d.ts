type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/about": undefined;
	"/contact": undefined;
	"/pricing": undefined;
	"/services": undefined
};

export type RouteId = "/" | "/about" | "/contact" | "/pricing" | "/services";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/about" | "/contact" | "/pricing" | "/services";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/favicon.png";