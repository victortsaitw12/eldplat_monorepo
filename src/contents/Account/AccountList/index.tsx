import { useRouter } from "next/router";
import {
  Tooltip,
  IconButton,
  EditIcon,
  EnvelopeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Button
} from "evergreen-ui";
import { BodySTY } from "./style";

import { I_AccountItem, I_RoleName } from "@services/account/getAccountList";
import Table from "@components/Table/Table";
import CollapseTable from "@components/Table/CollapseTable";
import IconBtn from "@components/Button/IconBtn";
import Checkbox from "@components/CheckBox";
import InvitSatus from "./InvitSatus";
import PaginationField, { I_PageInfo } from "@components/PaginationField";

const tableTitleArr = [
  "",
  "使用者姓名",
  "隸屬組織",
  "平台角色",
  "帳號狀態",
  ""
];

const AccountList = ({ data, pageInfo }: I_Props) => {
  const router = useRouter();

  //------ functions ------//
  const handleView = (id: string) => {
    router.push(`/account/detail/${id}`);
  };

  const handleEdit = (id: string, e: any) => {
    e.stopPropagation();
    router.push(`/account/detail/${id}?editPage=edit`);
  };

  const toggleCollapse = (e: any) => {
    e.stopPropagation();
  };

  const handleFoldAll = () => {
    console.log("foldAll");
  };
  const handleOpenAll = () => {
    console.log("openAll");
  };
  const getRoleName = (roles: I_RoleName[]) => {
    const roleNodeArr = roles.map((role: any, i) => {
      return (
        <div key={`roleName-${i}`} className="role">
          <div className="roleName_m"> {role.role_name_m}</div>
          <div className="roleName"> {role.role_name.join(",")}</div>
        </div>
      );
    });
    return <div className="roles">{roleNodeArr}</div>;
  };

  // ------- render ------- //
  const dataFitTable = data.map((item, i) => {
    return {
      id: item["account_no"],
      account_name: item["account_name"] || "--",
      org_name: item["org_name"].join("/") || "--",
      role_name_m: getRoleName(item["roles"]) || "--",
      invt_sts: <InvitSatus value={item["invt_sts"]} />,
      action: (
        <>
          <IconBtn
            tip="編輯"
            type="edit"
            onClick={handleEdit.bind(null, item.account_no)}
          />
          {item.invt_sts === "01" && (
            <IconBtn
              tip="寄送驗證信"
              type="envelope"
              onClick={() => console.log("click")}
            />
          )}
        </>
        // <Tooltip content="編輯">
        //   <EditIcon onClick={handleEdit} />
        // </Tooltip>
      )
    };
  });

  const headNode = (
    <div className="headNode">
      <div className="btns">
        <Button onClick={handleFoldAll}>全部收合</Button>
        <Button onClick={handleOpenAll}>全部展開</Button>
      </div>
      <PaginationField pageInfo={pageInfo} />
    </div>
  );

  return (
    <BodySTY>
      <CollapseTable
        titles={tableTitleArr}
        data={dataFitTable}
        onView={handleView}
        headNode={headNode}
      />
    </BodySTY>
  );
};

export default AccountList;

interface I_Props {
  data: I_AccountItem[];
  pageInfo: I_PageInfo;
}
