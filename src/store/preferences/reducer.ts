import { combineReducers } from 'redux';
import { setTheme } from './actions';
import { createReducer } from 'typesafe-actions';


export const themeReducer = createReducer('')
    .handleAction(setTheme, (state, action) => {
        return action.payload;
    });

const preferencesReducer = combineReducers({
    theme: themeReducer,
});

export default preferencesReducer;
export type PreferencesState = ReturnType<typeof preferencesReducer>;