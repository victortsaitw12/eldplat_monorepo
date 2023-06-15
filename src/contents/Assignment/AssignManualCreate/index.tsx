import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
//@sevices
// import { createVendor } from "@services/vendor/createVendor";
import { createCustomer } from "@services/customer/createCustomer";
import FiledInput from "./FieldInput";
import {
  PlusIcon,
  Text,
  SelectField,
  Select,
  Button,
  Pane,
  DocumentShareIcon,
  Paragraph,
  FloppyDiskIcon
} from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import FlexWrapper from "@layout/FlexWrapper";

//@components
// import { I_contactData } from "../vendor.type";
export interface CreateCustomerPayload {
  customer_name: string;
  customer_gui_no: string;
  customer_owner: string;
  address1: string;
  address2: string;
  customer_city: string;
  customer_area: string;
  customer_district_code: string;
  customer_country: string;
  customer_tel_code: string;
  customer_tel: string;
  contact_name: string;
  contact_phone_code: string;
  contact_phone: string;
  contact_tel_code: string;
  contact_tel: string;
  customer_typ: string;
}

// default value
const defaultValues: CreateCustomerPayload = {
  customer_name: "",
  customer_gui_no: "",
  customer_owner: "",
  address1: "",
  address2: "",
  customer_city: "",
  customer_area: "",
  customer_district_code: "",
  customer_country: "",
  customer_tel_code: "",
  customer_tel: "",
  contact_name: "",
  contact_phone_code: "",
  contact_phone: "",
  contact_tel_code: "",
  contact_tel: "",
  customer_typ: ""
};

interface I_AssignManualCreateProps {
  data?: any;
  reloadData?: () => void;
}

function AssignManualCreate({ reloadData }: I_AssignManualCreateProps) {
  const { register, handleSubmit, control, reset } =
    useForm<CreateCustomerPayload>({
      defaultValues
    });
  const [loading, setLoading] = useState(false);
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await createCustomer(data);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
    reloadData && reloadData();
    reset();
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        asyncSubmitForm({
          ...data
        });
      })}
    >
      {/* 超連結按鈕 */}
      <Pane display="flex" justifyContent="center">
        <Button iconBefore={DocumentShareIcon} marginRight={12}>
          車輛分配
        </Button>
        <Button iconBefore={DocumentShareIcon}>駕駛排班</Button>
      </Pane>

      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Paragraph>(訂單單號)</Paragraph>
        <Paragraph>(訂單單號)</Paragraph>
        <Pane>
          <Text>(用車起始日期)</Text>
          <Text marginX={10}>—</Text>
          <Text>(用車截止日期)</Text>
        </Pane>
      </Pane>

      {/* 全部都填好之後的儲存按鈕 */}
      <IconLeft text={"儲存派單"} type="submit">
        <FloppyDiskIcon size={14} />
      </IconLeft>

      {/* 派車派工小表格 */}
      <Pane className="assign-table">
        <Pane borderBottom="1px solid #D5E2F1" paddingY={6} paddingX={12}>
          2022/11/23 週三
        </Pane>
        <Pane display="flex">
          <Pane
            borderRight="1px solid #D5E2F1"
            marginRight={10}
            padding={10}
            display="flex"
            alignItems="center"
          >
            第01車
          </Pane>
          <Pane>
            <Button display="flex" flexWrap="wrap" marginY={4}>
              派車
            </Button>
            <Button marginBottom={4}>派工</Button>
          </Pane>
        </Pane>
      </Pane>
    </FormSTY>
  );
}

export default AssignManualCreate;

{
  /* <FiledInput
        label="名稱"
        controlProps={{
          name: "customer_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
      />
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>負責人
          </div>
        }
        {...register("customer_owner", { required: "此欄位必填" })}
      >
        <option value="負責人1">負責人1</option>
        <option value="負責人2">負責人2</option>
        <option value="負責人3">負責人3</option>
        <option value="負責人4">負責人4</option>
      </SelectField> */
}
