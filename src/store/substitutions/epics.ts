import { updateClass } from './../preferences/actions';
import { differenceInCalendarDays, eachDayOfInterval } from 'date-fns';
import { endOfWeek } from 'date-fns';
import { loadSubstitutionsAsync } from './actions';
import { Epic } from 'redux-observable';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { filter, catchError, mergeMap, withLatestFrom, map, mergeAll, switchMap } from 'rxjs/operators';
import { addWeeks, startOfWeek } from 'date-fns';
import { pl } from 'date-fns/locale';
import { dateChanged } from '../date/actions';
import { GetCurrentDateInPoland } from '../../utils/time-utils';

export const loadSubstitutionsEpic: Epic<
    RootAction,
    RootAction,
    RootState,
    Services
> = (action$, state$, { api }) => action$.pipe(
    filter(isActionOf(loadSubstitutionsAsync.request)),
    withLatestFrom(state$),
    mergeMap(([action, state]) =>
        GetSubstitutionsRequestsForCurrentWeek({ api }, action.payload, state.date)
    ),
    mergeAll(),
);

export const onDateChanged: Epic<
    RootAction,
    RootAction,
    RootState
> = (action$, state$) => action$.pipe(
    filter(isActionOf(dateChanged)),
    withLatestFrom(state$),
    map(([_, state]) => loadSubstitutionsAsync.request(state.preferences.class))
);

export const onClassChanged: Epic<
    RootAction,
    RootAction,
    RootState
> = (action$, state$) => action$.pipe(
    filter(isActionOf(updateClass)),
    withLatestFrom(state$),
    switchMap(([, state]) => of(loadSubstitutionsAsync.request(state.preferences.class)))
);

function GetSubstitutionsRequestsForCurrentWeek({ api }: Services, classParam: string, weekOffset: number) {
    const dayFromDestinationWeek = addWeeks(GetCurrentDateInPoland(), weekOffset);
    console.log(`base day: ${dayFromDestinationWeek}`);
    const firstDayOfWeek = startOfWeek(dayFromDestinationWeek, { locale: pl, weekStartsOn: 1 });
    const lastDayOfWeek = endOfWeek(dayFromDestinationWeek, { locale: pl, weekStartsOn: 1 });
    const daysInWeek = eachDayOfInterval({
        start: firstDayOfWeek,
        end: lastDayOfWeek
    });
    console.log(daysInWeek);
    console.log(daysInWeek.map(day => differenceInCalendarDays(day, GetCurrentDateInPoland())));
    const reqPromises = daysInWeek.map(day => differenceInCalendarDays(day, GetCurrentDateInPoland())).map(offset => api.schedule.getSubstitutions(classParam, offset));

    const reqObservables = reqPromises.map((req, idx) => from(req).pipe(
        map(resp => loadSubstitutionsAsync.success({ response: resp, dayOfWeek: idx })),
        catchError((message: string) => of(loadSubstitutionsAsync.failure(message))),
    ));
    return reqObservables;
}