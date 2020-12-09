import { GetScheduleResponse } from "ApiModel";


export function getSchedule(classParam: string): Promise<GetScheduleResponse> {
    return fetch(`/api/timetable?class=${classParam}`)
        .then(response => response.json());
}