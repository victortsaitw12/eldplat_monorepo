import React from "react";
import {
  EXPENSE_lIST_TITLES,
  EXPENSE_lIST_DATA
} from "src/mock-data/03MeterHistory";
import Table from "@components/Table/Table";

function All() {
  return <Table data={EXPENSE_lIST_DATA} titles={EXPENSE_lIST_TITLES} />;
}

export default All;
