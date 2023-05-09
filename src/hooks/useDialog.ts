import { DialogModel } from "@/type/BaseType";
import { reactive } from "vue";
export default function useDialog() {
  //定义弹框属性
  const dialog = reactive<DialogModel>({
    visible: false,
    title: "",
    height: 630,
    width: 250,
  });
  //展示
  const onShow = () => {
    dialog.visible = false;
  };
  //取消按钮
  const onClose = () => {
    dialog.visible = false;
  };
  //确定按钮
  const onConfirm = () => {
    dialog.visible = false;
  };
  return {
    dialog,
    onShow,
    onClose,
    onConfirm
  }
}
