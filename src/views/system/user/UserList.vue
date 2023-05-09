<template>
  <div>
    <el-button type="primary" size="default" @click="addBtn">新增</el-button>
    <SysDialog
      :visible="dialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <template v-slot:content> 弹框内容 </template>
    </SysDialog>
  </div>
</template>

<script setup lang="ts">
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
//弹框属性
const { dialog, onClose, onConfirm } = useDialog();
//新增按钮
const addBtn = () => {
  dialog.visible = true;
};
</script>

<style scoped lang="scss"></style>
