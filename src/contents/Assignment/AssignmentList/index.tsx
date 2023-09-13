import { BodySTY } from "./style";
import OutsideTableOnAssignment from "./OutsideTableOnAssignment";
import { getAssignmentTitle } from "@services/assignment/getAllAssignment";
import { I_PageInfo } from "@components/PaginationField";
import { I_FirstDrawer } from "@contents/Assignment/AssignmentDrawers";

interface Props {
  assignData: any;
  subAssignData: any;
  goToCreatePage: () => void;
  goToEditPageHandler: (item: any) => void;
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
  setOrderInfo: (t: any) => void;
  setFirstDrawerOpen: (v: I_FirstDrawer) => void;
}

function AssignmentList({
  assignData,
  subAssignData,
  goToCreatePage,
  goToEditPageHandler,
  pageInfo,
  onPageChange,
  setOrderInfo,
  setFirstDrawerOpen
}: Props) {
  const assignmentTitle = getAssignmentTitle();
  return (
    <BodySTY>
      <OutsideTableOnAssignment
        tableName="派單"
        titles={assignmentTitle}
        assignData={assignData}
        subAssignData={subAssignData}
        goToCreatePage={goToCreatePage}
        goToEditPage={goToEditPageHandler}
        pageInfo={pageInfo}
        onPageChange={onPageChange}
        setOrderInfo={setOrderInfo}
        setFirstDrawerOpen={setFirstDrawerOpen}
      />
    </BodySTY>
  );
}

export default AssignmentList;
