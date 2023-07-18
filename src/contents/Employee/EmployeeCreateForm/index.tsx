import { useForm } from "react-hook-form";
import { ItemSTY, FormSTY } from "./style";
import { IconLeft } from "@components/Button/Primary";
import FiledInput from "./FieldInput";
import { PlusIcon } from "evergreen-ui";

interface EmployeeCreateFormProps {
  createEmployee: (EmployeeData: any) => void;
}
export interface CreateEmployeePayload {
  user_name: string;
  user_first_name: string;
  user_email: string;
  user_phone: string;
}
const defaultValues = {
  user_name: "",
  user_first_name: "",
  user_email: "",
  user_phone: ""
};
const EmployeeCreateForm = ({ createEmployee }: EmployeeCreateFormProps) => {
  const { handleSubmit, control } = useForm<CreateEmployeePayload>({
    defaultValues
  });
  return (
    <FormSTY onSubmit={handleSubmit(createEmployee)}>
      <FiledInput
        controlProps={{
          name: "user_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="姓"
      />
      <FiledInput
        controlProps={{
          name: "user_first_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="名"
      />
      <FiledInput
        controlProps={{
          name: "user_email",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="E-mail"
      />
      <FiledInput
        controlProps={{
          name: "user_phone",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="手機"
      />

      <IconLeft text={"新增員工"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
};
export default EmployeeCreateForm;
