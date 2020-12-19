import { combineReducers } from 'redux';
import { GroupFilter, ScheduleStatus, WeekSchedule } from "ApiModel";
import { createReducer } from 'typesafe-actions';
import { createGroupsAction, loadScheduleAsync } from "./actions";

export const isLoadingSchedule = createReducer({ loading: true, error: false } as ScheduleStatus)
    .handleAction(loadScheduleAsync.request, () => ({ loading: true, error: false } as ScheduleStatus))
    .handleAction(loadScheduleAsync.failure, () => ({ loading: false, error: true } as ScheduleStatus))
    .handleAction(loadScheduleAsync.success, (state, action) => {
        return { loading: false, error: !action.payload.success } as ScheduleStatus;
    });

export const schedule = createReducer([] as WeekSchedule)
    .handleAction(loadScheduleAsync.success, (state, action) => action.payload.resp ? action.payload.resp : []);

// TODO(pawelp): do this using selectors instead. Preferably memoized one like reselect. 
export const groups = createReducer({} as GroupFilter)
    .handleAction(createGroupsAction, (state, action) => {
        return { ...action.payload };
    });

const scheduleReducer = combineReducers({
    isLoadingSchedule,
    schedule,
    groups,
});

export default scheduleReducer;
export type ScheduleState = ReturnType<typeof scheduleReducer>;