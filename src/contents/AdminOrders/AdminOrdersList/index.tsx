import TableWithEdit from "@components/Table/TableWithEdit";
import { BodySTY } from "./style";

interface Props {
  listData: any;
  goToCreatePage: () => void;
  goToDetailPage: (id: string, item: any) => void;
  goToEditPageHandler: (id: string, item: any) => void;
  deleteItemHandler: (id: string) => void;
}

const AdminOrdersList = ({ listData, goToDetailPage, goToCreatePage, goToEditPageHandler, deleteItemHandler }: Props) => {
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
        tableName="詢價"
        titles={tableTitleArr}
        data={listData}
        goToCreatePage={goToCreatePage}
        goToEditPage={goToEditPageHandler}
        deleteItem={deleteItemHandler}
        viewItem={goToDetailPage}
      />
    </BodySTY>
  );
}

export default AdminOrdersList;
