import {
  templateRole,
  faqRole,
  ansRole,
  slaRole,
} from './constants';

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
    id: 'org.openedx.frontend.route.ans.main',
    path: 'ans',
    handle: {
      roles: [ansRole, slaRole, templateRole],
    },
    async lazy() {
      const module = await import(/* webpackChunkName: "ans-main" */ './Main');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import(/* webpackChunkName: "ans-page" */ './ans/ANSPage');
          return { Component: module.default };
        },
      },
    ],
  },
  {
    id: 'org.openedx.frontend.route.ans.static',
    path: 'static-pages/ans',
    handle: {
      roles: [ansRole, slaRole, templateRole],
    },
    async lazy() {
      const module = await import(/* webpackChunkName: "ans-static-main" */ './Main');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import(/* webpackChunkName: "ans-page" */ './ans/ANSPage');
          return { Component: module.default };
        },
      },
    ],
  },
  {
    id: 'org.openedx.frontend.route.sla.main',
    path: 'sla',
    handle: {
      roles: [slaRole, ansRole, templateRole],
    },
    async lazy() {
      const module = await import(/* webpackChunkName: "sla-main" */ './Main');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import(/* webpackChunkName: "ans-page" */ './ans/ANSPage');
          return { Component: module.default };
        },
      },
    ],
  },
  {
    id: 'org.openedx.frontend.route.sla.static',
    path: 'static-pages/sla',
    handle: {
      roles: [slaRole, ansRole, templateRole],
    },
    async lazy() {
      const module = await import(/* webpackChunkName: "sla-static-main" */ './Main');
      return { Component: module.default };
    },
    children: [
      {
        index: true,
        async lazy() {
          const module = await import(/* webpackChunkName: "ans-page" */ './ans/ANSPage');
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

