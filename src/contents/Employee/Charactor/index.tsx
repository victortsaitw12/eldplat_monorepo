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
import { BodySTY, CharactorCardSTY } from "./style";
import { getGroupsList } from "@services/group/getGroupsList";

export interface I_Charactor {
  group_no: string;
  group_name: string;
  description: string;
  // id: string;
  // title: string;
  // description: string;
}

function Charactor({ insertData, setInsertData }: I_Content_Props) {
  console.log("✨✨✨inserData in Charactor", insertData);
  const [charactorSelected, setCharactorSelected] = useState<any>(null);
  const [charactorArr, setCharactorArr] = useState<I_Charactor[] | any[]>([]);
  const [charactorValue, setCharactorValue] = useState<any[]>([]);
  const [groupList, setGroupList] = useState<any[]>([]);

  useEffect(() => {
    getGroupsList().then((data) => {
      // console.log("3️⃣data for groups", data);
      setGroupList(data.data);
    });

    // 一進來先抓資料庫原本就有的角色資料
    insertData && setCharactorArr(insertData["groups"]);
    insertData &&
      setCharactorValue(insertData?.groups?.map((v: any) => v.group_no));
  }, []);

  const newData: any = { ...insertData };
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
    newData["group_no"] = charactorValue;
    setInsertData(newData);
  }, [charactorValue]);

  useEffect(() => {
    newData["groups"] = charactorArr;
    setInsertData(newData);
  }, [charactorArr]);

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
    // newData["group_no"] = charactorValue;
    // setInsertData(newData);
  };

  // console.log("🅰charactorArr", charactorArr);
  // console.log("🅱charactorValue", charactorValue);
  // console.log("🆎groupList", groupList);

  return (
    <BodySTY>
      <Heading is="h4">指定群组</Heading>
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
        <Button>{charactorSelected || "請新增群组"}</Button>
      </SelectMenu>

      {charactorArr.map((item: any, idx: number) => {
        return (
          // <Pane key={item.title} className="charactor-card">
          <CharactorCard
            key={item.group_name}
            item={item}
            handleRemove={(item) => handleRemove(item)}
          />
        );
      })}
    </BodySTY>
  );
}
const CharactorCard = ({
  item,
  handleRemove
}: {
  item: any;
  handleRemove?: (item: any) => void;
}) => {
  return (
    <CharactorCardSTY key={item.group_name}>
      <Pane className="card-title">
        <Text>{item.group_name}</Text>
        {handleRemove && (
          <IconButton
            size="small"
            icon={SmallCrossIcon}
            onClick={() => {
              handleRemove(item);
            }}
          />
        )}
      </Pane>
      <Paragraph>{item.description}</Paragraph>
    </CharactorCardSTY>
  );
};

export default Charactor;
export { CharactorCard };
