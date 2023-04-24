import { Pane } from "evergreen-ui";

import TableTitle from "@components/Table/TableTitle";
import Table from "@components/Table/Table";
import { HISTORY_TITLE, HISTORY_DATA } from "../detail.data";
import { HistorySTY } from "./style";

function History() {
  return (
    <HistorySTY>
      <Pane className="container">
        <TableTitle tableName="異動紀錄" />
        <Table titles={HISTORY_TITLE} data={HISTORY_DATA} />
      </Pane>
    </HistorySTY>
  );
}

export default History;
