import { BodySTY } from "./style";
import OutsideTableOnAssignment from "./OutsideTableOnAssignment";
import { getAssignmentTitle } from "@services/assignment/getAllAssignment";

interface Props {
  assignData: any;
  subAssignData: any;
  goToCreatePage: () => void;
  goToEditPageHandler: (item: any) => void;
}

function AssignmentList({
  assignData,
  subAssignData,
  goToCreatePage,
  goToEditPageHandler
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
      />
    </BodySTY>
  );
}

export default AssignmentList;
