import React from "react"
import CustomSelect from "@components/CustomSelect";

const DUMMY_Nationalities = [
  { NationalityID: 31, CountryCode: "TW", Nationality: "台灣" },
  { NationalityID: 158, CountryCode: "US", Nationality: "美國" },
  { NationalityID: 7, CountryCode: "CA", Nationality: "加拿大" },
  { NationalityID: 23, CountryCode: "JP", Nationality: "日本" },
]

interface I_Props {
  register?: any;
  selectName?: string;
}

const NationalitySelect = ({ register, selectName}: I_Props) => {
  return (
    <CustomSelect
      options={[
        {
          text: "",
          value: ""
        },
        ...DUMMY_Nationalities.map((item) => {
          return {
            text: item.Nationality,
            value: item.Nationality,
          } 
        })
      ]}
      register={register}
      selectName={selectName}
    />
  )
}

export default NationalitySelect