import { assignment_mock_data } from "@services/assignment/mock_data";
import { BodySTY } from "./style";
import OutsideTableOnAssignment from "./OutsideTableOnAssignment";
import { getAssignmentTitle } from "@services/assignment/getAllAssignment";

interface Props {
  assignData: any;
  subAssignData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  goToDetailPage: (id: string) => void;
}

function AssignmentList({
  assignData,
  subAssignData,
  goToCreatePage,
  deleteItemHandler,
  goToEditPageHandler,
  goToDetailPage
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
        deleteItem={deleteItemHandler}
        goToEditPage={goToEditPageHandler}
        viewItem={goToDetailPage}
      />
    </BodySTY>
  );
}

export default AssignmentList;
