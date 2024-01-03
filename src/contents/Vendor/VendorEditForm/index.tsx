import React, { useState } from "react";
import { Pane, TextInputField, SelectField, TagInput } from "evergreen-ui";
import CheckboxField from "@components/CheckboxField";
import { MOCK_FUEL_DATA } from "./FuelData";
import { useForm } from "react-hook-form";
import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";
import FlexWrapper from "@layout/FlexWrapper";
interface I_addVendorProps {
  submitForm: (data: any) => void;
  onCancel: () => void;
  oldData?: any;
}

// default value
const defaultValues = {
  vendor_Name: "",
  vendor_Label: "",
  vendor_Phone: "",
  vendor_Website: "",
  vendor_Address: "",
  vendor_Address2: "",
  vendor_Zip: "",
  vendor_State: "",
  vendor_City: "",
  vendor_Country: "TW",
  vendor_Contact_Name: "",
  vendor_Contact_Phone: "",
  vendor_Contact_Email: "",
  vendor_Code: ["01"]
};
//🕯️🕯️🕯️此component未來會刪除
function AddVendor({ onCancel, submitForm, oldData }: I_addVendorProps) {
  const defaultFormValue = oldData ? oldData : defaultValues;
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: defaultFormValue });

  const [fuelValue, setFuelValue] = useState<string[]>(["03"]);

  const toggleFuelValue = (value: string) => {
    const newData = [...fuelValue];
    const idx = fuelValue.indexOf(value);

    // 如果在fuelValue陣列抓不到該value，idx會是-1，然後就push一個新的value，反之則刪去
    if (idx === -1) {
      newData.push(value);
    } else {
      newData.splice(idx, 1);
    }
    setFuelValue(newData);
  };
  const [tags, setTags] = React.useState(["Kauri", "Willow"]);
  console.log("🧨🧨insertData", getValues());
  console.log("🧨🧨🧨🧨form errors", errors);
  return (
    <Pane marginX="20px">
      <form
        onSubmit={handleSubmit((data) => {
          console.log("🧨🧨🧨🧨🧨🧨這是用form-hook的data:", {
            ...data,
            vendor_Code: fuelValue
          });
          submitForm({ ...data, vendor_Code: fuelValue });
        })}
      >
        <FlexWrapper>
          <div>
            <p>DELETED FORMCARD. PLEASE CHECK THE PAGE AGAIN.</p>
            <FlexWrapper padding="10px 0">
              <p>DELETED FORMCARD. PLEASE CHECK THE PAGE AGAIN.</p>
            </FlexWrapper>
          </div>
          <p>DELETED FORMCARD. PLEASE CHECK THE PAGE AGAIN.</p>
        </FlexWrapper>
        <div>
          <button onClick={onCancel}>取消</button>
          <div className="next-step">
            {/* <button className="bordered" onClick={handleSubmitThenAddAnother}>
            儲存&新增另一筆
          </button> */}
            <button className="fill" type="submit">
              儲存供應商
            </button>
          </div>
        </div>
      </form>
    </Pane>
  );
}

export default AddVendor;
