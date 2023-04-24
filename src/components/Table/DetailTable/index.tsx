import React from "react";
import { DetailTableSTY } from "./style";

interface I_Data {
  [key: string]: string | number | React.ReactNode;
}

interface I_DetailTable {
  title?: string;
  data?: I_Data;
  titles?: string[];
}

const capitalize = (str: string) => {
  const capitalized = str.split("");
  capitalized[0] = capitalized[0].toUpperCase();
  return capitalized.join("");
};

function DetailTable({ title, titles, data }: I_DetailTable) {
  return (
    <DetailTableSTY className="detail-table">
      {title && <h3>{title}</h3>}
      {data && (
        <table>
          <tbody>
            {Object.keys(data)?.map((key, i) => {
              if (key === "id") return;

              return (
                <tr key={key}>
                  {titles ? (
                    <th>
                      <span>{titles[i]}</span>
                    </th>
                  ) : (
                    <th>
                      <span>{capitalize(key)}</span>
                    </th>
                  )}

                  {!data[key] ? (
                    <td key={key}>
                      <span className="no-data">
                        <div />
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span>{data[key]}</span>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </DetailTableSTY>
  );
}

export default DetailTable;
