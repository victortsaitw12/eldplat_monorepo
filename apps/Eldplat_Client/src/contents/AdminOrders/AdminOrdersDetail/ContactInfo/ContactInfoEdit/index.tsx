import React from "react";
import { Pane, TextInput, Text } from "evergreen-ui";
import { useFormContext } from "react-hook-form";

import DetailList from "@components/DetailList";
import CustomSelect from "@components/CustomSelect";

import { ErrorMessage } from "@hookform/error-message";
import { BodySTY } from "./style";
import { QuotationEditPayload } from "@contents/AdminOrders/type";

const ContactInfoEdit = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<QuotationEditPayload>();
  const contact_1 = [
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>姓
        </>
      ),
      value: (
        <>
          <Pane>
            <TextInput
              isInvalid={!!errors.order_contact_list?.[0]?.family_name}
              {...register("order_contact_list.0.family_name", {
                required: "不可空白"
              })}
            />
          </Pane>
          <Pane>
            <ErrorMessage
              errors={errors}
              name="order_contact_list[0].family_name"
              render={({ message }) => (
                <Text className="input-error">{message}</Text>
              )}
            />
          </Pane>
        </>
      )
    },
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>手機
        </>
      ),
      value: (
        <>
          <Pane style={{ display: "flex", gap: "8px" }}>
            <Pane>
              <CustomSelect
                selectName="order_contact_list[0].contact_phone_code"
                register={register}
                registerProps={{ required: "不可空白" }}
                options={[
                  {
                    value: "+886",
                    text: "+886"
                  }
                ]}
              />
              <Pane>
                <ErrorMessage
                  errors={errors}
                  name="order_contact_list.0.contact_phone_code"
                  render={({ message }) => (
                    <Text className="input-error">{message}</Text>
                  )}
                />
              </Pane>
            </Pane>
            <Pane>
              <TextInput
                isInvalid={!!errors.order_contact_list?.[0]?.contact_phone}
                {...register("order_contact_list.0.contact_phone", {
                  required: "不可空白"
                })}
                style={{ maxWidth: "198px" }}
              />
              <Pane>
                <ErrorMessage
                  errors={errors}
                  name="order_contact_list.0.contact_phone"
                  render={({ message }) => (
                    <Text className="input-error">{message}</Text>
                  )}
                />
              </Pane>
            </Pane>
          </Pane>
        </>
      )
    },
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>信箱
        </>
      ),
      value: (
        <>
          <Pane>
            <TextInput
              isInvalid={!!errors.order_contact_list?.[0]?.contact_email}
              {...register("order_contact_list.0.contact_email", {
                required: "不可空白"
              })}
            />
          </Pane>
          <Pane>
            <ErrorMessage
              errors={errors}
              name="order_contact_list.0.contact_email"
              render={({ message }) => (
                <Text className="input-error">{message}</Text>
              )}
            />
          </Pane>
        </>
      )
    }
  ];
  const contact_2 = [
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>名
        </>
      ),
      value: (
        <>
          <Pane>
            <TextInput
              isInvalid={!!errors.order_contact_list?.[0]?.name}
              {...register("order_contact_list.0.name", {
                required: "不可空白"
              })}
            />
          </Pane>
          <Pane>
            <ErrorMessage
              errors={errors}
              name="order_contact_list.0.name"
              render={({ message }) => (
                <Text className="input-error">{message}</Text>
              )}
            />
          </Pane>
        </>
      )
    },
    {
      title: "電話",
      value: (
        <Pane style={{ display: "flex", gap: "8px" }}>
          <CustomSelect
            selectName="order_contact_list[0].contact_tel_code"
            register={register}
            options={[
              {
                value: "+886",
                text: "+886"
              }
            ]}
          />
          <TextInput
            {...register("order_contact_list.0.contact_tel")}
            style={{ maxWidth: "198px" }}
          />
        </Pane>
      )
    }
  ];
  return (
    <BodySTY style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Pane style={{ flex: "1" }}>
        <DetailList listArray={contact_1} />
      </Pane>
      <Pane style={{ flex: "1" }}>
        <DetailList listArray={contact_2} />
      </Pane>
    </BodySTY>
  );
};
export default ContactInfoEdit;
