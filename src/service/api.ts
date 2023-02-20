import request from "./request";

export function getStudents(params:any){
    return request.get('/',{ params })
}