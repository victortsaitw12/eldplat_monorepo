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

function Financial() {
  const [financingTab, setFinancingTab] = useState("0");

  const handleFinancingTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinancingTab(e.target.value);
  };
  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    for (const [key, value] of formData) {
      console.log(`${key}: ${value}\n`);
    }
  };
  return (
    <Pane marginX="20px">
      <form onSubmit={submitFormHandler}>
        <FormCard formTitle="Purchase Details">
          <div className="w100">
            <SelectField label="Purchase Vendor" name="purchase-vendor">
              <option value="0">Choice 1</option>
              <option value="1">Choice 2</option>
              <option value="2">Choice 3</option>
            </SelectField>
          </div>

          <div className="w50">
            <TextInputField label="Purchase Price" type="date" />
            <TextInputField label="Purchase Price" />
          </div>

          <div className="w100">
            <TextInputField label="Odometer" />
          </div>

          <div className="w100">
            <TextareaField label="Notes" />
          </div>
        </FormCard>

        <FormCard formTitle="Warranty">
          <div className="w50">
            <TextInputField
              label="Expiration Date"
              hint="Last day of warranty coverage"
              type="date"
            />
            <TextInputField
              label="Max Meter Value"
              hint="Maximum odometer allowed by warranty coverage"
            />
          </div>
        </FormCard>

        <FormCard formTitle="Loan/Lease">
          <div className="w100">
            <RadioGroupRow>
              <RadioField
                name="in-service"
                label="Loan"
                hint="This vehicle is associated with a loan"
                value="0"
                checked={financingTab === "0"}
                onChange={handleFinancingTabChange}
              />
              <RadioField
                name="in-service"
                label="Lease"
                hint="This vehicle is being leased"
                value="1"
                checked={financingTab === "1"}
                onChange={handleFinancingTabChange}
              />
              <RadioField
                name="in-service"
                label="No Financing"
                hint="This vehicle is not being financed"
                value="2"
                checked={financingTab === "2"}
                onChange={handleFinancingTabChange}
              />
            </RadioGroupRow>
          </div>

          {financingTab === "0" && (
            <>
              <div className="w100">
                <SelectField label="Purchase Vendor">
                  <option value="0">Please Select</option>
                </SelectField>
              </div>

              <div className="w50">
                <TextInputField
                  type="date"
                  label="Date of Loan"
                  hint="Date the loan agreement was signed"
                />
                <TextInputField
                  label="Amount of Loan"
                  hint="Total principal amount at the start of the loan"
                  placeholder="$"
                />
              </div>

              <div className="w50">
                <TextInputField label="Annual Percentage Rate (APR)" />
                <TextInputField
                  label="Down Payment"
                  hint="Total down payment made at the start of the loan"
                  placeholder="$"
                />
              </div>

              <div className="w50">
                <TextInputField type="date" label="First Payment Date" />
                <TextInputField
                  label="Monthly Payment"
                  hint="Total amount that will be paid each month including any taxes and fees"
                  placeholder="$"
                />
              </div>

              <div className="w50">
                <TextInputField
                  label="Number of Payments"
                  hint="Number of payments until the loan is paid off (Does not include the down payment)"
                />
                <TextInputField type="date" label="Loan end Date" />
              </div>

              <div className="w100">
                <TextInputField
                  label="Account Numbers"
                  hint="Used to identify the loan with the lender"
                />
              </div>

              <div className="w100">
                <TextareaField label="Notes" />
              </div>

              <div className="w100">
                <Checkbox label="Generate Expenses" />
              </div>
            </>
          )}
          {financingTab === "1" && (
            <>
              <div className="w100">
                <SelectField label="Vendor">
                  <option value="0">Please Select</option>
                </SelectField>
              </div>

              <div className="w50">
                <TextInputField
                  type="date"
                  label="Date of Lease"
                  hint="Date the loan agreement was signed"
                />
                <TextInputField
                  label="Capitalized Cost"
                  hint="Total cost of vehicle including any taxes and fees"
                  placeholder="$"
                />
              </div>

              <div className="w50">
                <TextInputField
                  label="Down Payment"
                  hint="Amount of money due at signing or the trade-in amount from the last vehicle"
                  placeholder="$"
                />
              </div>

              <div className="w50">
                <TextInputField type="date" label="First Payment Date" />
                <TextInputField
                  label="Monthly Payment"
                  hint="Total amount that will be paid each month including any taxes and fees"
                  placeholder="$"
                />
              </div>

              <div className="w50">
                <TextInputField
                  label="Number of Payments"
                  hint="Number of payments until the loan is paid off (Does not include the down payment)"
                />
                <TextInputField type="date" label="Lease end Date" />
              </div>

              <div className="w100">
                <TextInputField
                  label="Residual Value"
                  hint="Value of the vehicle at the end of the lease"
                />
              </div>

              <div className="w50">
                <TextInputField
                  label="Contract Mileage Cap"
                  hint="Number of miles this vehicle can travel before incurring additional charges"
                />
                <TextInputField
                  label="Excess Mileage Charge"
                  hint="Amount charged for each mile over the mileage cap"
                  placeholder="$"
                />
              </div>

              <div className="w100">
                <TextInputField
                  label="Residual Value"
                  hint="Used to identify the lease in other systems"
                />
              </div>

              <div className="w100">
                <TextareaField label="Notes" />
              </div>

              <div className="w100">
                <Checkbox label="Generate Expenses" />
              </div>
            </>
          )}
        </FormCard>
      </form>
    </Pane>
  );
}

export default Financial;
