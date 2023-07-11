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
  handlePageChange?: (pageQuery: I_PageInfo) => void;
}

function DriverList({
  driverData,
  pageInfo,
  goToCreatePage,
  handleDeleteDriver,
  handlePageChange
}: Props) {
  const driverTitle = getDriverTitle();
  const router = useRouter();

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
        goToEditPage={(id) => {
          router.push(`/driver/detail/${id}?editPage=edit`);
        }}
        deleteItem={(id) => {
          handleDeleteDriver(id);
        }}
        pageInfo={pageInfo}
        onPageChange={handlePageChange}
      />
    </DriverListSTY>
  );
}

export default DriverList;
