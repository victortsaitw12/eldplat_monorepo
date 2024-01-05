import TableWithEdit from "@components/Table/TableWithEdit";
import { BodySTY } from "./style";

import { I_PageInfo } from "@components/PaginationField";

interface Props {
  listData: any;
  goToCreatePage: () => void;
  goToDetailPage: (id: string, item: any) => void;
  goToEditPageHandler?: (id: string, item: any) => void;
  deleteItemHandler?: (id: string) => void;
  pageInfo: I_PageInfo;
  handlePageChange?: (pageQuery: I_PageInfo) => void;
}

const AdminOrdersList = ({
  listData,
  goToDetailPage,
  goToCreatePage,
  goToEditPageHandler,
  deleteItemHandler,
  pageInfo,
  handlePageChange
}: Props) => {
  const tableTitleArr = [
    "詢價單號",
    "分類",
    "聯絡人",
    "聯絡人電話",
    "聯絡人信箱",
    "狀態",
    "接單",
    "標籤"
  ];
  return (
    <BodySTY>
      <TableWithEdit
        tableName="訂單列表"
        createBtnText="新增訂單"
        titles={tableTitleArr}
        data={listData}
        goToCreatePage={goToCreatePage}
        goToEditPage={goToEditPageHandler}
        deleteItem={deleteItemHandler}
        viewItem={goToDetailPage}
        deleteText={"取消"}
        pageInfo={pageInfo}
        onPageChange={handlePageChange}
      />
    </BodySTY>
  );
};

export default AdminOrdersList;
