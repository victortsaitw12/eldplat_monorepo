import React from "react";
import Table from "@components/Table/Table";
import { MOCK_DATA, MOCK_TITLES } from "src/mock-data/issues/03RecallList";

function RecallList() {
  return <Table titles={MOCK_TITLES} data={MOCK_DATA} />;
}

export default RecallList;
