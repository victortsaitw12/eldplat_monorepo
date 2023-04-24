import TableWithEdit from "@components/Table/TableWithEdit";
import { getDriverTitle } from "@services/driver/getAllDrivers";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

interface Props {
  driverData: any;
  goToCreatePage: () => void;
}

function DriverList({ driverData, goToCreatePage }: Props) {
  const driverTitle = getDriverTitle();
  console.log("BusList", driverData);
  const router = useRouter();
  return (
    <BodySTY>
      <TableWithEdit
        tableName="駕駛"
        titles={driverTitle}
        data={driverData}
        goToCreatePage={goToCreatePage}
        viewItem={(id) => {
          console.log(`view driver: ${id}`);
          router.push("/driver/detail");
        }}
        editItem={(id) => {
          console.log(`edit driver: ${id}`);
          router.push(`/driver/create/${id}`);
        }}
        deleteItem={(id) => {
          console.log(`delete driver: ${id}`);
        }}
      />
    </BodySTY>
  );
}

export default DriverList;
