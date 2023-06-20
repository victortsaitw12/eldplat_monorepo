import TableWithEdit from "@components/Table/TableWithEdit";
import { BodySTY } from "./style";
import { getMaintenanceMissionTitle } from "@services/maintenance/getMaintenanceMission";

interface Props {
  clientData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  goToDetailPage: (id: string) => void;
}

function MaintenanceMissionList({
  clientData,
  goToCreatePage,
  deleteItemHandler,
  goToEditPageHandler,
  goToDetailPage
}: Props) {
  const clientTitle = getMaintenanceMissionTitle();
  console.log("clientData", clientData);
  return (
    <BodySTY>
      <TableWithEdit
        tableName="維保任務"
        titles={clientTitle}
        data={clientData}
        goToCreatePage={goToCreatePage}
        deleteItem={deleteItemHandler}
        goToEditPage={goToEditPageHandler}
        viewItem={goToDetailPage}
      />
    </BodySTY>
  );
}

export default MaintenanceMissionList;
