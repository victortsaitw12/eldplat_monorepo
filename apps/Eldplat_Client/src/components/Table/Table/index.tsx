import React from "react";
import Link from "next/link";
import { DivSTY } from "./style";
import { TableSTY } from "./style";
import NoResult from "@components/NoResult";

export interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

export interface I_Table {
  titles: Array<string | number | React.ReactNode>;
  data?: I_Data[];
  onCheck?: (items: any) => void;
  noData?: { text?: string; link?: string };
  onView?: (items: any) => void;
  headNode?: React.ReactNode;
  footerNode?: React.ReactNode;
  className?: string;
}
/*
Must provide id field in the Data Array
*/
function Table({
  titles,
  data,
  onView,
  headNode,
  footerNode,
  className
}: I_Table) {
  const hasData = data !== undefined && data !== null && data.length > 0;

  // const groupedData: {[key: string]: Array<string>} = data?.reduce((res, item) => {

  //   if (Object.keys(item).indexOf("group") != -1) {
  //     const key = item[item.group as string] as string;
  //     if(!res[key]){
  //       res[key] = [];
  //     }
  //     res[key].push(item.id);
  //     return res;
  //   } else {
  //     return res;
  //   }
  // }, {});

  return (
    <>
      <DivSTY className={`${className || ""} container`}>
        {headNode && <header>{headNode}</header>}
        <TableSTY className="table">
          <thead>
            <tr>
              {titles.map((title, i) => (
                <th key={i}>
                  <div>{title}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, i) => {
              return (
                <tr
                  key={item.id + "-" + i}
                  onClick={onView ? () => onView(item.id) : undefined}
                >
                  {Object.keys(item).map((key) => {
                    if (key === "group")
                      return item.group.span > 0 && (<td className="group-cell" rowSpan={item.group.span}>
                        <div>{item[item.group.key]}</div>
                      </td>)
                    if (item.group && key == item.group.key) return;
                    if (key === "id") return;
                    if (key === "action")
                      return (
                        <td key={item.id + key}>
                          <div className="action">{item.action}</div>
                        </td>
                      );
                    if (!item[key])
                      return (
                        <td key={item.id + key}>
                          <span className="no-data">
                            <div />
                          </span>
                        </td>
                      );
                    return (
                      <td key={item.id + key}>
                        <div>
                          {key === "vendor_website" ? (
                            <Link
                              href={`${item.vendor_website}`}
                              legacyBehavior
                            >
                              <a>{item.vendor_name}</a>
                            </Link>
                          ) : (
                            item[key]
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </TableSTY>
        {footerNode && <footer>{footerNode}</footer>}
      </DivSTY>
      {hasData ? "" : <NoResult />}
    </>
  );
}

export default Table;
