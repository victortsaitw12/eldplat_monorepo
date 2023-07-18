import React from "react";
import {
  Pane,
  PlusIcon,
  TextInput,
  TrashIcon,
  Text,
  FileCard,
  FileUploader,
  Icon,
  DocumentIcon
} from "evergreen-ui";
import { v4 as uuid } from "uuid";
import { IconLeft } from "@components/Button/Primary";
import { TableSTY, TableContainerSTY } from "./style";
import {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray
} from "react-hook-form";
import InvoiceFile from "./InvoiceFile";
import Link from "next/link";
import { useRouter } from "next/router";
//
interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_Table {
  titles?: { label: string; value: string }[];
  data?: I_Data[];
  control: Control<any>;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  isEdit?: boolean;
  arrayName: string;
}
/*
Must provide id field in the Data Array
*/
function ItemListTable({
  titles,
  control,
  register,
  isEdit = false,
  arrayName,
  setValue,
  getValues
}: I_Table) {
  const router = useRouter();
  const { fields, append, remove } = useFieldArray({
    control,
    name: arrayName
  });

  const handleFiles = (item: any) => {
    // const url = item.receipt_url.replace(/\/{2,}/g, "/");
    window.open(`http:${item.receipt_url}`, "_blank");
    // router.push("http://hv-ha003004:5000/sharing/bGCYARrfm");
  };

  console.log("fields", fields);
  console.log("arrayName", arrayName);
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
                // receipt_url: "",
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
            {titles?.map((title, idx) => {
              if (title.value === "delete" && !isEdit) {
                return;
              }
              return (
                <th key={uuid()}>
                  <span className={`${title.value}`}>{title.label}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {fields.length !== 0 ? (
            fields.map((item: any, index) => {
              console.log("invoice item", item);
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
                {
                  keyName: "receipt_url",
                  value: item.receipt_url || "---",
                  editEle: [
                    // <TextInput
                    //   key={`${arrayName}.${index}.receipt_url`}
                    //   {...register(`${arrayName}.${index}.receipt_url`)}
                    // />
                  ]
                },
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
                          v.keyName === "receipt_url" ? (
                            <InvoiceFile
                              register={register}
                              arrayName={arrayName}
                              setValue={setValue}
                              getValues={getValues}
                              index={index}
                              keyName={`${arrayName}.${index}.${v.keyName}`}
                            />
                          ) : (
                            <TextInput
                              // disabled={v.keyName === "receipt_url" && true}
                              // type={v.keyName === "receipt_url" && "file"}
                              className={v.keyName}
                              key={`${arrayName}.${index}.${v.keyName}`}
                              {...register(
                                `${arrayName}.${index}.${v.keyName}`
                              )}
                            />
                          )
                        ) : v.keyName === "receipt_url" ? (
                          <DocumentIcon
                            className="receipt_url"
                            onClick={() => {
                              handleFiles(item);
                            }}
                            cursor="pointer"
                          ></DocumentIcon>
                        ) : (
                          <Text className={v.keyName}>{v.value}</Text>
                        )}
                      </td>
                    );
                  })}
                  {isEdit && (
                    <td>
                      <button className="delete" onClick={() => remove(index)}>
                        <TrashIcon size={20} marginX={12} marginTop={16} />
                      </button>
                    </td>
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
