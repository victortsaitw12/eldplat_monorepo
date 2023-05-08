import { I_Content_Props } from "@typings/employee_type";
import {
  Button,
  Heading,
  IconButton,
  Pane,
  Text,
  Paragraph,
  SelectMenu,
  SmallCrossIcon
} from "evergreen-ui";
import React, { useState, useEffect } from "react";
import { charactor_DATA, charactor_Card } from "./data";
import { BodySTY } from "./style";

function Charactor({ insertData, setInsertData }: I_Content_Props) {
  const [charactorSelected, setCharactorSelected] = useState<any>(null);
  const [charactorArr, setCharactorArr] = useState<any[]>([]);
  const [charactorValue, setCharactorValue] = useState<any[]>([]);

  const newData = { ...insertData };
  // 選了哪個角色類型
  const handleSelect = (newItem: any) => {
    let hasRepeat = false;

    // 選到的陣列物件
    const filterArr = charactor_Card.filter((item) => {
      return item.id === newItem.charactor_id;
    });

    // 如果卡牌已經有了，再點option也沒用
    charactorArr.forEach((item: any) => {
      if (item.id === newItem.charactor_id) {
        hasRepeat = true;
      }
    });
    if (hasRepeat) return;
    filterArr.forEach((v) => {
      setCharactorArr((prev: any) => [...prev, v]);
    });

    // 把選到的角色value存進一個陣列，再設回group_no物件

    setCharactorValue((prev: any) => [...prev, newItem.value]);
  };

  // 把健康資訊物件設回最大物件
  useEffect(() => {
    newData.group_no = charactorValue;
    setInsertData(newData);
  }, [charactorValue]);

  // 按下卡牌x
  const handleRemove = (newItem: any) => {
    setCharactorArr(
      charactorArr.filter((v: any, i: any) => {
        return v.id !== newItem.id;
      })
    );
    setCharactorValue(
      charactorValue.filter((v: any) => {
        return v !== newItem.value;
      })
    );
    newData.group_no = charactorValue;
    setInsertData(newData);
  };

  return (
    <BodySTY>
      <Heading is="h4">指定角色</Heading>
      <SelectMenu
        title="搜尋角色"
        options={charactor_DATA.map((label) => label)}
        selected={charactorSelected}
        onSelect={(item: any) => {
          setCharactorSelected(item.label);
          handleSelect(item);
        }}
      >
        <Button>{charactorSelected || "請新增角色"}</Button>
      </SelectMenu>

      {charactorArr.map((item: any, idx: number) => {
        return (
          <Pane key={item.id} className="charactor-card">
            <Pane className="card-title">
              <Text>{item.title}</Text>
              <IconButton
                icon={SmallCrossIcon}
                onClick={() => {
                  handleRemove(item);
                }}
              />
            </Pane>
            <Paragraph>{item.description}</Paragraph>
          </Pane>
        );
      })}
    </BodySTY>
  );
}

export default Charactor;
