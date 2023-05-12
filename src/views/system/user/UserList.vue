<template>
  <el-main >
    <!-- 搜索栏 -->
    <el-form :model="listParm" :inline="true" size="default">
      <el-form-item >
        <el-input v-model="listParm.phone" placeholder="请输入电话号码"></el-input>
      </el-form-item>
      <el-form-item >
        <el-input v-model="listParm.nickName" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchBtn" :icon="Search">搜索</el-button>
        <el-button @click="resetBtn" type="danger" plain :icon="Close">重置</el-button>
        <el-button type="primary" @click="addBtn" :icon="Plus">新增</el-button>
      </el-form-item>
    </el-form>
    
  </el-main>
  
</template>

<script setup lang="ts">
import { Plus, Edit, Delete, Search, Close } from "@element-plus/icons-vue";
import useTable from '@/composables/user/useTable';
import useUser from '@/composables/user/useUser';
//表格
const { listParm, getList, searchBtn, resetBtn } = useTable()
//新增
const { addBtn, editBtn, deleteBtn,  } = useUser()
//编辑

</script>

<style scoped lang="scss"></style>
