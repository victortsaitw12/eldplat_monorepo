import DetailTable from "@components/Table/DetailTable";
import {
  VEHICLERENEWALS_DETAIL_TITLE,
  VEHICLERENEWALS_DETAIL_DATA
} from "src/mock-data/reminder/VehicleRenewals";

type ExpenseListDetailType = {
  title?: string;
  data?: any;
};

function VehicleReminderListDetail({
  title = VEHICLERENEWALS_DETAIL_TITLE,
  data = VEHICLERENEWALS_DETAIL_DATA
}: ExpenseListDetailType) {
  return <DetailTable title={title} data={data} />;
}

export default VehicleReminderListDetail;
