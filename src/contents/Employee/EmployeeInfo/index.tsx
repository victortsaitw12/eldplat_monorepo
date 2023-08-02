import { I_Content_Props } from "@typings/employee_type";
import {
  Button,
  Checkbox,
  Heading,
  Pane,
  PlusIcon,
  SelectField,
  Text,
  TextInput,
  Paragraph
} from "evergreen-ui";
import React, { useState, useEffect } from "react";
import { class_DATA, department_DATA, formatDate } from "./data";
import { BodySTY } from "./style";

interface I_certificationType {
  id: number;
  value: string;
}

function EmployeeInfo({
  handleEmployeeChange,
  insertData,
  setInsertData
}: I_Content_Props) {
  //iniviteHistory
  const inivite_history = [
    { date: "2023/02/01" },
    { date: "2023/02/02" },
    { date: "2023/02/03" },
    { date: "2023/02/04" }
  ];
  // 是否在職
  const [untilnowChecked, setUntilnowChecked] = useState<boolean>(
    insertData["leave_check"] === "1" ? true : false
  );

  // 證照陣列
  const [certificationArr, setCertificationArr] = useState<
    I_certificationType[]
  >([]);

  // 一進來先抓資料庫原本就有的證照資料
  useEffect(() => {
    insertData &&
      setCertificationArr(
        insertData?.license_name.map((v: string, i: number) => {
          return { id: i, value: v };
        })
      );
  }, []);

  // 離職: 如果還在職(迄今)就存"1"，否則是"0"
  const handleStillWorking = (e: any) => {
    const newChecked = e.target.checked;
    setUntilnowChecked(newChecked);
    const newData = { ...insertData };
    newData["leave_check"] = newChecked ? "1" : "0";
    newData["leave_date"] = (newChecked || !newData["leave_date"]) && null;
    // console.log("untilnowChecked && null", untilnowChecked && null);
    setInsertData(newData);
  };

  // 存取證照欄位input值
  const handleValue = (e: any, id: number) => {
    const updatedArray = certificationArr.map((item) => {
      if (item.id === id) {
        const updateItem = item;
        updateItem.value = e.target.value;
        return updateItem;
      }
      return item;
    });
    setCertificationArr(updatedArray);
  };

  // 新增證照邏輯
  const handleChangeLicense = (e: any) => {
    const newData = { ...insertData };
    newData.license_name = certificationArr.map((v) => v.value);
    setInsertData(newData);
  };

  // 加一欄證照
  const handleInputAdd = () => {
    const idx = certificationArr.length;
    setCertificationArr((prev) => [...prev, { id: idx, value: "" }]);
  };

  // 移除一欄證照
  const handleInputRemove = (id: number) => {
    const newData = { ...insertData };
    const newArr = certificationArr.filter((v, i) => {
      return v.id !== id;
    });
    setCertificationArr(newArr); // 處理畫面增減邏輯

    // 按下"-"刪除已輸入過的證照名稱後，也移除陣列的該值
    const licenseArr: string[] = [];
    const removeFilter = newArr.filter((v) => v.value);
    removeFilter.map((item) => {
      licenseArr.push(item.value);
    });
    newData.license_name = licenseArr;
    setInsertData(newData);
  };

  console.log("untilnoeChecked", untilnowChecked);

  return (
    <BodySTY>
      <Heading is="h4">員工資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text>員工編號</Text>
          <TextInput
            width="100%"
            name="staff_no"
            value={insertData.staff_no || ""}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>職務名稱</Text>

          {/* <SelectField
            label=""
            name="job_title"
            value={insertData.job_title || ""}
            onChange={handleEmployeeChange}
            marginBottom="0px"
          >
            <option value="01">前端工程師</option>
            <option value="02">後端工程師</option>
            <option value="03">日本線業務</option>
            <option value="04">歐洲線線控</option>
          </SelectField> */}
          <TextInput
            width={"100%"}
            name="job_title"
            value={insertData.job_title || ""}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>公司名稱</Text>
          <Text>{insertData.company_name}</Text>
        </Pane>
        <Pane className="input-line">
          <Text>部門別</Text>
          <SelectField
            label=""
            value={insertData.department || ""}
            name="department"
            onChange={handleEmployeeChange}
          >
            <option value="1">多元發展部</option>
            <option value="2">創新發展部</option>
            <option value="3">資通部</option>
            <option value="4">營運部</option>
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text>組別</Text>
          <SelectField
            label=""
            value={insertData.group || ""}
            name="group"
            onChange={handleEmployeeChange}
          >
            <option value="1">應用專案管理組</option>
            <option value="2">前端互動應用組</option>
            <option value="3">商業互動設計組</option>
            <option value="4">通運應用整合組</option>
          </SelectField>
        </Pane>
        <Pane className="input-line">
          <Text>到職日期</Text>
          <TextInput
            type="date"
            name="arrive_date"
            value={insertData.arrive_date || ""}
            onChange={handleEmployeeChange}
          />
        </Pane>
        <Pane className="input-line">
          <Text>離職日期</Text>
          <Pane display="flex">
            {" "}
            <TextInput
              type="date"
              name="leave_date"
              value={insertData.leave_date || ""}
              onChange={handleEmployeeChange}
              disabled={untilnowChecked ? true : false}
            />
            <Checkbox
              label="迄今"
              checked={untilnowChecked}
              onChange={(e: any) => {
                handleStillWorking(e);
              }}
            />
          </Pane>
        </Pane>
        {inivite_history.length > 0 && (
          <Pane
            style={{
              alignItems: "baseline"
            }}
            className="input-line"
          >
            <Text>邀請時間與次數</Text>
            <Pane>
              {inivite_history.map((child, i) => {
                return (
                  <Paragraph key={i}>
                    {child.date}，邀請第 {i + 1} 次
                  </Paragraph>
                );
              })}
            </Pane>
          </Pane>
        )}

        <Pane className="input-line">
          <Text>員工狀態</Text>
          <Text color="#52BD94 !important">• 已加入</Text>
        </Pane>
        <Pane className="input-line">
          <Text>證照</Text>
          <Pane>
            {certificationArr.map((item, index) => {
              return (
                <Pane key={index}>
                  <TextInput
                    name="certification"
                    marginTop={10}
                    placeholder="新增證照"
                    value={item.value || ""}
                    onChange={(e: any) => {
                      handleValue(e, item.id);
                      handleChangeLicense(e);
                    }}
                  />
                  <Text
                    marginLeft={16}
                    cursor="pointer"
                    onClick={(e: any) => {
                      handleInputRemove(item.id);
                    }}
                  >
                    –
                  </Text>
                </Pane>
              );
            })}
            <Button
              className="add-license-btn"
              onClick={(e: any) => {
                e.preventDefault();
                handleInputAdd();
                // handleInputAdd(item.id);
              }}
              marginY={8}
              iconBefore={PlusIcon}
            >
              新增證照
            </Button>
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default EmployeeInfo;

{
  /* <Pane className="input-line resign">
          <Text>離職日期</Text>
          <Pane display="flex">
            <TextInput
              type="date"
              name="leave_date"
              value={insertData.leave_date}
              onChange={handleEmployeeChange}
            />
            <Checkbox
              label="迄今"
              checked={untilnowChecked}
              onChange={(e: any) => setUntilnowChecked(e.target.checked)}
            />
          </Pane>
        </Pane>
        <Pane
          className="input-line"
          onClick={(e: any) => {
            e.preventDefault();
          }}
        >
          <Text>邀請時間與次數</Text>
          <Pane>
            {inviteActive ? (
              <Text>{inviteDate}，邀請第1次</Text>
            ) : (
              <Button
                className="invite-btn"
                intent="none"
                onClick={handleInvite}
              >
                邀請
              </Button>
            )}
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text>員工狀態</Text>
          <Text color="#52BD94 !important">• 已加入</Text>
        </Pane> */
}

// {index === certificationArr.length - 1 ? (
//   <Text
//     marginLeft={14}
//     cursor="pointer"
//     onClick={() => {
//       handleInputAdd(item.id);
//     }}
//   >
//     +
//   </Text>
// ) : (
//   <Text
//     marginLeft={16}
//     cursor="pointer"
//     onClick={(e: any) => {
//       handleInputRemove(item.id);
//     }}
//   >
//     –
//   </Text>
// )}
