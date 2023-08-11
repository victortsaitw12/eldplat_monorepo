import { I_Add_Employees_Type } from "@typings/employee_type";
import dayjs from "dayjs";
import {
  Button,
  Checkbox,
  Heading,
  Pane,
  SelectField,
  Text,
  Textarea,
  TextInput,
  UploadIcon
} from "evergreen-ui";
import React, { useState, useEffect } from "react";
// import { healthCate_DATA, healthResult_DATA } from "./data";
import { BodySTY } from "./style";

interface I_AddHealthProps {
  dataIndex?: number;
  defaultData: any;
  setShowHealthModal: (t: any) => void;
  userName: string;
  updateHealthHandler: (healthPayload: any) => void;
}

function EditHealth({
  userName,
  dataIndex,
  defaultData,
  setShowHealthModal,
  updateHealthHandler
}: I_AddHealthProps) {
  const [healthData, setHealthData] = useState({
    heal_typ: "01",
    heal_agency: "",
    heal_status: "01",
    heal_filename: "",
    invalid: "N",
    invalid_remark: "",
    ...defaultData,
    heal_date:
      (dayjs(defaultData?.heal_date || null).isValid() &&
        dayjs(defaultData?.heal_date || null).format("YYYY/MM/DD")) ||
      "",
    heal_examine_date:
      (dayjs(defaultData?.heal_examine_date || null).isValid() &&
        dayjs(defaultData?.heal_examine_date || null).format("YYYY/MM/DD")) ||
      ""
  });
  // const [healthCateSelected, setHealthCateSelected] = useState<any>(null); // 分類下拉選單
  // const [healthResultSelected, setHealthResultSelected] = useState<any>(null); // 結果下拉選單
  const [reportChecked, setReportChecked] = useState<boolean>(false); // 報告失效勾選

  //   const [files, setFiles] = useState<any[]>([]);
  //   const handleChange = useCallback((files: any[]) => setFiles([files[0]]), []);
  //   const handleRemove = useCallback(() => {
  //     setFiles([]);
  //   }, []);

  const handleUploadReport = (e: any) => {
    e.preventDefault();
  };

  // 失效checkbox邏輯
  const handleInvalidChange = () => {
    const newData = { ...healthData };
    if (reportChecked) {
      newData.invalid = "N";
    } else {
      newData.invalid = "Y";
    }
    setHealthData(newData);
  };

  const handleHealthChange = (e: any) => {
    const newData: any = { ...healthData };
    newData[e.target.name] = e.target.value;
    setHealthData(newData);
  };

  // 按下確定健檢報告後
  // const handleSubmitHealth = (e: any) => {
  //   const newData = { ...healthData };
  //   const newInsertData = { ...insertData };

  //   if (dataIndex === null) {
  //     //新增
  //     newInsertData["healths"] = newInsertData["healths"].concat([newData]);
  //   } else if (dataIndex !== null && dataIndex !== undefined) {
  //     //編輯已經有的
  //     newInsertData["healths"][dataIndex] = newData;
  //   }
  //   // newData[e.target.name] = e.target.value;
  //   // setHealthData(newData);

  //   // const allData = { ...newInsertData };
  //   // Object.keys(allData).map((item) => {
  //   //   Object.keys(newData).map((value) => {
  //   //     if (item === value) allData[item] = newData[item];
  //   //   });
  //   // });
  //   setInsertData(newInsertData);
  //   setShowHealthModal(null);
  // };

  //when healthData change
  useEffect(() => {
    console.log("💕💕💕💕💕", healthData);
  }, [healthData]);
  return (
    <BodySTY>
      <Heading style={{ margin: "1.25rem 0" }}>{userName}</Heading>
      <form>
        <Pane className="input-line">
          <Text>體檢日期</Text>
          <Pane>
            <TextInput
              type="date"
              name="heal_date"
              value={healthData.heal_date}
              onChange={handleHealthChange}
            />
          </Pane>
        </Pane>
        <Pane
          className="input-line"
          onClick={(e: any) => {
            e.preventDefault();
          }}
        >
          <Text>體檢分類</Text>
          <Pane>
            <SelectField
              label=""
              name="heal_typ"
              value={healthData.heal_typ}
              onChange={handleHealthChange}
            >
              <option value="01">一般體格檢查</option>
              <option value="02">特殊健檢</option>
              <option value="03">特殊粉塵健檢</option>
              <option value="04">特殊粉塵健檢</option>
            </SelectField>
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text>體檢機構</Text>
          <Pane>
            <TextInput
              name="heal_agency"
              value={healthData.heal_agency}
              onChange={handleHealthChange}
            />
          </Pane>
        </Pane>
        <Pane
          className="input-line"
          onClick={(e: any) => {
            e.preventDefault();
          }}
        >
          <Text>體檢結果</Text>
          <Pane>
            <SelectField
              label=""
              name="heal_status"
              value={healthData.heal_status}
              onChange={handleHealthChange}
            >
              <option value="01">正常</option>
              <option value="02">異常</option>
            </SelectField>
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text>下次體檢日期</Text>
          <Pane>
            <TextInput
              type="date"
              name="heal_examine_date"
              value={healthData.heal_examine_date}
              onChange={handleHealthChange}
            />
          </Pane>
        </Pane>
        <Pane
          className="input-line health-upload"
          onClick={(e: any) => {
            handleUploadReport(e);
          }}
        >
          <Text>體檢報告</Text>
          <Pane>
            <Button iconBefore={UploadIcon}>上傳報告</Button>
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text>體檢報告是否失效</Text>
          <Pane>
            <Checkbox
              label="失效"
              name="invalid"
              checked={reportChecked}
              onChange={(e) => {
                setReportChecked(e.target.checked);
                handleInvalidChange();
              }}
            />
          </Pane>
        </Pane>
        <Pane className="input-line">
          <Text>體檢報告失效備註</Text>
          <Pane>
            <Textarea
              name="invalid_remark"
              value={healthData.invalid_remark}
              onChange={handleHealthChange}
            />
          </Pane>
        </Pane>
        {/* 分隔線在此 */}
        <Pane borderTop="0.0625rem solid #D5E2F1" />
        <Pane className="buttons" onClick={(e: any) => e.preventDefault()}>
          <Button
            className="cancel"
            marginRight={16}
            appearance="minimal"
            onClick={() => {
              setShowHealthModal(null);
            }}
          >
            取消
          </Button>
          <Button
            className="confirm"
            marginRight={16}
            appearance="minimal"
            onClick={(e: any) => {
              console.log("確定");
              console.log("healthData", healthData);
              updateHealthHandler(healthData);
            }}
          >
            確定
          </Button>
        </Pane>
      </form>
    </BodySTY>
  );
}

export default EditHealth;
