import React, { useState } from "react";
import {
  Pane,
  TextInputField,
  SelectField,
  TextareaField,
  Checkbox
} from "evergreen-ui";
import FormCard from "@components/FormCard";
import RadioGroupRow, { RadioField } from "@components/RadioGroupRow";

interface Props {
  hide?: boolean;
}
function Financial({ hide }: Props) {
  const [financingTab, setFinancingTab] = useState("3");

  const handleFinancingTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinancingTab(e.target.value);
  };
  return (
    <Pane marginX="20px" display={hide ? "none" : "block"}>
      <FormCard formTitle="購買詳情">
        <div className="w100">
          <TextInputField label="採購供應商" name="vendor_no" />
        </div>
        <div className="w50">
          <TextInputField label="購買日期" name="purchase_date" type="date" />
          <TextInputField
            label="購買價格"
            name="purchase_price"
            type="number"
          />
        </div>

        <div className="w100">
          <TextInputField label="里程表" name="odometer" />
        </div>

        <div className="w100">
          <TextareaField label="備註" name="notes" />
        </div>
      </FormCard>

      <FormCard formTitle="保固">
        <div className="w50">
          <TextInputField
            label="截止日期"
            name="warranty_expiration_date"
            hint="保固期限的最後一天"
            type="date"
          />
          <TextInputField
            label="最大里程數值"
            name="warranty_max_meter"
            type="number"
            hint="保固期限允許的最大里程數"
          />
        </div>
      </FormCard>

      <FormCard formTitle="貸款/租賃">
        <div className="w100">
          <RadioGroupRow>
            <RadioField
              label="貸款"
              name="loan-lease"
              hint="此車輛與貸款相關"
              value="1"
              checked={financingTab === "1"}
              onChange={handleFinancingTabChange}
            />
            <RadioField
              label="租賃"
              name="loan-lease"
              hint="此車輛正在租賃中"
              value="2"
              checked={financingTab === "2"}
              onChange={handleFinancingTabChange}
            />
            <RadioField
              label="無融資"
              name="loan-lease"
              hint="此車輛未被融資"
              value="3"
              checked={financingTab === "3"}
              onChange={handleFinancingTabChange}
            />
          </RadioGroupRow>
        </div>

        {financingTab === "1" && (
          <>
            <div className="w100">
              <SelectField label="採購供應商">
                <option value="0">Please Select</option>
              </SelectField>
            </div>

            <div className="w50">
              <TextInputField
                type="date"
                label="貸款日期"
                hint="簽訂貸款協議日期"
              />
              <TextInputField
                label="貸款金額"
                hint="貸款開始時的本金總額"
                placeholder="$"
              />
            </div>

            <div className="w50">
              <TextInputField label="年度百分比率 (APR)" />
              <TextInputField
                label="首期付款"
                hint="貸款開始時的總首期付款金額"
                placeholder="$"
              />
            </div>

            <div className="w50">
              <TextInputField type="date" label="首次付款日期" />
              <TextInputField
                label="月付金額"
                hint="每月支付的總金額，包括任何稅費"
                placeholder="$"
              />
            </div>

            <div className="w50">
              <TextInputField
                label="付款次數"
                hint="貸款完全償還前的付款次數（不包括首期付款）"
              />
              <TextInputField type="date" label="貸款結束日期" />
            </div>

            <div className="w100">
              <TextInputField label="帳號" hint="用於識別與貸款人之間的貸款" />
            </div>

            <div className="w100">
              <TextareaField label="備註" />
            </div>

            <div className="w100">
              <Checkbox label="產生費用" />
            </div>
          </>
        )}
        {financingTab === "2" && (
          <>
            <div className="w100">
              <SelectField label="供應商">
                <option value="0">Please Select</option>
              </SelectField>
            </div>

            <div className="w50">
              <TextInputField
                type="date"
                label="租賃日期"
                hint="簽訂租賃協議的日期"
              />
              <TextInputField
                label="資本化成本"
                hint="車輛總成本，包括任何稅費"
                placeholder="$"
              />
            </div>

            <div className="w50">
              <TextInputField
                label="首期付款"
                hint="簽約時應付的金額，或上一輛車的折抵價值"
                placeholder="$"
              />
            </div>

            <div className="w50">
              <TextInputField type="date" label="首次付款日期" />
              <TextInputField
                label="月付金額"
                hint="每月支付的總金額，包括任何稅費"
                placeholder="$"
              />
            </div>

            <div className="w50">
              <TextInputField
                label="付款次數"
                hint="貸款完全償還前的付款次數（不包括首期付款）"
              />
              <TextInputField type="date" label="租賃結束日期" />
            </div>

            <div className="w100">
              <TextInputField label="殘值" hint="租賃結束時車輛剩餘的價值" />
            </div>

            <div className="w50">
              <TextInputField
                label="契約里程限制"
                hint="車輛可以行駛的里程數，超過此里程數將產生額外費用"
              />
              <TextInputField
                label="里程超出費用"
                hint="每超出里程限制一英里所收取的費用"
                placeholder="$"
              />
            </div>

            <div className="w100">
              <TextInputField label="殘值" hint="用於識別其他系統中的租賃" />
            </div>

            <div className="w100">
              <TextareaField label="備註" />
            </div>

            <div className="w100">
              <Checkbox label="產生費用" />
            </div>
          </>
        )}
      </FormCard>
    </Pane>
  );
}

export default Financial;
