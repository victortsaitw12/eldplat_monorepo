import TableWithEdit from "@components/Table/TableWithEdit";
import { getCustomerTitle } from "@services/customer/getAllCustomers";
import { BodySTY } from "./style";
import { PageInfoType } from "@services/type";

interface Props {
  listType: string;
  customerData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  recoverItemHandler: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  goToDetailPage: (id: string) => void;
  upDatePageHandler?: (pageInfo: PageInfoType) => void;
  pageInfo: PageInfoType;
}

function CustomerList({
  listType,
  customerData,
  goToCreatePage,
  deleteItemHandler,
  recoverItemHandler,
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
        data={customerData}
        goToCreatePage={goToCreatePage}
        viewItem={goToDetailPage}
        pageInfo={pageInfo}
        onPageChange={upDatePageHandler}
        {...(listType == "1" && {
          goToEditPage: (id) => {
            goToEditPageHandler(id);
          },
          deleteItem: (id) => {
            deleteItemHandler(id);
          }
        })}
        {...(listType == "2" && {
          recoverItem: (id) => {
            recoverItemHandler && recoverItemHandler(id);
          }
        })}
      />
    </BodySTY>
  );
}

export default CustomerList;
