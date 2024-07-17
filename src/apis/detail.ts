import { http } from "@/utils"
import type { ResType, DetailDataType } from "./shared"



export function fetchDetailAPI(id:string){
    return http.request<ResType<DetailDataType>>({
        url:`/articles/${id}`
    })
}