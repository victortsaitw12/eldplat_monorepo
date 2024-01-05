import Table from "@components/Table/Table";
import {
  EQUIPMENT_lIST_TITLES,
  EQUIPMENT_lIST_DATA
} from "src/mock-data/equipment/Equipment";

type tableDataType = {
  titles?: string[];
  data?: any[];
};

function EquipmentList({
  titles = EQUIPMENT_lIST_TITLES,
  data = EQUIPMENT_lIST_DATA
}: tableDataType) {
  return <Table titles={titles} data={data} />;
}

export default EquipmentList;
