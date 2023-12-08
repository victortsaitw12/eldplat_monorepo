import React from "react";
import Link from "next/link";
import { DivSTY } from "./style";
import { TableSTY } from "./style";
import NoResult from "@components/NoResult";

export interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_Table {
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

  console.log("data", data);

  return (
    <>
      <DivSTY className={`${className || ""} container`}>
        {headNode && <header>{headNode}</header>}
        <TableSTY>
          <thead>
            <tr>
              {titles.map((title, i) => (
                <th key={i}>
                  <span>{title}</span>
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
