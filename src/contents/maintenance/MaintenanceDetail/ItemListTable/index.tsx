import React, { useState } from "react";
import {
  ErrorIcon,
  Pane,
  PlusIcon,
  TextInput,
  TrashIcon,
  Text
} from "evergreen-ui";
import TableActionButton from "@components/Table/TableActionButton";
import { v4 as uuid } from "uuid";
import { IconLeft } from "@components/Button/Primary";
import { FormattedMessage } from "react-intl";
import { TableSTY, TableContainerSTY } from "./style";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { textValidation } from "@utils/inputValidation";
//
interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_Table {
  titles?: Array<string | number | React.ReactNode>;
  data?: I_Data[];
  control: Control<any>;
  register: UseFormRegister<any>;
  isEdit?: boolean;
  arrayName: string;
}
/*
Must provide id field in the Data Array
*/
function ItemListTable({
  titles,
  data,
  control,
  register,
  isEdit = false,
  arrayName
}: I_Table) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: arrayName
  });

  // if (!data) return <p>Loading</p>;
  return (
    <TableContainerSTY className="TableContainerSTY">
      {/* 新增按鈕 */}
      {isEdit && (
        <Pane className="add-invoice">
          <IconLeft
            text="新增發票"
            onClick={(e) => {
              e.preventDefault();
              append({
                no: null,
                // files:null,
                receipt_number: "",
                price: 0,
                service_remark: ""
              });
            }}
          >
            <PlusIcon />
          </IconLeft>
        </Pane>
      )}

      {/* 表格開始 */}
      <TableSTY>
        <thead>
          <tr>
            {titles?.map((title, i) => {
              if (title === "id") {
                return;
              }
              return (
                <th key={uuid()}>
                  <span>{title}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {fields.length !== 0 ? (
            fields.map((item: any, index) => {
              const invoiceItem = [
                {
                  keyName: "receipt_number",
                  value: item.receipt_number || "---",
                  editEle: [
                    <TextInput
                      key={`${arrayName}.${index}.receipt_number`}
                      {...register(`${arrayName}.${index}.receipt_number`)}
                    />
                  ]
                },
                // {
                //   keyName: "files",
                //   value: item.files || "---",
                //   editEle: [
                //     <TextInput
                //       key={`${arrayName}.${index}.files`}
                //       {...register(`${arrayName}.${index}.files`)}
                //     />
                //   ]
                // },
                {
                  keyName: "price",
                  value: item.price || "---",
                  editEle: [
                    <TextInput
                      key={`${arrayName}.${index}.price`}
                      {...register(`${arrayName}.${index}.price`)}
                    />
                  ]
                },
                {
                  keyName: "service_remark",
                  value: item.service_remark || "---",
                  editEle: [
                    <TextInput
                      key={`${arrayName}.${index}.service_remark`}
                      {...register(`${arrayName}.${index}.service_remark`)}
                    />
                  ]
                }
              ];
              return (
                <tr key={uuid()} className="invoice">
                  {invoiceItem.map((v) => {
                    return (
                      <td key={uuid()}>
                        {isEdit ? (
                          <TextInput
                            disabled={v.keyName === "files" && true}
                            key={`${arrayName}.${index}.${v.keyName}`}
                            {...register(`${arrayName}.${index}.${v.keyName}`)}
                          />
                        ) : (
                          <Text>{v.value}</Text>
                        )}
                      </td>
                    );
                  })}
                  {isEdit && index !== 0 && (
                    <button className="delete" onClick={() => remove(index)}>
                      <TrashIcon size={20} marginX={12} marginTop={16} />
                    </button>
                  )}
                </tr>
              );
            })
          ) : (
            <div className="noDataShown">
              <div>查無資料</div>
            </div>
          )}
        </tbody>
      </TableSTY>
    </TableContainerSTY>
  );
}

export default ItemListTable;

// {data.length !== 0 ? (
//   data.map((item: any) => {
//     return (
//       <tr key={uuid()}>

//         {Object.keys(item).map((key) => {
//           if (key === "id") return;

//           if (!item[key].label) {
//             return (
//               <td key={item.id + key}>
//                 <span className="no-data">
//                   <div />
//                 </span>
//               </td>
//             );
//           }
//           return (
//             <td key={item.id + key}>
//               <div className="data-row">
//                 <div>{item[key].label}</div>
//               </div>
//             </td>
//           );
//         })}
//         <td>
//           <TableActionButton
//             onView={viewItem.bind(null, item.id.value)}
//             onEdit={goToEditPage.bind(null, item.id.value)}
//             onDelete={deleteItem.bind(null, item.id.value)}
//           />
//         </td>
//       </tr>
//     );
//   })
// ) : (
//   <div className="noDataShown">
//     <div>查無資料</div>
//   </div>
// )}
