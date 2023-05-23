import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
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
//
import ContactList from "@components/ContactList";
import { CustomerDataTypes } from "../customer.type";
interface I_Props {
  isEdit: boolean;
}
const CustomerDetail = ({ isEdit }: I_Props) => {
  const {
    register,
    control,
    formState: { errors },
    getValues
  } = useFormContext<CustomerDataTypes>();
  //TODO 分類的選法
  console.log("getValues", getValues("labels"));
  if (getValues("customer_no") === undefined) {
    return <div></div>;
  }
  //基本資料
  const basic_info = [
    {
      readonly: true,
      label: "客戶號碼",
      value: getValues("customer_no")
    },
    {
      req: true,
      label: "名稱",
      value: getValues("customer_name"),
      editEle: (
        <TextInput
          {...register("customer_name", {
            required: "必填"
          })}
        />
      )
    },
    {
      req: true,
      label: "統一編號",
      value: getValues("customer_gui_no"),
      editEle: (
        <TextInput
          {...register("customer_gui_no", {
            required: "必填"
          })}
        />
      )
    },
    {
      req: true,
      label: "負責人",
      value: getValues("customer_owner"),
      editEle: (
        <TextInput
          {...register("customer_owner", {
            required: "必填"
          })}
        />
      )
    }
  ];
  console.log("basic_info", basic_info);
  //分類 vendor_Code_List
  const category_info = [
    {
      req: true,
      label: "",
      value: getValues("customer_typ") ? getValues("customer_typ") : "---",
      editEle: (
        <SelectField
          key="customer_typ"
          {...register("customer_typ")}
          label=""
          marginBottom="0"
        >
          <option value="01">公司</option>
          <option value="02">個人</option>
        </SelectField>
      )
    }
  ];
  //標籤 label_Name(?)
  // const label_info = getValues("labels")
  //   ? [
  //       {
  //         label: getValues("labels")
  //           ? getValues("labels")[0].label_name
  //           : undefined,
  //         value: getValues("labels")
  //           ? getValues("labels")[0].label_name
  //           : undefined
  //       }
  //     ]
  //   : undefined;
  //聯絡方式

  const contact_info = [
    {
      req: true,
      label: "公司地址",
      subLabel: <span>地址1</span>,
      value: getValues("address1"),
      editEle: (
        <TextInput
          {...register("address1", {
            required: "必填"
          })}
        />
      )
    },
    {
      req: false,
      label: "",
      subLabel: <span>地址2</span>,
      value: getValues("address2"),
      editEle: <TextInput {...register("address2")} />
    },
    {
      req: false,
      label: "",
      value: [getValues("customer_city"), getValues("customer_area")],
      editEle: [
        <SelectField
          key="customer_city"
          label="城市"
          {...register("customer_city")}
          marginBottom="0"
        >
          <option value="LA">洛杉磯</option>
          <option value="TP">台北</option>
          <option value="TTP">新北</option>
          <option value="TY">桃園</option>
        </SelectField>,
        <SelectField
          key="customer_area"
          label="州/省/區"
          {...register("customer_area")}
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
      value: [
        getValues("customer_district_code"),
        getValues("customer_country")
      ],
      editEle: [
        <TextInputField
          key="customer_district_code"
          label="郵遞區號"
          {...register("customer_district_code")}
          marginBottom="0"
        />,
        <SelectField
          key="customer_country"
          label="國家"
          {...register("customer_country")}
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
      value: getValues("customer_tel")
        ? getValues("customer_tel_code") + " " + getValues("customer_tel")
        : "---",
      editEle: [
        <TextInput
          key="customer_tel_code"
          {...register("customer_tel_code")}
          disabled={true}
          style={{ width: "60px" }}
        />,
        <TextInput
          key="customer_tel"
          {...register("customer_tel", { required: "必填！" })}
        />
      ]
    },
    {
      req: false,
      label: "公司傳真",
      value: getValues("customer_fax")
        ? getValues("customer_fax_code") + " " + getValues("customer_fax")
        : "---",
      editEle: [
        <TextInput
          key="customer_fax_code"
          disabled={true}
          style={{ width: "60px" }}
          {...register("customer_fax_code")}
        />,
        <TextInput key="customer_fax" {...register("customer_fax")} />
      ]
    },
    {
      req: false,
      label: "公司信箱",
      value: getValues("customer_email") || "---",
      editEle: [
        <TextInput key="customer_email" {...register("customer_email")} />
      ]
    },
    {
      req: false,
      label: "公司網址",
      value: getValues("customer_url") || "---",
      editEle: [<TextInput key="customer_url" {...register("customer_url")} />]
    },
    // TODO:主要聯絡人區塊 因為變成Array所以先緩緩再做。
    {
      req: false,
      inputType: "custom",
      editEle: [
        <ContactList
          key="contact_list"
          hide={false}
          control={control}
          errors={errors}
          register={register}
          isEdit={isEdit}
        />
      ]
    }
  ];
  return (
    <form>
      <FlexWrapper padding="0">
        <div style={{ flex: "1" }}>
          <InfoBox isEdit={isEdit} infoData={basic_info} infoTitle="基本資料" />
          <FlexWrapper style={{ padding: "10px 0" }} padding="10px 0">
            <InfoBox
              isEdit={isEdit}
              infoData={category_info}
              infoTitle="分類"
            />
            {/* <InfoBox
              isEdit={isEdit}
              infoData={label_info}
              infoType="label"
              infoTitle="標籤"
            /> */}
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
  );
};

export default CustomerDetail;