import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormSTY } from "./style";

import InfoBox from "@components/InfoBox";
import PasswordInput from "../PasswordInput";
import {
  passwordValidation,
  confirmPasswordValidation
} from "@utils/hookFormValidation";

const ChangePasswordInfoBox = ({ asyncSubmitForm, submitRef }: I_Props) => {
  const defaultValues = {
    current: "",
    new: "",
    confirm: ""
  };
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  const dataFitInfoBox = [
    {
      readonly: false,
      req: true,
      label: "目前密碼",
      editEle: (
        <Controller
          control={control}
          name="current"
          rules={{ required: "密碼至少4碼數字", validate: passwordValidation }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              onChange={onChange}
              errorMsg={errors.current?.message}
            />
          )}
        />
      ),
      value: ""
    },
    {
      readonly: false,
      req: true,
      label: "新密碼",
      editEle: (
        <Controller
          control={control}
          name="new"
          rules={{ required: "密碼至少4碼數字", validate: passwordValidation }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput onChange={onChange} errorMsg={errors.new?.message} />
          )}
        />
      ),
      value: ""
    },
    {
      readonly: false,
      req: true,
      label: "再次輸入密碼",
      editEle: (
        <Controller
          control={control}
          name="confirm"
          rules={{
            required: "密碼不一致",
            validate: confirmPasswordValidation.bind(null, getValues("new"))
          }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              onChange={onChange}
              errorMsg={errors.confirm?.message}
            />
          )}
        />
      ),
      value: ""
    }
  ];
  return (
    <FormSTY onSubmit={handleSubmit((data) => asyncSubmitForm({ ...data }))}>
      <InfoBox isEdit={true} infoData={dataFitInfoBox} infoTitle="修改密碼" />
      <button style={{ display: "none" }} ref={submitRef} type="submit">
        發送表單
      </button>
    </FormSTY>
  );
};

export default ChangePasswordInfoBox;

interface I_Props {
  asyncSubmitForm: (data: any) => void;
  submitRef: React.RefObject<HTMLButtonElement>;
}
