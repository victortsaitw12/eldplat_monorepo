import { ItemSTY, ListSTY, LineSTY } from "./style";
import { SmallTickIcon, SmallCrossIcon } from "evergreen-ui";
interface ItemProps {
  status: "ok" | "pending" | "error";
  label: string;
  date?: string;
}
const HorizontalLine = () => {
  return <LineSTY></LineSTY>;
};

const ProgressItem = ({ status, label, date }: ItemProps) => {
  return (
    <ItemSTY status={status}>
      <div className="item-label">{label}</div>
      <div className="item-icon">
        {status === "error" ? (
          <SmallCrossIcon size={12} />
        ) : (
          status === "ok" && <SmallTickIcon size={12} />
        )}
      </div>
      {date ? (
        <div className="item-date">{date}</div>
      ) : (
        <div style={{ color: "transparent" }}>_</div>
      )}
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
      <HorizontalLine />
    </ListSTY>
  );
};

export default ProgressList;
