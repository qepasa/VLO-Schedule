import { setClass, updateClass } from './actions';
import { Epic } from "redux-observable";
import { filter, switchMap, withLatestFrom } from "rxjs/operators";
import { isActionOf, RootAction, RootState } from "typesafe-actions";
import { EMPTY, iif, of } from 'rxjs';


// We trigger load schedule and load substitutions whenever the class changes.
// Those two actions wait for updateClass action so make sure it's triggered only when
// we actually change class.
export const updateClassEpic: Epic<
    RootAction,
    RootAction,
    RootState> = (action$, state$) =>
        action$.pipe(
            filter(isActionOf(setClass)),
            withLatestFrom(state$),
            switchMap(([action, state]) =>
                iif(() => action.payload != state.preferences.class,
                    of(updateClass(action.payload)),
                    EMPTY)
            )
        );