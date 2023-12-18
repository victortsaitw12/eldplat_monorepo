import TableWithEdit from "@components/Table/TableWithEdit";
import { BodySTY } from "./style";
import { getMaintenanceRecordTitle } from "@services/maintenance/getMaintenanceRecord";
import { I_PageInfo } from "@components/PaginationField";

interface Props {
  clientData: any;
  goToDetailPage: (id: string) => void;
  pageInfo: I_PageInfo;
  handlePageChange?: (pageQuery: I_PageInfo) => void;
}

function MaintenanceRecordList({
  clientData,
  goToDetailPage,
  pageInfo,
  handlePageChange
}: Props) {
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
        pageInfo={pageInfo}
        onPageChange={handlePageChange}
      />
    </BodySTY>
  );
}

export default MaintenanceRecordList;
