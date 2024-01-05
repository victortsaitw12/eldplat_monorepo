import React from "react";

import Table from "@components/Table/Table";
import { MOCK_DATA, MOCK_TITLES } from "src/mock-data/vehicle/01VehicleList";

function All() {
  return <Table titles={MOCK_TITLES} data={MOCK_DATA} />;
}

export default All;
