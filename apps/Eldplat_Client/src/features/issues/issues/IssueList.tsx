import React from "react";
import Table from "@components/Table/Table";
import {
  MOCK_List_DATA,
  MOCK_List_TITLES
} from "src/mock-data/issues/01IssueList";

function IssueList() {
  return <Table titles={MOCK_List_TITLES} data={MOCK_List_DATA} />;
}

export default IssueList;
