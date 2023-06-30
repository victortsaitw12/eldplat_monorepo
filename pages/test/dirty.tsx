import { useForm, useFieldArray } from "react-hook-form";
import { getDirtyFieldsValue } from "@utils/getDirtyFieldsValue";
type FormValuesType = {
  name: string;
  profile: {
    age: number;
    job: string;
    gender: string;
  };
  contact: {
    phone: string;
    tel: string;
  }[];
  email: string;
};
const Page = () => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, dirtyFields }
  } = useForm<FormValuesType>({
    defaultValues: {
      name: "",
      profile: {
        age: 0,
        job: "",
        gender: ""
      },
      contact: [
        {
          phone: "",
          tel: ""
        }
      ],
      email: ""
    }
  });
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "contact"
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("form data:", data);
        console.log("dirtyFields:", dirtyFields);
        const dirtyFieldsValue = getDirtyFieldsValue(data, dirtyFields);
        console.log("dirtyFieldsValue:", dirtyFieldsValue);
        console.log("Stringnify: ", JSON.stringify(dirtyFieldsValue));
      })}
    >
      <label>
        <span>姓名</span>
        <input type="text" {...register("name")} />
      </label>
      <label>
        <span>Mail</span>
        <input type="text" {...register("email")} />
      </label>
      <div>
        <h3>Profile:</h3>

        <label>
          <span>年齡</span>
          <input type="number" {...register("profile.age")} />
        </label>
        <label>
          <span>Job</span>
          <input type="text" {...register("profile.job")} />
        </label>
        <label>
          <span>Gender</span>
          <select {...register("profile.gender")}>
            <option value={"1"}>Male</option>
            <option value={"2"}>Female</option>
          </select>
        </label>
      </div>
      <div>
        <h3>Contact:</h3>
        {fields.map((item, index) => {
          return (
            <div key={item.id}>
              <label>
                <span>Phone</span>
                <input
                  type="text"
                  {...register(`contact.${index}.phone` as const)}
                />
              </label>
              <label>
                <span>Tel</span>
                <input
                  type="text"
                  {...register(`contact.${index}.tel` as const)}
                />
              </label>
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => {
            append({ phone: "", tel: "" });
          }}
        >
          Add new contact
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
