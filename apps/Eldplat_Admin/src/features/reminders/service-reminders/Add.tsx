import React from "react";

import Table from "@components/Table/Table";

import { AddSTY } from "./style";

const DATA_TITLE = ["Completed", "Due", "Compliance", "Completed By"];

function Add() {
  return (
    <AddSTY>
      <Table titles={DATA_TITLE} data={[]} />
    </AddSTY>
  );
}

export default Add;
