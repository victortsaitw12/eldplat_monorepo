export type ExpenseItemType = {
  label: string;
  name: string;
  value: number;
  hint?: string;
};
export interface ExpenseDetailProps {
  data: Array<ExpenseItemType>;
  prefix?: string;
  suffix?: string;
  isEdit?: boolean;
  asyncSubmitData?: (data: any) => void;
}
