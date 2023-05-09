import { defineStore } from "pinia";
//定义store
export const testStore = defineStore("testStore", {
  //定义state
  state: () => {
    return {
      count: 0
    }
  },
  //定义getters，取值
  getters: {
    getCount(state){
        //获取state里的count
        return state.count;
    }
  },
  //定义actions
  actions:{
    //设置count的值
    setCount(count:number){
        this.count = count;
    }
  }
});
