import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { TextInputField, TextInput, SelectField, Pane } from "evergreen-ui";
import { MOCK_FUEL_DATA } from "./FuelData";

//@components
import InfoBox from "@components/InfoBox";
// import FormCard from "@components/FormCard";

//@layout
import FlexWrapper from "@layout/FlexWrapper";

//@service

//@utils
import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";

interface I_Props {
  isEdit: boolean;
  vendorData: any;
  goToCreatePage?: () => void;
  goToDetailPage?: (id: string) => void;
  goToEditPageHandler?: (id: string) => void;
  deleteItemHandler?: (id: string) => void;
  submitForm: (data: any) => void;
}

const VendorDetail = ({ isEdit, vendorData, goToDetailPage, goToCreatePage, goToEditPageHandler, deleteItemHandler, submitForm }: I_Props) => {
  console.log("@@@@@@@@@@@vendor data", vendorData);
  const [fuelValue, setFuelValue] = useState<string[]>(["03"]);
  const methods = useForm({ defaultValues: vendorData });
  //分類的選法
  const toggleFuelValue = (value: string) => {
    const newData = [...fuelValue];
    const idx = fuelValue.indexOf(value);
    // 如果在fuelValue陣列抓不到該value，idx會是-1，然後就push一個新的value，反之則刪去
    if (idx === -1) {
      newData.push(value);
    } else {
      newData.splice(idx, 1);
    }
    setFuelValue(newData);
  };
  //基本資料
  const basic_info = [
    {
      readonly: true,
      label: "供應商號碼",
      value: vendorData.vendor_No,
    },
    {
      req: true,
      label: "名稱",
      value: vendorData.vendor_Name,
      editEle:
        <TextInput
          {...methods.register("vendor_Name", {
            required: "必填",
            validate: textValidation
          })}
        />
    },
    {
      req: true,
      label: "統一編號",
      value: vendorData.updid,
      editEle:
        <TextInput
          {...methods.register("updid", {
            validate: textValidation
          })}
        />
    },
    {
      req: true,
      label: "負責人",
      value: vendorData.company_No,
      editEle: <TextInput  {...methods.register("company_No", {
        validate: textValidation
      })} />
    }
  ]
  //分類
  const category_info = MOCK_FUEL_DATA.map((child, i) => { return { label: child.label, value: child.value } })
  //標籤
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
  //聯絡方式
  const contact_info = [
    {
      req: true,
      label: "公司地址",
      subLabel: <span>地址1</span>,
      value: vendorData.vendor_Address,
      editEle:
        <TextInput  {...methods.register("vendor_Address", {
          validate: textValidation
        })} />
    },
    {
      req: false,
      label: "",
      subLabel: <span>地址2</span>,
      value: vendorData.vendor_Address2,
      editEle:
        <TextInput  {...methods.register("vendor_Address2", {
          validate: textValidation
        })} />
    },
    {
      req: false,
      label: "",
      value: [vendorData.vendor_City, vendorData.vendor_State],
      editEle: [

        <SelectField
          label="城市"
          {...methods.register("vendor_City", {
            required: "必填",
          })}
          marginBottom="0"
        >
          <option value="KLU">基隆</option>
          <option value="TPE">台北</option>
          <option value="TPH">新北</option>
          <option value="TYC">桃園</option>
        </SelectField >
        ,
        <SelectField
          label="州/省/區"
          {...methods.register("vendor_State", {
            required: "必填",
          })}
          marginBottom="0"
        >
          <option value="01">XX區</option>
          <option value="02">XX區</option>
          <option value="03">XX區</option>
          <option value="04">XX區</option>
        </SelectField >
      ],
    },
    {
      req: false,
      label: "",
      value: [vendorData.vendor_Zip, vendorData.vendor_Country],
      editEle: [
        <TextInputField
          label="郵遞區號"
          {...methods.register("vendor_Zip", {
            validate: textValidation
          })}
          marginBottom="0"
        />,
        <SelectField
          label="國家"
          {...methods.register("vendor_Country", {
            required: "必填",
          })}
          marginBottom="0"
        >
          <option value="TW">台灣</option>
          <option value="JP">日本</option>
          <option value="US">美國</option>
        </SelectField >
      ],
    },
    {
      req: true,
      label: "公司電話",
      value: vendorData.vendor_Contact_Phone || "---",
      editEle: [
        <TextInput disabled={true} style={{ width: '60px' }} value="+886" />,
        <TextInput {...methods.register("vendor_Contact_Phone", {
          validate: numberValidation
        })} />
      ],
    },
    {
      req: false,
      label: "公司傳真",
      value: vendorData.vendor_Contact_Phone || "---",
      editEle: [
        <TextInput disabled={true} style={{ width: '60px' }} value="+886" />,
        <TextInput {...methods.register("vendor_Contact_Phone", {
          validate: numberValidation
        })} />
      ],
    },
    {
      req: false,
      label: "公司信箱",
      value: vendorData.vendor_Contact_Email || "---",
      editEle: [
        <TextInput {...methods.register("vendor_Contact_Email", {
          validate: emailValidation
        })} />
      ],
    },
    {
      req: false,
      label: "公司網址",
      value: vendorData.vendor_Website || "---",
      editEle: [
        <TextInput {...methods.register("vendor_Website", {
          validate: textValidation
        })} />
      ],
    },
    {
      req: true,
      label: "主要聯絡人",
      value: vendorData.vendor_Contact_Name || "---",
      editEle: [
        <TextInput {...methods.register("vendor_Contact_Name", {
          validate: textValidation
        })} />
      ],
    },
    {
      req: false,
      label: "主要聯絡人電話(市話)",
      value: "---",
      editEle: [
        <TextInput disabled={true} style={{ width: '60px' }} />,
        <TextInput />
      ],
    },
    {
      req: false,
      label: "主要聯絡人電話(手機)",
      value: "+886 900111888",
      editEle: [
        <TextInput disabled={true} style={{ width: '60px' }} />,
        <TextInput />
      ],
    },
  ]
  return (
    <>
      <FormProvider {...methods} >
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log("🕯️🕯️🕯️🕯️🕯️🕯️這是用form-hook的data:", { ...data, vendor_Code: fuelValue });
            submitForm({ ...data, vendor_Code: fuelValue });
          })}
        >
          <FlexWrapper padding="0">
            <div>
              <InfoBox isEdit={isEdit} infoData={basic_info} infoTitle="基本資料" />
              <FlexWrapper style={{ padding: "10px 0" }} padding="10px 0">
                <InfoBox isEdit={isEdit} infoData={category_info} infoType="checkbox" infoTitle="分類" />
                <InfoBox isEdit={isEdit} infoData={label_info} infoType="label" infoTitle="標籤" />
              </FlexWrapper>
            </div>
            <InfoBox isEdit={isEdit} infoData={contact_info} infoTitle="聯絡方式" />
          </FlexWrapper>
          <button
            className="fill"
            type="submit"
          >
            儲存供應商
          </button>
        </form>
      </FormProvider >
    </>
  );
}

export default VendorDetail;
