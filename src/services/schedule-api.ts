import { GetScheduleResponse, GetClassesResponse } from "ApiModel";


export function getSchedule(classParam: string, offset = 0): Promise<GetScheduleResponse> {
    console.log(`got class param ${classParam} offset: ${offset}`);
    return fetch(`https://sabat.dev/api/tta?c=${classParam}&o=${offset}`)
        .then(response => response.json());
}

export function getClasses(): Promise<GetClassesResponse> {
    return fetch(`https://sabat.dev/api/cla`)
        .then(response => response.json());
}