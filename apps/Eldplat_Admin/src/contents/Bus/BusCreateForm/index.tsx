import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
import {
  Pane,
  Group,
  Label,
  PlusIcon,
  SelectField,
  Select
} from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";
import FiledInput from "./FieldInput";
import { useState } from "react";
import { createBus } from "@services/bus/createBus";
import { getCreateBusOptions } from "@services/bus/getCreateBusOptions";

interface I_BusCreateFormProps {
  data?: any;
  reloadData?: () => void;
  options: any;
  setOptions: (v: any) => void;
}
export interface CreateBusPayload {
  bus_name: string;
  vin: string;
  type: string;
  bus_seat: string;
  make: string;
  license_plate: string;
  year: string;
  bus_group: string;
  operator_no: string;
  status: string;
  ownership: string;
}
const defaultValues: CreateBusPayload = {
  bus_name: "",
  vin: "",
  type: "",
  bus_seat: "",
  make: "",
  license_plate: "",
  year: "",
  bus_group: "",
  operator_no: "",
  status: "",
  ownership: ""
};
const BusCreateForm = ({
  reloadData,
  options,
  setOptions
}: I_BusCreateFormProps) => {
  const { register, handleSubmit, control, reset } = useForm<CreateBusPayload>({
    defaultValues
  });
  const [loading, setLoading] = useState(false);
  const [busGroup, setBusGroup] = useState<string>("");
  const [isDriverDDLLoading, setIsDriverDDLoading] = useState<boolean>(false);

  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      await createBus(data);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
    reloadData && reloadData();
    reset();
  };

  const fetchDDL = async (dsph_group?: string) => {
    try {
      const res = await getCreateBusOptions(dsph_group);
      if (res.statusCode === "200") {
        setOptions(res.dataList[0]);
      } else {
        throw new Error(`${res.resultString}`);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const handleBusGroupChange = async (e: any) => {
    setBusGroup(e.target.value);
    setIsDriverDDLoading(true);
    const bus_group = e.target.value;
    await fetchDDL(bus_group);
    setIsDriverDDLoading(false);
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        asyncSubmitForm({
          ...data
        });
      })}
    >
      <FiledInput
        controlProps={{
          name: "bus_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
        label="車輛名稱"
      />
      <FiledInput
        controlProps={{
          name: "vin",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
        label="車輛識別碼VIN"
      />
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車種
          </div>
        }
        {...register("type", { required: "此欄位必填" })}
        defaultValue=""
      >
        <option value="" disabled hidden>
          請選擇
        </option>
        {options?.type_options.map((item: any) => (
          <option key={item.no} value={item.no}>
            {item.name}
          </option>
        ))}
      </SelectField>
      <FiledInput
        controlProps={{
          name: "bus_seat",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
        label="座位數"
      />
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>品牌
          </div>
        }
        {...register("make", { required: "此欄位必填" })}
        defaultValue=""
      >
        <option value="" disabled hidden>
          請選擇
        </option>
        {options?.make_options.map((item: any) => (
          <option key={item.no} value={item.no}>
            {item.name}
          </option>
        ))}
      </SelectField>
      <FiledInput
        controlProps={{
          name: "license_plate",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
        label="車牌"
      />
      <FiledInput
        controlProps={{
          name: "year",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
        label="出廠年份"
      />

      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車隊
          </div>
        }
        {...register("bus_group", { required: "此欄位必填" })}
        defaultValue=""
      >
        <option value="" disabled hidden>
          請選擇車輛車隊
        </option>
        {options?.bus_group_options.map((item: any) => (
          <option key={item.no} value={item.no}>
            {item.name}
          </option>
        ))}
      </SelectField>
      <Pane style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Label>
          <div>
            <span style={{ color: "#D14343" }}>*</span>主要駕駛
          </div>
        </Label>
        <Select defaultValue="" onChange={handleBusGroupChange}>
          <option value="" disabled hidden>
            請選擇駕駛車隊
          </option>
          {options?.operator_bus_group_options.map((item: any) => (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          ))}
        </Select>
        <Select
          {...register("operator_no", { required: "此欄位必填" })}
          defaultValue=""
          disabled={isDriverDDLLoading}
        >
          <option value="" disabled hidden>
            請選擇
          </option>
          {options?.operator_options.map((item: any) => (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          ))}
        </Select>
      </Pane>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>狀態
          </div>
        }
        {...register("status", { required: "此欄位必填" })}
        defaultValue=""
      >
        <option value="" disabled hidden>
          請選擇
        </option>
        {options?.status_options.map((item: any) => (
          <option key={item.no} value={item.no}>
            {item.name}
          </option>
        ))}
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>所有權
          </div>
        }
        {...register("ownership", { required: "此欄位必填" })}
        defaultValue=""
      >
        <option value="" disabled hidden>
          請選擇
        </option>
        {options?.ownership_options.map((item: any) => (
          <option key={item.no} value={item.no}>
            {item.name}
          </option>
        ))}
      </SelectField>
      <IconLeft text={"新增車輛"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
};
export default BusCreateForm;
