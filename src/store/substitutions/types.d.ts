import { GetSubstitutionsResponse } from "ApiModel";

declare module 'ApiModel' {
    export type SubstitutionsStatus = {
        loading: number,
        error: boolean,
    };

    export type LoadSubstitutionsAsyncSuccessPayload = {
        response: Substitution[],
        dayOfWeek: number,
    };

}