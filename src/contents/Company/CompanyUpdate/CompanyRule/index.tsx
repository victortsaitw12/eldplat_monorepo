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

export interface I_RuleType {
  working_Hours_Code: any | string;
  working_Hours_Name: string;
}

function CompanyRule() {
  const C_data = useContext<I_Company_Context>(CompanyContext);
  const ruleData = C_data?.companyData?.company_Working_Hours;
  // 公司制度陣列
  const [ruleArr, setRuleArr] = useState<I_RuleType[]>(
    ruleData ? ruleData : [{ working_Hours_Code: "01", working_Hours_Name: "" }]
  );

  useEffect(() => {
    ruleData && setRuleArr(ruleData);
  }, [ruleData]);

  // 加一欄制度
  const handleInputAdd = () => {
    const idx = ruleArr.length;
    setRuleArr((prev) => {
      return [
        ...prev,
        {
          working_Hours_Code:
            idx >= 9
              ? (prev[idx - 1].working_Hours_Code * 1 + 1).toString()
              : `0${(prev[idx - 1].working_Hours_Code * 1 + 1).toString()}`,
          working_Hours_Name: ""
        }
      ];
    });
  };

  // 移除一欄制度
  const handleInputRemove = (id: string) => {
    const newArr = ruleArr.filter((v) => {
      return v.working_Hours_Code !== id.toString();
    });
    setRuleArr(newArr); // 處理畫面增減邏輯

    // 按下"-"刪除已輸入過的制度名稱後，也移除陣列的該值
    const newData = { ...C_data };
    newData.companyData.company_Working_Hours = newArr;
  };

  // 存取制度欄位input值
  const handleValue = (e: any, id: string) => {
    const updatedArray = ruleArr.map((item) => {
      if (item.working_Hours_Code === id.toString()) {
        const updateItem = item;
        updateItem.working_Hours_Name = e.target.value;
        return updateItem;
      }
      return item;
    });
    setRuleArr(updatedArray);
  };

  // 新增制度邏輯
  const handleChangeRule = (e: any) => {
    const newData = { ...C_data };
    newData.companyData.company_Working_Hours = ruleArr;
  };

  return (
    <BodySTY>
      <Heading is="h4">公司制度</Heading>
      <form>
        <Pane className="input-line">
          <Text marginTop="16px">工時設定</Text>
          <Pane>
            {ruleArr.map((item, index) => {
              return (
                <Pane key={index}>
                  <TextInput
                    name="company_Working_Hours"
                    marginTop={10}
                    placeholder="新增工時設定"
                    value={item.working_Hours_Name}
                    onChange={(e: any) => {
                      handleValue(e, item.working_Hours_Code);
                      handleChangeRule(e);
                    }}
                  />
                  <Icon
                    icon={TrashIcon}
                    size={12}
                    marginLeft={16}
                    cursor="pointer"
                    onClick={() => {
                      handleInputRemove(item.working_Hours_Code);
                    }}
                  />
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

export default CompanyRule;
