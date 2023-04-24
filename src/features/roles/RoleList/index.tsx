import Table from "@components/Table/Table";
import AvatarList from "@components/Avatar/AvatarList";
import { BodySTY } from "./style";

const DUMMY_DATA = [
  {
    id: 1,
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋"]
  },
  {
    id: 2,
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋"]
  },
  {
    id: 3,
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋"]
  },
  {
    id: 4,
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋", "陳二狗"]
  },
  {
    id: 5,
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋", "陳二狗", "劉大大"]
  }
];
const DUMMY_TITLES = ["群組名稱", "群組描述", "用戶"];

function RoleList() {
  const TableData = DUMMY_DATA.map((item) => {
    return {
      ...item,
      user: <AvatarList userList={item.user} />
    };
  });
  return (
    <BodySTY>
      <Table titles={DUMMY_TITLES} data={TableData} />
    </BodySTY>
  );
}

export default RoleList;
