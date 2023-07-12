import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";

import { UpdateDriverInfoPayload } from "../driver.type";
import DriverInfo from "./DriverInfo";
import LicensesList from "@contents/Driver/Detail/LicensesList";
import HealthRecords from "./HealthRecords";

interface Props {
  isEdit: boolean;
  submitRef: React.RefObject<HTMLButtonElement>;
  asyncSubmitForm: (data: any) => Promise<void>;
  driverData: any;
  formType: string;
  refetch: () => void;
}

function DriverDetail({
  isEdit,
  submitRef,
  asyncSubmitForm,
  driverData,
  formType,
  refetch
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
      dsph_city: driverData.info.dsph_city
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
        <LicensesList
          licensesData={driverData.licenses}
          userName={driverData.info.user_name}
          refetch={refetch}
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
