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
import { DRIVER_TYPE } from "@typings/driver_type";
import Basic from "./SubForm/Basic";
import DriverResume from "./SubForm/DriverResume";
import DriverLicense from "./SubForm/DriverLicense";
import LanguageAbility from "./SubForm/LanguageAbility";
import HealthFirst from "./SubForm/HealthFirst";
//
interface Props {
  submitForm: (data: any) => void;
  onCancel?: () => void;
  currentUserInfo: any;
  userId: string;
}
function DriverEditForm({ submitForm, userId, currentUserInfo }: Props) {
  const [insertData, setInsertData] = useState<DRIVER_TYPE>({
    // <DriverResume />, TABLE: DRIVER
    user_no: userId,
    driver_no: "",
    license_no: "",
    license_area: "",
    license_lvl: "",
    driver_seniority: "0",
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
  const submitFormHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("insertData", insertData);
    submitForm(insertData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData: any = { ...insertData };
    newData[e.target.name] = e.target.value;
    setInsertData(newData);
  };

  const handleMultiSelect = (key: string, updatedValue: any[]) => {
    const newData: any = { ...insertData };
    const updatedStringArr = updatedValue.map((item: any) => item.value);
    newData[key] = updatedStringArr;
    setInsertData(newData);
  };
  return (
    <>
      <Pane display="flex" justifyContent="space-between" className="title-bar">
        <Text className="title-label">駕駛資訊</Text>
        <Pane className="right-function">
          <Button
            iconBefore={FloppyDiskIcon}
            className="save"
            onClick={submitFormHandler}
          >
            全部儲存
          </Button>
          <IconButton icon={FullscreenIcon} />
          <IconButton icon={SmallCrossIcon} />
        </Pane>
      </Pane>
      <Pane className="add-blocks">
        <Pane className="left-blocks">
          <Basic currentUserInfo={currentUserInfo} />
          <DriverResume
            insertData={insertData}
            currentUserInfo={currentUserInfo}
            setInsertData={setInsertData}
            handleInputChange={handleInputChange}
            handleMultiSelect={handleMultiSelect}
          />
        </Pane>
        <Pane className="right-blocks">
          <DriverLicense
            insertData={insertData}
            setInsertData={setInsertData}
            handleInputChange={handleInputChange}
          />
          <LanguageAbility />
          <HealthFirst
            setInsertData={(data) => {
              console.log(data);
            }}
            handleEmployeeChange={(e) => {
              console.log(e);
            }}
          />
        </Pane>
      </Pane>
    </>
  );
}

export default DriverEditForm;
