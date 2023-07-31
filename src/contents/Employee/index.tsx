import {
  I_Add_Employees_Type,
  I_Get_Employees_Type
} from "@typings/employee_type";
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
import LanguageAbility from "./LanguageAbility";
import { BodySTY } from "./style";
import LoadingSpinner from "@components/LoadingSpinner";

interface I_AddEmployee_Props {
  editData?: any | I_Get_Employees_Type;
  insertData: I_Get_Employees_Type;
  setInsertData: (data: any) => void;
}

function AddEmployee({
  editData,
  insertData,
  setInsertData
}: I_AddEmployee_Props) {
  // useEffect(() => {
  //   const updatedData = { ...editData };
  //   delete updatedData["groups"];
  //   updatedData["group_no"] = editData?.groups?.map(
  //     (v: { group_no: any }) => v.group_no
  //   );
  //   setInsertData(updatedData);
  // }, [editData]);

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = { ...insertData };
    const targetName = e.target.name as
      | keyof (I_Add_Employees_Type | I_Get_Employees_Type);
    let targetValue = e.target.value as any;

    if (e.target.type === "date") targetValue ||= null;
    //  targetValue ||= null 的意思就等於 targetValue = targetValue || null

    newData[targetName] = targetValue;
    setInsertData(newData);
  };

  // 打API還沒取到資料前先展示spinner
  if (!insertData) return <LoadingSpinner />;

  console.log("2️⃣insertData", insertData);

  return (
    <BodySTY>
      {/* 新增表格區塊們 */}
      <Pane className="add-blocks">
        <Pane className="left-blocks">
          <Basic
            handleEmployeeChange={handleEmployeeChange}
            insertData={insertData}
            setInsertData={setInsertData}
          />
          <Charactor
            handleEmployeeChange={handleEmployeeChange}
            insertData={insertData}
            setInsertData={setInsertData}
            // editData={editData}
          />
          {/*新版健康記錄改成在頁簽裡面*/}
          {/* <HealthFirst
            handleEmployeeChange={handleEmployeeChange}
            insertData={insertData}
            setInsertData={setInsertData}
          /> */}
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
