import { deepClone } from "@utils/deepClone";
import { UseFormRegister, FieldErrors, Control } from "react-hook-form";
export interface SubFromProps {
  hide?: boolean;
  register: UseFormRegister<CustomerDataTypes>;
  errors: FieldErrors<CustomerDataTypes>;
  control: Control<CustomerDataTypes, any>;
  isEdit?: boolean;
}

export interface CustomerDataTypes {
  customer_no: string;
  customer_name: string;
  customer_gui_no: string;
  customer_owner: string;
  customer_typ: string;
  type_name: string;
  labels: Array<{
    label_name: string;
  }>;
  address1: string;
  address2: string;
  customer_city: string;
  city_name: string;
  customer_area: string;
  area_name: string;
  customer_district_code: string;
  customer_country: string;
  country_name: string;
  customer_tel_code: string;
  customer_tel: string;
  customer_fax_code: string;
  customer_fax: string;
  customer_email: string;
  customer_url: string;
  customer_contact: Array<{
    contact_name: string;
    contact_phone_code: string;
    contact_phone: string;
    contact_tel_code: string;
    contact_tel: string;
    contact_email: string;
    contact_sort: string;
  }>;
}

const customerDefaultData: CustomerDataTypes = {
  customer_no: "",
  customer_name: "",
  customer_gui_no: "",
  customer_owner: "",
  customer_typ: "",
  type_name: "",
  labels: [],
  address1: "",
  address2: "",
  customer_city: "",
  city_name: "",
  customer_area: "",
  area_name: "",
  customer_district_code: "",
  customer_country: "",
  country_name: "",
  customer_tel_code: "",
  customer_tel: "",
  customer_fax_code: "",
  customer_fax: "",
  customer_email: "",
  customer_url: "",
  customer_contact: []
};

export function getCustomerDefaultData(inputQueryData?: {
  [key: string]: any;
}) {
  const resultObj = deepClone(customerDefaultData);
  if (!inputQueryData) return resultObj;
  for (const subFormKey in resultObj) {
    for (const fieldKey in resultObj[subFormKey]) {
      if (inputQueryData[fieldKey]) {
        resultObj[subFormKey][fieldKey] = String(inputQueryData[fieldKey]);
      }
    }
  }
  return resultObj;
}
