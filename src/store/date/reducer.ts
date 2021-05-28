import { nextWeek, previousWeek, setDate } from './actions';
import { createReducer } from 'typesafe-actions';


export const dateReducer = createReducer(0)
    .handleAction(nextWeek, (state, action) => state + 1)
    .handleAction(previousWeek, (state, action) => state - 1)
    .handleAction(setDate, (state, action) => action.payload);


export default dateReducer;
export type DateState = ReturnType<typeof dateReducer>