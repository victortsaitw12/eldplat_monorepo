import { ExpenseDetailProps } from "./type";
import { BodySTY } from "./style";
import ExpenseItem from "./ExpenseItem";
const ExpenseDetail = ({ data, prefix, suffix }: ExpenseDetailProps) => {
  return (
    <BodySTY>
      {data.map((item) => {
        return (
          <ExpenseItem
            key={item.label}
            itemData={item}
            prefix={prefix}
            suffix={suffix}
          />
        );
      })}
    </BodySTY>
  );
};

export default ExpenseDetail;
