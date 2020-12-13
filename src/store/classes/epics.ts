import { loadClassesAsync } from './actions';
import { Epic } from "redux-observable";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { isActionOf, RootAction, RootState, Services } from "typesafe-actions";
import { from, of } from 'rxjs';

export const loadClassesEpic: Epic<
    RootAction,
    RootAction,
    RootState,
    Services
> = (action$, state$, { api }) => action$.pipe(
    filter(isActionOf(loadClassesAsync.request)),
    switchMap(() =>
        from(api.schedule.getClasses()).pipe(
            map(loadClassesAsync.success),
            catchError((message: string) => of(loadClassesAsync.failure(message))
            )
        )
    )
);