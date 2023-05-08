// import TableWithEdit from "@components/Table/TableWithEdit";
// import { getVendorTitle } from "@services/vendor/getAllVendors";
// import { FormattedMessage } from "react-intl";
import InfoBox from "@components/InfoBox";
import VendorLayout from "../VendorLayout";

interface Props {
  vendorData: any;
  goToCreatePage?: () => void;
  goToDetailPage?: (id: string) => void;
  goToEditPageHandler?: (id: string) => void;
  deleteItemHandler?: (id: string) => void;
}

const ClientList = ({ vendorData, goToDetailPage, goToCreatePage, goToEditPageHandler, deleteItemHandler }: Props) => {
  console.log("@@@@@@@@@@@vendor data", vendorData);

  const basic_info = [
    {
      title: "供應商號碼",
      value: vendorData.vendor_No
    },
    {
      req: true,
      title: "名稱",
      value: vendorData.vendor_Name
    },
    {
      req: true,
      title: "統一編號",
      value: vendorData.updid
    },
    {
      req: true,
      title: "負責人",
      value: vendorData.company_No
    }
  ]

  const category_info = [
    {
      title: "外部車隊",
      value: "",
    },
    {
      title: "設備庫存",
      value: ""
    },
    {
      title: "維修廠",
      value: ""
    },
    {
      title: "保險",
      value: ""
    },
    {
      title: "燃料",
      value: ""
    },
    {
      title: "其他",
      value: ""
    },
    {
      title: "etag",
      value: ""
    }
  ]

  const label_info = [
    {
      title: "加油",
      value: "加油"
    },
    {
      title: "加油",
      value: "加油"
    },
    {
      title: "加油",
      value: "加油"
    }
  ]

  const contact_info = [
    {
      req: true,
      title: "公司地址",
      value: vendorData.vendor_Address
    },
    {
      req: false,
      title: "",
      value: vendorData.vendor_Address2
    },
    {
      req: false,
      title: "",
      value: vendorData.vendor_City
    },
    {
      req: false,
      title: "",
      value: vendorData.vendor_Contact_Name
    },
    {
      req: true,
      title: "公司電話",
      value: vendorData.vendor_Contact_Phone
    },
    {
      req: false,
      title: "公司傳真",
      value: vendorData.vendor_Contact_Phone
    },
    {
      req: false,
      title: "公司信箱",
      value: vendorData.vendor_Contact_Email
    },
    {
      req: false,
      title: "公司網址",
      value: vendorData.vendor_Website
    },
    {
      req: true,
      title: "主要聯絡人",
      value: vendorData.vendor_Contact_Name
    },
    {
      req: false,
      title: "主要聯絡人電話",
      value: "市話 ---"
    },
    {
      req: false,
      title: "",
      value: "手機 +886 900111888"
    },
  ]

  return (<>
    <VendorLayout
      basicSection={<InfoBox infoData={basic_info} infoTitle="基本資料" />}
      categorySection={<InfoBox infoData={category_info} infoType="checkbox" infoTitle="分類" />}
      labelSection={<InfoBox infoData={label_info} infoType="label" infoTitle="標籤" />}
      contactSection={<InfoBox infoData={contact_info} infoTitle="聯絡方式" />}
    />
  </>
  );
}

export default ClientList;
