import React, { useState } from "react";
import { Pane, TextInputField, SelectField } from "evergreen-ui";
import CheckboxField from "@components/CheckboxField";
import { I_Add_Vendors_Type } from "@typings/vendors_type";
import Router from "next/router";
import { MOCK_FUEL_DATA } from "./FuelData";
import { createVendor } from "@services/vendor/createVendor";
interface I_addVendorProps {
  setAddVendorActive: (key: boolean) => void;
}

function AddVendor({ setAddVendorActive }: I_addVendorProps) {
  const [tagValue, setTagValue] = useState<string>("benz");
  const [countryValue, setCountryValue] = useState<string>("taiwan");

  const [fuelValue, setFuelValue] = useState<string[]>([]);
  const [insertData, setInsertData] = useState<I_Add_Vendors_Type>({
    vendor_name: "",
    vendor_label: "01",
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
    vendor_code: [""]
  });

  const handleChange = (e: any) => {
    const newData: any = { ...insertData };
    newData[e.target.name] = e.target.value;
    setInsertData(newData);
  };

  const handleSubmitThenAddAnother = () => {
    alert("儲存成功");
    createVendor(insertData);
    setInsertData({
      vendor_name: "",
      vendor_label: "01",
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
      vendor_code: [""]
    });
  };

  const handleSubmit = () => {
    alert("儲存成功");
    createVendor(insertData);
    setAddVendorActive(false);
    Router.reload();
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
      <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN</p>

      <div>
        <button
          onClick={() => {
            setAddVendorActive(false);
          }}
        >
          取消
        </button>

        <div className="next-step">
          <button className="bordered" onClick={handleSubmitThenAddAnother}>
            儲存&新增另一筆
          </button>
          <button className="fill" onClick={handleSubmit}>
            儲存供應商
          </button>
        </div>
      </div>
    </Pane>
  );
}

export default AddVendor;
