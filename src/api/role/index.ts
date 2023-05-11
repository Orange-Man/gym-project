import http from "@/http";
import { AddRoleModel } from "./RoleModel";
//新增
export const addApi = (parm:AddRoleModel)=>{
    return http.post('/api/role',parm)
}