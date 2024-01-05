import { useState } from "react";
import Image from "next/image";
import { TextInputField, Checkbox, Label } from "evergreen-ui";
import { AvatarSTY } from "@components/Table/style";
import {
  SelectFieldSTY,
  TextInputFieldSTY,
  CheckBoxSTY,
  TextareaFieldSTY
} from "./VehicleReminderFormSTY";

type OptionsType = {
  label: string;
  value: number;
};

type SelectTypes = {
  label: string;
  notRequired?: boolean;
  disabled?: boolean;
  options: OptionsType[];
};

type Props = {
  title: string;
  selectOptions?: SelectTypes[];
};

function VehicleReminderForm({ title, selectOptions }: Props) {
  const [checked, setChecked] = useState<boolean>(true);
  return (
    <>
      <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN.</p>

      <div>
        <button>Cancel</button>
        <div className="next-step">
          <button className="bordered">Save & Add Another</button>
          <button className="fill">Save Vehicle</button>
        </div>
      </div>
    </>
  );
}

export default VehicleReminderForm;
