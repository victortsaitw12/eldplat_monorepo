import React from "react";
import { getEmployeeTitle } from "@services/employee/getAllEmployee";
import { BodySTY } from "./style";
import TableWithEdit from "@components/Table/TableWithEdit";
import { I_PageInfo } from "@components/PaginationField";
import StatusIconWithText from "@components/StatusIconWithText";
import FirstNameIcon from "@components/FirstNameIcon";
import Link from "next/link";
//
interface I_EmployeeListType {
  [key: string]: any;
  deleteItemHandler: (id: string) => void;
  recoverItemHandler: (id: string) => void;
  goToCreatePage: () => void;
  goToEditPageHandler: (id: string) => void;
  goToDetailPageHandler: (id: string) => void;
  handlePageChange: (pageQuery: I_PageInfo) => void;
}
const customTableClass = [
  { label: "登入次數", value: "login_count" },
  { label: "加入狀態", value: "user_status" }
];
function EmployeeList({
  listType,
  data,
  goToCreatePage,
  deleteItemHandler,
  recoverItemHandler,
  goToEditPageHandler,
  goToDetailPageHandler,
  pageInfo,
  handlePageChange
}: I_EmployeeListType) {
  const employeeTitle = getEmployeeTitle();
  const employeeData = data.map((item: any) => {
    item["user_status"] = {
      label: (
        <StatusIconWithText status={"01"}>
          {item["user_status"].value}
        </StatusIconWithText>
      ),
      value: item["user_status"].value
    };
    item["user_name"] = {
      label: (
        <Link
          className="anchor"
          href={`/employee/detail/${item.id.value}?editPage=view`}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center"
            }}
          >
            <FirstNameIcon text={item["user_name"].value.slice(0, 1)} />
            {item["user_name"].value}
          </div>
        </Link>
      ),
      value: item["user_name"].value
    };
    return item;
  });
  return (
    <BodySTY className="list-style">
      <TableWithEdit
        titles={employeeTitle}
        data={employeeData}
        tableName="員工列表"
        goToCreatePage={goToCreatePage}
        pageInfo={pageInfo}
        onPageChange={handlePageChange}
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
