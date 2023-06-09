import React from "react";
import Collapse from "@components/Collapse";
import { BodySTY, ItemSTY, ContainerSTY } from "./style";
import { TextInput } from "evergreen-ui";
import CustomSelect from "@components/CustomSelect";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
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
        <Collapse title="旅客代表人" opened={true}>
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
                    {...register("order_contact_list.0.social_media")}
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
