import http from "@/http";
import { AddRoleModel, ListParm } from "./RoleModel";
//新增
export const addApi = (parm:AddRoleModel)=>{
    return http.post('/api/role',parm)
}
export const getListApi =(parm:ListParm)=>{
    return http.get('api/role/list',parm)
}