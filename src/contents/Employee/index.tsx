import { I_Add_Employees_Type } from "@typings/employee_type";
import {
  Pane,
  Text,
  Button,
  FloppyDiskIcon,
  IconButton,
  FullscreenIcon,
  majorScale,
  SmallCrossIcon
} from "evergreen-ui";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Basic from "./Basic";
import Charactor from "./Charactor";
import Contact from "./Contact";
import EmployeeInfo from "./EmployeeInfo";
import HealthFirst from "./HealthFirst";
import HealthSecond from "./HealthSecond";
import LanguageAbility from "./LanguageAbility";
import { BodySTY } from "./style";
import LoadingSpinner from "@components/LoadingSpinner";
// import { useForm } from "react-hook-form";

interface I_AddEmployee_Props {
  // setAddEmployeeActive: (t: any) => void;
  submitForm: (data: any) => void;
  onCancel: () => void;
  editData?: any | I_Add_Employees_Type;
}

function AddEmployee({
  // setAddEmployeeActive,
  submitForm,
  editData
}: I_AddEmployee_Props) {
  const [countryNum, setCountryNum] = useState<string>("(+886)");
  const [insertData, setInsertData] = useState<I_Add_Employees_Type>(
    {
      user_name: "",
      user_first_name: "",
      user_english_name: "",
      user_identity: "",
      user_country: "TW",
      user_birthday: "",
      user_sex: "1",
      user_photo_link: "",
      group_no: [],
      user_email: "",
      user_phone: "",
      user_address: "",
      city: "01",
      district: "01",
      street: "01",
      lane: "01",
      emgc_phone: "",
      emgc_contact: "",
      staff_no: "",
      job_title: "01",
      department: "01",
      group: "01",
      arrive_date: "",
      license_name: [],
      languags: [
        {
          languag: "EN",
          listen: "3",
          read: "2",
          speak: "1",
          write: "1"
        }
      ],
      healths: [
        {
          heal_date: "",
          heal_typ: "01",
          heal_agency: "",
          heal_status: "01",
          heal_examine_date: "",
          heal_filename: "",
          heal_link: "",
          invalid: "N",
          invalid_remark: ""
        }
      ]
    } || editData
  );

  useEffect(() => {
    editData && setInsertData(editData);
  }, [editData]);

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...insertData };
    const targetName = e.target.name as keyof I_Add_Employees_Type;
    const targetValue = e.target.value as any;
    newData[targetName] = targetValue;
    // newData[e.target.name]=e.target.value
    setInsertData(newData);
  };

  const handleSaveAll = () => {
    console.log("insertData----------------", insertData);
    submitForm(insertData);
  };

  // 打API還沒取到資料前先展示spinner
  if (!insertData) return <LoadingSpinner />;

  console.log("🈸insertData", insertData);

  return (
    <BodySTY>
      <Pane display="flex" justifyContent="space-between" className="title-bar">
        <Text className="title-label">新增員工資料</Text>
        <Pane className="right-function">
          <Button
            iconBefore={FloppyDiskIcon}
            className="save"
            onClick={handleSaveAll}
          >
            全部儲存
          </Button>
          <IconButton icon={FullscreenIcon} />
          <IconButton
            icon={SmallCrossIcon}
            marginRight={majorScale(1)}
            onClick={() => {
              Router.push("/employee");
            }}
          />
        </Pane>
      </Pane>

      {/* 新增表格區塊們 */}
      <Pane className="add-blocks">
        <Pane className="left-blocks">
          <Basic
            handleEmployeeChange={handleEmployeeChange}
            insertData={insertData}
            setInsertData={setInsertData}
            setCountryNum={setCountryNum}
          />
          <Charactor
            handleEmployeeChange={handleEmployeeChange}
            insertData={insertData}
            setInsertData={setInsertData}
            editData={editData}
          />
          <HealthFirst
            handleEmployeeChange={handleEmployeeChange}
            insertData={insertData}
            setInsertData={setInsertData}
          />
          <HealthSecond />
        </Pane>
        <Pane className="right-blocks">
          <Contact
            handleEmployeeChange={handleEmployeeChange}
            insertData={insertData}
            setInsertData={setInsertData}
          />
          <EmployeeInfo
            handleEmployeeChange={handleEmployeeChange}
            insertData={insertData}
            setInsertData={setInsertData}
            editData={editData}
          />
          <LanguageAbility
            insertData={insertData}
            setInsertData={setInsertData}
          />
        </Pane>
      </Pane>
    </BodySTY>
  );
}

export default AddEmployee;
