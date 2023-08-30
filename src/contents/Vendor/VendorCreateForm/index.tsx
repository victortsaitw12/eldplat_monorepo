import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import {
  PlusIcon,
  Text,
  TextInput,
  SelectField,
  Select,
  Pane,
  Label,
  Textarea
} from "evergreen-ui";
//@sevices
import { createVendor } from "@services/vendor/createVendor";
import FiledInput from "./FieldInput";
import { IconLeft } from "@components/Button/Primary";
//@layout
import FlexWrapper from "@layout/FlexWrapper";
//@context
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";
//@components
import CheckboxField from "@components/CheckboxField";
import InfoBox from "@components/InfoBox";
import { I_contactData } from "../vendor.type";

//@mock-data
import { vedor_code_text } from "@mock-data/vendors/03VendorCodeList";
export interface CreateVendorPayload {
  vendor_Name: string;
  vendor_City: string;
  vendor_city_name: string;
  vendor_Country: string;
  vendor_country_name: string;
  vendor_Owner: string;
  vendor_Gui_No: string;
  address1: string;
  address2: string;
  vendor_Area: string;
  vendor_District_Code: string;
  vendor_Tel_Code: string;
  vendor_Tel: string;
  vendor_Contact_List: Array<I_contactData>;
}

// default value
const defaultValues = {
  vendor_Name: "",
  vendor_City: "",
  vendor_Country: "TW",
  vendor_Owner: "",
  vendor_Gui_No: "",
  address1: "",
  address2: "",
  vendor_Area: "",
  vendor_District_Code: "",
  vendor_Tel_Code: "+886",
  vendor_Tel: "",
  vendor_Contact_List: [
    {
      contact_name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: "",
      contact_sort: ""
    }
  ]
};

interface I_VendorCreateFormProps {
  data?: any;
  reloadData?: () => void;
}

function VendorCreateForm({ data, reloadData }: I_VendorCreateFormProps) {
  const themeContext = useContext(ThemeContext);
  const {
    countries,
    states,
    cities,
    handleCountryChange,
    handleCityChange,
    getRegionsData,
    initOptions
  } = React.useContext<I_Region_Context>(RegionContext);
  const router = useRouter();
  //供應商的分類
  const { codeType = "01" } = router.query;
  console.log("💫💫💫codeType", codeType);
  console.log("vedor_code_text.codeType", vedor_code_text[codeType as string]);
  const { register, handleSubmit, control } = useForm<CreateVendorPayload>({
    defaultValues
  });
  const [loading, setLoading] = useState(false);
  const [fuelValue, setFuelValue] = useState(codeType);

  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await createVendor(data);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
    reloadData && reloadData();
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        asyncSubmitForm({
          ...data,
          vendor_Code_List: fuelValue
            ? [
                {
                  vendor_Code: fuelValue,
                  vendor_Code_Name: vedor_code_text[fuelValue as string]
                }
              ]
            : []
        });
      })}
    >
      <FiledInput
        label="名稱"
        controlProps={{
          name: "vendor_Name",
          control,
          rules: { required: "此欄位必填" }
        }}
      />
      <FiledInput
        label="統一編號"
        controlProps={{
          name: "vendor_Gui_No",
          control,
          rules: { required: "此欄位必填" }
        }}
      />
      <FiledInput
        label="負責人"
        controlProps={{
          name: "vendor_Owner",
          control,
          rules: { required: "此欄位必填" }
        }}
      />
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        公司地址
      </Text>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <label style={{ width: "68px", fontSize: "12px" }}>郵遞區號</label>
        <TextInput style={{ flex: 1 }} {...register("vendor_District_Code")} />
      </FlexWrapper>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <label style={{ width: "68px", fontSize: "12px" }} htmlFor="">
          <span style={{ color: "#D14343" }}>*</span>
          國家
        </label>
        <Select
          {...register("vendor_Country", {
            required: "必填"
          })}
        >
          <option value={""}>請選擇</option>
          {countries?.map((item) => (
            <option key={item.area_No} value={item.area_No}>
              {item.area_Name_Tw}
            </option>
          ))}
        </Select>
      </FlexWrapper>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <label style={{ width: "68px", fontSize: "12px" }} htmlFor="">
          <span style={{ color: "#D14343" }}>*</span>
          城市
        </label>
        <Select
          {...register("vendor_City", {
            required: "必填"
          })}
        >
          <option value={""}>請選擇</option>
          {cities?.map((city) => (
            <option key={city.area_No} value={city.area_No}>
              {city.area_Name_Tw}
            </option>
          ))}
        </Select>
      </FlexWrapper>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <label
          style={{ width: "68px", fontSize: "12px", alignSelf: "flex-start" }}
        >
          地址
        </label>
        <Textarea style={{ flex: 1 }} {...register("address1")} />
      </FlexWrapper>

      <Text>
        <span style={{ color: "#968686" }}>* </span>
        公司電話
      </Text>
      <FlexWrapper padding="0">
        {/*公司電話國碼*/}
        <FiledInput
          disabled={true}
          style={{ width: "60px" }}
          label=""
          controlProps={{
            name: "vendor_Tel_Code",
            control
          }}
        />
        <FiledInput
          label=""
          controlProps={{
            name: "vendor_Tel",
            control,
            rules: { required: "此欄位必填" }
          }}
        />
      </FlexWrapper>
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        主要聯絡人
      </Text>
      <FiledInput
        controlProps={{
          name: "vendor_Contact_List.0.contact_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        label=""
      />
      <Text>主要聯絡人電話</Text>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <span style={{ flex: "unset", minWidth: "2.5rem" }}>市話</span>
        <FiledInput
          style={{ width: "60px" }}
          controlProps={{
            name: "vendor_Contact_List.0.contact_tel_code",
            control
          }}
          label=""
        />
        <FiledInput
          controlProps={{
            name: "vendor_Contact_List.0.contact_tel",
            control
            // rules: { required: "此欄位必填" }
          }}
          label=""
        />
      </FlexWrapper>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <span style={{ flex: "unset", minWidth: "2.5rem" }}>手機</span>
        <FiledInput
          style={{ width: "60px" }}
          controlProps={{
            name: "vendor_Contact_List.0.contact_phone_code",
            control
          }}
          label=""
        />
        <FiledInput
          controlProps={{
            name: "vendor_Contact_List.0.contact_phone",
            control
          }}
          label=""
        />
      </FlexWrapper>
      {/* 從外部車隊進來的時候要先預選外部車隊,如果要加入其他分類則到細節頁裡面新增 */}
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        分類
      </Text>
      <CheckboxField
        label={
          <Text style={{ fontSize: themeContext.fontSize.Paragraph200 }}>
            {vedor_code_text[codeType as string]}
          </Text>
        }
        item={{ value: codeType }}
        checked={fuelValue == codeType}
        toggleFuelValue={() => {
          console.log("toggleFuelValue");
        }}
      />
      <IconLeft text={"新增供應商"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
}

export default VendorCreateForm;
