import React from "react";
import Table from "@components/Table/Table";
import { MOCK_LIST_TITLES } from "src/mock-data/vendors/02FuelEntryList";

function FuelEntryList() {
  return <Table titles={MOCK_LIST_TITLES} data={[]} />;
}

export default FuelEntryList;
