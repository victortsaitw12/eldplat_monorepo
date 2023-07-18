import TableWithEdit from "@components/Table/TableWithEdit";
import { getCustomerTitle } from "@services/customer/getAllCustomers";
import { BodySTY } from "./style";
import { PageInfoType } from "@services/type";

interface Props {
  clientData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  goToDetailPage: (id: string) => void;
  upDatePageHandler?: (pageInfo: PageInfoType) => void;
  pageInfo: PageInfoType;
}

function ClientList({
  clientData,
  goToCreatePage,
  deleteItemHandler,
  goToEditPageHandler,
  goToDetailPage,
  upDatePageHandler,
  pageInfo
}: Props) {
  const clientTitle = getCustomerTitle();
  return (
    <BodySTY>
      <TableWithEdit
        tableName="客戶"
        cleanTableName="客戶列表"
        titles={clientTitle}
        data={clientData}
        goToCreatePage={goToCreatePage}
        deleteItem={deleteItemHandler}
        goToEditPage={goToEditPageHandler}
        viewItem={goToDetailPage}
        pageInfo={pageInfo}
        onPageChange={upDatePageHandler}
      />
    </BodySTY>
  );
}

export default ClientList;
