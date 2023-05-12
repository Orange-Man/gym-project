import { ListParm } from "@/api/user/UserModel";
import { reactive } from "vue";

export default function useTable() {
  //表格数据
  const tableList = reactive({});
  //查询的参数
  const listParm = reactive<ListParm>({
    phone: "",
    pageSize: 10,
    currentPage: 1,
    nickName: "",
    total: 0,
  })
  //列表
  const getList = ()=>{
    
  }
  //搜索
  const searchBtn = ()=>{

  }
  //重置
  const resetBtn  = ()=>{

  }
  return {
    tableList,
    listParm,
    getList,
    searchBtn,
    resetBtn
  }
}
