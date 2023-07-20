import TableWithEdit from "@components/Table/TableWithEdit";
import { BodySTY } from "./style";
import { getMaintenanceMissionTitle } from "@services/maintenance/getMaintenanceMission";
import { useEffect, useState } from "react";

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
  const [inCenter, setInCenter] = useState<boolean>(false);
  const clientTitle = getMaintenanceMissionTitle();
  console.log("clientData", clientData);
  console.log("clientTitle", clientTitle);
  useEffect(() => {
    if (clientTitle.includes("結案")) setInCenter(true);
  }, []);
  const customTableClass = [{ label: "結案", value: "completion_time" }];

  return (
    <BodySTY inCenter={inCenter}>
      <TableWithEdit
        tableName="維保任務"
        titles={clientTitle}
        data={clientData}
        goToCreatePage={goToCreatePage}
        deleteItem={deleteItemHandler}
        goToEditPage={goToEditPageHandler}
        viewItem={goToDetailPage}
        customTableClass={customTableClass}
      />
    </BodySTY>
  );
}

export default MaintenanceMissionList;
