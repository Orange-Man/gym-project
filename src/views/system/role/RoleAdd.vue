<template>
  <sys-dialog
    :title="dialog.title"
    :width="dialog.width"
    :height="dialog.height"
    :visible="dialog.visible"
    @on-close="onClose"
    @on-confirm="commit"
  >
    <template v-slot:content>
      <el-form
        :model="addModel"
        ref="addFormRef"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="default"
      >
        <!-- el-row代表一行，24等份，平均分为12份 -->
        <el-row>
          <el-col :span="12" :offset="0">
            <el-form-item prop="roleName" label="角色名称">
              <el-input v-model="addModel.roleName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="remark" label="备注">
              <el-input v-model="addModel.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
  </sys-dialog>
</template>

<script setup lang="ts">
import { AddRoleModel } from "@/api/role/RoleModel";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";
import { reactive, ref } from "vue";
import { FormInstance } from "element-plus";
import { addApi } from "@/api/role/index";
import { ElMessage } from "element-plus";
//表单的Ref属性
const addFormRef = ref<FormInstance>();
//弹框属性
const { dialog, onClose, onConfirm } = useDialog();
//定义show给父组件调用
const show = () => {
  dialog.height = 150;
  dialog.width = 630;
  dialog.title = "新增";
  dialog.visible = true;
  //输入数据，清空上次提交数据
  addFormRef.value?.resetFields()
};
//暴露子组件的方法给外部使用（父组件）
defineExpose({
  show,
});
//定义表单绑定的属性
const addModel = reactive<AddRoleModel>({
  type: "",
  roleId: "",
  roleName: "",
  remark: "",
});
//表单验证规则
const rules = reactive({
  roleName: [
    {
      required: true,
      trigger: "change",
      message: "请填写角色名称",
    },
  ],
});
//注册事件
const emit = defineEmits(['refresh'])
//表单提交 
const commit = () => {
  //表单验证规则 1.表单需要添加ref属性，2.item上面需要添加prop属性 3.定义表单验证规则
  addFormRef.value?.validate(async (valid: any) => {
    if (valid) {
      let res = await addApi(addModel);
      if (res && res.code == 200) {
        ElMessage.success(res.msg)
        //调用父组件的方法，刷新列表
        emit('refresh')
        dialog.visible = false;
      }
    }
  });
};
</script>

<style scoped lang="scss"></style>
