import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("../pages/Introduccion")).default,
    }),
  },
  {
    path: "/instalacion",
    lazy: async () => ({
      Component: (await import("../pages/Instalacion")).default,
    }),
  },
  {
    path: "/fundamentos",
    lazy: async () => ({
      Component: (await import("../pages/Fundamentos")).default,
    }),
  },
  {
    path: "/web",
    lazy: async () => ({ Component: (await import("../pages/Web")).default }),
  },
  {
    path: "/persistencia",
    lazy: async () => ({
      Component: (await import("../pages/Persistencia")).default,
    }),
  },
  {
    path: "/servicios",
    lazy: async () => ({
      Component: (await import("../pages/Servicios")).default,
    }),
  },
  {
    path: "/seguridad",
    lazy: async () => ({
      Component: (await import("../pages/Seguridad")).default,
    }),
  },
  {
    path: "/testing",
    lazy: async () => ({
      Component: (await import("../pages/Testing")).default,
    }),
  },
  {
    path: "/api",
    lazy: async () => ({ Component: (await import("../pages/Api")).default }),
  },
  {
    path: "/deploy",
    lazy: async () => ({
      Component: (await import("../pages/Deploy")).default,
    }),
  },
]);
