import { App, LinkMenuItem, WidgetOperationTypes } from '@openedx/frontend-base';

import { faqRole, ansRole, dashboardRole } from '../../constants';

const app: App = {
  appId: 'org.openedx.frontend.app.template.exampleHeader',
  slots: [
    {
      slotId: 'org.openedx.frontend.slot.header.primaryLinks.v1',
      id: 'org.openedx.frontend.widget.template.exampleHeaderLink.v1',
      op: WidgetOperationTypes.APPEND,
      element: (
        <LinkMenuItem
          label="FAQ"
          role={faqRole}
          variant="navLink"
        />
      ),
      condition: {
        active: [faqRole]
      },
    },
    {
      slotId: 'org.openedx.frontend.slot.header.primaryLinks.v1',
      id: 'org.openedx.frontend.widget.template.exampleHeaderLink.v1',
      op: WidgetOperationTypes.APPEND,
      element: (
        <LinkMenuItem
          label="ANS"
          role={ansRole}
          variant="navLink"
        />
      ),
      condition: {
        active: [ansRole],
      },
    },
    {
      slotId: 'org.openedx.frontend.slot.header.primaryLinks.v1',
      id: 'org.openedx.frontend.widget.template.exampleHeaderLink.v1',
      op: WidgetOperationTypes.APPEND,
      element: (
        <LinkMenuItem
          label="Cours"
          role={dashboardRole}
          variant="navLink"
        />
      ),
      condition: {
        active: [dashboardRole]
      }
    },
  ],
};

export default app;
