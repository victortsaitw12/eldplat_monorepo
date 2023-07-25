import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { TextInputField, TextInput, SelectField } from "evergreen-ui";
//@components
import InfoBox from "@components/InfoBox";
//@layout
import FlexWrapper from "@layout/FlexWrapper";
import ContactList from "@components/ContactList";
import { CustomerDataTypes } from "../customer.type";
import { convertMap } from "@utils/convertValueToText";
interface I_Props {
  isEdit: boolean;
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
  asyncSubmitForm: (data: any) => Promise<void>;
  customerId: string;
  customerDefaultData: CustomerDataTypes;
}
const CustomerDetail = ({
  isEdit,
  submitRef,
  asyncSubmitForm,
  customerDefaultData
}: I_Props) => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm<CustomerDataTypes>({
    defaultValues: customerDefaultData
  });
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
      value: getValues("customer_typ")
        ? convertMap["customer_typ"][getValues("customer_typ")]["ch"]
        : "--",
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
      value: [
        // getValues("customer_city")
        //   ? convertMap["customer_city"][getValues("customer_city")]["ch"]
        //   : "--",
        // getValues("customer_area") || "--"

        getValues("customer_city")
          ? convertMap["customer_city"][getValues("customer_city")]
          : "--",
        getValues("customer_area") || "--"
      ],
      editEle: [
        <SelectField
          key="customer_city"
          label={
            <label>
              <span style={{ color: "red" }}>*</span>城市
            </label>
          }
          {...register("customer_city", {
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
      label: " ",
      value: [
        getValues("customer_district_code") || "--",
        getValues("customer_country")
          ? convertMap["customer_country"][getValues("customer_country")]["ch"]
          : "--"
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
          label={
            <label>
              <span style={{ color: "red" }}>*</span>國家
            </label>
          }
          {...register("customer_country", { required: "必填" })}
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
        ? "+" + getValues("customer_tel_code") + " " + getValues("customer_tel")
        : "--",
      editEle: [
        <div
          key="customer_tel"
          style={{
            display: "flex",
            flex: "1",
            gap: "8px"
          }}
        >
          <TextInput
            {...register("customer_tel_code")}
            style={{ width: "60px" }}
            disabled
          />
          <TextInput
            {...register("customer_tel", { required: "必填！" })}
            style={{ flex: "1", width: "auto" }}
          />
        </div>
      ]
    },
    {
      req: false,
      label: "公司傳真",
      value: getValues("customer_fax")
        ? "+" + getValues("customer_fax_code") + " " + getValues("customer_fax")
        : "--",
      editEle: [
        <div
          key="customer_tel"
          style={{
            display: "flex",
            flex: "1",
            gap: "8px"
          }}
        >
          <TextInput
            key="customer_fax_code"
            style={{ width: "60px" }}
            {...register("customer_fax_code")}
            disabled
          />
          <TextInput
            key="customer_fax"
            {...register("customer_fax")}
            style={{ flex: "1", width: "auto" }}
          />
        </div>
      ]
    },
    {
      req: false,
      label: "公司信箱",
      value: getValues("customer_email") || "--",
      editEle: [
        <TextInput
          key="customer_email"
          {...register("customer_email")}
          style={{ flex: "1" }}
        />
      ]
    },
    {
      req: false,
      label: "公司網址",
      value: getValues("customer_url") || "--",
      editEle: [
        <TextInput
          key="customer_url"
          {...register("customer_url")}
          style={{ flex: "1" }}
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
