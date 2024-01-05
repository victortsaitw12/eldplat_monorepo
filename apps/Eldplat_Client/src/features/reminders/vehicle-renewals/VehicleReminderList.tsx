import Table from "@components/Table/Table";
import {
  VEHICLERENEWALS_lIST_TITLES,
  VEHICLERENEWALS_lIST_DATA
} from "src/mock-data/reminder/VehicleRenewals";

type tableDataType = {
  titles?: string[];
  data?: any[];
};

function VehicleReminderList({
  titles = VEHICLERENEWALS_lIST_TITLES,
  data = VEHICLERENEWALS_lIST_DATA
}: tableDataType) {
  return <Table titles={titles} data={data} />;
}

export default VehicleReminderList;
