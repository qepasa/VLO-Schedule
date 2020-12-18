import { createAction } from "typesafe-actions";

export const setTheme = createAction('SET_THEME')<string>();

export const setClass = createAction('SET_CLASS')<string>();