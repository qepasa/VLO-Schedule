import { combineReducers } from 'redux';
import { ScheduleStatus, WeekSchedule } from "ApiModel";
import { createReducer } from 'typesafe-actions';
import { loadScheduleAsync } from "./actions";

export const isLoadingSchedule = createReducer({ loading: true, error: false } as ScheduleStatus)
    .handleAction(loadScheduleAsync.request, () => ({ loading: true, error: false } as ScheduleStatus))
    .handleAction(loadScheduleAsync.failure, () => ({ loading: false, error: true } as ScheduleStatus))
    .handleAction(loadScheduleAsync.success, (state, action) => {
        return {loading: false, error: !action.payload.success} as ScheduleStatus;
    });

export const schedule = createReducer([] as WeekSchedule)
    .handleAction(loadScheduleAsync.success, (state, action) => action.payload.resp ? action.payload.resp : []);

const scheduleReducer = combineReducers({
    isLoadingSchedule,
    schedule
});

export default scheduleReducer;
export type ScheduleState = ReturnType<typeof scheduleReducer>;