import { GetScheduleResponse } from "ApiModel";


export function getSchedule(classParam: string): Promise<GetScheduleResponse> {
    return fetch(`/api/tta?c=${classParam}&o=0`)
        .then(response => response.json());
}