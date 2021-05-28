import { combineEpics } from 'redux-observable';

import * as scheduleEpics from './schedule/epics';
import * as classesEpics from './classes/epics';
import * as dateEpics from './date/epics';

export default combineEpics(
    ...Object.values(scheduleEpics),
    ...Object.values(classesEpics),
    ...Object.values(dateEpics),
);
