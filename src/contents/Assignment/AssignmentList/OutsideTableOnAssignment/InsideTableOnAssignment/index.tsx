import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
  ErrorIcon,
  MoreIcon,
  Pane,
  PlusIcon
} from "evergreen-ui";
import TableActionButton from "@components/Table/TableActionButton";
// import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { IconLeft } from "@components/Button/Primary";
import { FormattedMessage } from "react-intl";
import { TableSTY, TableContainerSTY, StyledDot } from "./style";
import FinishBtn from "@contents/maintenance/Mission/MissionList/FinishBtn";
import { noButtonData } from "@components/Table/noButtonData";
import Collapse from "@components/Collapse";
import ProgressList from "@components/ProgressList";
import { mock_progressdata } from "@mock-data/adminOrders/mockData";
import { I_OpenTable } from "..";
import { I_SubAssignData } from "@typings/assignment_type";
import dayjs from "dayjs";
import { slashDate, timeWithAPM } from "@utils/convertDate";
//
interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_Table {
  tableName: string | any;
  idx: number;
  titles: Array<string | number | React.ReactNode> | any;
  data: I_Data[];
  subAssignData: I_SubAssignData[];
  isOpen?: I_OpenTable[];
  onCheck?: (items: any) => void;
  goToCreatePage?: () => void;
  goToEditPage?: (id: string, item: any) => void;
  viewItem?: (id: any, item: any) => void;
  // editItem?: (item: any) => void;
  deleteItem?: (item: any) => void;
}
/*
Must provide id field in the Data Array
*/
function InsideTableOnAssignment({
  tableName,
  idx,
  titles,
  data,
  subAssignData,
  isOpen,
  goToCreatePage,
  viewItem = (id, item) => {
    console.log(id, item);
  },
  goToEditPage = (id, item) => {
    console.log(id, item);
  },
  deleteItem = (item) => {
    console.log(item);
  }
}: I_Table) {
  console.log("🅰subAssignData", subAssignData);
  console.log("🅱data", data);
  console.log("🅾idx", idx);
  const [optionIsOpen, setOptionIsOpen] = useState<boolean>(false);

  if (!data) return <p>Loading</p>;
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
            <th>
              <span>操作</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {subAssignData[idx].map((item: I_SubAssignData, i: number) => {
            const startDate = slashDate(item.task_start_time);
            const startTime = timeWithAPM(item.task_start_time);
            const endTime = timeWithAPM(item.task_end_time);
            return (
              <>
                <tr key={uuid()}>
                  {i === 0 && (
                    <td rowSpan={subAssignData[idx].length}>
                      <td>
                        <div>{startDate}</div>
                      </td>
                    </td>
                  )}
                  {(i + 1) % 2 !== 0 && (
                    <td rowSpan={2}>
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
                    <div>{startTime}</div>
                  </td>
                  <td>
                    <div>{endTime}</div>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setOptionIsOpen((prev) => !prev);
                      }}
                    >
                      <MoreIcon />
                    </button>
                    {optionIsOpen && (
                      <div className="table-row-option">
                        <button
                          className="option-item"
                          onClick={() => {
                            setOptionIsOpen(false);
                          }}
                        >
                          <EditIcon size={14} />
                          <div>編輯</div>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              </>
            );
          })}
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