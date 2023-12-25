import { UseFormRegister } from "react-hook-form";
import { ExpenseItemType } from "../type";
import { BodySTY } from "./style";
import Tooltip from "@components/Tooltip";
import { HelpIcon } from "evergreen-ui";
interface ItemProps {
  itemData: ExpenseItemType;
  register: UseFormRegister<any>;
  prefix?: string;
  suffix?: string;
  isEdit?: boolean;
}
const ExpenseItem = ({
  itemData,
  register,
  isEdit,
  prefix,
  suffix
}: ItemProps) => {
  const { label, hint, value } = itemData;
  return (
    <BodySTY>
      <div className="item-title">
        <div className="title-content">{label}</div>
        {/* {!!hint && (
          <Tooltip text={hint}>
            <HelpIcon />
          </Tooltip>
        )} */}
      </div>

      <div className="item-value">
        {prefix && <span>{prefix}</span>}
        {isEdit ? (
          <input
            type="number"
            {...register(itemData.name, { valueAsNumber: true })}
          />
        ) : (
          <span>{value.toLocaleString("en-US")}</span>
        )}
        {suffix && <span>{suffix}</span>}
      </div>
    </BodySTY>
  );
};

export default ExpenseItem;
