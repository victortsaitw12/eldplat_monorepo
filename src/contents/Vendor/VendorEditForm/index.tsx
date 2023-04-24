import React, { useState } from "react";
import { Pane, TextInputField, SelectField } from "evergreen-ui";
import FormCard from "@components/FormCard";
import { StepControlSTY } from "@components/FormCard/style";
import CheckboxField from "@components/CheckboxField";
import { I_Add_Vendors_Type } from "@typings/vendors_type";
import { MOCK_FUEL_DATA } from "./FuelData";

interface I_addVendorProps {
  submitForm: (data: any) => void;
  onCancel: () => void;
}

function AddVendor({ onCancel, submitForm }: I_addVendorProps) {
  const [tagValue, setTagValue] = useState<string>("benz");
  const [countryValue, setCountryValue] = useState<string>("taiwan");

  const [fuelValue, setFuelValue] = useState<string[]>(["03"]);
  const [insertData, setInsertData] = useState<I_Add_Vendors_Type>({
    vendor_name: "",
    vendor_label: "",
    vendor_phone: "",
    vendor_website: "",
    vendor_address: "",
    vendor_address2: "",
    vendor_zip: "",
    vendor_state: "",
    vendor_city: "",
    vendor_country: "TW",
    vendor_contact_name: "",
    vendor_contact_phone: "",
    vendor_contact_email: "",
    vendor_code: ["h1"]
  });

  const handleChange = (e: any) => {
    const newData: any = { ...insertData };
    newData[e.target.name] = e.target.value;
    setInsertData(newData);
  };

  const submitFormHandler = () => {
    console.log("insertData", insertData);
    submitForm(insertData);
    // setAddVendorActive(false);
    // Router.reload();
  };

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

    // 設回全部大物件
    const newInsert = { ...insertData };
    newInsert.vendor_code = newData;
    setInsertData(newInsert);
  };

  return (
    <Pane marginX="20px">
      <FormCard formTitle="新增供應商">
        <div className="w100">
          <TextInputField
            label="名稱"
            name="vendor_name"
            value={insertData.vendor_name}
            onChange={handleChange}
          />
        </div>

        <div className="w50">
          <TextInputField
            label="電話"
            name="vendor_phone"
            value={insertData.vendor_phone}
            onChange={handleChange}
          />
          <TextInputField
            label="網站"
            name="vendor_website"
            value={insertData.vendor_website}
            onChange={handleChange}
          />
        </div>

        <div className="w100">
          <TextInputField
            label="標籤"
            value={insertData.vendor_label}
            name="vendor_label"
            onChange={(e: any) => {
              handleChange(e);
              setTagValue(e.target.value);
            }}
          />
        </div>

        <div className="w100">
          <TextInputField
            label="地址"
            hint="街道地址、郵政信箱等"
            value={insertData.vendor_address}
            name="vendor_address"
            onChange={handleChange}
          />
        </div>

        <div className="w100">
          <TextInputField
            label="地址第二列"
            hint="套房、建築、大樓、樓層等"
            value={insertData.vendor_address2}
            name="vendor_address2"
            onChange={handleChange}
          />
        </div>

        <div className="w50">
          <TextInputField
            label="城市"
            value={insertData.vendor_city}
            name="vendor_city"
            onChange={handleChange}
          />
          <TextInputField
            label="州/省/地區"
            value={insertData.vendor_state}
            name="vendor_state"
            onChange={handleChange}
          />
        </div>
        <div className="w50">
          <TextInputField
            label="郵遞區號"
            value={insertData.vendor_zip}
            name="vendor_zip"
            onChange={handleChange}
          />
          <SelectField
            label="國家"
            value={insertData.vendor_country}
            name="vendor_country"
            onChange={(e: any) => {
              handleChange(e);
              setCountryValue(e.target.value);
            }}
          >
            <option value="TW">台灣</option>
            <option value="JP">日本</option>
            <option value="US">美國</option>
          </SelectField>
        </div>
      </FormCard>

      <FormCard formTitle="聯絡人">
        <div className="w100">
          <TextInputField
            label="聯絡人"
            value={insertData.vendor_contact_name}
            name="vendor_contact_name"
            onChange={handleChange}
          />
        </div>

        <div className="w50">
          <TextInputField
            label="電話"
            hint="聯絡人的專線或手機號碼"
            value={insertData.vendor_contact_phone}
            name="vendor_contact_phone"
            onChange={handleChange}
          />
          <TextInputField
            label="信箱"
            value={insertData.vendor_contact_email}
            name="vendor_contact_email"
            onChange={handleChange}
          />
        </div>
      </FormCard>

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

      <StepControlSTY>
        <button onClick={onCancel}>取消</button>

        <div className="next-step">
          {/* <button className="bordered" onClick={handleSubmitThenAddAnother}>
            儲存&新增另一筆
          </button> */}
          <button className="fill" onClick={submitFormHandler}>
            儲存供應商
          </button>
        </div>
      </StepControlSTY>
    </Pane>
  );
}

export default AddVendor;
