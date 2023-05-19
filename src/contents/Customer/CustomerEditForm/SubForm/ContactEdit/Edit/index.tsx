import React, { useState } from "react";
import Image from "next/image";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import SingleInput from "@components/HookForm/Input/SingleInput";
import HorizontalSelect from "@components/HookForm/Select/HorizontalSelect";
import VerticalSelect from "@components/HookForm/Select/VerticalSelect";
import VerticalInput from "@components/HookForm/Input/VerticalInput";
import Card from "@components/Card";
import { SubFromProps } from "../../type";
import DottedSelect from "@components/HookForm/Select/DottedSelect";
import FlexWrapper from "@layout/FlexWrapper";
import { BodySYT } from "./style";
import ContactList from "./ContactList";

const ContactEdit = ({ register, errors, control }: SubFromProps) => {
  return (
    <BodySYT>
      <div className="customer-address">
        <div className="content-title">公司地址</div>
        <div className="content">
          <VerticalInput label="地址1" {...register("address1")} />
          <VerticalInput label="地址2" {...register("address2")} />
          <div className="double-input">
            <VerticalSelect
              label="城市"
              isRequire={true}
              control={control}
              name="customer_city"
              options={[
                {
                  label: "台北市",
                  value: "01"
                }
              ]}
              isDisabled={false}
            />
            <VerticalSelect
              label="州/省/地區"
              control={control}
              name="customer_area"
              options={[{ label: "台灣", value: "01" }]}
              isDisabled={false}
            />
          </div>
          <div className="double-input">
            <VerticalInput
              label="郵政編碼"
              {...register("customer_district_code")}
            />
            <VerticalSelect
              label="國家"
              isRequire={true}
              control={control}
              name="customer_area"
              options={[{ label: "台灣", value: "01" }]}
              isDisabled={false}
            />
          </div>
        </div>
      </div>
      <div className="customer-tel">
        <div className="tel-content">
          <div>
            <span style={{ color: "red" }}>*</span>公司電話
          </div>
          <SingleInput {...register("customer_tel_code")} />
          <SingleInput {...register("customer_tel")} />
        </div>
        <div className="tel-content">
          <div>公司傳真</div>
          <SingleInput {...register("customer_fax_code")} />
          <SingleInput {...register("customer_fax")} />
        </div>
        <HorizatalInput label="公司信箱" {...register("customer_email")} />
        <HorizatalInput label="公司網址" {...register("customer_url")} />
      </div>

      <ContactList control={control} register={register} errors={errors} />
    </BodySYT>
  );
};
export default ContactEdit;
