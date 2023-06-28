import React, { useState } from "react";
import FormCard from "@components/FormCard";
import {
  TextInputField,
  Pane,
  Button,
  FilePicker,
  SelectField
} from "evergreen-ui";
import { FilePickBtnSTY } from "@components/FormCard/style";

function Indentification() {
  const [vehicleNameValue, setVehicleNameValue] = useState("");
  const [VINValue, setVINValue] = useState("");

  const handleChangevehicleNameValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVehicleNameValue(e.target.value);
  };

  const handleChangeVINValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVINValue(e.target.value);
  };

  return (
    <>
      <FormCard formTitle="Identification">
        <div className="w100">
          <TextInputField
            label="Vehicle Name"
            onChange={handleChangevehicleNameValue}
            required
            isInvalid={true && !vehicleNameValue}
            hint={
              <div className="hintText">
                Enter a nickname to distinguish this vehicle in Fleetio.{" "}
                <a href="./">Learn More</a>
              </div>
            }
            validationMessage={!vehicleNameValue && "can't be blank"}
          />
          <Pane display="flex" gap="20px">
            <TextInputField
              width="100%"
              label="VIN/SN"
              onChange={handleChangeVINValue}
              hint={
                <div className="hintText">
                  Vehicle Identification or Serial Number.{" "}
                  <a href="./">Learn More</a>
                </div>
              }
            />
            <Button disabled={!VINValue} marginTop="25px">
              <span />
              Decode VIN
            </Button>
          </Pane>

          <TextInputField label="License Plate" />
          <SelectField required label="Type" hint="Categorize this vehicle">
            <option value="car" selected>
              car
            </option>
          </SelectField>
          <TextInputField label="Year" hint="e.g. 1999,2012,etc" />
          <SelectField label="Make" hint="e.g. Toyota, GMC, Chevolet etc">
            <option value="Toyota">Toyota</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="BMW">BMW</option>
            <option value="Tesla">Tesla</option>
          </SelectField>
          <SelectField label="Model" hint="e.g. 4Runner, Yukon Sliverado, etc.">
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <TextInputField label="Trim" hint="Categorize this vehicle" />
          <TextInputField label="Registration State/Province" />
          <SelectField label="Labels">
            <option value="北區">北區</option>
            <option value="中區">中區</option>
            <option value="南區">南區</option>
          </SelectField>
          <FilePickBtnSTY>
            <label className="inputFileTitle">Photo</label>
            <FilePicker name="Pick File" multiple />
            <p className="hintText">No file selected</p>
          </FilePickBtnSTY>
        </div>
      </FormCard>

      <FormCard formTitle="Classfication">
        <div className="w100">
          <SelectField
            label="status"
            hint={
              <div className="hintText">
                Vehicle Status <a href="./">Learn More</a>
              </div>
            }
          >
            <option value="Active" selected>
              Active
            </option>
          </SelectField>
          <SelectField
            label="Group"
            hint={
              <div className="hintText">
                Vehicle Group <a href="./">Learn More</a>
              </div>
            }
          >
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <SelectField label="Operator">
            <option value="123123" selected>
              李四(123123)
            </option>
          </SelectField>
          <SelectField label="OwnerShip">
            <option value="Owned" selected>
              Owned
            </option>
          </SelectField>
        </div>
      </FormCard>

      <FormCard formTitle="Additional Details">
        <div className="w100">
          <TextInputField label="Color" />
          <SelectField
            label="Body Type"
            hint="e.g. Convertible Coupe, Pickup, Sedan, etc."
          >
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <SelectField
            label="Body Subtype"
            hint="e.g. EXtended Cab, Crew Cab, etc."
          >
            <option value="" selected>
              Please select
            </option>
          </SelectField>
          <TextInputField label="MSRP" placeholder="$" />
          <SelectField label="OwnerShip">
            <option value="" selected>
              Please select
            </option>
          </SelectField>
        </div>
      </FormCard>
    </>
  );
}

export default Indentification;
