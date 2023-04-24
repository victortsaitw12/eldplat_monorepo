import Table from "@components/Table/Table";
import {
  EQUIPMENT_LINKED_VEHICLE_HISTORY_TITLE,
  EQUIPMENT_LINKED_VEHICLE_HISTORY_DATA
} from "src/mock-data/equipment/Equipment";

type tableDataType = {
  titles?: string[];
  data?: any[];
};

function EquipmentLinkedVehicleHistory({
  titles = EQUIPMENT_LINKED_VEHICLE_HISTORY_TITLE,
  data = EQUIPMENT_LINKED_VEHICLE_HISTORY_DATA
}: tableDataType) {
  return <Table titles={titles} data={data} />;
}

export default EquipmentLinkedVehicleHistory;
