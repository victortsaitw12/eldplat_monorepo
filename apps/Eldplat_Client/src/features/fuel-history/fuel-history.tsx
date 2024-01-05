import React from "react";
import {
  EXPENSE_lIST_TITLES,
  EXPENSE_lIST_DATA
} from "src/mock-data/fuel-history/FuelHistory";
import Table from "@components/Table/Table";

function FuelHistory() {
  return <Table data={EXPENSE_lIST_DATA} titles={EXPENSE_lIST_TITLES} />;
}

export default FuelHistory;
