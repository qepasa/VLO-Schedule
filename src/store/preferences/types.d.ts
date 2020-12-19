import { GroupFilter } from 'ApiModel';

declare module 'ApiModel' {

    type GroupFiltersByClass = {
        [key: string]: GroupFilter;
    };
}