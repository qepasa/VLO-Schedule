import { loadClassesAsync } from './actions';
import { combineReducers } from 'redux';
import { ClassesStatus } from "ApiModel";
import { createReducer } from 'typesafe-actions';

export const isLoadingClasses = createReducer({ loading: true, error: false } as ClassesStatus)
    .handleAction(loadClassesAsync.request, () => ({ loading: true, error: false } as ClassesStatus))
    .handleAction(loadClassesAsync.failure, () => ({ loading: false, error: true } as ClassesStatus))
    .handleAction(loadClassesAsync.success, (state, action) => {
        return { loading: false, error: !action.payload.success } as ClassesStatus;
    });

export const classes = createReducer([] as string[])
    .handleAction(loadClassesAsync.success, (state, action) => action.payload.resp ? action.payload.resp : []);

const classesReducer = combineReducers({
    isLoadingClasses,
    classes,
});

export default classesReducer;
export type ClassesState = ReturnType<typeof classesReducer>;