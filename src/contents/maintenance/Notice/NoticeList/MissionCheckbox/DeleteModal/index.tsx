import { CancelMaintenanceById } from "@services/maintenance/getMaintenanceNotice";
import { Pane, Dialog, Button } from "evergreen-ui";
import router from "next/router";
import { useState } from "react";

interface Dialog_Type {
  isShown: boolean;
  setIsShown: (isShown: boolean) => void;
  data?: any[];
}

function DeleteDialog({ isShown, setIsShown, data }: Dialog_Type) {
  console.log("data", data);
  const handleDelete = () => {
    data?.map((item) => {
      if (item.checked)
        CancelMaintenanceById(item.id)
          .then((res) => {
            console.log("停用成功", res);
            router.reload();
          })
          .catch((err) => console.log("停用失敗", err));
    });
  };
  return (
    <Pane>
      <Dialog
        isShown={isShown}
        title="刪除通知"
        intent="danger"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="確定"
        cancelLabel="取消"
        onConfirm={(close) => {
          handleDelete();
          close();
        }}
      >
        請問確定要移除所勾選的通知?
      </Dialog>

      {/* <Button onClick={() => setIsShown(true)}>Show Dialog</Button> */}
    </Pane>
  );
}

export default DeleteDialog;
