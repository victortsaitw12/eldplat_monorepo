import React, { useEffect, useState } from "react";
import { SelectField, Pane, Paragraph, TextareaField } from "evergreen-ui";
import { FormSTY } from "./style";

import {
  convertDateAndTimeFormat,
  slashDate,
  formatToDB
} from "@utils/convertDate";
import { I_ManualCreateType } from "@typings/assignment_type";
import { getAssignDriverDDL } from "@services/assignment/getAssignmentDDL";
import TimeInput from "@components/Timepicker/TimeInput";
import Requred from "@components/Required";

interface I_AssignManualCreateProps {
  handleAssignmentDriverChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  secondDrawerInfo: any;
  data?: any;
  reloadData?: () => void;
}

function SecondDriverAssignManualCreate({
  handleAssignmentDriverChange,
  secondDrawerInfo,
  createAssignData
}: I_AssignManualCreateProps) {
  const defaultValue = React.useMemo(() => {
    const editBusData = createAssignData?.manual_driver.filter((ele) => {
      return (
        slashDate(ele?.task_start_time) == slashDate(secondDrawerInfo.date) &&
        ele?.bus_day_number == secondDrawerInfo.car
      );
    })[0];
    return (
      editBusData || {
        bus_no: "",
        bus_day_number: secondDrawerInfo.car,
        bus_group: "",
        task_start_time: secondDrawerInfo.date,
        task_end_time: secondDrawerInfo.date,
        remark: "",
        filled: false
      }
    );
  }, [
    secondDrawerInfo.car,
    secondDrawerInfo.date,
    createAssignData?.manual_driver
  ]);

  const dateStr = secondDrawerInfo.date;
  const dateStrStart = convertDateAndTimeFormat(defaultValue.task_start_time);
  const dateStrEnd = convertDateAndTimeFormat(defaultValue.task_end_time);

  const [loading, setLoading] = useState(false);
  const [busGroup, setBusGroup] = useState("");
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "00", bus_group_name: "請選擇" }
  ]);
  const [driverNameDDL, setDriverNameDDL] = useState<any>(null);

  // TODO: prevent this is called until the client really change the time
  const handleTimeChange = (
    name: "task_start_time" | "task_end_time",
    v: any
  ) => {
    const customEvent = {
      target: {
        name: name,
        value: formatToDB(v)
      }
    };

    handleAssignmentDriverChange(customEvent);
  };

  useEffect(() => {
    setLoading(true);
    const getDriverData = async () => {
      setLoading(true);
      try {
        const res = await getAssignDriverDDL();
        setBusGroupDDL([
          { bus_group: "00", bus_group_name: "請選擇" },
          ...res.dataList[0].bus_group_options
        ]);
      } catch (e: any) {
        console.log("getQuotationByID Error:", e);
        console.log(e);
      }
      setLoading(false);
    };
    getDriverData();
    if (defaultValue && defaultValue?.bus_group) {
      handleBusGroupChange(defaultValue?.bus_group);
    }
    setLoading(false);
  }, []);

  const handleBusGroupChange = async (bus_group: any) => {
    const res = await getAssignDriverDDL(bus_group);
    setDriverNameDDL([
      { driver_no: "", user_name: "請選擇" },
      ...res.dataList[0].driver_options
    ]);
  };

  return (
    <FormSTY>
      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Pane className="title">
          <Paragraph>
            {secondDrawerInfo?.date} {secondDrawerInfo?.day}
          </Paragraph>
          <Paragraph>{`第0${secondDrawerInfo?.car}車 ${secondDrawerInfo?.assignType}`}</Paragraph>
        </Pane>
      </Pane>

      <SelectField
        label={<Requred>車隊</Requred>}
        name="bus_group"
        onClick={(e: any) => {
          handleBusGroupChange(e.target.value);
        }}
        onChange={(e: any) => {
          handleAssignmentDriverChange(e);
        }}
        value={defaultValue?.bus_group}
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
        label={<Requred>駕駛</Requred>}
        name="driver_no"
        onChange={handleAssignmentDriverChange}
        value={defaultValue?.driver_no}
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
        onChange={(e: any) => {
          handleAssignmentDriverChange(e);
        }}
        marginTop={16}
      />
    </FormSTY>
  );
}

export default SecondDriverAssignManualCreate;
