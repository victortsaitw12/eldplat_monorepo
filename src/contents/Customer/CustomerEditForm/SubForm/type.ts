import { UseFormRegister, FieldErrors, Control } from "react-hook-form";
import { CustomerDataTypes } from "../customerDefaultData";
export interface SubFromProps {
  hide?: boolean;
  register: UseFormRegister<CustomerDataTypes>;
  errors: FieldErrors<CustomerDataTypes>;
  control: Control<CustomerDataTypes, any>;
  isDisabled?: boolean;
}

export interface CustomerContact {
  contact_name: string;
  contact_phone_code: string;
  contact_phone: string;
  contact_tel_code: string;
  contact_tel: string;
  contact_email: string;
  contact_sort: string;
}
