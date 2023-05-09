// import TableWithEdit from "@components/Table/TableWithEdit";
// import { getVendorTitle } from "@services/vendor/getAllVendors";
// import { FormattedMessage } from "react-intl";
import React, { useState } from "react";
import InfoBox from "@components/InfoBox";
import VendorLayout from "../VendorLayout";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
interface Props {
  vendorData: any;
  goToCreatePage?: () => void;
  goToDetailPage?: (id: string) => void;
  goToEditPageHandler?: (id: string) => void;
  deleteItemHandler?: (id: string) => void;
}

const VendorDetail = ({ vendorData, goToDetailPage, goToCreatePage, goToEditPageHandler, deleteItemHandler }: Props) => {
  console.log("@@@@@@@@@@@vendor data", vendorData);
  const [fuelValue, setFuelValue] = useState<string[]>(["03"]);
  const [isEdit, setIsEdit] = useState(false);
  const methods = useForm({ defaultValues: vendorData });

  const basic_info = [
    {
      name: "vendor_No",
      label: "供應商號碼",
      value: vendorData.vendor_No
    },
    {
      req: true,
      name: "vendor_Name",
      label: "名稱",
      value: vendorData.vendor_Name
    },
    {
      req: true,
      name: "updid",
      label: "統一編號",
      value: vendorData.updid
    },
    {
      req: true,
      name: "company_No",
      label: "負責人",
      value: vendorData.company_No
    }
  ]

  const category_info = [
    {
      label: "外部車隊",
      value: "",
    },
    {
      label: "設備庫存",
      value: ""
    },
    {
      label: "維修廠",
      value: ""
    },
    {
      label: "保險",
      value: ""
    },
    {
      label: "燃料",
      value: ""
    },
    {
      label: "其他",
      value: ""
    },
    {
      label: "etag",
      value: ""
    }
  ]

  const label_info = [
    {
      label: "加油",
      value: "加油"
    },
    {
      label: "加油",
      value: "加油"
    },
    {
      label: "加油",
      value: "加油"
    }
  ]

  const contact_info = [
    {
      req: true,
      name: "vendor_Address",
      label: "公司地址",
      value: vendorData.vendor_Address
    },
    {
      req: false,
      name: "vendor_Address2",
      label: "",
      value: vendorData.vendor_Address2
    },
    {
      req: false,
      name: "vendor_City",
      label: "",
      value: vendorData.vendor_City
    },
    {
      req: false,
      name: "vendor_Contact_Name",
      label: "",
      value: vendorData.vendor_Contact_Name
    },
    {
      req: true,
      name: "vendor_Contact_Phone",
      label: "公司電話",
      value: vendorData.vendor_Contact_Phone
    },
    {
      req: false,
      name: "vendor_Contact_Phone",
      label: "公司傳真",
      value: vendorData.vendor_Contact_Phone
    },
    {
      req: false,
      name: "vendor_Contact_Email",
      label: "公司信箱",
      value: vendorData.vendor_Contact_Email
    },
    {
      req: false,
      name: "vendor_Website",
      label: "公司網址",
      value: vendorData.vendor_Website
    },
    {
      req: true,
      name: "vendor_Contact_Name",
      label: "主要聯絡人",
      value: vendorData.vendor_Contact_Name
    },
    {
      req: false,
      label: "主要聯絡人電話",
      value: "市話 ---"
    },
    {
      req: false,
      label: "",
      value: "手機 +886 900111888"
    },
  ]

  return (<>
    <FormProvider {...methods} >
      <form
        onSubmit={methods.handleSubmit((data) => {
          console.log("🕯️🕯️🕯️🕯️🕯️🕯️這是用form-hook的data:", { ...data, vendor_Code: fuelValue });
        })}
      >
        <VendorLayout
          basicSection={<InfoBox isEdit={isEdit} infoData={basic_info} infoTitle="基本資料" />}
          categorySection={<InfoBox isEdit={isEdit} infoData={category_info} infoType="checkbox" infoTitle="分類" />}
          labelSection={<InfoBox isEdit={isEdit} infoData={label_info} infoType="label" infoTitle="標籤" />}
          contactSection={<InfoBox isEdit={isEdit} infoData={contact_info} infoTitle="聯絡方式" />}
        />
        <button
          onClick={() => {
            setIsEdit(!isEdit)
          }}
        >
          編輯/檢視切換
        </button>
        <button
          className="fill"
          type="submit"
        >
          儲存供應商
        </button>
      </form>
    </FormProvider>
  </>
  );
}

export default VendorDetail;
