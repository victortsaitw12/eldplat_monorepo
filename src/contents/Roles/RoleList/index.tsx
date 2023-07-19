import { useRouter } from "next/router";
import TableWithEdit from "@components/Table/TableWithEdit";
import AvatarList from "@components/Avatar/AvatarList";
import { BodySTY } from "./style";

const DUMMY_DATA = [
  {
    id: "1",
    group_name: "12345678",
    description:
      "John Doe John Doe John Doe John Doe John DoeJohn DoeJohn Doe John Doe John Doe John Doe",
    user: ["王大明", "李曉明", "黃熱蛋"]
  },
  {
    id: "2",
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋"]
  },
  {
    id: "3",
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋"]
  },
  {
    id: "4",
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋", "陳二狗"]
  },
  {
    id: "5",
    group_name: "12345678",
    description: "John Doe",
    user: ["王大明", "李曉明", "黃熱蛋", "陳二狗", "劉大大"]
  }
];

const DUMMY_TITLES = ["群組名稱", "群組描述", "用戶"];
const RoleList = () => {
  const router = useRouter();
  // const TableData = DUMMY_DATA.map((item) => {
  //   return {
  //     ...item,
  //     user: <AvatarList userList={item.user} />
  //   };
  // });

  const TableData = DUMMY_DATA.map((child, i) => {
    return {
      id: { label: child["id"], value: child["id"] },
      group_name: { label: child["group_name"], value: child["group_name"] },
      description: { label: child["description"], value: child["description"] },
      user: {
        label: <AvatarList userList={child.user} />,
        value: child["user"]
      }
    };
  });

  // console.log("🎶🎶🎶🎶🎶🎶", TableData);

  return (
    <BodySTY>
      {/* <Table titles={DUMMY_TITLES} data={TableData} /> */}
      <TableWithEdit
        goToEditPage={(id, item) => {
          router.push("/role/edit/USE002993");
        }}
        tableName="群组"
        titles={DUMMY_TITLES}
        data={TableData}
      />
    </BodySTY>
  );
};

export default RoleList;
