import React from "react";
import { Checkbox } from "evergreen-ui";
import StyledCheckBox from "@components/CheckBox";
import { StepControlSTY } from "@components/FormCard/style";
import { BodySTY } from "./style";

interface Props {
  submitForm: (data: any) => void;
}
function RoleEditForm({ submitForm }: Props) {
  const selectAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      console.log("selectAllHandler");
    } else {
      console.log("removeAllHandler");
    }
  };
  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const submitData: { [key: string]: any } = {};
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}\n`);
      submitData[key] = value;
    }
    submitForm(submitData);
  };
  return (
    <BodySTY onSubmit={submitFormHandler}>
      <div className="role-form-header">
        <h3>車管</h3>
        <p>負責管理駕駛與維護車輛資產人員</p>
      </div>
      <div className="role-form-body">
        <div className="role-form-body-title">員工</div>
        <div className="role-form-body-content">
          <div className="role-form-body-row">
            <StyledCheckBox label="完整權限" onChange={selectAllHandler} />
          </div>
          <div className="role-form-body-row">
            <StyledCheckBox label="基本資料" name="基本資料" value="基本資料" />
            <Checkbox label="檢視" name="檢視" />
            <Checkbox label="建立" name="建立" />
            <Checkbox label="修改" name="修改" />
            <Checkbox label="刪除" name="刪除" />
            <Checkbox label="簽核 (勾選)" name="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" name="簽核 (簽名)" />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="基本資料" />
            <Checkbox label="檢視" />
            <Checkbox label="建立" />
            <Checkbox label="修改" />
            <Checkbox label="刪除" />
            <Checkbox label="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="基本資料" />
            <Checkbox label="檢視" />
            <Checkbox label="建立" />
            <Checkbox label="修改" />
            <Checkbox label="刪除" />
            <Checkbox label="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="基本資料" />
            <Checkbox label="檢視" />
            <Checkbox label="建立" />
            <Checkbox label="修改" />
            <Checkbox label="刪除" />
            <Checkbox label="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="基本資料" />
            <Checkbox label="檢視" />
            <Checkbox label="建立" />
            <Checkbox label="修改" />
            <Checkbox label="刪除" />
            <Checkbox label="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="基本資料" />
            <Checkbox label="檢視" />
            <Checkbox label="建立" />
            <Checkbox label="修改" />
            <Checkbox label="刪除" />
            <Checkbox label="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" />
          </div>
        </div>
      </div>

      <StepControlSTY>
        <button>Cancel</button>
        <div className="next-step">
          <button className="fill" type="submit">
            Save Role
          </button>
        </div>
      </StepControlSTY>
    </BodySTY>
  );
}

export default RoleEditForm;
