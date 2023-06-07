import { UseFormRegister, FieldErrors, Control } from "react-hook-form";
import { BusDataTypes } from "../../bus.type";
export interface SubFromProps {
  hide?: boolean;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isDisabled?: boolean;
}