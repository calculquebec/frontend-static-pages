import { templateRole, faqRole } from './constants';

const routes = [
  {
    id: 'org.openedx.frontend.route.faq.main',
    path: 'faq',
    handle: {
      roles: [faqRole, templateRole],
    },
    async lazy() {
      const module = await import(/* webpackChunkName: "faq-main" */ './Main');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import(/* webpackChunkName: "faq-page" */ './faq/FAQPage');
          return { Component: module.default };
        },
      },
    ],
  },
  {
    id: 'org.openedx.frontend.route.faq.static',
    path: 'static-pages/faq',
    handle: {
      roles: [faqRole, templateRole],
    },
    async lazy() {
      const module = await import(/* webpackChunkName: "faq-static-main" */ './Main');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import(/* webpackChunkName: "faq-page" */ './faq/FAQPage');
          return { Component: module.default };
        },
      },
    ],
  },
  {
    id: 'org.openedx.frontend.route.template.main',
    path: 'static-pages/example',
    handle: {
      roles: [templateRole],
    },
    async lazy() {
      const module = await import(/* webpackChunkName: "template-main" */ './Main');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import(/* webpackChunkName: "template-example" */ './example/ExamplePage');
          return { Component: module.default };
        },
      },
    ],
  },
];

export default routes;
