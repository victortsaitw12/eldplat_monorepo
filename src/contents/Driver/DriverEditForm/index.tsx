import React, { useState } from "react";
import {
  Pane,
  Button,
  Text,
  IconButton,
  FullscreenIcon,
  SmallCrossIcon,
  FloppyDiskIcon
} from "evergreen-ui";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";

import { I_driverInfo } from "@contents/driver/driver.typing";
// import { DRIVER_TYPE } from "@typings/driver_type";
import Basic from "./SubForm/Basic";
import DriverResume from "./SubForm/DriverResume";
import DriverLicense from "./SubForm/DriverLicense";
import LanguageAbility from "./SubForm/LanguageAbility";
//
interface Props {
  submitForm: (data: any) => void;
  onCancel?: () => void;
  currentUserInfo: any;
  userId: string;
  formType: "info" | "health";
  isDisabled: boolean;
}
function DriverEditForm({
  userId,
  submitForm,
  handleSubmit,
  currentUserInfo,
  formType,
  isDisabled
}: Props) {
  const {
    register,
    watch,
    formState: { errors }
  } = useForm<I_driverInfo>();
  const [visibleForm, setVisibleForm] = useState("info");

  const [insertData, setInsertData] = useState<I_driverInfo>({
    // <DriverResume />, TABLE: DRIVER
    user_no: userId,
    driver_no: "",
    license_no: "",
    license_area: "",
    license_lvl: "",
    driver_seniority: 0,
    driver_typ: [""],
    dsph_area: "",
    dsph_city: "",
    blocklist_mark: "",
    remark: "",
    // <DriverLicense /> TABLE: DRIVER_LICENCE
    licn_typ: "",
    licn_name: "",
    licn_unit: "",
    licn_issue: "",
    licn_exp: "",
    licn_examine_date: "",
    licn_filename: "",
    licn_link: "",
    invalid: "N",
    invalid_remark: ""
  });
  const submitFormHandler = (data: I_driverInfo) => {
    console.log("data:", data);
    submitForm(data);
    console.log("called");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData: any = { ...insertData };
    newData[e.target.name] = e.target.value;
    setInsertData(newData);
  };

  // const asyncSubmitForm = async (data: any) => {
  //   setIsLoading(true);
  //   try {
  //     await insertDriverInfo(data);
  //     console.log("updated成功");
  //     router.push("/driver");
  //   } catch (e: any) {
  //     console.log(e);
  //   }
  //   setIsLoading(false);
  // };

  return (
    <FormSTY className="add-blocks" onSubmit={handleSubmit(submitFormHandler)}>
      <Pane className="left-blocks">
        <Basic currentUserInfo={currentUserInfo} />
        <DriverResume
          userId={userId}
          insertData={insertData}
          currentUserInfo={currentUserInfo}
          setInsertData={setInsertData}
          handleInputChange={handleInputChange}
          isDisabled={isDisabled}
        />
      </Pane>
      <Pane className="right-blocks">
        <DriverLicense
          currentUserInfo={currentUserInfo}
          insertData={insertData}
          setInsertData={setInsertData}
          handleInputChange={handleInputChange}
          isDisabled={isDisabled}
        />
        <LanguageAbility isDisabled={isDisabled} />
      </Pane>
    </FormSTY>
  );
}

export default DriverEditForm;
