import { ADD_NEW_EXPENSE_SELECT } from "@mock-data/vehicle/04ExpenseHistory";
import ExpenseForm from "./ExpenseForm";

function AddNewExpense() {
  return <ExpenseForm title="Detail" selectOptions={ADD_NEW_EXPENSE_SELECT} />;
}

export default AddNewExpense;
