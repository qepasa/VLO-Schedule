import { combineEpics } from 'redux-observable';

import * as scheduleEpics from './schedule/epics';

export default combineEpics(
    ...Object.values(scheduleEpics),
);
