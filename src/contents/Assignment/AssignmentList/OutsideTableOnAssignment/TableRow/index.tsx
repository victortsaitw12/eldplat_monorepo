import React, { useState } from "react";
import { Pane, ChevronDownIcon, ChevronUpIcon } from "evergreen-ui";

import InsideTableOnAssignment from "../InsideTableOnAssignment";
import { I_Data } from "..";
import { getSubAssignmentTitle } from "@services/assignment/getAllAssignment";
import AdditionalVehicleBtn from "@contents/Assignment/AssignmentAdditional/AdditionalVehicleBtn";
import AdditionalDriverBtn from "@contents/Assignment/AssignmentAdditional/AdditionalDriverBtn";
import { StyledTr } from "./style";
interface I_TableRow {
  idx: number;
  item: any;
  //   titles: Array<string | number | React.ReactNode> | any;
  data: I_Data[];
  subAssignData: any;
  goToCreatePage?: () => void;
  goToEditPage?: (item: any) => void;
  viewItem?: (id: any, item: any) => void;
  deleteItem?: (item: any) => void;
  setOrderInfo: (t: any) => void;
  setFirstDrawerOpen: (v: string) => void;
}

const TableRow = ({
  idx,
  item,
  data,
  subAssignData,
  goToCreatePage,
  viewItem = (id, item) => {
    console.log(id, item);
  },
  goToEditPage = (item: any) => {
    console.log("EDIT");
  },
  deleteItem = (item) => {
    console.log(item);
  },
  setOrderInfo,
  setFirstDrawerOpen
}: I_TableRow) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const id = data[idx].maintenance_quote_no.value;
  const titles = getSubAssignmentTitle();

  const handleInsideTableOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <tr>
        {Object.keys(item).map((key) => {
          if (key === "id") return;
          if (!item[key].label) {
            return (
              <td key={item.id + key}>
                <span className="no-data">
                  <div />
                </span>
              </td>
            );
          }
          return (
            <>
              <td key={item.id + key}>
                <div className="data-row">
                  <div>{item[key].label}</div>
                </div>
              </td>
            </>
          );
        })}
        <td>
          {isOpen ? (
            <ChevronUpIcon onClick={handleInsideTableOpen} cursor="pcointer" />
          ) : (
            (item.maintenance_quote_no.value.substring(0, 3) === "MTC" ||
              subAssignData[idx].length !== 0) && (
              <ChevronDownIcon
                onClick={handleInsideTableOpen}
                cursor="pointer"
              />
            )
          )}
        </td>
      </tr>
      {isOpen && (
        <StyledTr>
          <td className="detailTable" colSpan={8}>
            <Pane className="additionalBtns">
              <AdditionalVehicleBtn
                // id={v.maintenance_quote_no.value}
                id={id}
                setOrderInfo={setOrderInfo}
                setFirstDrawerOpen={() => setFirstDrawerOpen("additionalCar")}
              />
              <AdditionalDriverBtn
                // id={v.maintenance_quote_no.value}
                id={id}
                setOrderInfo={setOrderInfo}
                setFirstDrawerOpen={() =>
                  setFirstDrawerOpen("additionalDriver")
                }
              />
            </Pane>
            <InsideTableOnAssignment
              tableName="派單"
              idx={idx}
              titles={titles}
              data={data}
              subAssignData={subAssignData}
              goToCreatePage={goToCreatePage}
              deleteItem={deleteItem}
              goToEditPage={goToEditPage}
              viewItem={viewItem}
            />
          </td>
        </StyledTr>
      )}
    </>
  );
};

export default TableRow;
