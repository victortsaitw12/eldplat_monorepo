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

import {
  getAssignBusDDL,
  getAssignDriverDDL
} from "@services/assignment/getAssignmentDDL";
import { hours, minutes } from "@services/assignment/mock_data";
import { UpdateSingleAssignment } from "@services/assignment/UpdateSingleAssignment";
import { getOrderDates } from "@services/assignment/getOrderDates";
import { dashDate } from "@utils/convertDate";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { Label } from "@components/Button/Primary";
import { v4 as uuid } from "uuid";

interface I_AssignManualCreateProps {
  editData: any;
  refetch?: () => void;
}

function DriverEdit({ editData, refetch }: I_AssignManualCreateProps) {
  const [loading, setLoading] = useState(false);
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "00", bus_group_name: "請選擇" }
  ]);
  const [driverNameDDL, setDriverNameDDL] = useState<any>(null);
  const [weekdayName, setWeekdayName] = useState<string>("");
  const [updateData, setUpdateData] = useState<any>(editData);

  // 時間處理:
  const startHour = dayjs(editData.task_start_time).format("hh");
  const startMinute = dayjs(editData.task_start_time).format("mm");
  const [startTime, setStartTime] = useState<any>({
    start_hours: startHour,
    start_minutes: startMinute,
    start_type:
      Number(dayjs(editData.task_start_time).format("HH")) > 12 ? "pm" : "am"
  });
  const endHour = dayjs(editData.task_end_time).format("hh");
  const endMinute = dayjs(editData.task_end_time).format("mm");
  const [endTime, setEndTime] = useState<any>({
    end_hours: endHour,
    end_minutes: endMinute,
    end_type:
      Number(dayjs(editData.task_end_time).format("HH")) > 12 ? "pm" : "am"
  });

  // 一進來先抓DDL和資料庫原本儲存的資料
  useEffect(() => {
    setLoading(true);
    const getDriverData = async () => {
      setLoading(true);
      // 一進來先看如果有editData的話就先設好預設要顯示的資料
      if (editData) {
        const busName = await getAssignDriverDDL(editData.bus_group);
        const newBusName = busName?.dataList[0]?.driver_options?.filter(
          (v: { driver_no: string }) => v.driver_no === editData.driver_no
        );
        setDriverNameDDL(newBusName);
      }
      try {
        const res = await getAssignDriverDDL();
        setBusGroupDDL([
          // {
          //   bus_group: editData.bus_group,
          //   bus_group_name: editData.bus_group_name
          // },
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

  const handleBusGroupChange = async (e: any) => {
    const res = await getAssignDriverDDL(e.target.value);
    setDriverNameDDL([
      { driver_no: "00", user_name: "請選擇" },
      ...res.dataList[0].driver_options
    ]);
  };

  const weekday = async () => {
    // 打API取得從起始日期到回程日期有的每一天日期和周幾
    const result = await getOrderDates(
      editData.task_start_date,
      editData.task_end_date
    );

    setWeekdayName(result.dataList[0].order_date_options[0].order_weekday);
    // const day = result.dataList[0].order_date_options.find((v) => {
    //   return dayjs(v.order_date).format("YYYY/MM/DD") === orderItem.date;
    // });
  };
  weekday();

  // 時間變動
  const handleTimeChange = (e: any) => {
    // START TIME
    if (e.target.name === "start_hours") {
      setStartTime((prev: any) => {
        return { ...prev, start_hours: e.target.value };
      });
    } else if (e.target.name === "start_minutes") {
      setStartTime((prev: any) => {
        return { ...prev, start_minutes: e.target.value };
      });
    } else if (e.target.name === "start_type") {
      setStartTime((prev: any) => {
        return { ...prev, start_type: e.target.value };
      });
    }
    // END TIME
    if (e.target.name === "end_hours") {
      setEndTime((prev: any) => {
        return { ...prev, end_hours: e.target.value };
      });
    } else if (e.target.name === "end_minutes") {
      setEndTime((prev: any) => {
        return { ...prev, end_minutes: e.target.value };
      });
    } else if (e.target.name === "end_type") {
      setEndTime((prev: any) => {
        return { ...prev, end_type: e.target.value };
      });
    }
  };

  // 時間有變動時就將重組好的時間格式設回大物件
  useEffect(() => {
    const newData = { ...updateData };
    const newStartTime = `${dashDate(editData.task_start_time)}T${
      startTime.start_type === "pm"
        ? ((Number(startTime.start_hours) % 12) + 12)
            .toString()
            .padStart(2, "0")
        : ((Number(startTime.start_hours) % 12) + 0).toString().padStart(2, "0")
    }:${startTime.start_minutes}`;
    const newEndTime = `${dashDate(editData.task_end_time)}T${
      endTime.end_type === "pm"
        ? ((Number(endTime.end_hours) % 12) + 12).toString().padStart(2, "0")
        : ((Number(endTime.end_hours) % 12) + 0).toString().padStart(2, "0")
    }:${endTime.end_minutes}`;
    newData["task_start_time"] = newStartTime;
    newData["task_end_time"] = newEndTime;
    setUpdateData(newData);
  }, [editData, startTime, endTime]);

  // 時間以外的下拉變動
  const handleDataChange = (e: any) => {
    const newData = { ...updateData };
    newData[e.target.name] = e.target.value;
    setUpdateData(newData);
  };

  // 按下確定 => 更新
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const { assignment_no, bus_group, task_start_time, task_end_time, remark } =
      updateData;
    const newUpdateData = {
      assignment_no,
      bus_group,
      bus_driver_no:
        updateData.assign_type === "派車"
          ? updateData.bus_no
          : updateData.driver_no,
      task_start_time,
      task_end_time,
      remark
    };
    try {
      const res = await UpdateSingleAssignment(newUpdateData);
      console.log("res for update assignment: ", res);
    } catch (e: any) {
      console.log("error for update assignment: ", e);
    }
    refetch && refetch();
    console.log("newUpdateData", newUpdateData);
  };

  console.log("updateData in 派工", updateData);

  return (
    <FormSTY>
      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Pane className="title">
          <Paragraph>
            {dayjs(editData.task_start_time).format("YYYY/MM/DD")} {weekdayName}
          </Paragraph>
          <Paragraph>
            {" "}
            第0{editData.car_no}車 {editData.assign_type}
          </Paragraph>
        </Pane>
        <Paragraph>{editData.assignment_no}</Paragraph>
      </Pane>

      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車隊
          </div>
        }
        name="bus_group"
        value={updateData?.bus_group}
        onClick={handleBusGroupChange}
        onChange={handleDataChange}
      >
        {busGroupDDL?.map(
          (item: { bus_group: string; bus_group_name: string }) => {
            return (
              <option
                key={uuid()}
                value={item.bus_group}
                selected={item.bus_group === editData.bus_group}
              >
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
        value={updateData?.driver_no}
        onChange={handleDataChange}
      >
        {driverNameDDL?.map((item: any) => {
          return (
            <option key={uuid()} value={item.driver_no}>
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
            onClick={handleTimeChange}
            defaultValue={startHour}
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
            onClick={handleTimeChange}
            defaultValue={startMinute}
          >
            {minutes().map((item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Select
            name="start_type"
            onClick={handleTimeChange}
            defaultValue={
              dayjs(editData.task_start_time).format("a")
              // Number(dayjs(editData.task_start_time).format("HH")) > 12
              //   ? "pm"
              //   : "am"
            }
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </Select>
        </Group>
      </Pane>

      <Pane className="time-area">
        <Paragraph>截止時間</Paragraph>
        <Group>
          <Select
            name="end_hours"
            onClick={handleTimeChange}
            defaultValue={endHour}
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
            onClick={handleTimeChange}
            defaultValue={endMinute}
          >
            {minutes().map((item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Select
            name="end_type"
            onClick={handleTimeChange}
            defaultValue={
              dayjs(editData.task_end_time).format("a")
              // Number(dayjs(editData.task_end_time).format("HH")) > 12
              //   ? "pm"
              //   : "am"
            }
          >
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </Select>
        </Group>
      </Pane>

      <TextareaField
        label="備註"
        name="remark"
        onChange={(e: any) => {
          handleDataChange(e);
        }}
        marginTop={16}
        defaultValue={editData.remark}
      />
      <Label text="確定" onClick={handleUpdate}></Label>
    </FormSTY>
  );
}

export default DriverEdit;
