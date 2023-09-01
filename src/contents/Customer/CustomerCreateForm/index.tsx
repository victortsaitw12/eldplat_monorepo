import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormSTY } from "./style";
//@sevices
import { createCustomer } from "@services/customer/createCustomer";
import FiledInput from "./FieldInput";
import { PlusIcon, Text, Select } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";
//@layout
import FlexWrapper from "@layout/FlexWrapper";
//@context
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";
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
  customer_tel_code: "886",
  customer_tel: "",
  contact_name: "",
  contact_phone_code: "886",
  contact_phone: "",
  contact_tel_code: "886",
  contact_tel: "",
  customer_typ: ""
};

interface I_CustomerCreateFormProps {
  data?: any;
  reloadData?: () => void;
  options: any;
}

function CustomerCreateForm({
  reloadData,
  options
}: I_CustomerCreateFormProps) {
  const { register, handleSubmit, control, reset, setValue } =
    useForm<CreateCustomerPayload>({
      defaultValues
    });
  const [loading, setLoading] = useState(false);
  const { countries, cities, handleCountryChange, handleCityChange } =
    useContext<I_Region_Context>(RegionContext);
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
      <FiledInput
        label="負責人"
        controlProps={{
          name: "customer_owner",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
      />
      <Text>
        <span style={{ color: "#D14343" }}>*</span>公司地址
      </Text>
      <FiledInput
        label="郵遞區號"
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
        <Controller
          name="customer_country"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <label style={{ width: "68px", fontSize: "12px" }}>
                <span style={{ color: "#D14343" }}>*</span>
                國家
              </label>
              <Select
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  handleCountryChange(e.target.value);
                  setValue("customer_city", "");
                  setValue("customer_area", "");
                }}
              >
                <>
                  <option value={""}>請選擇</option>
                  {countries?.map((item) => (
                    <option key={item.area_No} value={item.area_No}>
                      {item.area_Name_Tw}
                    </option>
                  ))}
                </>
              </Select>
            </>
          )}
        />
      </FlexWrapper>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center",
          gap: "8px"
        }}
      >
        <Controller
          name="customer_city"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <label style={{ width: "68px", fontSize: "12px" }}>
                <span style={{ color: "#D14343" }}>*</span>
                城市
              </label>
              <Select
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  handleCityChange(e.target.value);
                }}
              >
                <>
                  <option value={""}>請選擇</option>
                  {cities?.map((city) => (
                    <option key={city.area_No} value={city.area_No}>
                      {city.area_Name_Tw}
                    </option>
                  ))}
                </>
              </Select>
            </>
          )}
        />
      </FlexWrapper>
      <FiledInput
        label="地址"
        horizonLabel={true}
        controlProps={{
          name: "address1",
          control
        }}
      />
      <Text>
        <span style={{ color: "#D14343" }}>* </span>
        公司電話
      </Text>
      <FlexWrapper padding="0">
        <div style={{ width: "60px" }}>
          <FiledInput
            label=""
            disabled={true}
            controlProps={{
              name: "customer_tel_code",
              control
            }}
          />
        </div>
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
          alignItems: "center",
          gap: "8px"
        }}
      >
        <span style={{ width: "26px", fontSize: "12px" }}>市話</span>
        <div style={{ width: "60px" }}>
          <FiledInput
            controlProps={{
              name: "contact_tel_code",
              control
            }}
            label=""
            disabled
          />
        </div>
        <div style={{ flex: "1 0 0" }}>
          <FiledInput
            controlProps={{
              name: "contact_tel",
              control
            }}
            label=""
          />
        </div>
      </FlexWrapper>
      <FlexWrapper
        padding="0"
        style={{
          alignItems: "center",
          gap: "8px"
        }}
      >
        <span style={{ width: "26px", fontSize: "12px" }}>手機</span>
        <div style={{ width: "60px" }}>
          <FiledInput
            controlProps={{
              name: "contact_phone_code",
              control
            }}
            label=""
            disabled
          />
        </div>

        <div style={{ flex: "1 0 0" }}>
          <FiledInput
            controlProps={{
              name: "contact_phone",
              control
            }}
            label=""
          />
        </div>
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
          <option value="" disabled hidden>
            請選擇
          </option>
          {options?.customer_typ.map((item: any, idx: number) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select>
      </FlexWrapper>
      <IconLeft text={"新增客戶"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
}

export default CustomerCreateForm;
