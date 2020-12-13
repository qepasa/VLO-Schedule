import { GetClassesResponse } from "ApiModel";
import { createAsyncAction } from "typesafe-actions";

export const loadClassesAsync = createAsyncAction(
    'LOAD_CLASSES_REQUEST',
    'LOAD_CLASSES_SUCCESS',
    'LOAD_CLASSES_FAILURE'
)<undefined, GetClassesResponse, string>();