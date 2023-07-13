import TableWithEdit from "@components/Table/TableWithEdit";
import { getVendorTitle } from "@services/vendor/getAllVendors";
import { FormattedMessage } from "react-intl";
import { BodySTY } from "./style";
import { Checkbox, HelpIcon } from "evergreen-ui";
import Tooltip from "@components/Tooltip";
interface Props {
  vendorData: any;
  goToCreatePage: () => void;
  goToDetailPage: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  deleteItemHandler: (id: string) => void;
}

const VendorList = ({
  vendorData,
  goToDetailPage,
  goToCreatePage,
  goToEditPageHandler,
  deleteItemHandler
}: Props) => {
  // const vendorTitle = getVendorTitle();
  // multi languages for tabel title
  // console.log("💫💫vendorData", vendorData);
  console.log(
    "vendorData.map",
    vendorData?.map((c: any) => {
      return c;
    })
  );
  const vendorTitleArrI18 = [
    <FormattedMessage key="vendor_name" id="vendor_name" />,
    <FormattedMessage key="vendor_city" id="vendor_city" />,
    <FormattedMessage key="vendor_phone" id="vendor_phone" />,
    <FormattedMessage key="vendor_website" id="vendor_website" />,
    <FormattedMessage key="vendor_contact_name" id="vendor_contact_name" />,
    <FormattedMessage key="vendor_contact_email" id="vendor_contact_email" />,
    <FormattedMessage key="categoryTitle" id="categoryTitle" />
  ];
  const vendorTitleArr = [
    "供應商號碼",
    <span key="vendor-data">
      資料串接
      <Tooltip text={"testing"}>
        <HelpIcon />
      </Tooltip>
    </span>,
    "名稱",
    "區域",
    "公司電話",
    "公司郵箱",
    "主要聯絡人",
    "主要聯絡人電話",
    "網址",
    "標籤"
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
};

export default VendorList;
