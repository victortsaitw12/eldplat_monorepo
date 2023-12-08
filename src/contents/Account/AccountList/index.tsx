import { useRouter } from "next/router";
import { Tooltip, EditIcon } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_AccountItem } from "@services/account/getAccountList";
import Table from "@components/Table/Table";
import IconBtn from "@components/Button/IconBtn";
import Checkbox from "@components/CheckBox";
import InvitSatus from "./InvitSatus";
import PaginationField, { I_PageInfo } from "@components/PaginationField";

const tableTitleArr = [
  <Checkbox key="header__checkbox" />,
  "使用者姓名",
  "隸屬組織",
  "平台角色",
  "帳號狀態",
  ""
];

const AccountList = ({ data }: I_Props) => {
  const router = useRouter();

  //------ functions ------//
  const handleView = (id: string) => {
    router.push(`/account/detail/${id}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/account/detail/${id}?editPage=edit`);
  };

  // ------- render ------- //
  const dataFitTable = data.map((item, i) => {
    return {
      id: item["account_no"],
      checkbox: <Checkbox value={item["account_name"]} />,
      account_name: item["account_name"] || "--",
      org_name: item["org_name"] || "--",
      role_name_m: item["role_name_m"] || "--",
      invt_sts: <InvitSatus value={item["invt_sts"]} />,
      action: (
        <IconBtn
          tip="編輯"
          type="edit"
          onClick={handleEdit.bind(null, item.account_no)}
        />
        // <Tooltip content="編輯">
        //   <EditIcon onClick={handleEdit} />
        // </Tooltip>
      )
    };
  });

  return (
    <BodySTY>
      <Table
        titles={tableTitleArr}
        data={dataFitTable}
        onView={handleView}
        headNode={<PaginationField />}
      />
    </BodySTY>
  );
};

export default AccountList;

interface I_Props {
  data: I_AccountItem[];
  pageInfo: I_PageInfo;
}
