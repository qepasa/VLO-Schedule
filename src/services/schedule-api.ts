import { GetScheduleResponse, GetClassesResponse } from "ApiModel";


export function getSchedule(classParam: string): Promise<GetScheduleResponse> {
    return fetch(`https://sabat.dev/api/tta?c=${classParam}&o=0`)
        .then(response => response.json());
}

export function getClasses(): Promise<GetClassesResponse> {
    return fetch(`https://sabat.dev/api/cla`)
        .then(response => response.json());
}