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
import { I_Company_Leave_Type } from "@typings/company_type";

function LeaveSet() {
  const { companyData, setCompanyData } =
    useContext<I_Company_Context>(CompanyContext);
  const leaveData = companyData.company_leave;
  // 假別設定陣列
  const [leaveArr, setLeaveArr] = useState<I_Company_Leave_Type[]>(
    leaveData ? leaveData : [{ leave_code: "01", leave_name: "" }]
  );
  console.log("leaveData", leaveData);
  useEffect(() => {
    leaveData && setLeaveArr(leaveData);
  }, [leaveData]);

  // 加一欄假別
  const handleInputAdd = () => {
    const idx = leaveArr.length;
    setLeaveArr((prev) => [
      ...prev,
      {
        leave_code:
          idx >= 9
            ? (prev[idx - 1].leave_code * 1 + 1).toString()
            : `0${(prev[idx - 1].leave_code * 1 + 1).toString()}`,
        leave_name: ""
      }
    ]);
  };

  // 移除一欄假別
  const handleInputRemove = (id: string) => {
    const newArr = leaveArr.filter((v, i) => {
      return v.leave_code !== id.toString();
    });
    setLeaveArr(newArr); // 處理畫面增減邏輯

    // 按下"-"刪除已輸入過的假別名稱後，也移除陣列的該值
    const newData = { ...companyData };
    newData.company_leave = newArr;
  };

  // 存取假別欄位input值
  const handleValue = (e: any, id: string) => {
    const updatedArray = leaveArr.map((item) => {
      if (item.leave_code === id.toString()) {
        const updateItem = item;
        updateItem.leave_name = e.target.value;
        return updateItem;
      }
      return item;
    });
    setLeaveArr(updatedArray);
  };

  // 新增假別邏輯
  const handleChangeRule = (e: any) => {
    const newData = { ...companyData };
    newData["company_leave"] = leaveArr;
    setCompanyData(newData);
  };

  console.log("leaveArr", leaveArr);

  return (
    <BodySTY>
      <Heading is="h4">假別設定</Heading>
      <form>
        <Pane className="input-line">
          <Text marginTop="16px">排休種類 </Text>
          <Pane>
            {leaveArr.map((item, index) => {
              return (
                <Pane key={index}>
                  <TextInput
                    name="leave_name"
                    marginTop={10}
                    placeholder="新增排休種類"
                    value={item.leave_name}
                    onChange={(e: any) => {
                      handleValue(e, item.leave_code);
                      handleChangeRule(e);
                    }}
                  />
                  <Icon
                    icon={TrashIcon}
                    size={12}
                    marginLeft={16}
                    cursor="pointer"
                    onClick={() => {
                      handleInputRemove(item.leave_code);
                    }}
                  />
                  {/* <Text
                    marginLeft={16}
                    cursor="pointer"
                    onClick={() => {
                      handleInputRemove(item.leave_code);
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
