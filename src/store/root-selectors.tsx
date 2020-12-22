import { RootState } from "typesafe-actions";
import { getFiltersForCurrentClass as preferencesGetFilters } from "./preferences/selectors";
import { getTimetableSize as scheduleGetTimetableSize, filteredTimetable as scheduleFilteredTimetable } from "./schedule/selectors";

export const getFiltersForCurrentClass = (state: RootState) => preferencesGetFilters(state.preferences);

export const getTimetableSize = (state: RootState) => scheduleGetTimetableSize(state.schedule);

export const filteredTimetable = (state: RootState) => scheduleFilteredTimetable(state.schedule, state.preferences.groupFilters[state.preferences.class]);