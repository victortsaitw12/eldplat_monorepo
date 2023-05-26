import { useForm } from "react-hook-form";
import { ItemSTY, FormSTY } from "./style";
import { HelpIcon, PlusIcon, ErrorIcon, SelectField } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";
import FiledInput from "./FieldInput";
import { useState } from "react";
import { createBus } from "@services/bus/createBus";
interface I_BusCreateFormProps {
  data?: any;
  reloadData?: () => void;
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
  operator: string;
  status: string;
}
const defaultValues = {
  bus_name: "",
  vin: "",
  type: "",
  bus_seat: "",
  make: "",
  license_plate: "",
  year: "",
  bus_group: "",
  operator: "",
  status: ""
};
const BusCreateForm = ({ reloadData }: I_BusCreateFormProps) => {
  const { register, handleSubmit, control, reset } = useForm<CreateBusPayload>({
    defaultValues
  });

  const [loading, setLoading] = useState(false);
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    try {
      const res = await createBus(data);
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
        hint="車輛名稱的hint"
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
      >
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
      >
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
        hint="出廠年份的hint"
      />
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車輛群組
          </div>
        }
        {...register("bus_group", { required: "此欄位必填" })}
      >
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
        {...register("operator", { required: "此欄位必填" })}
      >
        <option value="簡忠華(007415)">簡忠華(007415)</option>
        <option value="陳正烽(00F470)">陳正烽(00F470)</option>
        <option value="吳啟元(00A371)">吳啟元(00A371)</option>
        <option value="施純鈞(200120)">施純鈞(200120)</option>
        <option value="王百華(230014)">王百華(230014)</option>
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>狀態
          </div>
        }
        {...register("status", { required: "此欄位必填" })}
      >
        <option value="01">活躍中</option>
        <option value="02">閒置中</option>
        <option value="03">在維修廠</option>
        <option value="04">已販售</option>
        <option value="05">終止服務</option>
      </SelectField>
      <IconLeft text={"新增車輛"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
};
export default BusCreateForm;
