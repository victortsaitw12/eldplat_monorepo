import {
  ListIcon,
  CogIcon,
  BuildIcon,
  DriveTimeIcon,
  TimelineBarChartIcon,
  ThListIcon,
  IssueIcon
} from "evergreen-ui";
//
import { BodySTY, StyledButton } from "./style";
//
interface OptionItemProps {
  icon: React.ReactNode;
  label: string;
  warning: boolean;
  title: string;
  onSelect: (type: string) => void;
  active: boolean;
}
function OptionItem({
  icon,
  label,
  warning,
  onSelect,
  title,
  active
}: OptionItemProps) {
  return (
    <StyledButton
      onClick={() => {
        onSelect(label);
      }}
      active={active}
    >
      <div className="option-label">
        {icon}
        <span>{title}</span>
      </div>
      <div className="option-waring">{warning && <IssueIcon />}</div>
    </StyledButton>
  );
}

interface BusOptionsProps {
  formType: string;
  updateFormType: (formType: string) => void;
}
function BusOptions({ formType, updateFormType }: BusOptionsProps) {
  return (
    <BodySTY>
      <div className="option-card">
        <OptionItem
          icon={<ListIcon />}
          title="細項"
          label="Detail"
          active={formType === "Detail"}
          warning={false}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<BuildIcon />}
          title="維修"
          label="Maintenance"
          active={formType === "Maintenance"}
          warning={false}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<DriveTimeIcon />}
          title="生命週期"
          label="Lifecycle"
          active={formType === "Lifecycle"}
          warning={false}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<TimelineBarChartIcon />}
          title="財務"
          label="Financial"
          active={formType === "Financial"}
          warning={false}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<ThListIcon />}
          title="規格"
          label="Specifications"
          active={formType === "Specifications"}
          warning={false}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<CogIcon />}
          title="設定"
          label="Settings"
          active={formType === "Settings"}
          warning={false}
          onSelect={updateFormType}
        />
      </div>
    </BodySTY>
  );
}

export default BusOptions;
