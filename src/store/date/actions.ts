import { createAction } from 'typesafe-actions';

export const nextWeek = createAction('NEXT_WEEK')<void>();

export const previousWeek = createAction('PREVIOUS_WEEK')<void>();

export const setDate = createAction('SET_DATE')<number>();

export const dateChanged = createAction('DATE_CHANGED')<void>();