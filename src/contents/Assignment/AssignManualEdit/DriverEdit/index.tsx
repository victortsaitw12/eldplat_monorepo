import React, { useEffect, useState } from "react";
import { FormSTY } from "./style";
//@sevices
import { SelectField, Pane, Paragraph, TextareaField } from "evergreen-ui";

//@layout
import { getAssignDriverDDL } from "@services/assignment/getAssignmentDDL";
import { UpdateSingleAssignment } from "@services/assignment/UpdateSingleAssignment";
import { dashDate } from "@utils/convertDate";
import dayjs from "dayjs";
import { Label } from "@components/Button/Primary";
import { v4 as uuid } from "uuid";
import TimeInput from "@components/Timepicker/TimeInput";
import { getWeekName } from "@utils/convertDate";

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
  const [updateData, setUpdateData] = useState<any>(editData);

  const dateStrStart = React.useMemo(
    () => dayjs(editData.task_start_time).format("YYYY-MM-DD HH:mm"),
    [editData]
  );
  const dateStrEnd = React.useMemo(
    () => dayjs(editData.task_end_time).format("YYYY-MM-DD HH:mm"),
    [editData]
  );

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

  const handleTimeChange = React.useCallback(
    (type: "start" | "end", date: string) => {
      const newTime = dayjs(date).format("YYYY-MM-DDTHH:mm"); //"YYYY-MM-DDTHH:mm"
      const newData = { ...updateData };
      newData[`task_${type}_time`] = newTime;
      setUpdateData(newData);
    },
    []
  );

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
      bus_driver_no: updateData.driver_no,
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

  // if (loading || !editData)
  //   return (
  //     <Pane>
  //       <Spinner />
  //     </Pane>
  //   );

  return (
    <FormSTY>
      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Pane className="title">
          <Paragraph>
            {dayjs(dateStrStart).format("YYYY/MM/DD")}{" "}
            {getWeekName(dateStrStart)}
          </Paragraph>
          <Paragraph> 第0{editData.car_no}車 派工</Paragraph>
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
        <TimeInput
          date={dateStrStart}
          setDate={handleTimeChange.bind(null, "start")}
        />
      </Pane>

      <Pane className="time-area">
        <Paragraph>截止時間</Paragraph>
        <TimeInput
          date={dateStrEnd}
          setDate={handleTimeChange.bind(null, "end")}
        />
      </Pane>

      <TextareaField
        label="備註"
        name="remark"
        onChange={handleDataChange}
        marginTop={16}
        defaultValue={editData.remark}
      />
      <Label text="確定" onClick={handleUpdate}></Label>
    </FormSTY>
  );
}

export default DriverEdit;
