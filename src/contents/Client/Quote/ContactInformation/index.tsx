import React from "react";
import Collapse from "@components/Collapse";
import { BodySTY, ItemSTY, ContainerSTY, StyledCollapseTitle } from "./style";
import { TextInput } from "evergreen-ui";
import CustomSelect from "@components/CustomSelect";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormGetValues
} from "react-hook-form";
import { QuotationCreatePayload } from "../type";
interface TravelInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
  setValue: UseFormSetValue<QuotationCreatePayload>;
  getValues: UseFormGetValues<QuotationCreatePayload>;
}
const ContactInformation = ({
  register,
  setValue,
  getValues
}: TravelInformationProps) => {
  function sameContactUser() {
    setValue(
      "order_contact_list.1.family_name",
      getValues("order_contact_list.0.family_name")
    );
    setValue(
      "order_contact_list.1.name",
      getValues("order_contact_list.0.name")
    );
    setValue(
      "order_contact_list.1.contact_phone_code",
      getValues("order_contact_list.0.contact_phone_code")
    );
    setValue(
      "order_contact_list.1.contact_phone",
      getValues("order_contact_list.0.contact_phone")
    );
    setValue(
      "order_contact_list.1.contact_tel_code",
      getValues("order_contact_list.0.contact_tel_code")
    );
    setValue(
      "order_contact_list.1.contact_tel",
      getValues("order_contact_list.0.contact_tel")
    );
    setValue(
      "order_contact_list.1.contact_email",
      getValues("order_contact_list.0.contact_email")
    );
  }
  function resetContactUser() {
    setValue("order_contact_list.1.family_name", "");
    setValue("order_contact_list.1.name", "");
    setValue("order_contact_list.1.contact_phone_code", "");
    setValue("order_contact_list.1.contact_phone", "");
    setValue("order_contact_list.1.contact_tel_code", "");
    setValue("order_contact_list.1.contact_tel", "");
    setValue("order_contact_list.1.contact_email", "");
    setValue("order_contact_list.1.social_media_type", "");
    setValue("order_contact_list.1.social_media", "");
  }
  return (
    <>
      <BodySTY>
        <Collapse title="訂單聯絡人資訊" opened={true}>
          <ContainerSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>姓</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.0.family_name")}
                    flex={"1"}
                  />
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>名</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.0.name")}
                    flex={"1"}
                  />
                </div>
              </div>
            </ItemSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>手機</span>
                </div>
                <div className="item-input-container">
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
                  <TextInput
                    {...register("order_contact_list.0.contact_phone")}
                  />
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span>電話</span>
                </div>
                <div className="item-input-container">
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
                  <TextInput
                    {...register("order_contact_list.0.contact_tel")}
                  />
                </div>
              </div>
            </ItemSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>信箱</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.0.contact_email")}
                    flex={"1"}
                  />
                </div>
              </div>
            </ItemSTY>
          </ContainerSTY>
        </Collapse>
      </BodySTY>
      <BodySTY>
        <Collapse
          titleChildren={
            <StyledCollapseTitle>
              <span>旅客代表人資訊</span>
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
                <span>同上方欄位內容</span>
              </label>
            </StyledCollapseTitle>
          }
          opened={true}
        >
          <ContainerSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>姓</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.1.family_name")}
                    flex={"1"}
                  />
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>名</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.1.name")}
                    flex={"1"}
                  />
                </div>
              </div>
            </ItemSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>手機</span>
                </div>
                <div className="item-input-container">
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
                  <TextInput
                    {...register("order_contact_list.1.contact_phone")}
                  />
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span>電話</span>
                </div>
                <div className="item-input-container">
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
                  <TextInput
                    {...register("order_contact_list.1.contact_tel")}
                  />
                </div>
              </div>
            </ItemSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>信箱</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.1.contact_email")}
                    flex={"1"}
                  />
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>通訊軟體</span>
                </div>
                <div className="item-input-container">
                  <CustomSelect
                    options={[
                      {
                        text: "Line",
                        value: "01"
                      },
                      {
                        text: "WeChat",
                        value: "02"
                      }
                    ]}
                    register={register}
                    selectName="order_contact_list.1.social_media_type"
                  />
                  <TextInput
                    {...register("order_contact_list.1.social_media")}
                  />
                </div>
              </div>
            </ItemSTY>
          </ContainerSTY>
        </Collapse>
      </BodySTY>
    </>
  );
};

export default ContactInformation;
