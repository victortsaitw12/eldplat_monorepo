import TableWithEdit from "@components/Table/TableWithEdit";
import { getVendorTitle } from "@services/vendor/getAllVendors";
import { FormattedMessage } from "react-intl";
import { BodySTY } from "./style";
interface Props {
  vendorData: any;
  goToCreatePage: () => void;
  goToDetailPage: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  deleteItemHandler: (id: string) => void;
}

const ClientList = ({ vendorData, goToDetailPage, goToCreatePage, goToEditPageHandler, deleteItemHandler }: Props) => {
  // const vendorTitle = getVendorTitle();
  // multi languages for tabel title
  const vendorTitleArr = [
    <FormattedMessage key="vendor_name" id="vendor_name" />,
    <FormattedMessage key="vendor_city" id="vendor_city" />,
    <FormattedMessage key="vendor_phone" id="vendor_phone" />,
    <FormattedMessage key="vendor_website" id="vendor_website" />,
    <FormattedMessage key="vendor_contact_name" id="vendor_contact_name" />,
    <FormattedMessage key="vendor_contact_email" id="vendor_contact_email" />,
    <FormattedMessage key="categoryTitle" id="categoryTitle" />,
  ];
  return (
    <BodySTY>
      <TableWithEdit
        tableName="供應商"
        titles={vendorTitleArr}
        data={vendorData}
        goToCreatePage={goToCreatePage}
        goToEditPage={goToEditPageHandler}
        deleteItem={deleteItemHandler}
        viewItem={goToDetailPage}
      />
    </BodySTY>
  );
}

export default ClientList;
