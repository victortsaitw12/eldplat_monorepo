import React, { useState } from "react";
import { Pane, TextInputField, SelectField, TagInput } from "evergreen-ui";
import FormCard from "@components/FormCard";
import { StepControlSTY } from "@components/FormCard/style";
import CheckboxField from "@components/CheckboxField";
import InfoBox from "@components/InfoBox";
import { I_Add_Vendors_Type } from "@typings/vendors_type";
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
  oldData?: any
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
  vendor_Code: ["01"],
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
  const [tags, setTags] = React.useState(["Kauri", "Willow"])
  console.log("🧨🧨insertData", getValues());
  console.log("🧨🧨🧨🧨form errors", errors);
  return (
    <Pane marginX="20px">
      <form
        onSubmit={handleSubmit((data) => {
          console.log("🧨🧨🧨🧨🧨🧨這是用form-hook的data:", { ...data, vendor_Code: fuelValue });
          submitForm({ ...data, vendor_Code: fuelValue });
        })}
      >
        <FlexWrapper>
          <div>
            <FormCard formTitle="基本資料">
              <div className="w100">
                <TextInputField
                  label="名稱"
                  {...register("vendor_Name", {
                    required: "必填",
                    validate: textValidation
                  })}
                />
                {/*錯誤訊息範例*/}
                {errors.vendor_Name && <span style={{ color: "red" }}>{errors.vendor_Name.message as string}</span>}
                {/* {errors.vendor_Name && <span>{errors.vendor_Name?.message as string}</span>} */}
                {/* {errors.vendor_Name && errors.vendor_Name.type === "maxLength" && <span>Max length exceeded</span>} */}
              </div>
              <div className="w50">
                <TextInputField
                  label="電話"
                  {...register("vendor_Phone", {
                    required: "必填",
                    validate: numberValidation
                  })}
                />
                <TextInputField
                  label="網站"
                  {...register("vendor_Website", {
                    required: "必填",
                  })}
                />
              </div>

              <div className="w100">
                <TextInputField
                  label="標籤 (最多只允許2字元)"
                  {...register("vendor_Label", {
                    maxLength: 2,
                  })}
                />
              </div>

              <div className="w100">
                <TextInputField
                  label="地址"
                  hint="街道地址、郵政信箱等"
                  {...register("vendor_Address", {
                    required: "必填",
                  })}
                />
              </div>

              <div className="w100">
                <TextInputField
                  label="地址第二列"
                  hint="套房、建築、大樓、樓層等"
                  {...register("vendor_Address2", {
                    required: "必填",
                  })}
                />
              </div>

              <div className="w50">
                <TextInputField
                  label="城市"
                  {...register("vendor_City", {
                    required: "必填",
                  })}
                />
                <TextInputField
                  label="州/省/地區"
                  {...register("vendor_State", {
                    required: "必填",
                  })}
                />
              </div>
              <div className="w50">
                <TextInputField
                  label="郵遞區號"
                  {...register("vendor_Zip", {
                    required: "必填",
                  })}
                />
                <SelectField
                  label="國家"
                  {...register("vendor_Country", {
                    required: "必填",
                  })}
                >
                  <option value="TW">台灣</option>
                  <option value="JP">日本</option>
                  <option value="US">美國</option>
                </SelectField>
              </div>
            </FormCard>
            <FlexWrapper padding="10px 0">
              <FormCard formTitle="分類">
                {MOCK_FUEL_DATA.map((item) => {
                  // 現在是供應商(車) => 所以只有03可選
                  if (item.value === "03")
                    return (
                      <div key={item.label} className="w100">
                        <CheckboxField
                          label={item.label}
                          hint={item.hint}
                          item={item}
                          checked={fuelValue.includes(item.value)}
                          toggleFuelValue={toggleFuelValue}
                        />
                      </div>
                    );
                })}
              </FormCard>
              <FormCard formTitle="標籤">
                <TagInput
                  inputProps={{ placeholder: "標籤上限2字元" }}
                  values={tags}
                  // width="100%"
                  onChange={(values) => {
                    setTags(values)
                  }}
                />
              </FormCard>
            </FlexWrapper>
          </div>
          <FormCard formTitle="聯絡方式">
            <div className="w100">
              <TextInputField
                label="聯絡人"
                {...register("vendor_Contact_Name", {
                  required: "必填",
                })}
              />
            </div>
            <div className="w50">
              <TextInputField
                label="電話"
                hint="聯絡人的專線或手機號碼"
                {...register("vendor_Contact_Phone", {
                  required: "必填",
                  validate: numberValidation
                })}
              />
              <TextInputField
                label="信箱"
                {...register("vendor_Contact_Email", {
                  required: "必填",
                  validate: emailValidation
                })}
              />
            </div>
          </FormCard>
        </FlexWrapper>
        <StepControlSTY>
          <button onClick={onCancel}>取消</button>
          <div className="next-step">
            {/* <button className="bordered" onClick={handleSubmitThenAddAnother}>
            儲存&新增另一筆
          </button> */}
            <button
              className="fill"
              type="submit"
            >
              儲存供應商
            </button>
          </div>
        </StepControlSTY>
      </form>
    </Pane >
  );
}

export default AddVendor;
