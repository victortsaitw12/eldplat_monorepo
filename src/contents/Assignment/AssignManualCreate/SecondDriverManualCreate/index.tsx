import React, { useEffect, useState } from "react";
import { FormSTY } from "./style";
//@sevices
import {
  Text,
  SelectField,
  Select,
  Pane,
  Paragraph,
  TextareaField,
  Group
} from "evergreen-ui";

//@layout
import { I_ManualCreateType, I_ManualDriver } from "@typings/assignment_type";

import {
  getAssignBusDDL,
  getAssignDriverDDL
} from "@services/assignment/getAssignmentDDL";
import { hours, minutes } from "@services/assignment/mock_data";
import dayjs from "dayjs";

interface I_AssignManualCreateProps {
  handleAssignmentDriverChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  showSecondTitle: any;
  data?: any;
  reloadData?: () => void;
}

function SecondDriverAssignManualCreate({
  handleAssignmentDriverChange,
  showSecondTitle,
  createAssignData
}: I_AssignManualCreateProps) {
  let defaultValue: I_ManualDriver | null = null;
  if (createAssignData?.manual_driver) {
    defaultValue = createAssignData?.manual_driver
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
        onClick={(e: any) => {
          handleBusGroupChange(e.target.value);
        }}
        onChange={(e: any) => {
          handleAssignmentDriverChange(e);
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
            <span style={{ color: "#D14343" }}>*</span>駕駛
          </div>
        }
        name="driver_no"
        onChange={(e: any) => {
          handleAssignmentDriverChange(e);
        }}
        value={defaultValue?.driver_no || ""}
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
        <Group>
          <Select
            name="start_hours"
            // onClick={(e: any) => {
            //   handleAssignmentDriverChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentDriverChange(e);
            }}
          >
            {hours.map((item: string) => (
              <option
                key={item}
                value={item}
                selected={
                  (defaultValue &&
                    dayjs(defaultValue?.task_start_time).format("HH")) ==
                    item || false
                }
              >
                {item}
              </option>
            ))}
          </Select>
          <Text fontSize={20}> : </Text>
          <Select
            name="start_minutes"
            // onClick={(e: any) => {
            //   handleAssignmentDriverChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentDriverChange(e);
            }}
          >
            {minutes().map((item: string) => (
              <option
                key={item}
                value={item}
                selected={
                  (defaultValue &&
                    dayjs(defaultValue?.task_start_time).format("mm")) ==
                    item || false
                }
              >
                {item}
              </option>
            ))}
          </Select>
          <Select
            name="start_type"
            // onClick={(e: any) => {
            //   handleAssignmentDriverChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentDriverChange(e);
            }}
          >
            <option
              value="am"
              selected={
                (defaultValue &&
                  dayjs(defaultValue?.task_start_time).format("A")) == "AM" ||
                false
              }
            >
              AM
            </option>
            <option
              value="pm"
              selected={
                (defaultValue &&
                  dayjs(defaultValue?.task_start_time).format("A")) == "PM" ||
                false
              }
            >
              PM
            </option>
          </Select>
        </Group>
      </Pane>

      <Pane className="time-area">
        <Paragraph>截止時間</Paragraph>
        <Group>
          <Select
            name="end_hours"
            // onClick={(e: any) => {
            //   handleAssignmentDriverChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentDriverChange(e);
            }}
          >
            {hours.map((item: string) => (
              <option
                key={item}
                value={item}
                selected={
                  (defaultValue &&
                    dayjs(defaultValue?.task_end_time).format("HH")) == item ||
                  false
                }
              >
                {item}
              </option>
            ))}
          </Select>
          <Text fontSize={20}> : </Text>
          <Select
            name="end_minutes"
            // onClick={(e: any) => {
            //   handleAssignmentDriverChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentDriverChange(e);
            }}
          >
            {minutes().map((item: string) => (
              <option
                key={item}
                value={item}
                selected={
                  (defaultValue &&
                    dayjs(defaultValue?.task_end_time).format("mm")) == item ||
                  false
                }
              >
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
            <option
              value="am"
              selected={
                (defaultValue &&
                  dayjs(defaultValue?.task_start_time).format("A")) == "AM" ||
                false
              }
            >
              AM
            </option>
            <option
              value="pm"
              selected={
                (defaultValue &&
                  dayjs(defaultValue?.task_start_time).format("A")) == "PM" ||
                false
              }
            >
              PM
            </option>
          </Select>
        </Group>
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
