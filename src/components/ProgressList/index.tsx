import { ItemSTY, ListSTY } from "./style";
import { SmallTickIcon, SmallCrossIcon } from "evergreen-ui";
interface ItemProps {
  status: "ok" | "pending" | "error";
  label: string;
  date?: string;
}
// const CheckIcon = ({ status }: { status: "ok" | "pending" | "error" }) => {
//   return (
//     <IconSTY status={status}>
//       <SmallTickIcon size={12} />
//     </IconSTY>
//   );
// };

const ProgressItem = ({ status, label, date }: ItemProps) => {
  return (
    <ItemSTY status={status}>
      <div className="item-label">{label}</div>
      <div className="item-icon">
        {status === "error" ? (
          <SmallCrossIcon size={12} />
        ) : status === "ok" ? (
          <SmallTickIcon size={12} />
        ) : (
          <div></div>
        )}
      </div>
      {date && <div className="item-date">{date}</div>}
    </ItemSTY>
  );
};

interface ListProps {
  dataLists: Array<{
    label: string;
    status: "ok" | "pending" | "error";
    date?: string;
  }>;
}

const ProgressList = ({ dataLists }: ListProps) => {
  return (
    <ListSTY>
      {dataLists.map((item, index) => {
        return (
          <ProgressItem
            key={index}
            status={item.status}
            label={item.label}
            date={item.date}
          />
        );
      })}
    </ListSTY>
  );
};

export default ProgressList;
