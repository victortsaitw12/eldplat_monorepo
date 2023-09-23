import React, { useEffect, useState } from "react";
import { FormSTY } from "./style";
//@sevices
import {
  SelectField,
  Select,
  Pane,
  Paragraph,
  TextInputField,
  TextareaField
} from "evergreen-ui";

//@layout
import { I_ManualBus, I_ManualCreateType } from "@typings/assignment_type";
import { getAssignBusDDL } from "@services/assignment/getAssignmentDDL";
import dayjs from "dayjs";

//@components
import TimeInput from "@components/Timepicker/TimeInput";
import { formatToDB } from "@utils/convertDate";

interface I_AssignManualCreateProps {
  handleAssignmentCarChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  showSecondTitle: any;
  data?: any;
  reloadData?: () => void;
}

function SecondCarAssignManualCreate({
  handleAssignmentCarChange,
  showSecondTitle,
  createAssignData
}: I_AssignManualCreateProps) {
  let defaultValue: I_ManualBus | null = null;
  const dateStr = showSecondTitle.date;
  const dateStrStart = React.useMemo(() => {
    if (!defaultValue) return null;
    return dayjs(defaultValue.task_start_time).format("YYYY-MM-DD HH:mm");
  }, [defaultValue]);
  const dateStrEnd = React.useMemo(() => {
    if (!defaultValue) return null;
    return dayjs(defaultValue.task_end_time).format("YYYY-MM-DD HH:mm");
  }, [defaultValue]);

  if (createAssignData?.manual_bus) {
    defaultValue = createAssignData?.manual_bus
      .filter((ele) => {
        return (
          dayjs(ele?.task_start_time).format("YYYY/MM/DD") ==
          dayjs(showSecondTitle.date).format("YYYY/MM/DD")
        );
      })
      .filter((ele) => {
        return ele?.bus_day_number == showSecondTitle.car;
      })[0];
  }

  const [loading, setLoading] = useState(false);
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "00", bus_group_name: "請選擇" }
  ]);
  const [busNameDDL, setBusNameDDL] = useState<any>([
    { bus_no: "00", bus_name: "請選擇", license_plate: "" }
  ]);
  const [plateNo, setPlateNo] = useState<string>("");

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
    if (defaultValue && defaultValue?.bus_group) {
      handleBusGroupChange(defaultValue?.bus_group);
    }
    setLoading(false);
  }, []);

  // TODO: fix=>this won't work
  const handleBusGroupChange = async (bus_group: any) => {
    const res = await getAssignBusDDL(bus_group);
    setBusNameDDL([
      { bus_no: "", bus_name: "請選擇", license_plate: "" },
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

    handleAssignmentCarChange(customEvent);
  };

  return (
    <FormSTY>
      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Pane className="title">
          <Paragraph>
            {showSecondTitle?.date} {showSecondTitle?.day}
          </Paragraph>
          <Paragraph>{`第0${showSecondTitle.car}車 ${showSecondTitle.assignType}`}</Paragraph>
        </Pane>
      </Pane>

      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車隊
          </div>
        }
        name="bus_group"
        onClick={(e: any) => {
          handleBusGroupChange(e.target.value);
        }}
        onChange={(e: any) => {
          handleAssignmentCarChange(e);
        }}
        value={defaultValue?.bus_group || ""}
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
        name="bus_no"
        onClick={(e: any) => {
          handleCarPlate(e);
        }}
        onChange={(e: any) => {
          handleAssignmentCarChange(e);
        }}
        value={defaultValue?.bus_no || ""}
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
          handleAssignmentCarChange(e);
        }}
        marginTop={16}
      />
    </FormSTY>
  );
}

export default SecondCarAssignManualCreate;
