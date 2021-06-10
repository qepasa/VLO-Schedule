import { LoadSubstitutionsAsyncSuccessPayload } from "ApiModel";
import { createAction, createAsyncAction } from "typesafe-actions";


export const loadSubstitutionsAsync = createAsyncAction(
    'LOAD_SUBSTITUTIONS_REQUEST',
    'LOAD_SUBSTITUTIONS_SUCCESS',
    'LOAD_SUBSTITUTIONS_FAILURE'
)<string, LoadSubstitutionsAsyncSuccessPayload, string>();

export const substitutionLoadingComplete = createAction('SUBSTITUTIONS_LOAD_COMPLETE')<void>();