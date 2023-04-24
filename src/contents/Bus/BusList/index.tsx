import TableWithEdit from "@components/Table/TableWithEdit";
import { getBusTitle } from "@services/bus/getAllBuses";
import { BodySTY } from "./style";

interface Props {
  busData: any;
  goToCreatePage: () => void;
}

function BusList({ busData, goToCreatePage }: Props) {
  const busTitle = getBusTitle();
  console.log("BusList", busData);
  return (
    <BodySTY>
      <TableWithEdit
        tableName="車輛"
        titles={busTitle}
        data={busData}
        goToCreatePage={goToCreatePage}
      />
    </BodySTY>
  );
}

export default BusList;
