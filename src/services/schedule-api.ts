import { GetScheduleResponse } from "ApiModel";


export function getSchedule(classParam: string): Promise<GetScheduleResponse> {
    return fetch(`https://sabat.dev/api/tta?c=${classParam}&o=2`)
        .then(response => response.json());
}