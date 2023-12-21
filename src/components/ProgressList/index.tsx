import { ItemSTY, ListSTY, LineSTY, GrayLineSTY } from "./style";
import { SmallTickIcon, SmallCrossIcon } from "evergreen-ui";
interface ItemProps {
  status: "ok" | "pending" | "error" | "disabled";
  label: string;
  date?: string;
  color?: string;
}
const HorizontalLine = ({
  dataLists,
  color
}: {
  dataLists: ItemProps[];
  color?: string;
}) => {
  const disabledLength = dataLists.filter(
    (item) => item.status === "disabled" || item.status === "pending"
  ).length;
  const grayWidth = disabledLength / (dataLists.length - 1);
  return (
    <>
      <LineSTY color={color} />
      <GrayLineSTY grayWidth={grayWidth} />
    </>
  );
};

const ProgressItem = ({ status, label, date, color }: ItemProps) => {
  return (
    <ItemSTY status={status} color={color}>
      <div className="item-label">{label}</div>
      <div className="item-icon"></div>
      {date ? (
        <div className="item-date">{date}</div>
      ) : (
        <div style={{ color: "transparent" }}>_</div>
      )}
      {/* <div className="item-icon">
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
      )} */}
    </ItemSTY>
  );
};

interface ListProps {
  dataLists: Array<{
    label: string;
    status: "ok" | "pending" | "error" | "disabled";
    date?: string;
  }>;
  color?: string;
}

const ProgressList = ({ dataLists, color }: ListProps) => {
  return (
    <ListSTY color={color}>
      {dataLists.map((item, index) => {
        return (
          <ProgressItem
            key={index}
            status={item.status}
            label={item.label}
            date={item.date}
            color={color}
          />
        );
      })}
      <HorizontalLine dataLists={dataLists} color={color} />
    </ListSTY>
  );
};

export default ProgressList;
