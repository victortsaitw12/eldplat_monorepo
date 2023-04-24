import React from "react";
import FormCard from "@components/FormCard";
import { TextInputField, SelectField } from "evergreen-ui";
import { StepControlSTY } from "@components/FormCard/style";

function Dimensions() {
  return (
    <div className="Dimensions">
      <FormCard formTitle="Dimensions">
        <div className="w50">
          <TextInputField label="Width" />
          <TextInputField label="Height" />
          <TextInputField label="Length" />
          <TextInputField label="Interior Volume" />
          <TextInputField label="Passenger Volume" />
          <TextInputField label="Cargo Volume" />
          <TextInputField label="Ground Clearance" />
          <TextInputField label="Bed Length" />
        </div>
      </FormCard>
      <FormCard formTitle="Weight">
        <div className="w50">
          <TextInputField label="Cub Weight" />
          <TextInputField label="Gross Vehicle Weight Rating" />
        </div>
      </FormCard>
      <FormCard formTitle="Performance">
        <div className="w50">
          <TextInputField label="Towing Capacity" />
          <TextInputField label="Max Payload" />
        </div>
      </FormCard>
      <FormCard formTitle="Fuel Economy">
        <div className="w33">
          <TextInputField label="EPA City" />
          <TextInputField label="EPA Hightway" />
          <TextInputField label="EPA Combined" />
        </div>
      </FormCard>
      <FormCard formTitle="Engine">
        <div className="w33">
          <TextInputField label="Engine Summary" />
          <TextInputField label="Engine Brand" />
          <SelectField label="Aspiration">
            <option value="" selected>
              Please select
            </option>
          </SelectField>

          <SelectField label="Block Type">
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <SelectField label="Bore">
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <SelectField label="Cam Type">
            <option value="" selected>
              Please select
            </option>
          </SelectField>

          <TextInputField label="Compression" />
          <TextInputField label="Cylinders" />
          <TextInputField label="Displacement" />
        </div>
        <div className="w50">
          <SelectField label="Fuel Indiuction">
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <TextInputField label="Max HP" />
        </div>
        <div className="w33">
          <TextInputField label="Max Torque" />
          <TextInputField label="Redline RPM" />
          <TextInputField label="Stroke" />
          <TextInputField label="Valves" />
        </div>
      </FormCard>
      <FormCard formTitle="Transmisson">
        <div className="w33">
          <TextInputField label="Transmission Summary" />
          <TextInputField label="Transmission Brand" />
          <TextInputField label="Transmission Type " />
          <TextInputField label="Transmission Gears" />
        </div>
      </FormCard>
      <FormCard formTitle="Wheels & Tires">
        <div className="w33">
          <SelectField label="Drive Type">
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <SelectField label="Brake System">
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <TextInputField label="Front Track Width" />
          <TextInputField label="Rear Track Width" />
          <TextInputField label="Wheelbase" />
          <TextInputField label="Front Wheel Diameter" />
          <TextInputField label="Rear Wheel Diameter" />
          <TextInputField label="Rear Alex" />
          <TextInputField label="Front Tire Type" />
          <TextInputField label="Front Tire PSI" />
          <TextInputField label="Rear Tire Type" />
          <TextInputField label="Rear Tire PSI" />
        </div>
      </FormCard>
      <FormCard formTitle="Fuel">
        <div className="w50">
          <TextInputField label="Fuel Type" />
          <TextInputField label="Fuel Quality" />
          <TextInputField label="Fuel Tank 1 Capacity" />
          <TextInputField label="Fuel Tank 2 Capacity" />
        </div>
      </FormCard>
      <FormCard formTitle="Oil">
        <div className="w100">
          <TextInputField label="Oil Capacity" />
        </div>
      </FormCard>
      {/* <StepControlSTY>
            <button>Cancel</button>
            <div className="next-step">
                <button className="bordered">Save & Add Another</button>
                <button className="fill">Save Vehicle</button>
            </div>
        </StepControlSTY> */}
    </div>
  );
}

export default Dimensions;
