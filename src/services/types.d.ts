import { } from 'typesafe-actions';

declare module 'ApiModel' {
    export type GetScheduleResponse = {
        resp: WeekSchedule,
        success: boolean,
    };

    export type WeekSchedule = Array<DaySchedule>;

    export type DaySchedule = Array<HourSchedule>;

    export type HourSchedule = Array<Lesson>;

    export type Lesson = {
        classroom: string,
        color: string,
        date: string,
        day_index: number,
        duration: number,
        subject: string,
        teacher: string,
        time_index: number,
    };
};

declare module 'typesafe-actions' {
    export type Services = typeof import('./index').default;
};