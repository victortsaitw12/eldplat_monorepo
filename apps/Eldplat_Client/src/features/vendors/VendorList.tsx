import React from "react";
import Table from "@components/Table/Table";
import { MOCK_LIST_TITLES } from "src/mock-data/vendors/00VendorList";

interface I_vendorListType {
  [key: string]: any;
}

function VendorList({ data }: I_vendorListType) {
  return <Table titles={MOCK_LIST_TITLES} data={data} />;
}

export default VendorList;
