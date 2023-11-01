import React, { useState } from "react";
import Link from "next/link";
import { TableSTY } from "./style";

export interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_Table {
  titles: Array<string | number | React.ReactNode>;
  data?: I_Data[];
  onCheck?: (items: any) => void;
  noData?: { text?: string; link?: string };
}
/*
Must provide id field in the Data Array
*/
function Table({ titles, data }: I_Table) {
  if (!data) return <p>Loading</p>;

  return (
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
        {data.map((item: any, i) => {
          return (
            <tr key={item.id + "-" + i}>
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
                    <span>
                      {key === "vendor_website" ? (
                        <Link href={`${item.vendor_website}`} legacyBehavior>
                          <a>{item.vendor_name}</a>
                        </Link>
                      ) : (
                        item[key]
                      )}
                    </span>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </TableSTY>
  );
}

export default Table;
