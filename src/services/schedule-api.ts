import { GetScheduleResponse, GetClassesResponse, GetSubstitutionsResponse, Substitution } from "ApiModel";


export function getSchedule(classParam: string, offset = 0): Promise<GetScheduleResponse> {
    console.log(`got class param ${classParam} offset: ${offset}`);
    return fetch(`https://api.cld.sh/vlo/ttdata/${classParam}?offset=${offset}`)
        .then(response => response.json())
        .then(function (a) { return { success: true, resp: a } });
}
// TODO(cloud11665) fix this hackjob
export function getClasses(): Promise<GetClassesResponse> {
    return fetch(`https://api.cld.sh/vlo/listclass`)
        .then(response => response.json())
        .then(function (a) { return { success: true, resp: a } });
}

export function getSubstitutions(classParam: string, offset = 0): Promise<Substitution[]> {
    return fetch(`https://api.cld.sh/vlo/substitutions/${classParam}?offset=${offset}`)
        .then(response => response.json());
};