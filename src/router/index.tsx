import { createHashRouter } from "react-router-dom";
import { Introduccion } from "../pages/Introduccion";

export const router = createHashRouter([
  {
    path: "/",
    element: <Introduccion />,
  },
  {
    path: "/instalacion",
    lazy: async () => ({
      Component: (await import("../pages/Instalacion")).Instalacion,
    }),
  },
  {
    path: "/fundamentos",
    lazy: async () => ({
      Component: (await import("../pages/Fundamentos")).Fundamentos,
    }),
  },
  {
    path: "/web",
    lazy: async () => ({ Component: (await import("../pages/Web")).Web }),
  },
  {
    path: "/persistencia",
    lazy: async () => ({
      Component: (await import("../pages/Persistencia")).Persistencia,
    }),
  },
  {
    path: "/servicios",
    lazy: async () => ({
      Component: (await import("../pages/Servicios")).Servicios,
    }),
  },
  {
    path: "/estructura",
    lazy: async () => ({
      Component: (await import("../pages/Estructura")).Estructura,
    }),
  },
  {
    path: "/seguridad",
    lazy: async () => ({
      Component: (await import("../pages/Seguridad")).Seguridad,
    }),
  },
  {
    path: "/testing",
    lazy: async () => ({
      Component: (await import("../pages/Testing")).Testing,
    }),
  },
  {
    path: "/api",
    lazy: async () => ({ Component: (await import("../pages/Api")).Api }),
  },
  {
    path: "/deploy",
    lazy: async () => ({
      Component: (await import("../pages/Deploy")).Deploy,
    }),
  },
  {
    path: "/*",
    element: <h1>404 - Página no encontrada</h1>,
  },
]);
