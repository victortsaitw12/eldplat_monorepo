import { forwardRef } from "react";
import { ExpenseDetailProps } from "./type";
import { StyledForm } from "./style";
import ExpenseItem from "./ExpenseItem";
import { useForm } from "react-hook-form";
const ExpenseDetail = forwardRef<HTMLButtonElement, ExpenseDetailProps>(
  function ExpenseDetail(
    {
      data,
      prefix,
      suffix,
      isEdit = false,
      asyncSubmitData = (data) => {
        console.log(data);
      }
    },
    formButtonRef
  ) {
    const defaultValues: { [key: string]: any } = {};
    data.forEach((item) => {
      defaultValues[item.name] = item.value;
    });
    const { register, handleSubmit } = useForm({
      defaultValues: defaultValues
    });
    return (
      <StyledForm onSubmit={handleSubmit(asyncSubmitData)}>
        {data.map((item) => {
          return (
            <ExpenseItem
              key={item.label}
              register={register}
              itemData={item}
              prefix={prefix}
              suffix={suffix}
              isEdit={isEdit}
            />
          );
        })}
        <button type="submit" style={{ display: "none" }} ref={formButtonRef}>
          submit
        </button>
      </StyledForm>
    );
  }
);

export default ExpenseDetail;
