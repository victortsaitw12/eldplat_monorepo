import { useForm } from "react-hook-form";
import { ItemSTY, FormSTY } from "./style";
import { HelpIcon, PlusIcon, ErrorIcon } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";
import FiledInput from "./FieldInput";
interface BusCreateFormProps {
  createBus: (busData: any) => void;
}
export interface CreateBusPayload {
  bus_name: string;
  vin: string;
  type: string;
  make: string;
  license_plate: string;
  year: string;
  bus_group: string;
  operator: string;
  status: string;
}
const defaultValues = {
  bus_name: "",
  vin: "",
  type: "",
  make: "",
  license_plate: "",
  year: "",
  bus_group: "",
  operator: "",
  status: ""
};
const BusCreateForm = ({ createBus }: BusCreateFormProps) => {
  const { handleSubmit, control } = useForm<CreateBusPayload>({
    defaultValues
  });
  return (
    <FormSTY onSubmit={handleSubmit(createBus)}>
      <FiledInput
        controlProps={{
          name: "bus_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="車輛名稱"
        hint="車輛名稱的hint"
      />
      <FiledInput
        controlProps={{
          name: "vin",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="車輛識別碼VIN"
      />
      <FiledInput
        controlProps={{
          name: "type",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="車種"
      />
      <FiledInput
        controlProps={{
          name: "make",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="品牌"
      />
      <FiledInput
        controlProps={{
          name: "license_plate",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="車牌"
      />
      <FiledInput
        controlProps={{
          name: "year",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="出廠年份"
        hint="出廠年份的hint"
      />
      <FiledInput
        controlProps={{
          name: "bus_group",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="車輛群組"
      />
      <FiledInput
        controlProps={{
          name: "operator",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="主要駕駛"
      />
      <FiledInput
        controlProps={{
          name: "status",
          control,
          rules: { required: "此欄位必填" }
        }}
        label="狀態"
      />
      <IconLeft text={"新增車輛"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
};
export default BusCreateForm;
