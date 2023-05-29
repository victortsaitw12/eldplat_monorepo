import {
  Button,
  Checkbox,
  Combobox,
  Heading,
  Pane,
  Text,
  TextInput
} from "evergreen-ui";
import React, { useState } from "react";
import { class_DATA, department_DATA } from "./data";
import { BodySTY } from "./style";

interface I_certificationType {
  id: number;
  value: string;
}

function EmployeeInfo() {
  const [untilnowChecked, setUntilnowChecked] = useState(false);

  // 證照陣列
  const [certificationArr, setCertificationArr] = useState<
    I_certificationType[]
  >([{ id: 0, value: "" }]);

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

  // 加一欄證照
  const handleInputAdd = (idx: number) => {
    setCertificationArr((prev) => [...prev, { id: idx + 1, value: "" }]);
  };

  // 移除一欄證照
  const handleInputRemove = (id: number, idx: number) => {
    const newArr = certificationArr.filter((v, i) => {
      return v.id !== id;
    });

    setCertificationArr(newArr);
  };

  return (
    <BodySTY>
      <Heading is="h4">員工資訊</Heading>
      <form>
        <Pane className="input-line">
          <Text>員工編號</Text>
          <TextInput name="employee-no" />
        </Pane>
        <Pane className="input-line">
          <Text>職務名稱</Text>
          <TextInput name="job-title" />
        </Pane>
        <Pane className="input-line">
          <Text>公司名稱</Text>
          <Text>雄獅通運公司</Text>
        </Pane>
        <Pane className="input-line">
          <Text>部門別</Text>
          <Combobox
            openOnFocus
            items={department_DATA}
            onChange={(selected) => console.log(selected)}
            placeholder="請選擇"
          />
        </Pane>
        <Pane className="input-line">
          <Text>組別</Text>
          <Combobox
            openOnFocus
            items={class_DATA}
            onChange={(selected) => console.log(selected)}
            placeholder="請選擇"
          />
        </Pane>
        <Pane className="input-line">
          <Text>到職日期</Text>
          <TextInput type="date" name="arrival-date" />
        </Pane>
        <Pane className="input-line resign">
          <Text>離職日期</Text>
          <Pane display="flex">
            <TextInput type="date" name="resign-date" />
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
          <Button className="invite-btn" intent="none">
            邀請
          </Button>
        </Pane>
        <Pane className="input-line">
          <Text>員工狀態</Text>
          <Text color="#52BD94 !important">• 已加入</Text>
        </Pane>
        <Pane className="input-line">
          <Text>證照</Text>
          <Pane>
            {certificationArr.map((item, index) => {
              return (
                <>
                  <TextInput
                    key={index}
                    name="certification"
                    marginTop={10}
                    placeholder="新增證照"
                    value={item.value}
                    onChange={(e: any) => {
                      handleValue(e, item.id);
                    }}
                  />

                  {index === certificationArr.length - 1 ? (
                    <Text
                      marginLeft={14}
                      cursor="pointer"
                      onClick={() => {
                        handleInputAdd(item.id);
                      }}
                    >
                      +
                    </Text>
                  ) : (
                    <Text
                      marginLeft={16}
                      cursor="pointer"
                      onClick={() => {
                        handleInputRemove(item.id, index);
                      }}
                    >
                      –
                    </Text>
                  )}
                </>
              );
            })}
          </Pane>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default EmployeeInfo;
