<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="listParm" :inline="true" size="default">
      <el-form-item>
        <el-input
          v-model="listParm.roleName"
          placeholder="请输入角色名称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchBtn" :icon="Search">搜索</el-button>
        <el-button @click="resetBtn" :icon="Close" type="danger" plain>重置</el-button>
        <el-button type="primary" @click="addBtn" :icon="Plus">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 新增、编辑弹框 -->
    <role-add ref="addRef"></role-add>
  </el-main>
</template>

<script setup lang="ts">
import RoleAdd from "./RoleAdd.vue";
import { Plus, Edit, Delete, Search, Close } from "@element-plus/icons-vue";
import useTable from "@/composables/role/useTable";
import useRole from "@/composables/role/useRole";
//表格相关业务
const { listParm, getList, searchBtn, resetBtn } = useTable();
//增删改查业务
const { addBtn, editBtn, deleteBtn, addRef } = useRole();
</script>

<style scoped lang="scss"></style>
