import { ListParm } from "@/api/role/RoleModel";
import { reactive } from "vue";

export default function useTable() {
  //列表参数
  const listParm = reactive<ListParm>({
    roleName: "",
    currentPage: 1,
    pageSize: 10,
    total: 0,
  });
  //列表
  const getList = () => {};
  //搜索
  const searchBtn = () => {};
  //重置
  const resetBtn = () => {};
  return {
    listParm,
    getList,
    searchBtn,
    resetBtn,
  };
}
