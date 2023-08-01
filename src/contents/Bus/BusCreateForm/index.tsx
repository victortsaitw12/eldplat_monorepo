import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
import { PlusIcon, SelectField } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";
import FiledInput from "./FieldInput";
import { useState } from "react";
import { createBus } from "@services/bus/createBus";
interface I_BusCreateFormProps {
  data?: any;
  reloadData?: () => void;
  options: any;
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
const BusCreateForm = ({ reloadData, options }: I_BusCreateFormProps) => {
  const { register, handleSubmit, control, reset } = useForm<CreateBusPayload>({
    defaultValues
  });
  const [loading, setLoading] = useState(false);
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
        <option value="01">Toyota</option>
        <option value="02">Mercedes-Benz</option>
        <option value="03">Volkswagen</option>
        <option value="04">BMW</option>
        <option value="05">Tesla</option>
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
          請選擇
        </option>
        <option value="01">群組1</option>
        <option value="02">群組2</option>
        <option value="03">群組3</option>
        <option value="04">群組4</option>
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>主要駕駛
          </div>
        }
        {...register("operator_no", { required: "此欄位必填" })}
        defaultValue=""
      >
        <option value="" disabled hidden>
          請選擇
        </option>
        {options?.operator_options.map((item: any) => (
          <option key={item.no} value={item.no}>
            {item.name}
          </option>
        ))}
      </SelectField>
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
        <option value="01">活躍中</option>
        <option value="02">已售出</option>
        <option value="03">終止服務</option>
        <option value="04">在維修廠</option>
        <option value="05">閒置中</option>
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
        <option value="01">擁有的</option>
        <option value="02">租來的</option>
        <option value="03">出租中</option>
        <option value="04">客戶的</option>
        <option value="05">擁有的</option>
        <option value="06">租來的</option>
        <option value="07">出租中</option>
        <option value="08">客戶的</option>
      </SelectField>
      <IconLeft text={"新增車輛"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
};
export default BusCreateForm;
