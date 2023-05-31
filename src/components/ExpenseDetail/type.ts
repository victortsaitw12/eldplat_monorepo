export type ExpenseItemType = {
  label: string;
  value: number;
  hint?: string;
};
export interface ExpenseDetailProps {
  data: Array<ExpenseItemType>;
  prefix?: string;
  suffix?: string;
}
