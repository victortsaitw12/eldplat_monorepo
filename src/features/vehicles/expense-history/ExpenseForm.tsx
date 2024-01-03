import {
  SelectField,
  TextInputField,
  Pane,
  Radio,
  Label,
  Textarea
} from "evergreen-ui";
import { TextInputFieldSTY, RadioContainerSTY } from "./ExpenseFormSTY";

type OptionsType = {
  label: string;
  value: number;
};

type SelectTypes = {
  label: string;
  notRequired?: boolean;
  options: OptionsType[];
};

type Props = {
  title: string;
  selectOptions?: SelectTypes[];
};

function ExpenseForm({ title, selectOptions }: Props) {
  return (
    <>
      <p>DELETED FORMCARD, PLEASE CHECK THE PAGE AGAIN.</p>
    </>
  );
}

export default ExpenseForm;
