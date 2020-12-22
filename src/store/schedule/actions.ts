import { GetScheduleResponse, GroupFilter } from "ApiModel";
import { createAction, createAsyncAction } from "typesafe-actions";

export const loadScheduleAsync = createAsyncAction(
    'LOAD_SCHEDULE_REQUEST',
    'LOAD_SCHEDULE_SUCCESS',
    'LOAD_SCHEDULE_FAILURE'
)<string, GetScheduleResponse, string>();


export const createGroupsAction = createAction('CREATE_GROUPS')<GroupFilter, string>();