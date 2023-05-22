import TableWithEdit from "@components/Table/TableWithEdit";
import { getCustomerTitle } from "@services/customer/getAllCustomers";
import { BodySTY } from "./style";

interface Props {
  clientData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  goToDetailPage: (id: string) => void;
}

function ClientList({
  clientData,
  goToCreatePage,
  deleteItemHandler,
  goToEditPageHandler,
  goToDetailPage
}: Props) {
  const clientTitle = getCustomerTitle();
  console.log("clientData", clientData);
  return (
    <BodySTY>
      <TableWithEdit
        tableName="客戶"
        titles={clientTitle}
        data={clientData}
        goToCreatePage={goToCreatePage}
        deleteItem={deleteItemHandler}
        goToEditPage={goToEditPageHandler}
        viewItem={goToDetailPage}
      />
    </BodySTY>
  );
}

export default ClientList;
