import React from "react";
import DetailTable from "@components/Table/DetailTable";
import {
  MOCK_DETAIL_DATA,
  MOCK_DETAIL_TITLES
} from "src/mock-data/issues/01IssueList";

function IssueDetail() {
  return (
    <DetailTable
      title="Details"
      titles={MOCK_DETAIL_TITLES}
      data={MOCK_DETAIL_DATA}
    />
  );
}

export default IssueDetail;
