import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import {
  SelectField,
  Pane,
  Paragraph,
  TextareaField,
  toaster
} from "evergreen-ui";
import { FormSTY } from "./style";

//@layout
import { I_ManualAssignType } from "@typings/assignment_type";
import {
  getAssignBusDDL,
  getAssignDateDDL,
  getBusDayNumberDDL,
  getDayDriverNameDDL
} from "@services/assignment/getAssignmentDDL";
import {
  I_ReplaceAssignment,
  createReplaceAssignment,
  I_creatOtherAssignment
} from "@services/assignment/createReplaceAssignment";
import PrimaryRadius from "@components/Button/PrimaryRadius";
import TimeInput from "@components/Timepicker/TimeInput";

interface I_DriverFormProps {
  orderInfo: I_ManualAssignType[];
  setLoading: (v: boolean) => void;
  refetch?: () => void;
  checkOtherAssignment: (v: I_creatOtherAssignment) => any;
}

function DriverForm({
  orderInfo,
  setLoading,
  refetch,
  checkOtherAssignment
}: I_DriverFormProps) {
  const defaultValues = {
    quote_no: "",
    bus_driver_no: "",
    bus_day_number: 0,
    bus_group: "",
    task_start_time: "", //2023-06-26T 8:12:19.812Z
    task_end_time: "", //2023-06-26T08:12:19.812Z
    remark: ""
  };
  const { register, handleSubmit, setValue } = useForm({
    defaultValues
  });
  const [dateDDL, setDateDDL] = useState<any>([
    { order_date: "", order_weekday: "請選擇" }
  ]);
  const [busDayNumberDDL, setBusDayNumberDDL] = useState<any>([
    { bus_day_number: "00", assignment_no: "", label: "請選擇" }
  ]);
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "00", bus_group_name: "請選擇" }
  ]);
  const [driverNameDDL, setDriverNameDDL] = useState<any>([
    { bus_no: "00", bus_name: "請選擇", license_plate: "" }
  ]);
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
  const asyncSubmitForm = async (data: I_ReplaceAssignment) => {
    try {
      // 新增替代(駕駛)API
      const res = await createReplaceAssignment(data);
      // 成功or失敗訊息
      if (res.statusCode !== "200")
        throw new Error(` ${res.resultString || ""}`);
      toaster.success("新增成功", {
        duration: 2,
        hasCloseButton: true
      });
      // refetch, close drawer, ask update the rest shift?
      !checkOtherAssignment(res.dataList[0]) && refetch && refetch();
    } catch (e: any) {
      toaster.danger("新增失敗", {
        duration: 3,
        description: "同一時間點重複派工，請選擇其他時間。",
        hasCloseButton: true
      });
    }
  };

  const handleDateChange = React.useCallback(
    async (e: any) => {
      setDateBase(e.target.value);
      if (!e.target.value) return;
      // 取得當日可選車次
      const res = await getDayDriverNameDDL(
        orderInfo[0].quote_no,
        e.target.value
      );

      const resBusDayNumberDDL = res.dataList[0].day_bus_options.map(
        (item: any, i: number) => {
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
    const res = await getDayDriverNameDDL(
      orderInfo[0].quote_no,
      dateBase,
      e.target.value
    );
    setDriverNameDDL([
      { driver_no: "00", user_name: "請選擇" },
      ...res.dataList[0].driver_options
    ]);
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        console.log("🍅 submit data:", data);
        console.log("🍅 dateBase:", dateBase);
        // asyncSubmitForm({ ...data });
      })}
    >
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>日期
          </div>
        }
        onChange={(e) => handleDateChange(e)}
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
            <span style={{ color: "#D14343" }}>*</span>駕駛
          </div>
        }
        hint={!dateBase ? "(請先選擇車隊) " : " "}
        disabled={!driverNameDDL[1]}
        {...register("bus_driver_no", {
          // API: bus_no vs driver_no 共用這個 "bus_driver_no"欄位
          required: "必填"
        })}
      >
        {driverNameDDL?.map((item: any) => {
          return (
            <option key={item.driver_no} value={item.driver_no}>
              {item.user_name}
            </option>
          );
        })}
      </SelectField>
      <Pane className="time-area">
        <Paragraph>起始時間</Paragraph>
        <TimeInput
          date={dateBase}
          setDate={(v) =>
            setValue("task_start_time", dayjs(v).format("YYYY-MM-DDTHH:mm"))
          }
          {...register("task_start_time", {
            required: "必填"
          })}
        />
      </Pane>

      <Pane className="time-area">
        <Paragraph>截止時間</Paragraph>
        <TimeInput
          date={dateBase}
          setDate={(v) =>
            setValue("task_end_time", dayjs(v).format("YYYY-MM-DDTHH:mm"))
          }
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

export default DriverForm;
