import { combineEpics } from 'redux-observable';

import * as scheduleEpics from './schedule/epics';
import * as classesEpics from './classes/epics';

export default combineEpics(
    ...Object.values(scheduleEpics),
    ...Object.values(classesEpics),
);
