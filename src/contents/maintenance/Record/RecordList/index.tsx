import TableWithEdit from "@components/Table/TableWithEdit";
import { BodySTY } from "./style";
import { getMaintenanceRecordTitle } from "@services/maintenance/getMaintenanceRecord";

interface Props {
  clientData: any;
  goToDetailPage: (id: string) => void;
}

function MaintenanceRecordList({ clientData, goToDetailPage }: Props) {
  const clientTitle = getMaintenanceRecordTitle();
  return (
    <BodySTY>
      <TableWithEdit
        tableName="維保紀錄"
        titles={clientTitle}
        data={clientData}
        // goToCreatePage={goToCreatePage}
        // deleteItem={deleteItemHandler}
        // goToEditPage={goToEditPageHandler}
        viewItem={goToDetailPage}
      />
    </BodySTY>
  );
}

export default MaintenanceRecordList;
