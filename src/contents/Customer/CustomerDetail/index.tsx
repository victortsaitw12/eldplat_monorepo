import React, { useContext, useEffect } from "react";
import { useForm, useWatch, Controller } from "react-hook-form";
import { TextInputField, TextInput, SelectField } from "evergreen-ui";
//@components
import InfoBox from "@components/InfoBox";
//@layout
import FlexWrapper from "@layout/FlexWrapper";
import ContactList from "@components/ContactList";
import { CustomerDataTypes } from "../customer.type";
//@context
import {
  I_Region_Context,
  RegionContext
} from "@contexts/regionContext/regionProvider";
interface I_Props {
  isEdit: boolean;
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
  asyncSubmitForm: (data: any) => Promise<void>;
  customerId: string;
  customerDefaultData: CustomerDataTypes;
  options: any;
}
const CustomerDetail = ({
  isEdit,
  submitRef,
  asyncSubmitForm,
  customerDefaultData,
  options
}: I_Props) => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
    setValue,
    handleSubmit
  } = useForm<CustomerDataTypes>({
    defaultValues: customerDefaultData
  });
  const {
    countries,
    states,
    cities,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
    getRegionsData,
    initOptions
  } = useContext<I_Region_Context>(RegionContext);

  useEffect(() => {
    initOptions({
      country: customerDefaultData?.customer_country,
      state: customerDefaultData?.customer_area
    });
  }, []);
  useWatch({
    control,
    name: "customer_no"
  });
  //
  console.log("getValues", getValues());
  if (!customerDefaultData) {
    return <div>查無相關資料...</div>;
  }
  //基本資料
  const basic_info = [
    {
      readonly: true,
      label: "客戶號碼",
      value: getValues("customer_no") || "--"
    },
    {
      req: true,
      label: "名稱",
      value: getValues("customer_name") || "--",
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
      value: getValues("customer_gui_no") || "--",
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
      value: getValues("customer_owner") || "--",
      editEle: (
        <TextInput
          {...register("customer_owner", {
            required: "必填"
          })}
        />
      )
    }
  ];
  //分類 vendor_Code_List
  const category_info = [
    {
      req: true,
      label: "",
      value: getValues("type_name") || "--",
      editEle: (
        <SelectField
          key="customer_typ"
          {...register("customer_typ")}
          label=""
          marginBottom="0"
        >
          <option value="" disabled hidden>
            請選擇
          </option>
          {options?.customer_typ.map((item: any, idx: number) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </SelectField>
      )
    }
  ];
  //標籤 label_Name(?)
  const label_info = [
    {
      label: "",
      value: ""
    }
  ];
  //聯絡方式
  const contact_info = [
    {
      req: true,
      label: "公司地址",
      value: getValues("address1") || "--",
      editEle: (
        <TextInputField
          label="地址1"
          className="text-input-field w100"
          {...register("address1", {
            required: "必填"
          })}
          marginBottom="0"
        />
      )
    },
    {
      req: false,
      label: " ",
      value: getValues("address2") || "--",
      editEle: (
        <TextInputField
          label="地址2"
          {...register("address2")}
          marginBottom="0"
        />
      )
    },

    {
      req: false,
      label: " ",
      value: [getValues("city_name") || "--", getValues("area_name") || "--"],
      editEle: [
        <Controller
          key="customer_city"
          name="customer_city"
          control={control}
          render={({ field: { onChange, value } }) => (
            <SelectField
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                handleCityChange(e.target.value);
              }}
              label="城市"
              marginBottom="0"
            >
              <>
                <option value={""}>請選擇</option>
                {cities?.map((state) => (
                  <option key={state.area_No} value={state.area_No}>
                    {state.area_Name_Tw}
                  </option>
                ))}
              </>
            </SelectField>
          )}
        />,
        <Controller
          key="customer_area"
          name="customer_area"
          control={control}
          render={({ field: { onChange, value } }) => (
            <SelectField
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                handleStateChange(e.target.value);
                setValue("customer_city", "");
              }}
              label="州/省/區"
              marginBottom="0"
            >
              <>
                <option value={""}>請選擇</option>
                {states?.map((state) => (
                  <option key={state.area_No} value={state.area_No}>
                    {state.area_Name_Tw}
                  </option>
                ))}
              </>
            </SelectField>
          )}
        />
      ]
    },
    {
      req: false,
      label: " ",
      value: [
        getValues("customer_district_code") || "--",
        getValues("country_name") || "--"
      ],
      editEle: [
        <TextInputField
          label="郵遞區碼"
          key="customer_district_code"
          {...register("customer_district_code")}
          marginBottom="0"
        />,
        <Controller
          key="customer_country"
          name="customer_country"
          control={control}
          render={({ field: { onChange, value } }) => (
            <SelectField
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                console.log("e.target.value", e.target.value);
                handleCountryChange(e.target.value);
                setValue("customer_city", "");
                setValue("customer_area", "");
              }}
              label="國家"
              marginBottom="0"
            >
              <>
                <option value={""}>請選擇</option>
                {countries?.map((item) => (
                  <option key={item.area_No} value={item.area_No}>
                    {item.area_Name_Tw}
                  </option>
                ))}
              </>
            </SelectField>
          )}
        />
      ]
    },
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
          arrayName="customer_contact"
        />
      ]
    }
  ];
  return (
    <form onSubmit={handleSubmit(asyncSubmitForm)}>
      <button ref={submitRef} type="submit" style={{ display: "none" }}>
        儲存
      </button>
      <FlexWrapper padding="0">
        <div style={{ flex: "1" }}>
          <InfoBox isEdit={isEdit} infoData={basic_info} infoTitle="基本資料" />
          <FlexWrapper style={{ padding: "10px 0" }} padding="10px 0">
            <InfoBox
              isEdit={isEdit}
              infoData={category_info}
              infoTitle={
                <div>
                  <span style={{ color: "#D14343" }}>*</span>分類
                </div>
              }
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
  );
};

export default CustomerDetail;
