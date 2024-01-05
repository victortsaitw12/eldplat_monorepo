import Table from "@components/Table/Table";
import {
  EQUIPMENT_ASSIGNMENT_HISTORY_TITLE,
  EQUIPMENT_ASSIGNMENT_HISTORY_DATA
} from "src/mock-data/equipment/Equipment";

type tableDataType = {
  titles?: string[];
  data?: any[];
};

function EquipmentAssignmentHistory({
  titles = EQUIPMENT_ASSIGNMENT_HISTORY_TITLE,
  data = EQUIPMENT_ASSIGNMENT_HISTORY_DATA
}: tableDataType) {
  return <Table titles={titles} data={data} />;
}

export default EquipmentAssignmentHistory;
