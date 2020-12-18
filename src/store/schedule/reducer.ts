import { combineReducers } from 'redux';
import { GroupFilterDict, GroupFilter, ScheduleStatus, WeekSchedule } from "ApiModel";
import { createReducer } from 'typesafe-actions';
import { loadScheduleAsync } from "./actions";

export const isLoadingSchedule = createReducer({ loading: true, error: false } as ScheduleStatus)
    .handleAction(loadScheduleAsync.request, () => ({ loading: true, error: false } as ScheduleStatus))
    .handleAction(loadScheduleAsync.failure, () => ({ loading: false, error: true } as ScheduleStatus))
    .handleAction(loadScheduleAsync.success, (state, action) => {
        return { loading: false, error: !action.payload.success } as ScheduleStatus;
    });

export const schedule = createReducer([] as WeekSchedule)
    .handleAction(loadScheduleAsync.success, (state, action) => action.payload.resp ? action.payload.resp : []);

export const groups = createReducer({} as GroupFilter)
    .handleAction(loadScheduleAsync.success, (state, action) => {
        const newFilters = {} as GroupFilterDict;
        action.payload.resp.flat().flat().forEach(cl => {
            if (!newFilters[cl.subject]) {
                newFilters[cl.subject] = new Set();
            }
            if (cl.group !== "") {
                newFilters[cl.subject].add(cl.group);
            }
        });
        const newFiltersState = {} as GroupFilter;
        Object.keys(newFilters).forEach(element => {
            if (newFilters[element].size > 0) {
                newFiltersState[element] = Array.from(newFilters[element].keys());
            }
        });
        console.log(newFiltersState);
        return { ...newFiltersState };
    });

const scheduleReducer = combineReducers({
    isLoadingSchedule,
    schedule,
    groups,
});

export default scheduleReducer;
export type ScheduleState = ReturnType<typeof scheduleReducer>;