import TableWithEdit from "@components/Table/TableWithEdit";
import { getVendorTitle } from "@services/vendor/getAllVendors";
import { BodySTY } from "./style";

interface Props {
  vendorData: any;
  goToCreatePage: () => void;
}

function ClientList({ vendorData, goToCreatePage }: Props) {
  const vendorTitle = getVendorTitle();
  return (
    <BodySTY>
      <TableWithEdit
        tableName="供應商"
        titles={vendorTitle}
        data={vendorData}
        goToCreatePage={goToCreatePage}
      />
    </BodySTY>
  );
}

export default ClientList;
