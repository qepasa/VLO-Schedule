import { filter } from 'rxjs/operators';
import { GroupFilter, WeekSchedule } from 'ApiModel';
import { ScheduleState } from './reducer';

export const getSchedule = (state: ScheduleState) => state.schedule;

export const getTimetableSize = (state: ScheduleState) => state.schedule.flat().flat().length;

export const filteredTimetable = (state: ScheduleState, groupFilters: GroupFilter) => {
    const timetable = state.schedule;

    if (timetable.length === 0) return [];
    if(groupFilters === undefined) return timetable;

    const filteredTimetable: WeekSchedule = JSON.parse(JSON.stringify(timetable));
    for (let dayIdx = 0; dayIdx < filteredTimetable.length; ++dayIdx) {
        for (let hourIdx = 0; hourIdx < filteredTimetable[dayIdx].length; ++hourIdx) {
            const xd = filteredTimetable[dayIdx][hourIdx].filter(lesson =>
                (groupFilters[lesson.subject] === undefined) ||
                (groupFilters[lesson.subject] !== undefined && groupFilters[lesson.subject].find(v => v.group === lesson.group) !== undefined)
            );
            filteredTimetable[dayIdx][hourIdx] = xd;
        }
    }
    return filteredTimetable;
}