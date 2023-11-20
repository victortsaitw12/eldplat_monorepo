import { useRouter } from "next/router";
import { DriverListSTY } from "./style";

import { getDriverTitle } from "@services/driver/getAllDrivers";
import Table from "@components/Table/Table";
import { I_PageInfo } from "@components/PaginationField";

interface Props {
  driverData: any;
  pageInfo: I_PageInfo;
  handleDeleteDriver: (id: string) => void;
  handleRecoverDriver?: (id: string) => void;
  handlePageChange?: (pageQuery: I_PageInfo) => void;
  listType: string;
}

function DriverList({
  driverData,
  pageInfo,
  handleDeleteDriver,
  handleRecoverDriver,
  handlePageChange,
  listType
}: Props) {
  const driverTitle = getDriverTitle();
  const router = useRouter();

  const handleView = (id: string) => {
    router.push(`/driver/${id}`);
  };

  console.log("driverData ======> ", driverData);

  return (
    <DriverListSTY>
      <Table titles={driverTitle} data={driverData} onView={handleView} />
    </DriverListSTY>
  );
}

export default DriverList;
