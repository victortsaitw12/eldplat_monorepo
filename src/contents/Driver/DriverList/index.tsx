import { useRouter } from "next/router";
import { DriverListSTY } from "./style";

import { getDriverTitle } from "@services/driver/getAllDrivers";
import TableWithEdit from "@components/Table/TableWithEdit";

interface Props {
  driverData: any;
  goToCreatePage: () => void;
  handleDeleteDriver: (id: string) => void;
}

function DriverList({ driverData, goToCreatePage, handleDeleteDriver }: Props) {
  const driverTitle = getDriverTitle();
  const router = useRouter();

  return (
    <DriverListSTY>
      <TableWithEdit
        tableName="駕駛"
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
      />
    </DriverListSTY>
  );
}

export default DriverList;
