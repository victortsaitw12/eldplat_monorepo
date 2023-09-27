import { BodySTY } from "./style";
import OutsideTableOnAssignment from "./OutsideTableOnAssignment";
import { getAssignmentTitle } from "@services/assignment/getAllAssignment";
import { I_PageInfo } from "@components/PaginationField";
import { I_FirstDrawer } from "@contents/Assignment/AssignmentDrawers";

interface Props {
  ordersData: any;
  assignsData: any;
  handleAssignEdit: (item: any) => void;
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
  handleAssignCreate: (type: I_FirstDrawer, id: string) => void;
}

function AssignmentList({
  ordersData,
  assignsData,
  handleAssignCreate,
  handleAssignEdit,
  pageInfo,
  onPageChange
}: Props) {
  const assignmentTitle = getAssignmentTitle();
  return (
    <BodySTY>
      <OutsideTableOnAssignment
        tableName="派單"
        titles={assignmentTitle}
        ordersData={ordersData}
        assignsData={assignsData}
        pageInfo={pageInfo}
        onPageChange={onPageChange}
        handleAssignCreate={handleAssignCreate}
        handleAssignEdit={handleAssignEdit}
      />
    </BodySTY>
  );
}

export default AssignmentList;
