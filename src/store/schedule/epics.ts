import { dateChanged } from './../date/actions';
import { loadScheduleAsync, createGroupsAction } from './actions';
import { Epic } from 'redux-observable';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { filter, switchMap, catchError, mergeMap, concatMap, mapTo, withLatestFrom, map } from 'rxjs/operators';
import { GetScheduleResponse, GroupFilter } from 'ApiModel';

export const loadScheduleEpic: Epic<
    RootAction,
    RootAction,
    RootState,
    Services
> = (action$, state$, { api }) => action$.pipe(
    filter(isActionOf(loadScheduleAsync.request)),
    withLatestFrom(state$),
    switchMap(([action, state]) =>
        from(api.schedule.getSchedule(action.payload, state.date)).pipe(
            concatMap((response) => from([createGroupsAction(transformTimetableResponse(response), state.preferences.class), loadScheduleAsync.success(response)])),
            catchError((message: string) => of(loadScheduleAsync.failure(message)))
        )
    )
);

export const onDateChanged: Epic<
    RootAction,
    RootAction,
    RootState
> = (action$, state$) => action$.pipe(
    filter(isActionOf(dateChanged)),
    withLatestFrom(state$),
    map(([_, state]) => loadScheduleAsync.request(state.preferences.class))
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

