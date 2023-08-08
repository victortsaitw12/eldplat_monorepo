import React, { useEffect, useState } from "react";
import { FormSTY } from "./style";
//@sevices
import {
  Text,
  SelectField,
  Select,
  Pane,
  Paragraph,
  TextareaField
} from "evergreen-ui";
import dayjs from "dayjs";

//@layout
import { I_ManualCreateType } from "@typings/assignment_type";
import {
  getAssignBusDDL,
  getAssignDriverDDL
} from "@services/assignment/getAssignmentDDL";
import { hours, minutes } from "@services/assignment/mock_data";

interface I_AssignManualCreateProps {
  handleAssignmentDriverChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  showSecondTitle: any;
  data?: any;
  reloadData?: () => void;
}
interface I_Assigned {
  bus_day_number: number;
  bus_group: string;
  driver_no: string;
  task_end_time: string; //"2023-05-15T01:00";
  task_start_time: string; //"2023-05-15T01:00";
}

function SecondDriverAssignManualCreate({
  handleAssignmentDriverChange,
  showSecondTitle,
  createAssignData
}: I_AssignManualCreateProps) {
  const assigned: I_Assigned | undefined = createAssignData.manual_driver.find(
    (item) => {
      return (
        item.bus_day_number === showSecondTitle.car &&
        dayjs(item.task_start_time).get("date") ===
          dayjs(showSecondTitle?.date).get("date")
      );
    }
  );
  const [loading, setLoading] = useState(false);
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "00", bus_group_name: "請選擇" }
  ]);
  const [driverNameDDL, setDriverNameDDL] = useState<any>(null);

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
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchDriverName = async () => {
      const res = await getAssignDriverDDL(assigned?.bus_group);
      const updatedBusNameDDL = [
        { driver_no: "00", user_name: "請選擇" },
        ...res.dataList[0].driver_options
      ];
      setDriverNameDDL(updatedBusNameDDL);
    };
    fetchDriverName();
  }, [assigned]);

  const handleBusGroupChange = async (e: any) => {
    const res = await getAssignDriverDDL(e.target.value);
    setDriverNameDDL([
      { driver_no: "00", user_name: "請選擇" },
      ...res.dataList[0].driver_options
    ]);
  };

  return (
    <FormSTY>
      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Pane className="title">
          <Paragraph>
            {showSecondTitle?.date} {showSecondTitle?.day}
          </Paragraph>
          <Paragraph>{`第0${showSecondTitle?.car}車 ${showSecondTitle?.assignType}`}</Paragraph>
        </Pane>
      </Pane>

      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車隊
          </div>
        }
        name="bus_group"
        // onClick={(e: any) => {
        //   handleBusGroupChange(e);
        // }}
        onChange={(e: any) => {
          handleAssignmentDriverChange(e);
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
            <span style={{ color: "#D14343" }}>*</span>駕駛
          </div>
        }
        name="driver_no"
        onChange={(e: any) => {
          handleAssignmentDriverChange(e);
        }}
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
        <Select
          name="start_hours"
          onClick={(e: any) => {
            handleAssignmentDriverChange(e);
          }}
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
            handleAssignmentDriverChange(e);
          }}
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
            handleAssignmentDriverChange(e);
          }}
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
            handleAssignmentDriverChange(e);
          }}
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
            handleAssignmentDriverChange(e);
          }}
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
            handleAssignmentDriverChange(e);
          }}
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </Select>
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
