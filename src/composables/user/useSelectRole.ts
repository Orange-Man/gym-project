import { SelectRole } from "@/api/user/UserModel";
import { reactive } from "vue";
import { getSelectApi } from "@/api/user";

export default function useSelectRole() {
    //定义角色列表数据
    const roleData = reactive<SelectRole>({
        list:[]
    })
    //获取数据
    const listRole = async()=>{
        let res = await getSelectApi()
        if(res && res.code == 200 ) {
            roleData.list = res.data
        }
    }
    return {
        roleData,
        listRole
    }
}