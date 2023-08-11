import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DivSTY } from "./style";

import { UpdateDriverInfoPayload } from "../driver.type";
import DriverInfo from "@contents/Driver/Detail/DriverInfo";
import LicensesList from "@contents/Driver/Detail/LicensesList";
import HealthRecords from "@contents/Driver/Detail/HealthRecords";

interface Props {
  isEdit: boolean;
  submitRef: React.RefObject<HTMLButtonElement>;
  asyncSubmitForm: (data: any) => Promise<void>;
  driverData: any;
  formType: string;
  refetch: () => void;
  driverNo: string;
}

function DriverDetail({
  isEdit,
  submitRef,
  asyncSubmitForm,
  driverData,
  formType,
  refetch,
  driverNo
}: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<UpdateDriverInfoPayload>({
    defaultValues: {
      driver_no: driverData.info.driver_no,
      license_no: driverData.info.license_no,
      license_area: driverData.info.license_area,
      license_lvl: driverData.info.license_lvl,
      driver_seniority: driverData.info.driver_seniority,
      driver_country: driverData.info.driver_country,
      dsph_area: driverData.info.dsph_area,
      dsph_group: driverData.info.dsph_group,
      working_hours_code: driverData.info.working_hours_code,
      working_hours_name: driverData.info.working_hours_name
    }
  });

  const [visibleForm, setVisibleForm] = useState("1");
  const userName = driverData.info["user_first_name"].concat(
    driverData.info["user_name"]
  );

  useEffect(() => {
    if (errors) console.log(errors);
  }, [errors]);
  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);

  return (
    <DivSTY>
      <form
        onSubmit={handleSubmit((currentData) => {
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
      </form>
      {visibleForm === "2" && (
        <LicensesList driverNo={driverNo} userName={userName} isEdit={isEdit} />
      )}
      {visibleForm === "3" && (
        <HealthRecords userNo={driverData.info.user_no} userName={userName} />
      )}
    </DivSTY>
  );
}

export default DriverDetail;
