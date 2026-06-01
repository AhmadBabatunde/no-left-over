import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BXGMu-KO.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "No Left-Overs Nigeria — Authentic Nigerian Cuisine, Gbagada Lagos" },
      { name: "description", content: "No Left-Overs Nig Ltd — Authentic Nigerian Moi-Moin and catering in Gbagada, Lagos. Founded 2007." },
      { name: "author", content: "No Left-Overs Nigeria" },
      { property: "og:title", content: "No Left-Overs Nigeria" },
      { property: "og:description", content: "Authentic Nigerian Moi-Moin & catering — Gbagada, Lagos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: ""
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./reservations-DEpt9uqO.mjs");
const Route$5 = createFileRoute("/reservations")({
  head: () => ({
    meta: [{
      title: "Order & Contact — No Left-Overs Nigeria"
    }, {
      name: "description",
      content: "Order authentic Nigerian food from No Left-Overs Nigeria in Gbagada, Lagos. Order via WhatsApp or call us directly."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./menu-LDyc5oRs.mjs");
const Route$4 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — No Left-Overs Nigeria"
    }, {
      name: "description",
      content: "Browse our gourmet Nigerian menu — signature Moi-Moi, jollof, suya, and seasonal tasting selections in Lagos."
    }, {
      property: "og:title",
      content: "Menu — No Left-Overs Nigeria"
    }, {
      property: "og:description",
      content: "Gourmet Nigerian cuisine, plated for the discerning palate."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./gallery-KTZlFIAX.mjs");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — No Left-Overs Nigeria"
    }, {
      name: "description",
      content: "A visual feast — food photography and restaurant at No Left-Overs Nigeria in Gbagada, Lagos."
    }, {
      property: "og:title",
      content: "Gallery — No Left-Overs Nigeria"
    }, {
      property: "og:description",
      content: "See the food, the place, the moments."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-hf1EOuFk.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — No Left-Overs Nigeria"
    }, {
      name: "description",
      content: "Visit us in Gbagada, Lagos. By Corona School, 7 Sawyer Crescent, Gbagada, Lagos 100234. Phone, email, and directions to No Left-Overs Nigeria."
    }, {
      property: "og:title",
      content: "Contact — No Left-Overs Nigeria"
    }, {
      property: "og:description",
      content: "Get in touch — Gbagada, Lagos."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-cQIHQxsx.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — No Left-Overs Nigeria"
    }, {
      name: "description",
      content: "The story of Ayodeji Megbope and No Left-Overs Nig Ltd — from a N1,000 pot of Moin-Moin in 2007 to a full-scale catering brand in Gbagada, Lagos."
    }, {
      property: "og:title",
      content: "About — No Left-Overs Nigeria"
    }, {
      property: "og:description",
      content: "Our story, our founder, our mission."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BaVrGnrd.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "No Left-Overs Nigeria — Authentic Moi-Moi & Nigerian Cuisine, Gbagada Lagos"
    }, {
      name: "description",
      content: "The home of authentic Nigerian Moi-Moi and catering. From a N1,000 beginning in 2007 to Nigeria's premier catering brand. Visit us in Gbagada, Lagos."
    }, {
      property: "og:title",
      content: "No Left-Overs Nigeria — Gbagada, Lagos"
    }, {
      property: "og:description",
      content: "Authentic Nigerian Moi-Moi & catering. Visit us in Gbagada, Lagos."
    }, {
      property: "og:type",
      content: "website"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ReservationsRoute = Route$5.update({
  id: "/reservations",
  path: "/reservations",
  getParentRoute: () => Route$6
});
const MenuRoute = Route$4.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$6
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  GalleryRoute,
  MenuRoute,
  ReservationsRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
