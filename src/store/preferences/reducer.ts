import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { setClass, setTheme } from './actions';
import { createReducer } from 'typesafe-actions';
import { persistCombineReducers } from 'redux-persist';


export const themeReducer = createReducer('')
    .handleAction(setTheme, (state, action) => {
        return action.payload;
    });

export const classReducer = createReducer('')
    .handleAction(setClass, (state, action) => {
        return action.payload;
    });

const persistConfig = {
    key: 'preferences',
    storage,
    whitelist: ['theme'],
}

const preferencesReducer = persistCombineReducers(persistConfig, {
    theme: themeReducer,
    class: classReducer,
});

export default preferencesReducer;
export type PreferencesState = ReturnType<typeof preferencesReducer>;