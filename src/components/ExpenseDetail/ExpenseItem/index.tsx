import { ExpenseItemType } from "../type";
import { BodySTY } from "./style";
import Tooltip from "@components/Tooltip";
import { HelpIcon } from "evergreen-ui";
interface ItemProps {
  itemData: ExpenseItemType;
  prefix?: string;
  suffix?: string;
}
const ExpenseItem = ({ itemData, prefix, suffix }: ItemProps) => {
  const { label, hint, value } = itemData;
  return (
    <BodySTY>
      <div className="item-title">
        <div className="title-content">{label}</div>
        {!!hint && (
          <Tooltip text={hint}>
            <HelpIcon />
          </Tooltip>
        )}
      </div>

      <div className="item-value">
        {prefix && <span>{prefix}</span>}
        <span>{value.toLocaleString("en-US")}</span>
        {suffix && <span>{suffix}</span>}
      </div>
    </BodySTY>
  );
};

export default ExpenseItem;
