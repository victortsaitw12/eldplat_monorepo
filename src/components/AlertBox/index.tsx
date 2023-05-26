import React from "react";
import { Alert } from "evergreen-ui";
import { AlertSTY } from "./style";

const AlertBox = ({
  type,
  title,
  description,
  isRemoveable,
  fn
}: {
  type: "none" | "success" | "warning" | "danger";
  title: string;
  description?: string;
  isRemoveable: boolean;
  fn?: (val: any) => void;
}) => {
  const [isOnline, setIsOnline] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AlertSTY>
      <Alert intent={type} title={title} isRemoveable={isRemoveable}>
        {description}
      </Alert>
      {isOnline ? (
        <Alert intent="danger" title="連線失敗" isRemoveable={isRemoveable}>
          您尚未連線，系統將在三秒後自動嘗試連線。
        </Alert>
      ) : (
        ""
      )}
      {/* <AlertBox
        type="none"
        title="提示"
        description="點擊員工列，檢視個別排班資訊。"
        isRemoveable={true}
      />
      <AlertBox
        type="success"
        title="修改成功"
        description="修改成功通知。"
        isRemoveable={true}
      />
      <AlertBox
        type="warning"
        title="送出異動後不可取消"
        description="lorem 7890poijhksfdjdlihfgbne/s;efmawemfIAn/va"
        isRemoveable={true}
      />
      <AlertBox
        type="danger"
        title="連線異常"
        description="檢查無網路連線，系統將於三秒後再次嘗試"
        isRemoveable={true}
      /> */}
    </AlertSTY>
  );
};

export default AlertBox;
