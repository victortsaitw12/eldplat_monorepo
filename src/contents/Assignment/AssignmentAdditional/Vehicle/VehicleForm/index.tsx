import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import {
  Text,
  SelectField,
  Select,
  Pane,
  Paragraph,
  TextInputField,
  TextareaField
} from "evergreen-ui";
import { FormSTY } from "./style";

//@layout
import {
  I_ManualAssignType,
  I_ManualCreateType
} from "@typings/assignment_type";
import {
  getAssignBusDDL,
  getAssignDateDDL,
  getBusDayNumberDDL
} from "@services/assignment/getAssignmentDDL";
import { hours, minutes } from "@services/assignment/mock_data";
import PrimaryRadius from "@components/Button/PrimaryRadius";
import TimeInput from "@components/Timepicker/TimeInput";
import {
  I_ReplaceAssignment,
  updateReplaceAssignment
} from "@services/assignment/updateReplaceAssignment";

interface I_VehicleFormProps {
  orderInfo: I_ManualAssignType[];
  timeRef: any;
  handleAssignmentCarChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  data?: any;
  setLoading: (v: boolean) => void;
}

function VehicleForm({
  orderInfo,
  timeRef,
  // handleAssignmentCarChange,
  setLoading
}: I_VehicleFormProps) {
  const defaultValues = {
    quote_no: "",
    bus_driver_no: "",
    bus_day_number: 0,
    bus_group: "",
    task_start_time: "", //2023-06-26T 8:12:19.812Z
    task_end_time: "", //2023-06-26T08:12:19.812Z
    remark: ""
  };
  const { register, handleSubmit, control, getValues, setValue } = useForm({
    defaultValues
  });
  const [dateDDL, setDateDDL] = useState<any>([
    { order_date: "", order_weekday: "請選擇" }
  ]);
  const [busDayNumberDDL, setBusDayNumberDDL] = useState<any>([
    { bus_day_number: "00", assignment_no: "", label: "請先選取日期" }
  ]);
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "00", bus_group_name: "請選擇" }
  ]);
  const [busNameDDL, setBusNameDDL] = useState<any>([
    { bus_no: "00", bus_name: "請選擇", license_plate: "" }
  ]);

  const [plateNo, setPlateNo] = useState<string>("");
  const [dateBase, setDateBase] = useState("");

  useEffect(() => {
    setLoading(true);
    const getbusData = async () => {
      setLoading(true);
      try {
        // 取得 quote_no
        setValue("quote_no", orderInfo[0].quote_no);
        // 取得可選日期
        const resDateDDL = await getAssignDateDDL(
          orderInfo[0].departure_date,
          orderInfo[0].return_date
        );
        setDateDDL([
          { order_date: "", order_weekday: "請選擇" },
          ...resDateDDL.dataList[0].order_date_options
        ]);
        // 取得車隊
        const res = await getAssignBusDDL();
        setBusGroupDDL([
          { bus_group: "00", bus_group_name: "請選擇" },
          ...res.dataList[0].bus_group_options
        ]);
      } catch (e: any) {
        console.log("getQuotationByID Error:", e);
      }
      setLoading(false);
    };
    getbusData();
    setLoading(false);
  }, [orderInfo]);
  // ----- function ----- //
  const asyncSubmitForm = async (data: any) => {
    try {
      const res = await updateReplaceAssignment(data);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
  };

  const handleDateChange = React.useCallback(
    async (e: any) => {
      setDateBase(e.target.value);
      if (!e.target.value) return;
      // 取得當日可選車次
      const res = await getBusDayNumberDDL(
        orderInfo[0].quote_no,
        e.target.value
      );

      const resBusDayNumberDDL = res.dataList[0].day_bus_options.map(
        (item, i) => {
          return { ...item, label: `第0${item.bus_day_number}車` };
        }
      );
      setBusDayNumberDDL([
        { bus_day_number: "", assignment_no: "", label: "請選擇" },
        ...resBusDayNumberDDL
      ]);
    },
    [orderInfo]
  );

  const handleBusGroupChange = async (e: any) => {
    const res = await getAssignBusDDL(e.target.value);
    // setBusNameDDL(res.dataList[0].bus_options);
    setBusNameDDL([
      { bus_no: "00", bus_name: "請選擇", license_plate: "" },
      ...res.dataList[0].bus_options
    ]);
  };

  const handleCarPlate = (e: any) => {
    const newDDL = [...busNameDDL];
    const result = newDDL.filter((v) => {
      return v.bus_no === e.target.value;
    });
    setPlateNo(result[0].license_plate);
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        console.log("🍅🍅🍅 data:", data);
        asyncSubmitForm({ ...data });
      })}
    >
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>日期
          </div>
        }
        onChange={(e) => handleDateChange(e)}
        // required
        // {...register("base_date", {
        //   required: "必填",
        //   onChange: (e) => handleDateChange(e)
        // })}
      >
        {dateDDL?.map((item: any, i: number) => (
          <option key={`day-${i}`} value={item.order_date}>
            {item.order_date && dayjs(item.order_date).format("YYYY/MM/DD")}
            {` ${item.order_weekday}`}
          </option>
        ))}
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車次
          </div>
        }
        hint={!dateBase ? "(請先選取日期) " : " "}
        disabled={!busDayNumberDDL[1]}
        {...register("bus_day_number", {
          required: "必填"
        })}
      >
        {busDayNumberDDL.map((item: any, i: number) => (
          <option key={`dayNum-${i}`} value={item.bus_day_number}>
            {item.label}
          </option>
        ))}
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車隊
          </div>
        }
        onClick={(e: any) => {
          handleBusGroupChange(e);
        }}
        // onChange={(e: any) => {
        //   handleAssignmentCarChange(e);
        // }}
        {...register("bus_group", {
          required: "必填"
        })}
      >
        {busGroupDDL?.map(
          (item: { bus_group: string; bus_group_name: string }) => {
            return (
              <option key={item.bus_group} value={item.bus_group}>
                {item.bus_group_name}
              </option>
            );
          }
        )}
      </SelectField>

      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車輛名稱
          </div>
        }
        // onClick={(e: any) => {
        //   handleCarPlate(e);
        // }}

        {...register("bus_driver_no", {
          // API: bus_no vs driver_no 共用這個 "bus_driver_no"欄位
          required: "必填",
          onChange: (e: any) => {
            handleCarPlate(e);
          }
        })}
      >
        {busNameDDL?.map((item: any) => {
          return (
            <option key={item.bus_no} value={item.bus_no}>
              {item.bus_name}
            </option>
          );
        })}
      </SelectField>

      <TextInputField label="車牌" placeholder={plateNo} disabled />

      <Pane className="time-area">
        <Paragraph>起始時間</Paragraph>
        <TimeInput
          date={dateBase}
          setDate={(v) => setValue("task_start_time", v)}
          {...register("task_start_time", {
            required: "必填"
          })}
        />
      </Pane>

      <Pane className="time-area">
        <Paragraph>截止時間</Paragraph>
        <TimeInput
          date={dateBase}
          setDate={(v) => setValue("task_end_time", v)}
          {...register("task_end_time", {
            required: "必填"
          })}
        />
      </Pane>

      <TextareaField
        label="備註"
        marginTop={16}
        {...register("remark", { required: false })}
      />
      <PrimaryRadius appearance="primary" type="submit">
        確定
      </PrimaryRadius>
    </FormSTY>
  );
}

export default VehicleForm;
