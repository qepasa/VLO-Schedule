import { combineReducers } from 'redux';
import { GetSubstitutionsResponse, SubstitutionsStatus, Substitution, WeekSubstitutions } from "ApiModel";
import { createReducer } from 'typesafe-actions';
import { loadSubstitutionsAsync } from './actions';

export const isLoadingSubstitutions = createReducer({ loading: 0, error: false } as SubstitutionsStatus)
    .handleAction(loadSubstitutionsAsync.request, () => ({ loading: 0, error: false } as SubstitutionsStatus))
    .handleAction(loadSubstitutionsAsync.failure, () => ({ loading: 0, error: true } as SubstitutionsStatus))
    .handleAction(loadSubstitutionsAsync.success, (state, action) => {
        // if any request errored out, return error state
        // TODO(pawel): this can be handled better, maybe?
        if (state.error) return state;
        return { loading: state.loading + 1, error: false } as SubstitutionsStatus;
    });

export const substitutions = createReducer(Array<Substitution[]>(7) as WeekSubstitutions)
    .handleAction(loadSubstitutionsAsync.success, (state, action) => {
        console.log(`Hello there: ${action}`);
        state[action.payload.dayOfWeek] = action.payload.response.substitutions;
        return { ...state };
    });

const substitutionsReducer = combineReducers({
    isLoadingSubstitutions,
    substitutions,
    // groups,
});

export default substitutionsReducer;
export type SubstitutionsState = ReturnType<typeof substitutionsReducer>;
