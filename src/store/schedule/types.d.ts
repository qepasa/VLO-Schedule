
declare module 'ApiModel' {
    export type ScheduleStatus = {
        loading: boolean,
        error: boolean,
    };

    export type GroupFilterDict = {
        [key: string]: Set<string>;
    };

    export type GroupFilter = {
        [key: string]: string[];
    };
}