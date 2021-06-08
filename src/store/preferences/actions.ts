import { Lesson } from "ApiModel";
import { createAction } from "typesafe-actions";

export const setTheme = createAction('SET_THEME')<string>();

export const setClass = createAction('SET_CLASS')<string>();

export const updateClass = createAction('UPDATE_CLASS')<string>();

export const addGroup = createAction('ADD_GROUP')<Lesson, string>();

export const removeGroup = createAction('REMOVE_GROUP')<Lesson, string>();

