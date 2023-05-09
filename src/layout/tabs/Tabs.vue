<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in tabList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, ref, watch } from "vue";
import { tabStore, Tab } from "@/store/tabs/index";
//获取router和当前路由
const route = useRoute();
const router = useRouter();
//获取store
const store = tabStore();

//当前激活的选项卡：当前的路由
const activeTab = ref("");
//选项卡的数据
const tabList = computed(() => {
  return store.getTabs;
});
//删除选项卡
const removeTab = (targetName: string) => {
  const tabs = tabList.value;
  let activeName = activeTab.value;
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
            //出错，暂时注释
        //   activeName = nextTab.path;
        }
      }
    });
  }

  activeTab.value = activeName;
  store.tabList = tabs.filter((tab) => tab.path !== targetName);
};
//添加菜单到选项卡
const addTab = () => {
  //获取选项卡数据：当前的路由
  const { path, meta } = route;
  //设置选项卡数据
  const tab: Tab = {
    path: path,
    title: meta.title as string,
  };
  //添加到选项卡数据
  store.addTab(tab);
};
//监听路由，设置选项卡的数据
watch(
  () => route.path,
  () => {
    //把当前菜单设置到选项卡
    addTab();
  }
);
</script>

<style scoped lang="scss"></style>
