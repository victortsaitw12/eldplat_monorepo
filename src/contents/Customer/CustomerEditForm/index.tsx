import React from "react";
import { Pane, TextInputField, SelectField } from "evergreen-ui";
import FormCard from "@components/FormCard";
import { StepControlSTY } from "@components/FormCard/style";
import { useForm } from "react-hook-form";
import {
  emailValidation,
  textValidation,
  phoneValidation
} from "@utils/inputValidation";

interface Props {
  submitForm: (data: any) => void;
  onCancel: () => void;
  oldData?: any;
}
// default value
const defaultValues = {
  customer_Gui_No: "",
  customer_Name: "",
  customer_Typ: "01",
  contact_Name: "",
  contact_Phone: "",
  contact_Email: ""
};
//
function CustomerEditForm({ onCancel, oldData, submitForm }: Props) {
  const defaultFormValue = oldData ? oldData : defaultValues;
  console.log("defaultFormValue", defaultFormValue);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: defaultFormValue });
  return (
    <Pane marginX="20px">
      <form
        onSubmit={handleSubmit((data) => {
          submitForm(data);
        })}
      >
        <FormCard formTitle="新增客戶(基本資料)">
          <div className="w50">
            <TextInputField
              label="客戶統一編號"
              validationMessage={errors.customer_Gui_No?.message as string}
              {...register("customer_Gui_No", {
                required: "客戶統一編號必填",
                validate: textValidation
              })}
            />
            <TextInputField
              label="客戶名稱"
              validationMessage={errors.customer_Name?.message as string}
              {...register("customer_Name", {
                required: "客戶名稱必填",
                validate: textValidation
              })}
            />
          </div>
          <div className="w50">
            <SelectField label="客戶分類" {...register("customer_Typ")}>
              <option value="01">公司</option>
              <option value="02">個人</option>
            </SelectField>
            <TextInputField
              label="聯絡人姓名"
              validationMessage={errors.contact_Name?.message as string}
              {...register("contact_Name", {
                required: "聯絡人姓名必填",
                validate: textValidation
              })}
            />
          </div>
          <div className="w50">
            <TextInputField
              label="聯絡電話"
              validationMessage={errors.contact_Phone?.message as string}
              {...register("contact_Phone", { validate: phoneValidation })}
            />
            <TextInputField
              label="聯絡信箱"
              validationMessage={errors.contact_Email?.message as string}
              {...register("contact_Email", {
                validate: emailValidation
              })}
            />
          </div>
        </FormCard>

        <StepControlSTY>
          <button type="button" onClick={onCancel}>
            取消
          </button>
          <div className="next-step">
            <button className="fill" type="submit">
              儲存客戶
            </button>
          </div>
        </StepControlSTY>
      </form>
    </Pane>
  );
}

export default CustomerEditForm;
