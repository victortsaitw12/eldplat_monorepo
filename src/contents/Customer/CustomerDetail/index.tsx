import React, { useState } from "react";
import {
  useForm,
  FormProvider,
  Control,
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormGetValues
} from "react-hook-form";
import { TextInputField, TextInput, SelectField } from "evergreen-ui";

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

import { CustomerDataTypes } from "../customer.type";
interface I_Props {
  submitRef: React.RefObject<HTMLButtonElement>;
  isEdit: boolean;
  customerData: CustomerDataTypes;
  submitForm: (data: any) => void;
  control: Control<CustomerDataTypes, any>;
  register: UseFormRegister<CustomerDataTypes>;
  errors: FieldErrors<CustomerDataTypes>;
  handleSubmit: UseFormHandleSubmit<CustomerDataTypes>;
  getValues: UseFormGetValues<CustomerDataTypes>;
}

const CustomerDetail = ({
  submitRef,
  isEdit,
  customerData,
  register,
  control,
  submitForm,
  handleSubmit,
  getValues
}: I_Props) => {
  console.log("💫💫💫原本的供應商資料：", customerData);
  //TODO 分類的選法

  //基本資料
  const basic_info = [
    {
      readonly: true,
      label: "顧客號碼",
      value: getValues("customer_No")
    },
    {
      req: true,
      label: "名稱",
      value: vendor_Name,
      editEle: (
        <TextInput
          {...methods.register("vendor_Name", {
            required: "必填",
            validate: textValidation
          })}
        />
      )
    },
    {
      req: true,
      label: "統一編號",
      value: vendor_Gui_No,
      editEle: (
        <TextInput
          {...methods.register("vendor_Gui_No", {
            validate: textValidation
          })}
        />
      )
    },
    {
      req: true,
      label: "負責人",
      value: vendor_Owner,
      editEle: (
        <TextInput
          {...methods.register("vendor_Owner", {
            validate: textValidation
          })}
        />
      )
    }
  ];
  //分類 vendor_Code_List
  const category_info = vendor_Code_List.map((child, i) => {
    return { label: child.vendor_Code_Name, value: child.vendor_Code };
  });
  //標籤 label_Name(?)
  const label_info = label_Name
    ? [
        {
          label: label_Name,
          value: label_Name
        }
      ]
    : undefined;
  //聯絡方式
  const contact_info = [
    {
      req: true,
      label: "公司地址",
      subLabel: <span>地址1</span>,
      value: address1,
      editEle: (
        <TextInput
          {...methods.register("address1", {
            validate: textValidation
          })}
        />
      )
    },
    {
      req: false,
      label: "",
      subLabel: <span>地址2</span>,
      value: address2,
      editEle: (
        <TextInput
          {...methods.register("address2", {
            validate: textValidation
          })}
        />
      )
    },
    {
      req: false,
      label: "",
      value: [vendor_City, vendor_Area],
      editEle: [
        <SelectField
          key="vendor_City"
          label="城市"
          {...methods.register("vendor_City", {
            required: "必填"
          })}
          marginBottom="0"
        >
          <option value="LA">洛杉磯</option>
          <option value="TP">台北</option>
          <option value="TTP">新北</option>
          <option value="TY">桃園</option>
        </SelectField>,
        <SelectField
          key="vendor_Area"
          label="州/省/區"
          {...methods.register("vendor_Area", {
            required: "必填"
          })}
          marginBottom="0"
        >
          <option value="CA">CA區</option>
          <option value="DA">DA區</option>
          <option value="EA">EA區</option>
          <option value="FA">FA區</option>
        </SelectField>
      ]
    },
    {
      req: false,
      label: "",
      value: [vendor_District_Code, vendor_Country],
      editEle: [
        <TextInputField
          key="vendor_District_Code"
          label="郵遞區號"
          {...methods.register("vendor_District_Code", {
            validate: textValidation
          })}
          marginBottom="0"
        />,
        <SelectField
          key="vendor_Country"
          label="國家"
          {...methods.register("vendor_Country", {
            required: "必填"
          })}
          marginBottom="0"
        >
          <option value="TW">台灣</option>
          <option value="JP">日本</option>
          <option value="US">美國</option>
        </SelectField>
      ]
    },
    {
      req: true,
      label: "公司電話",
      value: vendor_Tel ? vendor_Tel_Code + " " + vendor_Tel : "---",
      editEle: [
        <TextInput
          key="vendor_Tel_Code"
          {...methods.register("vendor_Tel_Code")}
          disabled={true}
          style={{ width: "60px" }}
        />,
        <TextInput
          key="vendor_Tel"
          {...methods.register("vendor_Tel", {
            validate: numberValidation
          })}
        />
      ]
    },
    {
      req: false,
      label: "公司傳真",
      value: vendor_Fax ? vendor_Fax_Code + " " + vendor_Fax : "---",
      editEle: [
        <TextInput
          key="vendor_Fax_Code"
          disabled={true}
          style={{ width: "60px" }}
          {...methods.register("vendor_Fax_Code")}
        />,
        <TextInput
          key="vendor_Fax"
          {...methods.register("vendor_Fax", {
            validate: numberValidation
          })}
        />
      ]
    },
    {
      req: false,
      label: "公司信箱",
      value: vendor_Email || "---",
      editEle: [
        <TextInput
          key="vendor_Email"
          {...methods.register("vendor_Email", {
            validate: emailValidation
          })}
        />
      ]
    },
    {
      req: false,
      label: "公司網址",
      value: vendor_Url || "---",
      editEle: [
        <TextInput
          key="vendor_Url"
          {...methods.register("vendor_Url", {
            required: "必填"
          })}
        />
      ]
    },
    // TODO:主要聯絡人區塊 因為變成Array所以先緩緩再做。
    {
      req: true,
      label: "主要聯絡人",
      value: vendorData?.vendor_Contact_List[0]?.contact_Name || "---",
      editEle: [
        <TextInput
          key="vendor_Contact_List.0.contact_Name"
          {...methods.register("vendor_Contact_List.0.contact_Name", {
            validate: textValidation
          })}
        />
      ]
    },
    {
      req: false,
      label: "主要聯絡人電話(市話)",
      value: "---",
      editEle: [
        <TextInput
          key="vendor_Contact_List.0.contact_Tel_Code"
          disabled={true}
          style={{ width: "60px" }}
          {...methods.register("vendor_Contact_List.0.contact_Tel_Code")}
        />,
        <TextInput
          key="vendor_Contact_List.0.contact_Tel"
          {...methods.register("vendor_Contact_List.0.contact_Tel")}
        />
      ]
    },
    {
      req: false,
      label: "主要聯絡人電話(手機)",
      value: "+886 900111888",
      editEle: [
        <TextInput
          key="vendor_Contact_List.0.contact_Phone_Code"
          disabled={true}
          style={{ width: "60px" }}
          {...methods.register("vendor_Contact_List.0.contact_Phone_Code")}
        />,
        <TextInput
          key="vendor_Contact_List.0.contact_Phone"
          {...methods.register("vendor_Contact_List.0.contact_Phone")}
        />
      ]
    }
  ];
  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            console.log("🕯️🕯️🕯️🕯️🕯️🕯️這是用form-hook的data:", {
              ...data,
              vendor_Code: fuelValue
            });
            // submitForm({ ...data, vendor_Code: fuelValue });
          })}
          name="vendor"
        >
          <button ref={submitRef} type="submit" style={{ display: "none" }}>
            儲存
          </button>
          <FlexWrapper padding="0">
            <div style={{ flex: "1" }}>
              <InfoBox
                isEdit={isEdit}
                infoData={basic_info}
                infoTitle="基本資料"
              />
              <FlexWrapper style={{ padding: "10px 0" }} padding="10px 0">
                <InfoBox
                  isEdit={isEdit}
                  infoData={category_info}
                  infoType="checkbox"
                  infoTitle="分類"
                />
                <InfoBox
                  isEdit={isEdit}
                  infoData={label_info}
                  infoType="label"
                  infoTitle="標籤"
                />
              </FlexWrapper>
            </div>
            <InfoBox
              style={{ flex: "1" }}
              isEdit={isEdit}
              infoData={contact_info}
              infoTitle="聯絡方式"
            />
          </FlexWrapper>
        </form>
      </FormProvider>
    </>
  );
};

export default CustomerDetail;
