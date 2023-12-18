import React from "react";
import Collapse from "@components/Collapse";
import { BodySTY, ItemSTY, ContainerSTY, StyledCollapseTitle } from "./style";
import { TextInput } from "evergreen-ui";
import CustomSelect from "@components/CustomSelect";
import { useFormContext, useWatch } from "react-hook-form";
import { QuotationCreatePayload } from "../type";
import {
  emailValidation,
  phoneValidation,
  tellValidation
} from "@utils/hookFormValidation";
import Section from "@contents/Client/Quote/Section";
import SpecialNeeds from "@contents/Client/Quote/SpecialNeeds";
import NationalitySelect from "@components/NationalitySelect";
const ContactInformation = () => {
  const {
    register,
    setValue,
    getValues,
    control,
    formState: { errors }
  } = useFormContext<QuotationCreatePayload>();
  useWatch({ control, name: "order_contact_list" });
  function sameContactUser() {
    setValue(
      "order_contact_list.1.full_name",
      getValues("order_contact_list.0.full_name"),
      { shouldValidate: true }
    );
    setValue(
      "order_contact_list.1.contact_tel",
      getValues("order_contact_list.0.contact_tel"),
      { shouldValidate: true }
    );
    setValue(
      "order_contact_list.1.contact_email",
      getValues("order_contact_list.0.contact_email"),
      { shouldValidate: true }
    );
  }
  function resetContactUser() {
    setValue("order_contact_list.1.full_name", "");
    setValue("order_contact_list.1.contact_tel", "");
    setValue("order_contact_list.1.contact_email", "");
  }
  return (
    <Section title="聯絡資訊">
      <BodySTY>
        <Collapse title="訂單聯絡人" opened={true}>
          <ContainerSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>姓名</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.0.full_name", {
                      required: "不可空白"
                    })}
                    isInvalid={!!errors.order_contact_list?.[0]?.full_name}
                  />
                  {errors.order_contact_list?.[0]?.full_name && (
                    <div className="input-error">
                      {errors.order_contact_list?.[0]?.full_name?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>國籍</span>
                </div>
                <div className="item-input-container">
                  <NationalitySelect 
                    register={register}
                    selectName="order_contact_list.0.contact_phone_code"
                  />
                  {errors.order_contact_list?.[0]?.name && (
                    <div className="input-error">
                      {errors.order_contact_list?.[0]?.name?.message}
                    </div>
                  )}
                </div>
              </div>
            </ItemSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span>電話</span>
                </div>
                <div className="item-input-container">
                  <div className="item-input-container">
                    <TextInput
                      {...register("order_contact_list.0.contact_tel")}
                    />
                  </div>
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>信箱</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.0.contact_email", {
                      required: "不可空白",
                      validate: emailValidation
                    })}
                    isInvalid={!!errors.order_contact_list?.[0]?.contact_email}
                  />
                  {errors.order_contact_list?.[0]?.contact_email && (
                    <div className="input-error">
                      {errors.order_contact_list?.[0]?.contact_email?.message}
                    </div>
                  )}
                </div>
              </div>
            </ItemSTY>
          </ContainerSTY>
        </Collapse>
      </BodySTY>
      <BodySTY>
        <Collapse title="乘客代表人" opened={true}>
          <ContainerSTY>
            <StyledCollapseTitle>
              <label>
                <input
                  type="checkbox"
                  onClick={(e) => {
                    if (e.currentTarget.checked) {
                      sameContactUser();
                    } else {
                      resetContactUser();
                    }
                  }}
                />
                <span>同訂單聯絡人</span>
              </label>
            </StyledCollapseTitle>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>姓名</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.1.full_name", {
                      required: "不可空白"
                    })}
                    isInvalid={!!errors.order_contact_list?.[1]?.full_name}
                  />
                  {errors.order_contact_list?.[1]?.full_name && (
                    <div className="input-error">
                      {errors.order_contact_list?.[1]?.full_name?.message}
                    </div>
                  )}
                </div>
              </div>
            </ItemSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span>電話</span>
                </div>
                  <div className="item-input-container">
                    <TextInput
                      {...register("order_contact_list.1.contact_tel")}
                    />
                  </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>信箱</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.1.contact_email", {
                      required: "不可空白",
                      validate: emailValidation
                    })}
                    isInvalid={!!errors.order_contact_list?.[1]?.contact_email}
                  />
                  {errors.order_contact_list?.[1]?.contact_email && (
                    <div className="input-error">
                      {errors.order_contact_list?.[1]?.contact_email?.message}
                    </div>
                  )}
                </div>
              </div>
            </ItemSTY>
          </ContainerSTY>
        </Collapse>
      </BodySTY>
      <SpecialNeeds />
    </Section>
  );
};

export default ContactInformation;
