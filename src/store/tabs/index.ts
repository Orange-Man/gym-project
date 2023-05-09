import { defineStore } from "pinia";
//定义tabs选项卡数据类型
export type Tab = {
  title: String;
  path: String;
};
//定义state的类型
export type TabState = {
  tabList: Tab[];
};
//定义store
export const tabStore = defineStore("tabStore", {
  state: (): TabState => {
    return {
      tabList: [],
    };
  },
  getters: {
    getTabs(state) {
      return state.tabList;
    },
  },
  actions: {
    addTab(tab: Tab) {
      //判断是否已经添加数据
      if (this.tabList.some((item) => item.path === tab.path)) return;
      this.tabList.push(tab)
    },
  },
});
