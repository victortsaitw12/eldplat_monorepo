import React from "react";
import dayjs from "dayjs";
import { TableSTY, TableContainerSTY } from "./style";

import { I_AssignData } from "@typings/assignment_type";
import { slashDate, timeWithAPM } from "@utils/convertDate";
import EditBtn from "./EditBtn";
import { getSubAssignmentTitle } from "@services/assignment/getAllAssignment";

//
interface I_Data {
  [key: string]: string | number | React.ReactNode | any;
}

interface I_Props {
  orderData: I_Data;
  assignData: I_AssignData[];
  handleAssignEdit: (item: any) => void;
  isOrderItem: boolean;
  viewItem?: (id: any, item: any) => void;
  editItem?: (item: any) => void;
  deleteItem?: (item: any) => void;
}

const titles = getSubAssignmentTitle();

/*
Must provide id field in the Data Array
*/
function InsideTableOnAssignment({
  orderData,
  assignData,
  handleAssignEdit,
  isOrderItem
}: I_Props) {
  // console.log("🅰assignData", assignData);
  // console.log("🅱orderData", orderData);
  const sortArr = (defaultArr: I_AssignData[]) => {
    const old = [...defaultArr];
    old.sort((a: any, b: any) => {
      const dateA: any = new Date(a.task_start_time);
      const dateB: any = new Date(b.task_start_time);
      return dateA - dateB || a.bus_day_number - b.bus_day_number;
    });

    const a: any = {};
    //把同一天的派車資訊放在一起
    old.forEach((ele: any, i) => {
      const date: string = dayjs(ele.task_start_time).format("YYYY/DD/MM");
      if (!a[date]) {
        a[date] = [ele];
      } else if (a[date].length > 0) {
        a[date].push(ele);
      }
    });
    //針對第一車or第二車排好
    Object.keys(a).forEach((ele) => {
      a[ele] = a[ele].sort((a: any, b: any) => {
        return a.bus_day_number - b.bus_day_number;
      });
    });
    let resultArr: any[] = [];
    Object.keys(a).forEach((ele) => {
      if (resultArr.length > 0) {
        resultArr = resultArr.concat(a[ele]);
      } else {
        resultArr = [...a[ele]];
      }
    });
    return resultArr as I_AssignData[];
  };

  assignData = sortArr(assignData);

  if (!orderData) return <p>Loading</p>;

  return (
    <TableContainerSTY className="TableContainerSTY">
      <TableSTY>
        <thead>
          <tr>
            {titles.map((title: any, i: number) => {
              if (title === "id") {
                return;
              }
              return (
                <th key={`assign-th-${i}`}>
                  <span>{title}</span>
                </th>
              );
            })}
            {isOrderItem && (
              <th>
                <span className="table-action">操作</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {assignData.map(
            (item: I_AssignData, i: number, arr: I_AssignData[]) => {
              const startDate = slashDate(item.task_start_time);
              const startTime = timeWithAPM(item.task_start_time);
              const endTime = timeWithAPM(item.task_end_time);

              arr = sortArr(arr);

              return (
                <tr key={`assign-tr-${i}`}>
                  {(i === 0 ||
                    dayjs(item.task_start_time).date() !==
                      dayjs(arr[i - 1].task_start_time).date()) && (
                    <td
                      rowSpan={
                        arr.filter(
                          (arrItem) =>
                            dayjs(arrItem.task_start_time).date() ===
                            dayjs(item.task_start_time).date()
                        ).length
                      }
                    >
                      <div>{startDate}</div>
                    </td>
                  )}
                  {(i === 0 ||
                    dayjs(item.task_start_time).date() !==
                      dayjs(arr[i - 1].task_start_time).date() ||
                    item.bus_day_number !== arr[i - 1].bus_day_number) && (
                    <td
                      rowSpan={
                        arr.filter(
                          (arrItem) =>
                            arrItem.bus_day_number === item.bus_day_number &&
                            dayjs(arrItem.task_start_time).date() ===
                              dayjs(item.task_start_time).date()
                        ).length
                      }
                      className="busDayCol"
                    >
                      <div>第{item.bus_day_number}車</div>
                    </td>
                  )}
                  <td>
                    <div>{item.assignment_no}</div>
                  </td>
                  <td>
                    <div>{item.bus_group_name}</div>
                  </td>
                  <td>
                    <div>{item.bus_name}</div>
                  </td>
                  <td>
                    <div>{item.license_plate}</div>
                  </td>
                  <td>
                    <div>{item.driver_name}</div>
                  </td>
                  <td>
                    <div>{startTime}</div>
                  </td>
                  <td>
                    <div>{endTime}</div>
                  </td>
                  {isOrderItem && (
                    <td>
                      <EditBtn item={item} editItem={handleAssignEdit} />
                    </td>
                  )}
                </tr>
              );
            }
          )}
        </tbody>
      </TableSTY>
    </TableContainerSTY>
  );
}

export default InsideTableOnAssignment;
