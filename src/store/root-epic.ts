import { combineEpics } from 'redux-observable';

import * as scheduleEpics from './schedule/epics';
import * as classesEpics from './classes/epics';
import * as dateEpics from './date/epics';
import * as substitutionsEpics from './substitutions/epics';
import * as preferencesEpics from './preferences/epics';

export default combineEpics(
    ...Object.values(scheduleEpics),
    ...Object.values(classesEpics),
    ...Object.values(dateEpics),
    ...Object.values(preferencesEpics),
    ...Object.values(substitutionsEpics),
);
