import { BodySTY } from "./style";
import OutsideTableOnAssignment from "./OutsideTableOnAssignment";
import { getAssignmentTitle } from "@services/assignment/getAllAssignment";
import { I_PageInfo } from "@components/PaginationField";

interface Props {
  assignData: any;
  subAssignData: any;
  goToCreatePage: () => void;
  goToEditPageHandler: (item: any) => void;
  pageInfo?: I_PageInfo;
  onPageChange?: (pageQuery: I_PageInfo) => void;
}

function AssignmentList({
  assignData,
  subAssignData,
  goToCreatePage,
  goToEditPageHandler,
  pageInfo,
  onPageChange
}: Props) {
  const assignmentTitle = getAssignmentTitle();
  return (
    <BodySTY>
      <OutsideTableOnAssignment
        tableName="派單"
        titles={assignmentTitle}
        data={assignData}
        subAssignData={subAssignData}
        goToCreatePage={goToCreatePage}
        goToEditPage={goToEditPageHandler}
        pageInfo={pageInfo}
        onPageChange={onPageChange}
      />
    </BodySTY>
  );
}

export default AssignmentList;
