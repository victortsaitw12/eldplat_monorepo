import TableWithEdit from "@components/Table/TableWithEdit";
import { getDriverTitle } from "@services/driver/getAllDrivers";
import { useRouter } from "next/router";
import { DriverListSTY } from "./style";

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
