import { ErrorIcon, PlusIcon } from "evergreen-ui";
import { useRouter } from "next/router";
import { DriverListSTY } from "./style";

import { getDriverTitle } from "@services/driver/getAllDrivers";
import TableWithEdit from "@components/Table/TableWithEdit";
import TableTitle from "@components/Table/TableTitle";
import { IconLeft } from "@components/Button/Primary";

interface Props {
  driverData: any;
  goToCreatePage: () => void;
  handleDeleteDriver: (id: string) => void;
}

function DriverList({ driverData, goToCreatePage, handleDeleteDriver }: Props) {
  const driverTitle = getDriverTitle();
  const router = useRouter();

  const addDriverBtn = (
    <IconLeft text="新增駕駛" onClick={goToCreatePage}>
      <PlusIcon size={14} />
    </IconLeft>
  );

  return (
    <DriverListSTY>
      {/* <TableTitle tableName={"駕駛"} control={[addDriverBtn]} page={true} /> */}
      <TableWithEdit
        tableName="駕駛"
        titles={driverTitle}
        data={driverData}
        goToCreatePage={goToCreatePage}
        viewItem={(id) => {
          router.push(`/driver/edit/${id}`);
        }}
        goToEditPage={(id) => {
          router.push(`/driver/edit/${id}`);
        }}
        deleteItem={(id) => {
          handleDeleteDriver(id);
        }}
      />
    </DriverListSTY>
  );
}

export default DriverList;
