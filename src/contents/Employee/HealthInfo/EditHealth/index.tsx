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
import { BodySTY } from "./style";
import { getHealthDataByHealthId } from "@services/employee/healthAPI";
import { dashDate } from "@utils/convertDate";
import LoadingSpinner from "@components/LoadingSpinner";
interface I_AddHealthProps {
  healthNo?: string;
  setShowHealthModal: (t: any) => void;
  userName: string;
  updateHealthHandler: (healthPayload: any) => void;
}

function EditHealth({
  healthNo,
  userName,
  setShowHealthModal,
  updateHealthHandler
}: I_AddHealthProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [healthData, setHealthData] = useState({
    heal_typ: "01",
    heal_agency: "",
    heal_status: "01",
    heal_filename: "",
    invalid: "N",
    invalid_remark: "",
    heal_date: "",
    heal_examine_date: ""
  });

  const handleUploadReport = (e: any) => {
    e.preventDefault();
  };

  const handleHealthChange = (e: any) => {
    const newData: any = { ...healthData };
    newData[e.target.name] = e.target.value;
    setHealthData(newData);
  };

  const handleInvalidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData: any = { ...healthData };
    newData[e.target.name] = e.target.checked ? "Y" : "N";
    setHealthData(newData);
  };
  //when healthData change
  useEffect(() => {
    console.log("💕💕💕💕💕", healthData);
    if (healthNo) {
      setIsLoading(true);
      getHealthDataByHealthId(healthNo)
        .then((data) => {
          console.log("res", data);
          const newData = {
            health_no: healthNo,
            heal_typ: data.heal_typ,
            heal_agency: data.heal_agency,
            heal_status: data.heal_status,
            heal_filename: data.heal_filename,
            invalid: data.invalid,
            invalid_remark: data.invalid_remark,
            heal_date: dashDate(data.heal_date),
            heal_examine_date: dashDate(data.heal_examine_date)
          };
          console.log("newData", newData);
          setHealthData(newData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("get healtdata error: ", error);
        });
    }
  }, []);
  return (
    <BodySTY>
      <Heading style={{ margin: "1.25rem 0" }}>{userName}</Heading>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
                checked={healthData.invalid === "Y" ? true : false}
                onChange={handleInvalidChange}
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
      )}
    </BodySTY>
  );
}

export default EditHealth;
