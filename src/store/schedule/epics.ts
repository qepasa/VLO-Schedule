import { loadScheduleAsync } from './actions';
import { Epic } from 'redux-observable';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

export const loadScheduleEpic: Epic<
    RootAction,
    RootAction,
    RootState,
    Services
> = (action$, state$, { api }) => action$.pipe(
    filter(isActionOf(loadScheduleAsync.request)),
    switchMap((action) =>
        from(api.schedule.getSchedule(action.payload)).pipe(
            map(loadScheduleAsync.success),
            catchError((message: string) => of(loadScheduleAsync.failure(message))
            )
        )
    )
);