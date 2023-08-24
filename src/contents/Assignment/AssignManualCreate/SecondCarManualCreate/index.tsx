import React, { useEffect, useState } from "react";
import { FormSTY } from "./style";
//@sevices
import {
  Text,
  SelectField,
  Select,
  Pane,
  Paragraph,
  TextInputField,
  TextareaField,
  Group
} from "evergreen-ui";

//@layout
import { I_ManualBus, I_ManualCreateType } from "@typings/assignment_type";
import { getAssignBusDDL } from "@services/assignment/getAssignmentDDL";
import { hours, minutes } from "@services/assignment/mock_data";
import dayjs from "dayjs";

//@components

interface I_AssignManualCreateProps {
  timeRef: any;
  handleAssignmentCarChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  showSecondTitle: any;
  data?: any;
  reloadData?: () => void;
}

function SecondCarAssignManualCreate({
  timeRef,
  handleAssignmentCarChange,
  showSecondTitle,
  createAssignData
}: I_AssignManualCreateProps) {
  let defaultValue: I_ManualBus | null = null;
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
    if (defaultValue && defaultValue?.bus_group) {
      handleBusGroupChange(defaultValue?.bus_group);
    }
    setLoading(false);
  }, []);

  const handleBusGroupChange = async (bus_group: any) => {
    const res = await getAssignBusDDL(bus_group);
    // setBusNameDDL(res.dataList[0].bus_options);
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
        <Group>
          <Select
            name="start_hours"
            // onClick={(e: any) => {
            //   handleAssignmentCarChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentCarChange(e);
            }}
            ref={timeRef}
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
            //   handleAssignmentCarChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentCarChange(e);
            }}
            ref={timeRef}
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
            //   handleAssignmentCarChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentCarChange(e);
            }}
            ref={timeRef}
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
            //   handleAssignmentCarChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentCarChange(e);
            }}
            ref={timeRef}
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
            //   handleAssignmentCarChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentCarChange(e);
            }}
            ref={timeRef}
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
            // onClick={(e: any) => {
            //   handleAssignmentCarChange(e);
            // }}
            onChange={(e: any) => {
              handleAssignmentCarChange(e);
            }}
            ref={timeRef}
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
          handleAssignmentCarChange(e);
        }}
        marginTop={16}
      />
    </FormSTY>
  );
}

export default SecondCarAssignManualCreate;
