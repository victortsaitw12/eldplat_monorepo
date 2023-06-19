import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";

import { UpdateDriverInfoPayload } from "../driver.type";
import DriverInfo from "./DriverInfo";
import LicenseInfo from "./LicenseInfo";
import HealthRecords from "./HealthRecords";

import { formatDateFromAPI } from "@utils/formatDateFromAPI";

interface Props {
  isEdit: boolean;
  submitRef: React.RefObject<HTMLButtonElement>;
  asyncSubmitForm: (data: any) => Promise<void>;
  driverData: any;
  formType: string;
}

const driverFormDefaultValues: UpdateDriverInfoPayload = {
  driver_no: "",
  license_no: "",
  driver_country: "",
  license_area: "",
  license_lvl: "",
  driver_seniority: "",
  dsph_area: "",
  dsph_city: "",
  licn_typ: "",
  licn_name: "",
  licn_unit: "",
  licn_issue: "",
  licn_exp: "",
  licn_examine_date: "",
  licn_filename: "",
  licn_link: ""
};

function DriverDetail({
  isEdit,
  submitRef,
  asyncSubmitForm,
  driverData,
  formType
}: Props) {
  console.log("Driver data", driverData);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<UpdateDriverInfoPayload>({
    defaultValues: {
      driver_no: driverData.info.driver_no,
      license_no: driverData.info.license_no,
      driver_country: driverData.info.driver_country,
      license_area: driverData.info.license_area,
      license_lvl: driverData.info.license_lvl,
      driver_seniority: driverData.info.driver_seniority,
      dsph_area: driverData.info.dsph_area,
      dsph_city: driverData.info.dsph_city,
      licn_typ: driverData.info.licn_typ,
      licn_name: driverData.info.licn_name,
      licn_unit: driverData.info.licn_unit,
      licn_issue: formatDateFromAPI(driverData.info.licn_issue),
      licn_exp: formatDateFromAPI(driverData.info.licn_exp),
      licn_examine_date: formatDateFromAPI(driverData.info.licn_examine_Date),
      licn_filename: driverData.info.licn_filename,
      licn_link: driverData.info.licn_link
    }
  });

  const [visibleForm, setVisibleForm] = useState("1");

  useEffect(() => {
    if (errors) console.log(errors);
  }, [errors]);
  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);

  return (
    <FormSTY
      onSubmit={handleSubmit((currentData) => {
        console.log("currentData");
        console.log(currentData);
        asyncSubmitForm(currentData);
      })}
    >
      <button ref={submitRef} type="submit" style={{ display: "none" }}>
        儲存
      </button>
      <DriverInfo
        selected={visibleForm === "1"}
        register={register}
        getValues={getValues}
        isEdit={isEdit}
        driverData={driverData}
      />
      {visibleForm === "2" && (
        <LicenseInfo
          register={register}
          getValues={getValues}
          licenseData={driverData.license}
          userName={driverData.info.user_name}
        />
      )}
      {visibleForm === "3" && (
        <HealthRecords
          healths={driverData.healths}
          userName={driverData.info.user_name}
        />
      )}
    </FormSTY>
  );
}

export default DriverDetail;
