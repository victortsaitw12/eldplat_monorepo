import { ADD_VEHICLERENEWALS_SELECT } from "src/mock-data/reminder/VehicleRenewals";
import VehicleReminderForm from "./VehicleReminderForm";

function AddVehicleReminder() {
  return (
    <VehicleReminderForm
      title="Details"
      selectOptions={ADD_VEHICLERENEWALS_SELECT}
    />
  );
}

export default AddVehicleReminder;
