<template>
    <el-container class="layout">
      <el-aside width="auto" class="asside">
        <menu-bar></menu-bar>
      </el-aside>
      <el-container>
        <el-header height="50px" class="header">
          <Header></Header>
        </el-header>
        <tabs style="padding: 0px 20px;"></tabs>
        <el-main class="main">
          <!-- router插槽，显示main里的内容 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
//vue3里面，组件引入，可以直接使用，不需要注册
  import Header from '@/layout/header/Header.vue'
  import MenuBar from '@/layout/menu/MenuBar.vue'
  import Tabs from '@/layout/tabs/Tabs.vue';
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  .asside {
    // background-color: blueviolet;
    background-color: #304156;
  }
  .header {
    display: flex;
    align-items: center;
    background-color: #009688;
  }
  .main {
    padding-top: 1px;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}
</style>
