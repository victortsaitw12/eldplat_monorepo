import React, { useState, useEffect } from "react";
import { Pane } from "evergreen-ui";
import { useForm } from "react-hook-form";
import HealthRecords from "./HealthRecords";
import { UpdateDriverInfoPayload } from "../driver.type";
import DriverInfo from "./DriverInfo";
import { formatDateFromAPI } from "@utils/formatDateFromAPI";
// import HealthRecord from "./HealthRecord"
//
interface Props {
  driverId: string;
  asyncSubmitForm: (data: any) => Promise<void>;
  isEdit: boolean;
  driverData: any;
  isLoading: boolean;
  submitRef: React.RefObject<HTMLButtonElement>;
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

function DriverEditForm({
  driverId,
  asyncSubmitForm,
  isEdit,
  driverData,
  isLoading,
  submitRef,
  formType
}: Props) {
  console.log("Driver data", driverData);
  const {
    register,
    formState: { errors },
    control,
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
      licn_examine_date: formatDateFromAPI(driverData.info.licn_examine_date),
      licn_filename: driverData.info.licn_filename,
      licn_link: driverData.info.licn_link
    }
  });

  const [visibleForm, setVisibleForm] = useState("1");
  useEffect(() => {
    if (errors) {
      // do the your logic here
      console.log(errors);
    }
  }, [errors]);
  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);
  return (
    <form
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
        errors={errors}
        getValues={getValues}
        control={control}
        isEdit={isEdit}
        driverData={driverData}
      />
      {visibleForm === "2" && (
        <HealthRecords
          healths={driverData.healths}
          userName={driverData.info.user_name}
        />
      )}
    </form>
  );
}

export default DriverEditForm;
