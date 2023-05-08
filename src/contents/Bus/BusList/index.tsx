import TableWithEdit from "@components/Table/TableWithEdit";
import { getBusTitle } from "@services/bus/getAllBuses";
import { BodySTY } from "./style";

interface Props {
  busData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
}

function BusList({
  busData,
  goToCreatePage,
  deleteItemHandler,
  goToEditPageHandler
}: Props) {
  const busTitle = getBusTitle();
  return (
    <BodySTY>
      <TableWithEdit
        tableName="車輛"
        titles={busTitle}
        data={busData}
        goToCreatePage={goToCreatePage}
        deleteItem={deleteItemHandler}
        goToEditPage={goToEditPageHandler}
      />
    </BodySTY>
  );
}

export default BusList;
