import React from "react";
import Collapse from "@components/Collapse";
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import { BodySTY, ItemSTY } from "./style";
import { Textarea, Select, TextInput } from "evergreen-ui";
import CustomSelect from "@components/CustomSelect";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray
} from "react-hook-form";
import { QuotationCreatePayload } from "../type";
interface TravelInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
}
const ContactInformation = ({
  register,
  control,
  errors
}: TravelInformationProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "50px"
      }}
    >
      <Collapse title="訂單聯絡人資訊" opened={true}>
        <BodySTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "0px"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "60px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>姓</span>
              </div>
              <TextInput {...register("order_contact_list.0.family_name")} />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>名</span>
              </div>
              <TextInput {...register("order_contact_list.0.name")} />
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>手機</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="order_contact_list.0.contact_phone_code"
              />
              <TextInput {...register("order_contact_list.0.contact_phone")} />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span>電話</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="order_contact_list.0.contact_tel_code"
              />
              <TextInput {...register("order_contact_list.0.contact_tel")} />
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>信箱</span>
              </div>
              <TextInput {...register("order_contact_list.0.contact_email")} />
            </div>
          </ItemSTY>
        </BodySTY>
      </Collapse>
      <Collapse title="旅客代表人" opened={true}>
        <BodySTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "0px"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "60px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>姓</span>
              </div>
              <TextInput {...register("order_contact_list.1.family_name")} />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>名</span>
              </div>
              <TextInput {...register("order_contact_list.1.name")} />
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>手機</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="order_contact_list.1.contact_phone_code"
              />
              <TextInput {...register("order_contact_list.1.contact_phone")} />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span>電話</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="order_contact_list.1.contact_tel_code"
              />
              <TextInput {...register("order_contact_list.1.contact_tel")} />
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>信箱</span>
              </div>
              <TextInput {...register("order_contact_list.1.contact_email")} />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>通訊軟體</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="order_contact_list.1.social_media_type"
              />
              <TextInput {...register("order_contact_list.1.social_media")} />
            </div>
          </ItemSTY>
        </BodySTY>
      </Collapse>
    </div>
  );
};

export default ContactInformation;
