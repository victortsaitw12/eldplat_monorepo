import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { TableSTY, TableContainerSTY } from "./style";
import { I_OpenTable } from "..";
import { I_SubAssignData } from "@typings/assignment_type";
import dayjs from "dayjs";
import { dateDiff, slashDate, timeWithAPM } from "@utils/convertDate";
import EditBtn from "./EditBtn";

//
interface I_Data {
  [key: string]: string | number | React.ReactNode | any;
}

interface I_Table {
  tableName: string | any;
  idx: number;
  titles: Array<string | number | React.ReactNode> | any;
  assignData: I_Data[];
  subAssignData: I_SubAssignData[];
  isOpen?: I_OpenTable[];
  onCheck?: (items: any) => void;
  goToCreatePage?: () => void;
  goToEditPage?: (item: any) => void;
  viewItem?: (id: any, item: any) => void;
  // editItem?: (item: any) => void;
  deleteItem?: (item: any) => void;
}
/*
Must provide id field in the Data Array
*/
function InsideTableOnAssignment({
  idx,
  titles,
  assignData,
  subAssignData,

  goToEditPage = (item: any) => {
    console.log("EDIT");
  }
}: I_Table) {
  console.log("🅰subAssignData", subAssignData);
  console.log("🅱assignData", assignData);
  console.log("🅾idx", idx);
  // const [optionIsOpen, setOptionIsOpen] = useState<boolean>(false);

  if (!assignData) return <p>Loading</p>;
  return (
    <TableContainerSTY className="TableContainerSTY">
      <TableSTY>
        <thead>
          <tr>
            {titles.map((title: any) => {
              if (title === "id") {
                return;
              }
              return (
                <th key={uuid()}>
                  <span>{title}</span>
                </th>
              );
            })}
            {assignData[idx].maintenance_quote_no?.value.substring(0, 3) !==
              "MTC" && (
              <th>
                <span className="table-action">操作</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {subAssignData[idx].map(
            (item: I_SubAssignData, i: number, arr: I_SubAssignData[]) => {
              const startDate = slashDate(item.task_start_time);
              const startTime = timeWithAPM(item.task_start_time);
              const endTime = timeWithAPM(item.task_end_time);

              const dayCount =
                dateDiff(
                  assignData[idx]?.task_start_time?.label,
                  assignData[idx]?.task_end_time?.label
                ) + 1;

              arr.sort((a, b) => {
                const dateA: any = new Date(a.task_start_time);
                const dateB: any = new Date(b.task_start_time);

                return dateA - dateB || a.bus_day_number - b.bus_day_number;
              });

              return (
                <>
                  <tr key={uuid()}>
                    {/* // TODO 暫以原<tr>修改bug, 可以改成用grid方式處理或請後端調整response結構 */}
                    {/* {i % Math.ceil(arr.length / dayCount) === 0 && ( */}
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
                        {/* <td rowSpan={Math.ceil(arr.length / dayCount)}> */}
                        <div>{startDate}</div>
                      </td>
                    )}
                    {/* {(i + 1) % 2 !== 0 && ( */}
                    {(i === 0 ||
                      dayjs(item.task_start_time).date() !==
                        dayjs(arr[i - 1].task_start_time).date() ||
                      item.bus_day_number !== arr[i - 1].bus_day_number) && (
                      // <td rowSpan={2}>
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
                    {assignData[idx].maintenance_quote_no?.value.substring(
                      0,
                      3
                    ) !== "MTC" && (
                      <td>
                        <EditBtn item={item} goToEditPage={goToEditPage} />
                      </td>
                    )}
                  </tr>
                </>
              );
            }
          )}
        </tbody>
      </TableSTY>
    </TableContainerSTY>
  );
}

export default InsideTableOnAssignment;

// {subAssignData?.map((item: any) => {
//   console.log("item in inside table", item);
//   {
//     item.length !== 0 ? (
//       item.map((v: any) => {
//         console.log("v", v);
//         console.log("Object.keys(v)", Object.keys(v));
//         return (
//           <tr key={uuid()}>
//             {Object.keys(v).map((key) => {
//               console.log("key", key);
//               console.log("v[key]", v[key]);
//               // if (key === "id") return;

//               if (!v[key]) {
//                 console.log("777");
//                 return (
//                   <td key={v.assignment_no + key}>
//                     <span className="no-data">
//                       <div />
//                     </span>
//                   </td>
//                 );
//               }
//               return (
//                 <>
//                   <td key={v.assignment_no + key}>
//                     <div className="data-row">
//                       <div>{v[key]}</div>
//                     </div>
//                   </td>
//                 </>
//               );
//             })}
//             {/* <td>
//               <TableActionButton
//                 onView={viewItem.bind(null, v.id?.value)}
//                 onEdit={goToEditPage.bind(null, v.id?.value)}
//                 onDelete={deleteItem.bind(null, v.id?.value)}
//               />
//             </td> */}
//           </tr>
//         );
//       })
//     ) : (
//       <tr className="noDataShown">
//         <td>查無資料</td>
//       </tr>
//     );
//   }
// })}
