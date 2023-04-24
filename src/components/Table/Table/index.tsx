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
  // const [checkedItems, setCheckedItems] = useState<Array<string | number>>([]);

  // const handleCheck = (id: number | string) => {
  //   const updatedItems = [...checkedItems];
  //   console.log(updatedItems);
  //   const itemIdx = checkedItems.indexOf(id);

  //   if (itemIdx === -1) updatedItems.push(id);
  //   if (itemIdx >= 0) updatedItems.splice(itemIdx, 1);

  //   setCheckedItems(updatedItems);
  //   if (onCheck) onCheck(updatedItems);
  // };

  // const handleCheckAll = function (e: React.ChangeEvent<HTMLInputElement>) {
  //   if (!e.target?.checked) {
  //     setCheckedItems([]);
  //     if (onCheck) onCheck([]);
  //     return;
  //   }

  //   const ids = data?.map((item: any) => item.id);
  //   setCheckedItems(ids || []);
  //   if (onCheck) onCheck(ids);
  // };

  // const allChecked = data?.length === checkedItems.length;

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
        {data.map((item: any) => {
          return (
            <tr key={item.id}>
              {Object.keys(item).map((key) => {
                if (key === "id") return;

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
