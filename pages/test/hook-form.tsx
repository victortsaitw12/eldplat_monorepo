import React from "react";
import { useForm } from "react-hook-form";
import VerticalInput from "@components/HookForm/Input/VerticalInput";
import HorizatalInput from "@components/HookForm/Input/HorizatalInput";
import Select from "@components/HookForm/Select";
interface FormValues {
  firstName: string;
  lastName: string;
}
const options = ["小明", "小華", "小強"];
//
const Page = () => {
  const [isEdit, setIsEdit] = React.useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors }
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "bill",
      lastName: "小明"
    }
  });
  function submitDataHandler(data: any) {
    console.log("data", data);
    console.log("dirtyFields", dirtyFields);
  }
  //

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
