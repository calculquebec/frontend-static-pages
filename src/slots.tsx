import { SlotOperation } from '@openedx/frontend-base';

//import { exampleHeaderApp } from './widgets/ExampleHeader';
import { learnerDashboardHeaderApp } from '@openedx/frontend-app-learner-dashboard/src/widgets/LearnerDashboardHeader';

const slots: SlotOperation[] = [
//    [],
//  ...(exampleHeaderApp.slots ?? []),
//  ...(headerApp.slots as []),
    ...(learnerDashboardHeaderApp.slots as []),
];

export default slots;
