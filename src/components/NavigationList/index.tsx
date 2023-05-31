import { IconSTY, ItemSTY, ListSTY } from "./style";
import { SmallTickIcon } from "evergreen-ui";
interface ItemProps {
  status: "done" | "current" | "next";
  number: number;
  label: string;
}
const CheckIcon = ({ status }: { status: "done" | "current" | "next" }) => {
  return (
    <IconSTY status={status}>
      <SmallTickIcon size={12} />
    </IconSTY>
  );
};
const NumberIcon = ({
  status,
  number
}: {
  status: "done" | "current" | "next";
  number: number;
}) => {
  return <IconSTY status={status}>{number}</IconSTY>;
};
const NavigationItem = ({ status, label, number }: ItemProps) => {
  return (
    <ItemSTY status={status}>
      {status === "done" ? (
        <CheckIcon status={status} />
      ) : (
        <NumberIcon status={status} number={number} />
      )}
      <div className="label-container">{label}</div>
    </ItemSTY>
  );
};

interface ListProps {
  dataLists: Array<{ label: string }>;
  currentStep?: number;
}

const NavigationList = ({ dataLists, currentStep = 0 }: ListProps) => {
  return (
    <ListSTY>
      {dataLists.map((item, index) => {
        return (
          <NavigationItem
            key={index}
            status={
              index < currentStep
                ? "done"
                : index === currentStep
                ? "current"
                : "next"
            }
            label={item.label}
            number={index + 1}
          />
        );
      })}
    </ListSTY>
  );
};

export default NavigationList;
