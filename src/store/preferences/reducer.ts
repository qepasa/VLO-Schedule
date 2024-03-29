import { createGroupsAction } from './../schedule/actions';
import storage from 'redux-persist/lib/storage';
import { addGroup, removeGroup, setTheme, updateClass } from './actions';
import { createReducer } from 'typesafe-actions';
import { persistCombineReducers } from 'redux-persist';
import { GroupFiltersByClass } from 'ApiModel';


export const themeReducer = createReducer('')
    .handleAction(setTheme, (state, action) => {
        return action.payload;
    });

export const classReducer = createReducer('')
    .handleAction(updateClass, (state, action) => {
        return action.payload;
    });

export const groupFiltersReducer = createReducer({} as GroupFiltersByClass)
    .handleAction(createGroupsAction, (state, action) => {
        /// TODO(pawelp): this should be more clever. In particular, we'll miss groups in new show up and have groups left
        // behind if some groups get removed.
        const newState = state;
        if (!newState[action.meta]) {
            newState[action.meta] = action.payload;
        }
        return { ...newState };
    })
    .handleAction(addGroup, (state, action) => {
        const newState = state;
        newState[action.meta][action.payload.subject].push(action.payload);
        const newGroupsForCurrentClass = newState[action.meta];
        delete newState[action.meta];

        return {
            ...newState,
            [action.meta]: {
                ...newGroupsForCurrentClass,
            },
        };
    })
    .handleAction(removeGroup, (state, action) => {
        const newState = state;

        newState[action.meta][action.payload.subject] = newState[action.meta][action.payload.subject].filter(val => val.group !== action.payload.group);
        const newGroupsForCurrentClass = newState[action.meta];
        delete newState[action.meta];

        return {
            ...newState,
            [action.meta]: {
                ...newGroupsForCurrentClass,
            },
        };
    });

const persistConfig = {
    key: 'preferences',
    storage,
    blacklist: ['class'],
}

const preferencesReducer = persistCombineReducers(persistConfig, {
    theme: themeReducer,
    class: classReducer,
    groupFilters: groupFiltersReducer,
});

export default preferencesReducer;
export type PreferencesState = ReturnType<typeof preferencesReducer>;