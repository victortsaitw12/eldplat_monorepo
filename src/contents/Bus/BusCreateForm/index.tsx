import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
import { PlusIcon, SelectField } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";
import FiledInput from "./FieldInput";
import { useState } from "react";
import { createBus } from "@services/bus/createBus";
import DottedSelect from "@components/HookForm/Select/DottedSelect";
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
  console.log("options", options);
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
        <option value="01">沙灘車</option>
        <option value="02">船</option>
        <option value="03">巴士</option>
        <option value="04">車</option>
        <option value="05">堆高機</option>
        <option value="06">發電機</option>
        <option value="07">裝載機</option>
        <option value="08">機車</option>
        <option value="09">割草機</option>
        <option value="10">其他</option>
        <option value="11">皮卡車</option>
        <option value="12">半卡車</option>
        <option value="13">越野車</option>
        <option value="14">聯結車</option>
        <option value="15">貨車</option>
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
      <DottedSelect
        control={control}
        name="status"
        label="狀態"
        isRequire={true}
        isDisabled={false}
        vertical={true}
        options={[
          { label: "活躍中", value: "01", color: "#52BD94" },
          { label: "已售出", value: "02", color: "#8EA8C7" },
          { label: "終止服務", value: "03", color: "#D14343" },
          { label: "在維修廠", value: "04", color: "#FFB020" },
          { label: "閒置中", value: "05", color: "#3670C9" }
        ]}
      />
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
