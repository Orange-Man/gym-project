import http from "@/http";
//获取角色列表
export const getSelectApi = () =>{
    return http.get("/api/role/getSelect")
}