import React, { useState } from "react";
import { Pane, ChevronDownIcon, ChevronUpIcon, Spinner } from "evergreen-ui";

import InsideTableOnAssignment from "../InsideTableOnAssignment";
import { I_Data } from "..";
import { I_AssignData } from "@typings/assignment_type";
import AdditionalVehicleBtn from "@contents/Assignment/AssignmentAdditional/AdditionalVehicleBtn";
import AdditionalDriverBtn from "@contents/Assignment/AssignmentAdditional/AdditionalDriverBtn";
import { StyledTr } from "./style";
import { I_FirstDrawer } from "@contents/Assignment/AssignmentDrawers";

interface I_TableRow {
  orderData: I_Data;
  assignData: I_AssignData[];
  handleAssignCreate: (type: I_FirstDrawer, id: string) => void;
  handleAssignEdit: (item: any) => void;
  viewItem?: (id: any, item: any) => void;
  editItem?: (item: any) => void;
  deleteItem?: (item: any) => void;
}

const TableRow = ({
  orderData,
  assignData,
  handleAssignCreate,
  handleAssignEdit
}: I_TableRow) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const id = orderData.maintenance_quote_no.value;
  const isOrderItem =
    orderData.maintenance_quote_no.value.substring(0, 3) === "ORD";
  const handleInsideTableOpen = () => setIsOpen(!isOpen);

  if (!orderData)
    return (
      <tr>
        <Spinner />
      </tr>
    );

  return (
    <>
      <tr>
        {Object.keys(orderData).map((key) => {
          if (key === "id") return;
          if (!orderData[key]?.label) {
            return (
              <td key={orderData.id + key}>
                <span className="no-data">
                  <div />
                </span>
              </td>
            );
          }
          return (
            <td key={orderData.id + key}>
              <div className="data-row">
                <div>{orderData[key]?.label}</div>
              </div>
            </td>
          );
        })}
        <td>
          {isOpen ? (
            <ChevronUpIcon onClick={handleInsideTableOpen} cursor="pointer" />
          ) : (
            (!isOrderItem || assignData.length !== 0) && (
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
            {isOrderItem && (
              <Pane className="additionalBtns">
                <AdditionalVehicleBtn
                  id={id}
                  onBtnClick={handleAssignCreate.bind(null, "additionalCar")}
                />
                <AdditionalDriverBtn
                  id={id}
                  onBtnClick={handleAssignCreate.bind(null, "additionalDriver")}
                />
              </Pane>
            )}
            <InsideTableOnAssignment
              orderData={orderData}
              assignData={assignData}
              handleAssignEdit={handleAssignEdit}
              isOrderItem={isOrderItem}
            />
          </td>
        </StyledTr>
      )}
    </>
  );
};

export default TableRow;
