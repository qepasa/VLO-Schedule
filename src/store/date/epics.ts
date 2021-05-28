import { nextWeek, previousWeek, setDate, dateChanged } from './actions';
import { isActionOf, RootState } from 'typesafe-actions';
import { RootAction } from 'typesafe-actions';
import { filter, mapTo } from 'rxjs/operators';
import { Epic } from 'redux-observable';


export const nextWeekEpic: Epic<
    RootAction,
    RootAction,
    RootState> = (action$, state$) =>
        action$.pipe(
            filter(isActionOf([nextWeek, previousWeek, setDate])),
            mapTo(dateChanged())
        );