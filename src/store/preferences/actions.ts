import { createAction } from "typesafe-actions";

export const setTheme = createAction('SET_THEME')<string>();