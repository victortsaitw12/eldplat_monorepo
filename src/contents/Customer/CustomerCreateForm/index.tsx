import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
//@sevices
// import { createVendor } from "@services/vendor/createVendor";
import { createCustomer } from "@services/customer/createCustomer";
import FiledInput from "./FieldInput";
import { PlusIcon, Text, SelectField, Select } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import FlexWrapper from "@layout/FlexWrapper";

//@components
// import { I_contactData } from "../vendor.type";
export interface CreateCustomerPayload {
  customer_name: string;
  customer_gui_no: string;
  customer_owner: string;
  address1: string;
  address2: string;
  customer_city: string;
  customer_area: string;
  customer_district_code: string;
  customer_country: string;
  customer_tel_code: string;
  customer_tel: string;
  contact_name: string;
  contact_phone_code: string;
  contact_phone: string;
  contact_tel_code: string;
  contact_tel: string;
  customer_typ: string;
}

// default value
const defaultValues: CreateCustomerPayload = {
  customer_name: "",
  customer_gui_no: "",
  customer_owner: "",
  address1: "",
  address2: "",
  customer_city: "",
  customer_area: "",
  customer_district_code: "",
  customer_country: "",
  customer_tel_code: "",
  customer_tel: "",
  contact_name: "",
  contact_phone_code: "",
  contact_phone: "",
  contact_tel_code: "",
  contact_tel: "",
  customer_typ: ""
};

interface I_CustomerCreateFormProps {
  data?: any;
  reloadData?: () => void;
}

function CustomerCreateForm({ reloadData }: I_CustomerCreateFormProps) {
  const { register, handleSubmit, control, reset } =
    useForm<CreateCustomerPayload>({
      defaultValues
    });
  const [loading, setLoading] = useState(false);
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await createCustomer(data);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
    reloadData && reloadData();
    reset();
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        asyncSubmitForm({
          ...data
        });
      })}
    >
      <FiledInput
        label="名稱"
        controlProps={{
          name: "customer_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
      />
      <FiledInput
        label="統一編號"
        controlProps={{
          name: "customer_gui_no",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
      />
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>負責人
          </div>
        }
        {...register("customer_owner", { required: "此欄位必填" })}
      >
        <option value="負責人1">負責人1</option>
        <option value="負責人2">負責人2</option>
        <option value="負責人3">負責人3</option>
        <option value="負責人4">負責人4</option>
      </SelectField>
      <Text>
        <span style={{ color: "#D14343" }}>*</span>公司地址
      </Text>
      <FiledInput
        label="地址1"
        horizonLabel={true}
        controlProps={{
          name: "address1",
          control
        }}
      />
      <FiledInput
        label="地址2"
        horizonLabel={true}
        controlProps={{
          name: "address2",
          control
        }}
      />
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <label htmlFor="">
          <span style={{ color: "#D14343" }}>*</span>
          城市
        </label>
        <Select
          {...register("customer_city", {
            required: "必填"
          })}
        >
          <option value="01">基隆市</option>
          <option value="02">台北市</option>
          <option value="03">新北市</option>
          <option value="04">桃園市</option>
        </Select>
      </FlexWrapper>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <label htmlFor="">州/省/區域</label>
        <Select {...register("customer_area")}>
          <option value="01">基隆市</option>
          <option value="02">台北市</option>
          <option value="03">新北市</option>
          <option value="04">桃園市</option>
        </Select>
      </FlexWrapper>
      <FiledInput
        label="郵政編碼"
        horizonLabel={true}
        controlProps={{
          name: "customer_district_code",
          control
        }}
      />
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <label htmlFor="">
          <span style={{ color: "#D14343" }}>*</span>
          國家
        </label>
        <Select
          {...register("customer_country", {
            required: "必填"
          })}
        >
          <option value="TW">台灣</option>
        </Select>
      </FlexWrapper>
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        公司電話
      </Text>
      <FlexWrapper padding="0">
        {/*公司電話國碼*/}
        <FiledInput
          label=""
          controlProps={{
            name: "customer_tel_code",
            control
          }}
        />
        <FiledInput
          label=""
          controlProps={{
            name: "customer_tel",
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
          name: "contact_name",
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
        <span style={{ flex: "unset" }}>市話</span>
        <FiledInput
          controlProps={{
            name: "contact_tel_code",
            control
          }}
          label=""
        />
        <FiledInput
          controlProps={{
            name: "contact_tel",
            control
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
        <span>手機</span>
        <FiledInput
          controlProps={{
            name: "contact_phone_code",
            control
          }}
          label=""
        />
        <FiledInput
          controlProps={{
            name: "contact_phone",
            control
          }}
          label=""
        />
      </FlexWrapper>
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        分類
      </Text>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center"
        }}
      >
        <Select {...register("customer_typ")}>
          <option value="01">公司</option>
          <option value="02">個人</option>
          <option value="03">旅行社</option>
        </Select>
      </FlexWrapper>
      <IconLeft text={"新增顧客"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
}

export default CustomerCreateForm;
