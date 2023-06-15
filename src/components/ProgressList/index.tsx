import { ItemSTY, ListSTY, LineSTY, GrayLineSTY } from "./style";
import { SmallTickIcon, SmallCrossIcon } from "evergreen-ui";
interface ItemProps {
  status: "ok" | "pending" | "error" | "disabled";
  label: string;
  date?: string;
}
const HorizontalLine = ({ dataLists }: { dataLists: ItemProps[] }) => {
  const disabledLength = dataLists.filter(
    (item) => item.status === "disabled"
  ).length;
  const grayWidth = disabledLength / (dataLists.length - 1);
  return (
    <>
      <LineSTY></LineSTY>
      <GrayLineSTY grayWidth={grayWidth}></GrayLineSTY>
    </>
  );
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
    status: "ok" | "pending" | "error" | "disabled";
    date?: string;
  }>;
}

const ProgressList = ({ dataLists }: ListProps) => {
  console.log("dataLists: ", dataLists);
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
      <HorizontalLine dataLists={dataLists} />
    </ListSTY>
  );
};

export default ProgressList;
