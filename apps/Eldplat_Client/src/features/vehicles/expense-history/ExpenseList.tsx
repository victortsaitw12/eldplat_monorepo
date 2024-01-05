import Table from "@components/Table/Table";
import {
  EXPENSE_lIST_TITLES,
  EXPENSE_lIST_DATA
} from "@mock-data/vehicle/04ExpenseHistory";

type tableDataType = {
  titles?: string[];
  data?: any[];
};

function ExpenseList({
  titles = EXPENSE_lIST_TITLES,
  data = EXPENSE_lIST_DATA
}: tableDataType) {
  return <Table titles={titles} data={data} />;
}

export default ExpenseList;
