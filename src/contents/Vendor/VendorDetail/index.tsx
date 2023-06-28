import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { TextInputField, TextInput, SelectField } from "evergreen-ui";
import { BodySTY } from "./style";
//@components
import InfoBox from "@components/InfoBox";
import ContactList from "@components/ContactList";
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

//@mock-data
import {
  vendor_code_list,
  vedor_code_text
} from "@mock-data/vendors/03VendorCodeList";

import { I_vendorData } from "../vendor.type";
interface I_Props {
  submitRef: React.RefObject<HTMLButtonElement>;
  isEdit: boolean;
  vendorData: I_vendorData;
  goToCreatePage?: () => void;
  goToDetailPage?: (id: string) => void;
  goToEditPageHandler?: (id: string) => void;
  deleteItemHandler?: (id: string) => void;
  submitForm: (data: any) => void;
}

const VendorDetail = ({
  submitRef,
  isEdit,
  vendorData,
  submitForm
}: I_Props) => {
  console.log("💫💫💫原本的供應商資料：", vendorData);
  const defaultFuelValue = vendorData.vendor_Code_List.map((child) => {
    return child.vendor_Code;
  });
  const [fuelValue, setFuelValue] = useState<string[]>(defaultFuelValue);
  const methods = useForm({ defaultValues: vendorData });
  const {
    label_Name,
    vendor_No,
    vendor_Name,
    vendor_Gui_No,
    vendor_Owner,
    address1,
    address2,
    vendor_City,
    vendor_Area,
    vendor_District_Code,
    vendor_Country,
    vendor_Tel,
    vendor_Tel_Code,
    vendor_Fax,
    vendor_Fax_Code,
    vendor_Email,
    vendor_Url,
    vendor_Code_List, //供應商列表
    vendor_Contact_List //聯絡人列表
  } = { ...vendorData };
  //分類的選法
  const toggleCodelist = (name: string, checked: boolean) => {
    const newData = [...fuelValue];
    const idx = fuelValue.indexOf(name);
    // 如果在fuelValue陣列抓不到該value，idx會是-1，然後就push一個新的value，反之則刪去
    if (checked && idx === -1) {
      newData.push(name);
    } else if (!checked && idx !== -1) {
      newData.splice(idx, 1);
    }
    setFuelValue(newData);
  };
  //基本資料
  const basic_info = [
    {
      readonly: true,
      label: "供應商號碼",
      value: vendor_No
    },
    {
      req: true,
      label: "名稱",
      value: vendor_Name,
      editEle: (
        <TextInput
          key="vendor_Name"
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
          key="vendor_Gui_No"
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
          key="vendor_Owner"
          {...methods.register("vendor_Owner", {
            validate: textValidation
          })}
        />
      )
    }
  ];
  //分類 vendor_Code_List
  const category_info = vendor_code_list.map((child, i) => {
    return {
      label: child.vendor_code_name,
      value: child.vendor_code,
      checked: defaultFuelValue.indexOf(child.vendor_code) !== -1,
      onChange: (e: any) => {
        toggleCodelist(e.target.name, e.target.checked);
      }
    };
  });
  //標籤 label_Name(?)
  const label_info = [
    {
      label: "",
      value: label_Name
    }
  ];
  //聯絡方式
  const contact_info = [
    {
      req: true,
      label: "公司地址",
      value: address1,
      editEle: (
        <TextInputField
          className="text-input-field w100"
          key="address1"
          label="地址1"
          {...methods.register("address1", {
            validate: textValidation
          })}
          marginBottom="0"
        />
      )
    },
    {
      req: false,
      label: " ",
      value: address2,
      editEle: (
        <TextInputField
          className="text-input-field w100"
          key="address2"
          label="地址2"
          {...methods.register("address1", {
            validate: textValidation
          })}
          marginBottom="0"
        />
      )
    },
    {
      req: false,
      label: " ",
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
          <option value="A">A市</option>
          <option value="B">B市</option>
          <option value="C">C市</option>
          <option value="D">D市</option>
        </SelectField>,
        <SelectField
          key="vendor_Area"
          label="州/省/區"
          {...methods.register("vendor_Area", {
            required: "必填"
          })}
          marginBottom="0"
        >
          <option value="A">A區</option>
          <option value="B">B區</option>
          <option value="C">C區</option>
          <option value="D">D區</option>
        </SelectField>
      ]
    },
    {
      req: false,
      label: " ",
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
          <option value="A">A國</option>
          <option value="B">B國</option>
          <option value="C">C國</option>
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
          // disabled={true}
          style={{ width: "60px" }}
        />,
        <TextInput
          key="vendor_Tel"
          {...methods.register("vendor_Tel", {
            validate: numberValidation
          })}
          style={{ width: "58%" }}
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
          // disabled={true}
          style={{ width: "60px" }}
          {...methods.register("vendor_Fax_Code")}
        />,
        <TextInput
          key="vendor_Fax"
          {...methods.register("vendor_Fax", {
            validate: numberValidation
          })}
          style={{ width: "58%" }}
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
    {
      req: false,
      inputType: "custom",
      editEle: [
        <ContactList
          key="contact_list"
          arrayName="vendor_Contact_List"
          hide={false}
          control={methods.control as any}
          errors={methods.formState.errors}
          register={methods.register as any}
          isEdit={isEdit}
        />
      ]
    }
  ];
  return (
    <BodySTY>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            // console.log("🕯️🕯️🕯️🕯️🕯️🕯️這是用form-hook的data:", {
            //   ...data,
            //   vendor_Code_List: fuelValue.map((child) => {
            //     return ({
            //       vendor_Code: child,
            //       vendor_Code_Name: vedor_code_text[child]
            //     })
            //   })
            // });
            submitForm({
              ...data,
              vendor_Code_List: fuelValue.map((child) => {
                return {
                  vendor_Code: child,
                  vendor_Code_Name: vedor_code_text[child]
                };
              })
            });
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
    </BodySTY>
  );
};

export default VendorDetail;
