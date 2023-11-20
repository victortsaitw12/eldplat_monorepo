import { useRouter } from "next/router";
import { Tooltip, EditIcon } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_RoleListItem } from "@services/role/getRoleList";
import Table from "@components/Table/Table";
import IconBtn from "@components/Button/IconBtn";
import PaginationField from "@components/PaginationField";

const tableTitleArr = ["模組", "角色名稱", "職責描述", ""];

const RoleList = ({ data }: I_Props) => {
  const router = useRouter();

  //------ functions ------//
  const handleCreateRole = () => {
    console.log("called");
  };

  const handleView = (id: string) => {
    router.push(`/role/detail/${id}?editPage=view`);
  };

  const handleEdit = (id: string) => {
    router.push(`/role/detail/${id}?editPage=edit`);
  };
  // ------- render ------- //
  const dataFitTable = data.map((item, i) => {
    // const descriptionToString = item["description"].join(", ");
    return {
      id: item["role_no"],
      module_name: item["module_name"],
      role_name: item["role_name"],
      role_desc: item["role_desc"],
      action: (
        <IconBtn
          tip="編輯"
          type="edit"
          onClick={handleEdit.bind(null, item.role_no)}
        />
        // <Tooltip content="編輯">
        //   <EditIcon onClick={handleEdit} />
        // </Tooltip>
      )
      // action: <IconBtn tipText="編輯" type="edit" onClick={handleEdit} />
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

export default RoleList;

interface I_Props {
  data: I_RoleListItem[];
}
