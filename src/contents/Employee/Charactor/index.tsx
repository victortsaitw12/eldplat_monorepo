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
import { getGroupsList } from "@services/group/getGroupsList";

export interface I_Charactor {
  group_no: string;
  group_name: string;
  description: string;
  // id: string;
  // title: string;
  // description: string;
}

function Charactor({ insertData, setInsertData, editData }: I_Content_Props) {
  const [charactorSelected, setCharactorSelected] = useState<any>(null);
  const [charactorArr, setCharactorArr] = useState<I_Charactor[] | any[]>([]);
  const [charactorValue, setCharactorValue] = useState<any[]>([]);
  const [groupList, setGroupList] = useState<any[]>([]);

  // 一進來先抓資料庫原本就有的角色資料
  useEffect(() => {
    editData && setCharactorArr(editData["groups"]);
    editData && setCharactorValue(editData?.groups.map((v) => v.group_no));
    // editData && setCharactorArr(editData?.group_no);
    // editData && setCharactorValue(editData?.group_no.map((v) => v.id));
  }, [editData]);

  useEffect(() => {
    getGroupsList().then((data) => {
      console.log("3️⃣data for groups", data);
      setGroupList(data.data);
    });
  }, []);

  const newData = { ...insertData };
  // 選了哪個角色類型
  const handleSelect = (newItem: any) => {
    let hasRepeat = false;

    // 選到的陣列物件
    // const filterArr = charactor_Card.filter((item) => {
    //   return item.id === newItem.charactor_id;
    // });
    const filterArr = groupList.filter((item) => {
      return item.group_no === newItem.value;
    });

    // 如果卡牌已經有了，再點option也沒用
    // charactorArr.forEach((item: any) => {
    //   if (item.id === newItem.charactor_id) {
    //     hasRepeat = true;
    //   }
    // });
    charactorArr.forEach((item: any) => {
      if (item.group_no === newItem.value) {
        hasRepeat = true;
      }
    });

    if (hasRepeat) return;
    filterArr.forEach((v) => {
      setCharactorArr((prev: any) => [...prev, v]);
    });

    // 把選到的角色value存進一個陣列，再設回group_no物件
    // setCharactorValue((prev: any) => [...prev, newItem.charactor_id]);
    setCharactorValue((prev: any) => [...prev, newItem.value]);
  };

  // 把角色物件設回最大物件
  useEffect(() => {
    // newData.group_no = charactorValue;
    newData["group_no"] = charactorValue;
    setInsertData(newData);
  }, [charactorValue]);

  // 按下卡牌x
  const handleRemove = (newItem: any) => {
    // setCharactorArr(
    //   charactorArr.filter((v: any, i: any) => {
    //     return v.id !== newItem.id;
    //   })
    // );
    setCharactorArr(
      charactorArr.filter((v: any, i: any) => {
        return v.group_no !== newItem.group_no;
      })
    );
    // setCharactorValue(
    //   charactorValue.filter((v: any) => {
    //     return v !== newItem.id;
    //   })
    // );
    setCharactorValue(
      charactorValue.filter((v: any) => {
        return v !== newItem.group_no;
      })
    );
    // newData.group_no = charactorValue;
    newData["group_no"] = charactorValue;
    setInsertData(newData);
  };

  console.log("🅰charactorArr", charactorArr);
  console.log("🅱charactorValue", charactorValue);
  console.log("🆎groupList", groupList);

  return (
    <BodySTY>
      <Heading is="h4">指定角色</Heading>
      <SelectMenu
        title="搜尋角色"
        // options={charactor_DATA.map((label) => label)}
        options={groupList.map((item) => {
          return { label: item.group_name, value: item.group_no };
        })}
        // options={[
        //   { label: "Option 1", value: "option-1" },
        //   { label: "Option 2", value: "option-2" }
        // ]}
        selected={charactorSelected}
        onSelect={(item: any) => {
          console.log("item", item);
          setCharactorSelected(item.label);
          handleSelect(item);
        }}
      >
        <Button>{charactorSelected || "請新增角色"}</Button>
      </SelectMenu>

      {charactorArr.map((item: any, idx: number) => {
        return (
          // <Pane key={item.title} className="charactor-card">
          <Pane key={item.group_name} className="charactor-card">
            <Pane className="card-title">
              {/* <Text>{item.title}</Text> */}
              <Text>{item.group_name}</Text>
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
