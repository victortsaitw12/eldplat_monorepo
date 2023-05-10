import React from "react";
import { useForm } from "react-hook-form";
import VerticalInput from "@components/HookForm/Input/VerticalInput";
import HorizatalInput from "@components/HookForm/Input/HorizatalInput";
import SingleInput from "@components/HookForm/Input/SingleInput";
import Select from "@components/HookForm/Select";
import Radio from "@components/HookForm/Radio";
import CheckBox from "@components/HookForm/CheckBox";
interface FormValues {
  firstName: string;
  lastName: string;
  nickName: string;
  gender: string;
  education: string;
  fruit: Array<string>;
}
const selectOptions = [
  { value: "male", label: "男" },
  { value: "female", label: "女" },
  { value: "unknown", label: "多元" }
];
const radioOptions = ["國小", "國中", "高中", "大學", "碩士", "博士"];
const checkBoxOptions = ["蘋果", "香蕉", "橘子"];
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
      fruit: ["蘋果"]
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
          style={{ width: "600px", border: "1px solid", padding: "20px" }}
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
          {isEdit && <button type="submit">submit</button>}
          <Select
            label="性別"
            control={control}
            description="生理性別"
            {...register("gender", { required: "必選" })}
            options={selectOptions}
          />
          <Radio
            label="教育程度"
            control={control}
            name="education"
            options={radioOptions}
          />
          <CheckBox
            label="喜歡的水果"
            control={control}
            name="fruit"
            options={checkBoxOptions}
          />
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
