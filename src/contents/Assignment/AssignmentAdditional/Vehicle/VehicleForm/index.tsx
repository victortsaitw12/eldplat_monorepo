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
import { getAssignBusDDL } from "@services/assignment/getAssignmentDDL";
import { hours, minutes } from "@services/assignment/mock_data";

interface I_VehicleFormProps {
  timeRef: any;
  handleAssignmentCarChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  data?: any;
  orderInfo: I_ManualAssignType[];
}

function VehicleForm({
  timeRef,
  handleAssignmentCarChange,
  orderInfo
}: I_VehicleFormProps) {
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
          { bus_group: "00", bus_group_name: "請選擇" },
          ...res.dataList[0].bus_group_options
        ]);
      } catch (e: any) {
        console.log("getQuotationByID Error:", e);
        console.log(e);
      }
      setLoading(false);
    };
    getbusData();
    setLoading(false);
  }, []);
  // ----- function ----- //
  const renderDateOptions = (startDate: string, endDate: string) => {
    // total days
    const dayCount = dayjs(endDate).diff(startDate, "day") + 1;
    const arr = [];
    for (let i = 0; i < dayCount; i++) {
      arr.push(dayjs(startDate).add(i, "day"));
    }
    return arr.map((item, i) => (
      <option key={`day-${i}`}>{dayjs(item).format("YYYY/MM/DD ddd")}</option>
    ));
  };
  const handleBusGroupChange = async (e: any) => {
    console.log("e", e);
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
    <FormSTY>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>日期
          </div>
        }
      >
        {orderInfo &&
          renderDateOptions(
            orderInfo[0].departure_date,
            orderInfo[0].return_date
          )}
      </SelectField>

      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車隊
          </div>
        }
        name="bus_group"
        onClick={(e: any) => {
          handleBusGroupChange(e);
        }}
        onChange={(e: any) => {
          handleAssignmentCarChange(e);
        }}
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
        <Select
          name="start_hours"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          {hours.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Text fontSize={20}> : </Text>
        <Select
          name="start_minutes"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          {minutes().map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select
          name="start_type"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </Select>
      </Pane>

      <Pane className="time-area">
        <Paragraph>截止時間</Paragraph>
        <Select
          name="end_hours"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          {hours.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Text fontSize={20}> : </Text>
        <Select
          name="end_minutes"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          {minutes().map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select
          name="end_type"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </Select>
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

export default VehicleForm;
