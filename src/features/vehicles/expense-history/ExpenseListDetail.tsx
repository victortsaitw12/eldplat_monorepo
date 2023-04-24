import DetailTable from "@components/Table/DetailTable";
import {
  EXPENSE_lIST_DETAIL_TITLE,
  EXPENSE_lIST_DETAIL_DATA
} from "@mock-data/vehicle/04ExpenseHistory";

type ExpenseListDetailType = {
  title?: string;
  data?: any;
};

function ExpenseListDetail({
  title = EXPENSE_lIST_DETAIL_TITLE,
  data = EXPENSE_lIST_DETAIL_DATA
}: ExpenseListDetailType) {
  return <DetailTable title={title} data={data} />;
}

export default ExpenseListDetail;
