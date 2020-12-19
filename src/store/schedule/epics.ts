import { loadScheduleAsync, createGroupsAction } from './actions';
import { Epic } from 'redux-observable';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { filter, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { GetScheduleResponse, GroupFilter } from 'ApiModel';

export const loadScheduleEpic: Epic<
    RootAction,
    RootAction,
    RootState,
    Services
> = (action$, state$, { api }) => action$.pipe(
    filter(isActionOf(loadScheduleAsync.request)),
    switchMap((action) =>
        from(api.schedule.getSchedule(action.payload)).pipe(
            mergeMap((response) => from([loadScheduleAsync.success(response), createGroupsAction(transformTimetableResponse(response), state$.value.preferences.class)])),
            catchError((message: string) => of(loadScheduleAsync.failure(message)))
        )
    )
);


function transformTimetableResponse(response: GetScheduleResponse): GroupFilter {
    console.time('transformTimetableResponse');
    const newFilters = {} as GroupFilter;
    // TODO: (pawelp) remodel handling of error so that we map `success = false` to error at service level
    if (!response.success) return newFilters;

    response.resp.flat().flat().forEach(cl => {
        if (!newFilters[cl.subject] && cl.group !== "") {
            newFilters[cl.subject] = [];
        }
        if (cl.group !== "" && !newFilters[cl.subject].find(lesson => lesson.group === cl.group)) {
            newFilters[cl.subject].push(cl);
        }
    });
    // Object.values(newFilters).forEach(arr => arr.sort((a, b) => a.group.localeCompare(b.group)));
    console.timeEnd('transformTimetableResponse');
    return newFilters;
}

