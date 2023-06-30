import React from "react";
import Collapse from "@components/Collapse";
import { BodySTY, ItemSTY, ContainerSTY, StyledCollapseTitle } from "./style";
import { TextInput } from "evergreen-ui";
import CustomSelect from "@components/CustomSelect";
import { useFormContext, useWatch } from "react-hook-form";
import { QuotationCreatePayload } from "../type";
import { emailValidation, phoneValidation } from "@utils/hookFormValidation";
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
      "order_contact_list.1.family_name",
      getValues("order_contact_list.0.family_name"),
      { shouldValidate: true }
    );
    setValue(
      "order_contact_list.1.name",
      getValues("order_contact_list.0.name"),
      { shouldValidate: true }
    );
    setValue(
      "order_contact_list.1.contact_phone_code",
      getValues("order_contact_list.0.contact_phone_code"),
      { shouldValidate: true }
    );
    setValue(
      "order_contact_list.1.contact_phone",
      getValues("order_contact_list.0.contact_phone"),
      { shouldValidate: true }
    );
    setValue(
      "order_contact_list.1.contact_tel_code",
      getValues("order_contact_list.0.contact_tel_code"),
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
        <Collapse title="訂單聯絡人" opened={true}>
          <ContainerSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>姓</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.0.family_name", {
                      required: "不可空白"
                    })}
                    isInvalid={!!errors.order_contact_list?.[0]?.family_name}
                  />
                  {errors.order_contact_list?.[0]?.family_name && (
                    <div className="input-error">
                      {errors.order_contact_list?.[0]?.family_name?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>名</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.0.name", {
                      required: "不可空白"
                    })}
                    isInvalid={!!errors.order_contact_list?.[0]?.name}
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
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>手機</span>
                </div>
                <div className="double-input-container">
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
                    {errors.order_contact_list?.[0]?.contact_phone_code && (
                      <div className="input-error">
                        {
                          errors.order_contact_list?.[0]?.contact_phone_code
                            ?.message
                        }
                      </div>
                    )}
                  </div>
                  <div className="item-input-container">
                    <TextInput
                      {...register("order_contact_list.0.contact_phone", {
                        required: "不可空白",
                        validate: phoneValidation
                      })}
                      isInvalid={
                        !!errors.order_contact_list?.[0]?.contact_phone
                      }
                    />
                    {errors.order_contact_list?.[0]?.contact_phone && (
                      <div className="input-error">
                        {errors.order_contact_list?.[0]?.contact_phone?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span>電話</span>
                </div>
                <div className="double-input-container">
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
                  </div>
                  <div className="item-input-container">
                    <TextInput
                      {...register("order_contact_list.0.contact_tel")}
                    />
                  </div>
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
        <Collapse
          titleChildren={
            <StyledCollapseTitle>
              <span>旅客代表人</span>
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
                    {...register("order_contact_list.1.family_name", {
                      required: "不可空白"
                    })}
                    isInvalid={!!errors.order_contact_list?.[1]?.family_name}
                  />
                  {errors.order_contact_list?.[1]?.family_name && (
                    <div className="input-error">
                      {errors.order_contact_list?.[1]?.family_name?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>名</span>
                </div>
                <div className="item-input-container">
                  <TextInput
                    {...register("order_contact_list.1.name", {
                      required: "不可空白"
                    })}
                    isInvalid={!!errors.order_contact_list?.[1]?.name}
                  />
                  {errors.order_contact_list?.[1]?.name && (
                    <div className="input-error">
                      {errors.order_contact_list?.[1]?.name?.message}
                    </div>
                  )}
                </div>
              </div>
            </ItemSTY>
            <ItemSTY>
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>手機</span>
                </div>
                <div className="double-input-container">
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
                    {errors.order_contact_list?.[1]?.contact_phone_code && (
                      <div className="input-error">
                        {
                          errors.order_contact_list?.[1]?.contact_phone_code
                            ?.message
                        }
                      </div>
                    )}
                  </div>
                  <div className="item-input-container">
                    <TextInput
                      {...register("order_contact_list.1.contact_phone", {
                        required: "不可空白",
                        validate: phoneValidation
                      })}
                      isInvalid={
                        !!errors.order_contact_list?.[1]?.contact_phone
                      }
                    />
                    {errors.order_contact_list?.[1]?.contact_phone && (
                      <div className="input-error">
                        {errors.order_contact_list?.[1]?.contact_phone?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="item-container">
                <div className="item-title">
                  <span>電話</span>
                </div>
                <div className="double-input-container">
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
                  </div>
                  <div className="item-input-container">
                    <TextInput
                      {...register("order_contact_list.1.contact_tel")}
                    />
                  </div>
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
              <div className="item-container">
                <div className="item-title">
                  <span style={{ color: "#D14343" }}>*</span>
                  <span>通訊軟體</span>
                </div>

                <div className="double-input-container">
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
                  </div>
                  <div className="item-input-container">
                    <TextInput
                      {...register("order_contact_list.1.social_media", {
                        required: "不可空白"
                      })}
                      isInvalid={!!errors.order_contact_list?.[1]?.social_media}
                    />
                    {errors.order_contact_list?.[1]?.social_media && (
                      <div className="input-error">
                        {errors.order_contact_list?.[1]?.social_media?.message}
                      </div>
                    )}
                  </div>
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
