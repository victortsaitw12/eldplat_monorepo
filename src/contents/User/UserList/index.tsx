import { useRouter } from "next/router";
import { Tooltip, EditIcon } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_UserItem } from "@services/user/getUserList";
import Table from "@components/Table/Table";
import IconBtn from "@components/Button/IconBtn";
import PaginationField from "@components/PaginationField";
import Checkbox from "@components/CheckBox";
import InvitSatus from "./InvitSatus";

const tableTitleArr = [
  <Checkbox key="header__checkbox" />,
  "使用者姓名",
  "隸屬組織",
  "平台角色",
  "帳號狀態",
  ""
];

const UserList = ({ data }: I_Props) => {
  const router = useRouter();

  //------ functions ------//
  const handleView = (id: string) => {
    router.push(`/role/detail/[${id}]`);
  };

  const handleEdit = (id: string) => {
    router.push(`/role/detail/${id}?editPage=edit`);
  };

  // ------- render ------- //
  const dataFitTable = data.map((item, i) => {
    return {
      // id:  item["id"],
      checkbox: <Checkbox value={item["account_name"]} />,
      account_name: item["account_name"],
      org_name: item["org_name"],
      role_name_o: item["role_name_o"],
      invt_sts: <InvitSatus value={item["invt_sts"]} />,
      action: (
        <IconBtn
          tip="編輯"
          type="edit"
          onClick={handleEdit.bind(null, item.id)}
        />
        // <Tooltip content="編輯">
        //   <EditIcon onClick={handleEdit} />
        // </Tooltip>
      )
    };
  });

  return (
    <BodySTY>
      <PaginationField />
      <Table titles={tableTitleArr} data={dataFitTable} onView={handleView} />
    </BodySTY>
  );
};

export default UserList;

interface I_Props {
  data: I_UserItem[];
}
