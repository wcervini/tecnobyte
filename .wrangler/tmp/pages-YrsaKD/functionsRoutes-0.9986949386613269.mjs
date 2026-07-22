import { onRequest as __api_contact_js_onRequest } from "/home/underghround/project/tecnobyte/functions/api/contact.js"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_contact_js_onRequest],
    },
  ]