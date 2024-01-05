import React, { useId } from "react";
import { useForm } from "react-hook-form";
import VerticalInput from "@components/HookForm/Input/VerticalInput";
import HorizatalInput from "@components/HookForm/Input/HorizontalInput";
import SingleInput from "@components/HookForm/Input/SingleInput";
import Select from "@components/HookForm/Select/SingleSelect";
import Radio from "@components/HookForm/Radio";
import CheckBox from "@components/HookForm/CheckBox/SingleCheckBox";
import DottedSelect from "@components/HookForm/Select/DottedSelect";
type SelectOption = {
  value: string;
  label: string;
};
interface FormValues {
  firstName: string;
  lastName: string;
  nickName: string;
  gender: string;
  education: string;
  isMarried: boolean;
  color: string;
}
const selectOptions = [
  { value: "male", label: "男" },
  { value: "female", label: "女" },
  { value: "unknown", label: "多元" }
];
const radioOptions = [
  { value: "1", label: "貸款", description: "此車輛與貸款無關" },
  { value: "2", label: "租賃", description: "此車輛正在租賃中" },
  { value: "3", label: "無融資", description: "此車輛未被融資" }
];
//
const Page = () => {
  const [isEdit, setIsEdit] = React.useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
    control
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "bill",
      lastName: "小明",
      nickName: "小明",
      gender: "male",
      education: "國小",
      isMarried: false,
      color: "01"
    }
  });
  function submitDataHandler(data: any) {
    console.log("data", data);
    console.log("dirtyFields", dirtyFields);
  }
  //
  return (
    <>
      <fieldset style={{ border: "none" }} disabled={!isEdit}>
        <form
          onSubmit={handleSubmit(submitDataHandler)}
          style={{
            width: "600px",
            height: "500px",
            border: "1px solid",
            padding: "20px"
          }}
        >
          <VerticalInput
            label="姓氏"
            {...register("firstName", { required: "必填" })}
            description="first name"
            errorMessage={errors.firstName?.message}
          />
          <HorizatalInput
            label="名"
            {...register("lastName", { required: "必填" })}
            description="lastName"
            errorMessage={errors.lastName?.message}
          />
          <SingleInput {...register("nickName", { required: "必填" })} />
          <div>
            <div>性別</div>
            <Select
              control={control}
              options={selectOptions}
              isDisabled={!isEdit}
              name="gender"
            />
          </div>
          <Radio
            isDisabled={!isEdit}
            control={control}
            name="education"
            options={radioOptions}
          />
          <div>
            <label>已婚:</label>
            <CheckBox control={control} name="isMarried" />
          </div>
          <DottedSelect
            control={control}
            isDisabled={!isEdit}
            name="color"
            label="顏色"
            options={[
              { label: "活躍中", value: "01", color: "#52BD94" },
              { label: "已售出", value: "02", color: "#8EA8C7" },
              { label: "終止服務", value: "03", color: "#D14343" },
              { label: "在維修廠", value: "04", color: "#FFB020" },
              { label: "閒置中", value: "05", color: "#3670C9" }
            ]}
          />
          {isEdit && <button type="submit">submit</button>}
        </form>
      </fieldset>
      <button
        onClick={() => {
          setIsEdit((prev) => !prev);
        }}
      >
        Toggle Edit
      </button>
    </>
  );
};

export default Page;
