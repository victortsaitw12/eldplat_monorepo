import React, { useCallback, useContext, useEffect, useState } from "react";
import { BodySTY } from "./style";
import {
  Button,
  Heading,
  Icon,
  Pane,
  PlusIcon,
  Text,
  TextInput,
  TrashIcon
} from "evergreen-ui";

import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";

export interface I_LeaveType {
  leave_Code: any | string;
  leave_Name: string;
}

function LeaveSet() {
  const C_data = useContext<I_Company_Context>(CompanyContext);
  const leaveData = C_data.companyData.company_Leave;
  // 假別設定陣列
  const [leaveArr, setLeaveArr] = useState<I_LeaveType[]>(
    leaveData ? leaveData : [{ leave_Code: "01", leave_Name: "" }]
  );

  useEffect(() => {
    leaveData && setLeaveArr(leaveData);
  }, [leaveData]);

  // 加一欄假別
  const handleInputAdd = () => {
    const idx = leaveArr.length;
    console.log("idx", idx);
    setLeaveArr((prev) => [
      ...prev,
      {
        leave_Code:
          idx >= 9
            ? (prev[idx - 1].leave_Code * 1 + 1).toString()
            : `0${(prev[idx - 1].leave_Code * 1 + 1).toString()}`,
        leave_Name: ""
      }
    ]);
  };

  // 移除一欄假別
  const handleInputRemove = (id: string) => {
    const newArr = leaveArr.filter((v, i) => {
      return v.leave_Code !== id.toString();
    });
    setLeaveArr(newArr); // 處理畫面增減邏輯

    // 按下"-"刪除已輸入過的假別名稱後，也移除陣列的該值
    const newData = { ...C_data };
    newData.companyData.company_Leave = newArr;
  };

  // 存取假別欄位input值
  const handleValue = (e: any, id: string) => {
    const updatedArray = leaveArr.map((item) => {
      if (item.leave_Code === id.toString()) {
        const updateItem = item;
        updateItem.leave_Name = e.target.value;
        return updateItem;
      }
      return item;
    });
    setLeaveArr(updatedArray);
  };

  // 新增假別邏輯
  const handleChangeRule = (e: any) => {
    const newData = { ...C_data };
    newData.companyData.company_Leave = leaveArr;
  };
  console.log("C_data", C_data);
  console.log("leaveData", leaveData);

  return (
    <BodySTY>
      <Heading is="h4">假別設定</Heading>
      <form>
        <Pane className="input-line">
          <Text marginTop="16px">排休種類 </Text>
          <Pane>
            {leaveArr.map((item, index) => {
              console.log("item", item);
              return (
                <Pane key={index}>
                  <TextInput
                    name="leave_Name"
                    marginTop={10}
                    placeholder="新增排休種類"
                    value={item.leave_Name}
                    onChange={(e: any) => {
                      handleValue(e, item.leave_Code);
                      handleChangeRule(e);
                    }}
                  />
                  <Icon
                    icon={TrashIcon}
                    size={12}
                    marginLeft={16}
                    cursor="pointer"
                    onClick={() => {
                      handleInputRemove(item.leave_Code);
                    }}
                  />
                  {/* <Text
                    marginLeft={16}
                    cursor="pointer"
                    onClick={() => {
                      handleInputRemove(item.leave_Code);
                    }}
                  >
                    –
                  </Text> */}
                </Pane>
              );
            })}
            <Button
              className="add-rule-btn"
              marginY={8}
              iconBefore={PlusIcon}
              onClick={(e: any) => {
                e.preventDefault();
                handleInputAdd();
              }}
            >
              新增
            </Button>
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default LeaveSet;
