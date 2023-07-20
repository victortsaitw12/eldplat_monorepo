import React from "react";
import { Checkbox } from "evergreen-ui";
import StyledCheckBox from "@components/CheckBox";
import { StepControlSTY } from "@components/FormCard/style";
import { BodySTY } from "./style";

interface Props {
  submitForm?: (data: any) => void;
}
function BusRoleEditForm({ submitForm }: Props) {
  // const selectAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.checked);
  //   if (e.target.checked) {
  //     console.log("selectAllHandler");
  //   } else {
  //     console.log("removeAllHandler");
  //   }
  // };
  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const submitData: { [key: string]: any } = {};
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}\n`);
      submitData[key] = value;
    }
    submitForm && submitForm(submitData);
  };
  return (
    <BodySTY onSubmit={submitFormHandler}>
      <div className="role-form-header">
        <h3>車管</h3>
        <p>負責管理駕駛與維護車輛資產人員</p>
      </div>
      <div className="role-form-body">
        <div className="role-form-body-title">駕駛</div>
        <div className="role-form-body-content">
          <div className="role-form-body-row">
            <Checkbox
              label="完整權限"
              name="完整權限"
              // onChange={selectAllHandler}
            />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="駕駛履歷" name="駕駛履歷" />
            <Checkbox label="檢視" name="檢視" />
            <Checkbox label="建立" name="建立" />
            <Checkbox label="修改" name="修改" />
            <Checkbox label="刪除" name="刪除" />
            <Checkbox label="簽核 (勾選)" name="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" name="簽核 (簽名)" />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="駕駛證照" name="駕駛證照" />
            <Checkbox label="檢視" name="檢視" />
            <Checkbox label="建立" name="建立" />
            <Checkbox label="修改" name="修改" />
            <Checkbox label="刪除" name="刪除" />
            <Checkbox label="簽核 (勾選)" name="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" name="簽核 (簽名)" />
          </div>
        </div>
      </div>
      <div className="role-form-body">
        <div className="role-form-body-title">車輛</div>
        <div className="role-form-body-content">
          <div className="role-form-body-row">
            <Checkbox
              label="完整權限"
              name="完整權限"
              // onChange={selectAllHandler}
            />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="駕駛履歷" name="駕駛履歷" />
            <Checkbox label="檢視" name="檢視" />
            <Checkbox label="建立" name="建立" />
            <Checkbox label="修改" name="修改" />
            <Checkbox label="刪除" name="刪除" />
            <Checkbox label="簽核 (勾選)" name="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" name="簽核 (簽名)" />
          </div>
        </div>
      </div>
      <div className="role-form-body">
        <div className="role-form-body-title">顧客</div>
        <div className="role-form-body-content">
          <div className="role-form-body-row">
            <Checkbox
              label="完整權限"
              name="完整權限"
              // onChange={selectAllHandler}
            />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="一般顧客資料" name="一般顧客資料" />
            <Checkbox label="檢視" name="檢視" />
            <Checkbox label="建立" name="建立" />
            <Checkbox label="修改" name="修改" />
            <Checkbox label="刪除" name="刪除" />
            <Checkbox label="簽核 (勾選)" name="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" name="簽核 (簽名)" />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="企業顧客資料" name="企業顧客資料" />
            <Checkbox label="檢視" name="檢視" />
            <Checkbox label="建立" name="建立" />
            <Checkbox label="修改" name="修改" />
            <Checkbox label="刪除" name="刪除" />
            <Checkbox label="簽核 (勾選)" name="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" name="簽核 (簽名)" />
          </div>
        </div>
      </div>
      <div className="role-form-body">
        <div className="role-form-body-title">供應商</div>
        <div className="role-form-body-content">
          <div className="role-form-body-row">
            <Checkbox
              label="完整權限"
              name="完整權限"
              // onChange={selectAllHandler}
            />
          </div>
          <div className="role-form-body-row">
            <Checkbox label="供應商資料" name="供應商資料" />
            <Checkbox label="檢視" name="檢視" />
            <Checkbox label="建立" name="建立" />
            <Checkbox label="修改" name="修改" />
            <Checkbox label="刪除" name="刪除" />
            <Checkbox label="簽核 (勾選)" name="簽核 (勾選)" />
            <Checkbox label="簽核 (簽名)" name="簽核 (簽名)" />
          </div>
        </div>
      </div>
    </BodySTY>
  );
}

export default BusRoleEditForm;
