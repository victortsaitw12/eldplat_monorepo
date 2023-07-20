import { useRouter } from "next/router";
import { DriverListSTY } from "./style";

import { getDriverTitle } from "@services/driver/getAllDrivers";
import TableWithEdit from "@components/Table/TableWithEdit";
import { I_PageInfo } from "@components/PaginationField";

interface Props {
  driverData: any;
  pageInfo: I_PageInfo;
  goToCreatePage: () => void;
  handleDeleteDriver: (id: string) => void;
  handleRecoverDriver?: (id: string) => void;
  handlePageChange?: (pageQuery: I_PageInfo) => void;
  listType: string;
}

function DriverList({
  driverData,
  pageInfo,
  goToCreatePage,
  handleDeleteDriver,
  handleRecoverDriver,
  handlePageChange,
  listType
}: Props) {
  const driverTitle = getDriverTitle();
  const router = useRouter();
  console.log("listType", listType);
  return (
    <DriverListSTY>
      <TableWithEdit
        tableName="駕駛列表"
        titles={driverTitle}
        data={driverData}
        goToCreatePage={goToCreatePage}
        viewItem={(id) => {
          router.push(`/driver/detail/${id}?editPage=view`);
        }}
        pageInfo={pageInfo}
        onPageChange={handlePageChange}
        {...(listType == "1" && {
          goToEditPage: (id) => {
            router.push(`/driver/detail/${id}?editPage=edit`);
          },
          deleteItem: (id) => {
            handleDeleteDriver(id);
          }
        })}
        {...(listType == "2" && {
          recoverItem: (id) => {
            handleDeleteDriver(id);
          }
        })}
      />
    </DriverListSTY>
  );
}

export default DriverList;
