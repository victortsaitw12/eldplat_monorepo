import Table from "@components/Table/TableWithEdit";
import React from "react";
import { getEmployeeTitle } from "@services/employee/getAllEmployee";
import { BodySTY } from "./style";
import TableWithEdit from "@components/Table/TableWithEdit";
//
interface I_EmployeeListType {
  [key: string]: any;
  deleteItemHandler: (id: string) => void;
  recoverItemHandler: (id: string) => void;
  goToCreatePage: () => void;
  goToEditPageHandler: (id: string) => void;
  goToDetailPageHandler: (id: string) => void;
}

function EmployeeList({
  listType,
  data,
  goToCreatePage,
  deleteItemHandler,
  recoverItemHandler,
  goToEditPageHandler,
  goToDetailPageHandler
}: I_EmployeeListType) {
  const employeeTitle = getEmployeeTitle();
  const customTableClass = [
    { label: "登入次數", value: "login_Times" },
    { label: "加入狀態", value: "invt_Status" }
  ];

  return (
    <BodySTY className="list-style">
      <TableWithEdit
        titles={employeeTitle}
        data={data}
        tableName="員工列表"
        goToCreatePage={goToCreatePage}
        // deleteItem={deleteItemHandler}
        // goToEditPage={goToEditPageHandler}
        {...(listType == "1" && {
          viewItem: (id) => {
            goToDetailPageHandler(id);
          },
          goToEditPage: (id) => {
            goToEditPageHandler(id);
          },
          deleteItem: (id) => {
            deleteItemHandler(id);
          }
        })}
        {...(listType == "2" && {
          recoverItem: (id) => {
            recoverItemHandler && recoverItemHandler(id);
          }
        })}
        customTableClass={customTableClass}
      />
    </BodySTY>
  );
}

export default EmployeeList;

{
  /* <Pane className="employee-list-title">
        <Heading>員工列表</Heading>
        <Button
          className="add-employee-btn"
          borderRadius="32px"
          marginY={8}
          marginRight={12}
          iconBefore={PlusIcon}
          onClick={() => {
            setAddEmployeeActive(true);
          }}
        >
          新增員工
        </Button>
      </Pane> */
}
