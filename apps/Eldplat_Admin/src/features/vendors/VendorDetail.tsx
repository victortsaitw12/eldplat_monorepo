import React from "react";
import DetailTable from "@components/Table/DetailTable";
import {
  MOCK_DETAIL_DATA,
  MOCK_DETAIL_TITLES
} from "src/mock-data/vendors/01VendorDetail";

function VendorDetail() {
  return (
    <DetailTable
      title="Details"
      titles={MOCK_DETAIL_TITLES}
      data={MOCK_DETAIL_DATA}
    />
  );
}

export default VendorDetail;
