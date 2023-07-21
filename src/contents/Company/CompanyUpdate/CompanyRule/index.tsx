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
import { I_Company_Working_Type } from "@typings/company_type";

function CompanyRule() {
  const { companyData, setCompanyData } =
    useContext<I_Company_Context>(CompanyContext);
  const ruleData = companyData?.company_working_hours;
  // 公司制度陣列
  const [ruleArr, setRuleArr] = useState<I_Company_Working_Type[]>(
    ruleData ? ruleData : [{ working_hours_code: "01", working_hours_name: "" }]
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
          working_hours_code:
            idx >= 9
              ? (prev[idx - 1].working_hours_code * 1 + 1).toString()
              : `0${(prev[idx - 1].working_hours_code * 1 + 1).toString()}`,
          working_hours_name: ""
        }
      ];
    });
  };

  // 移除一欄制度
  const handleInputRemove = (id: string) => {
    const newArr = ruleArr.filter((v) => {
      return v.working_hours_code !== id.toString();
    });
    setRuleArr(newArr); // 處理畫面增減邏輯

    // 按下"-"刪除已輸入過的制度名稱後，也移除陣列的該值
    const newData = { ...companyData };
    newData.company_working_hours = newArr;
  };

  // 存取制度欄位input值
  const handleValue = (e: any, id: string) => {
    const updatedArray = ruleArr.map((item) => {
      if (item.working_hours_code === id.toString()) {
        const updateItem = item;
        updateItem.working_hours_name = e.target.value;
        return updateItem;
      }
      return item;
    });
    setRuleArr(updatedArray);
  };

  // 新增制度邏輯
  const handleChangeRule = (e: any) => {
    const newData = { ...companyData };
    newData["company_working_hours"] = ruleArr;
    setCompanyData(newData);
  };

  return (
    <BodySTY>
      <Heading is="h4">排班設定</Heading>
      <form>
        <Pane className="input-line">
          <Text marginTop="16px">工時設定</Text>
          <Pane>
            {ruleArr.map((item, index) => {
              return (
                <Pane key={index}>
                  <TextInput
                    name="company_working_hours"
                    marginTop={10}
                    placeholder="新增工時設定"
                    value={item.working_hours_name}
                    onChange={(e: any) => {
                      handleValue(e, item.working_hours_code);
                      handleChangeRule(e);
                    }}
                  />
                  <Icon
                    icon={TrashIcon}
                    size={12}
                    marginLeft={16}
                    cursor="pointer"
                    onClick={() => {
                      handleInputRemove(item.working_hours_code);
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
