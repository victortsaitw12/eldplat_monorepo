import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
import { ErrorMessage } from "@hookform/error-message";
//@sevices
import { createQuotation } from "@services/admin_orders/createQuotation";
import FiledInput from "./FieldInput";
import { PlusIcon, Text, Select } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import FlexWrapper from "@layout/FlexWrapper";

//@components

//@mock-data

// default value
const defaultValues = {
  quote_type: "",
  order_contact_list: [
    {
      family_name: "",
      name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: "",
      contact_type: "2",
      social_media_type: "",
      social_media: ""
    },
    {
      family_name: "",
      name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: "",
      contact_type: "1",
      social_media_type: "",
      social_media: ""
    }
  ]
};

interface I_Props {
  data?: any;
  reloadData?: () => void;
}

function AdminOrderCreateForm({ reloadData }: I_Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  const asyncSubmitForm = async (data: any) => {
    try {
      const res = await createQuotation(data);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    reloadData && reloadData();
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        console.log("create📃📃📃📃📃📃📃📃", data);
        asyncSubmitForm({ ...data });
      })}
    >
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        分類
      </Text>
      <Select
        isInvalid={!!errors.quote_type}
        {...register("quote_type", {
          required: "不可空白"
        })}
      >
        <option value="1">客製包車</option>
        <option value="2">接機</option>
        <option value="3">送機</option>
      </Select>
      <ErrorMessage
        errors={errors}
        name="quote_type"
        render={({ message }) => <Text className="input-error">{message}</Text>}
      />
      <Text>
        <span style={{ color: "#D14343" }}>* </span>姓
      </Text>
      <FiledInput
        label=""
        controlProps={{
          name: "order_contact_list[0].family_name",
          control,
          rules: { required: "不可空白" }
        }}
      />
      <Text>
        <span style={{ color: "#D14343" }}>* </span>名
      </Text>
      <FiledInput
        label=""
        controlProps={{
          name: "order_contact_list[0].name",
          control,
          rules: { required: "不可空白" }
        }}
      />
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        手機
      </Text>
      <FlexWrapper padding="0">
        <FiledInput
          style={{ width: "60px", minWidth: "60px" }}
          label=""
          controlProps={{
            name: "order_contact_list[0].contact_phone_code",
            control,
            rules: { required: "不可空白" }
          }}
        />
        <FiledInput
          label=""
          className="contact_phone"
          controlProps={{
            name: "order_contact_list[0].contact_phone",
            control,
            rules: { required: "不可空白" }
          }}
        />
      </FlexWrapper>
      <Text>電話</Text>
      <FlexWrapper padding="0">
        {/*公司電話國碼*/}
        <FiledInput
          style={{ width: "60px", minWidth: "60px" }}
          label=""
          controlProps={{
            name: "order_contact_list[0].contact_tel_code",
            control
          }}
        />
        <FiledInput
          label=""
          controlProps={{
            name: "order_contact_list[0].contact_tel",
            control
          }}
        />
      </FlexWrapper>
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        信箱
      </Text>
      <FiledInput
        label=""
        controlProps={{
          name: "order_contact_list[0].contact_email",
          control,
          rules: { required: "不可空白" }
        }}
      />
      <IconLeft text={"新增詢價單"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
}

export default AdminOrderCreateForm;
