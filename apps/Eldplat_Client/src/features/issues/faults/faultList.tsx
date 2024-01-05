import React from "react";
import Table from "@components/Table/Table";
import { MOCK_TITLES } from "src/mock-data/issues/02FaultList";

function FaultList() {
  return (
    <Table
      titles={MOCK_TITLES}
      data={[]}
      noData={{
        text: "Faults are automatically generated for Vehicles to manage DIC",
        link: "#"
      }}
    />
  );
}

export default FaultList;
