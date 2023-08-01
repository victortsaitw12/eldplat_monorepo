import TableWithEdit from "@components/Table/TableWithEdit";
import { getVendorTitle } from "@services/vendor/getAllVendors";
import { FormattedMessage } from "react-intl";
import { BodySTY } from "./style";
import { Checkbox, HelpIcon, Pane } from "evergreen-ui";
import Tooltip from "@components/Tooltip";
import { I_PageInfo } from "@components/PaginationField";
interface Props {
  vendor_code: string;
  listType?: string;
  vendorData: any;
  goToCreatePage: () => void;
  goToDetailPage: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  deleteItemHandler: (id: string) => void;
  recoverItem?: (id: string) => void;
  pageInfo: any;
  handlePageChange: (pageQuery: I_PageInfo) => void;
}

const VendorList = ({
  vendor_code,
  listType = "1",
  vendorData,
  goToDetailPage,
  goToCreatePage,
  goToEditPageHandler,
  deleteItemHandler,
  recoverItem,
  pageInfo,
  handlePageChange
}: Props) => {
  // const vendorTitle = getVendorTitle();
  // multi languages for tabel title
  // console.log("💫💫vendorData", vendorData);
  // console.log(
  //   "vendorData.map",
  //   vendorData?.map((c: any) => {
  //     return c;
  //   })
  // );
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
    <Pane
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
      key="vendor-data"
    >
      資料串接
      <Tooltip text={"testing"}>
        <HelpIcon />
      </Tooltip>
    </Pane>,
    "名稱",
    "區域",
    "公司電話",
    "公司郵箱",
    "主要聯絡人",
    "主要聯絡人電話",
    <Pane
      key="vendor-website"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      網址
    </Pane>,
    "標籤"
  ];

  const TableTitle: { [key: string]: string } = {
    "01": "外部車隊"
  };
  return (
    <BodySTY>
      <TableWithEdit
        tableName={TableTitle[vendor_code] || "供應商"}
        createBtnText="新增供應商"
        titles={vendorTitleArr}
        data={vendorData}
        goToCreatePage={goToCreatePage}
        viewItem={goToDetailPage}
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
            recoverItem && recoverItem(id);
          }
        })}
        pageInfo={pageInfo}
        onPageChange={handlePageChange}
      />
    </BodySTY>
  );
};

export default VendorList;
