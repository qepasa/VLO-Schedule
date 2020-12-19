
declare module 'ApiModel' {
    export type ScheduleStatus = {
        loading: boolean,
        error: boolean,
    };

    export type GroupFilter = {
        [key: string]: Lesson[];
    };
}