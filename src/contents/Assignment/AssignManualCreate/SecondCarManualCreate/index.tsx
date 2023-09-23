import React, { useEffect, useState } from "react";
import {
  SelectField,
  Pane,
  Paragraph,
  TextInputField,
  TextareaField
} from "evergreen-ui";
import { FormSTY } from "./style";

import {
  convertDateAndTimeFormat,
  slashDate,
  formatToDB
} from "@utils/convertDate";
import { I_ManualCreateType } from "@typings/assignment_type";
import { getAssignBusDDL } from "@services/assignment/getAssignmentDDL";
import TimeInput from "@components/Timepicker/TimeInput";
import Requred from "@components/Required";

interface I_AssignManualCreateProps {
  handleAssignmentCarChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  secondDrawerInfo: any;
  data?: any;
  reloadData?: () => void;
}

function SecondCarAssignManualCreate({
  handleAssignmentCarChange,
  secondDrawerInfo,
  createAssignData
}: I_AssignManualCreateProps) {
  const foundAssignment = createAssignData?.manual_bus.filter((ele) => {
    return (
      `${slashDate(ele?.task_start_time || ele?.task_end_time)}-${
        ele?.bus_day_number
      }` === secondDrawerInfo.id
    );
  })[0];

  const curAssignment = {
    bus_no: foundAssignment?.bus_no || "",
    bus_day_number: secondDrawerInfo.car,
    bus_group: foundAssignment?.bus_group || "",
    task_start_time:
      foundAssignment?.task_start_time ||
      convertDateAndTimeFormat(secondDrawerInfo.date),
    task_end_time:
      foundAssignment?.task_end_time ||
      convertDateAndTimeFormat(secondDrawerInfo.date),
    remark: foundAssignment?.remark || "",
    filled: false
  };
  console.log("🍅 createAssignData?.manual_bus", createAssignData?.manual_bus);
  console.log("🍅 curAssignment", curAssignment);

  const dateStr = secondDrawerInfo.date;
  const dateStrStart = convertDateAndTimeFormat(curAssignment.task_start_time);
  const dateStrEnd = convertDateAndTimeFormat(curAssignment.task_end_time);

  const [loading, setLoading] = useState(false);
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "", bus_group_name: "請選擇" }
  ]);
  const [busNo, setBusNo] = useState(curAssignment?.bus_no || "");
  const [busNameDDL, setBusNameDDL] = useState<any>([
    { bus_no: "", bus_name: "請選擇", license_plate: "" }
  ]);
  // const [plateNo, setPlateNo] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const getbusData = async () => {
      setLoading(true);
      try {
        const res = await getAssignBusDDL();
        setBusGroupDDL([
          { bus_group: "", bus_group_name: "請選擇" },
          ...res.dataList[0].bus_group_options
        ]);
      } catch (e: any) {
        console.log("getQuotationByID Error:", e);
        console.log(e);
      }
      setLoading(false);
    };
    getbusData();
    if (curAssignment && curAssignment?.bus_group) {
      fetchBusNameDDL(curAssignment?.bus_group);
    }
    setLoading(false);
  }, []);

  const fetchBusNameDDL = async (bus_group: string) => {
    try {
      const res = await getAssignBusDDL(bus_group);
      if (res.statusCode !== "200") throw new Error("failed");
      setBusNameDDL([
        { bus_no: "", bus_name: "請選擇", license_plate: "" },
        ...res.dataList[0].bus_options
      ]);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const handleBusGroupChange = async (e: any) => {
    setBusNo("");
    const bus_group = e.target.value;
    fetchBusNameDDL(bus_group);
    const customEvent = {
      target: {
        name: "bus_group",
        value: bus_group
      }
    };
    handleAssignmentCarChange(customEvent);
  };

  const plateNo = React.useMemo(() => {
    const selected = busNameDDL.filter((item: any) => item.bus_no === busNo)[0];
    return selected?.license_plate || "";
  }, [busNameDDL, busNo]);

  const handleBusNameChange = (e: any) => {
    const bus_no = e.target.value;
    // const newDDL = [...busNameDDL];
    // const result = newDDL.filter((v) => {
    //   return v.bus_no === e.target.value;
    // });
    // setPlateNo(result[0].license_plate);
    setBusNo(bus_no);
    const customEvent = {
      target: {
        name: "bus_no",
        value: bus_no
      }
    };
    handleAssignmentCarChange(customEvent);
  };

  // TODO: prevent this is called until the client really change the time
  // TODO: something wrong on timeslot change
  const handleTimeChange = (
    name: "task_start_time" | "task_end_time",
    v: any
  ) => {
    const customEvent: any = {
      target: {
        name: name,
        value: formatToDB(v)
      }
    };

    handleAssignmentCarChange(customEvent);
  };

  return (
    <FormSTY>
      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Pane className="title">
          <Paragraph>
            {secondDrawerInfo?.date} {secondDrawerInfo?.day}
          </Paragraph>
          <Paragraph>{`第0${secondDrawerInfo.car}車 ${secondDrawerInfo.assignType}`}</Paragraph>
        </Pane>
      </Pane>

      <SelectField
        label={<Requred>車隊</Requred>}
        onChange={handleBusGroupChange}
        value={curAssignment?.bus_group}
      >
        {busGroupDDL?.map(
          (item: { bus_group: string; bus_group_name: string }) => (
            <option key={item.bus_group} value={item.bus_group}>
              {item.bus_group_name}
            </option>
          )
        )}
      </SelectField>

      <SelectField
        label={<Requred>車輛名稱</Requred>}
        onChange={handleBusNameChange}
        value={curAssignment?.bus_no}
      >
        {busNameDDL?.map((item: any) => (
          <option key={item.bus_no} value={item.bus_no}>
            {item.bus_name}
          </option>
        ))}
      </SelectField>

      <TextInputField label="車牌" placeholder={plateNo} disabled />

      <Pane className="time-area">
        <Paragraph>起始時間</Paragraph>
        <TimeInput
          date={dateStrStart || dateStr}
          setDate={handleTimeChange.bind(null, "task_start_time")}
        />
      </Pane>

      <Pane className="time-area">
        <Paragraph>截止時間</Paragraph>
        <TimeInput
          date={dateStrEnd || dateStr}
          setDate={handleTimeChange.bind(null, "task_end_time")}
        />
      </Pane>

      <TextareaField
        label="備註"
        name="remark"
        onChange={handleAssignmentCarChange}
        marginTop={16}
      />
    </FormSTY>
  );
}

export default SecondCarAssignManualCreate;
