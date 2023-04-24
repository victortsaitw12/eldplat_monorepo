import Table from "@components/Table/TableWithEdit";
import { Pane, Button, Heading, PlusIcon, Checkbox } from "evergreen-ui";
import React, { useEffect } from "react";
import { getEmployeeTitle } from "@services/employee/getAllEmployee";
import { MOCK_LIST_TITLES } from "./data";
import { BodySTY } from "./style";
//
interface I_EmployeeListType {
  [key: string]: any;

  goToCreatePage: () => void;
}

function EmployeeList({ data, goToCreatePage }: I_EmployeeListType) {
  const employeeTitle = getEmployeeTitle();
  return (
    <BodySTY className="list-style">
      <Table
        titles={employeeTitle}
        data={data}
        tableName="員工列表"
        goToCreatePage={goToCreatePage}
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
