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
import { FieldErrors } from "react-hook-form";
import { BusDataTypes } from "../busDefaultData";
//
interface OptionItemProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  onSelect: (type: string) => void;
  active: boolean;
  invalid: boolean;
}
function OptionItem({
  icon,
  label,
  invalid,
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
      invalid={invalid}
    >
      <div className="option-label">
        {icon}
        <span>{title}</span>
      </div>
      <div className="option-waring">{invalid && <IssueIcon />}</div>
    </StyledButton>
  );
}

interface BusOptionsProps {
  formType: string;
  updateFormType: (formType: string) => void;
  errors: FieldErrors<BusDataTypes>;
}
function BusOptions({ formType, updateFormType, errors }: BusOptionsProps) {
  console.log("errors", errors);
  return (
    <BodySTY>
      <div className="option-card">
        <OptionItem
          icon={<ListIcon />}
          title="細項"
          label="Detail"
          active={formType === "Detail"}
          invalid={!!errors?.detail}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<BuildIcon />}
          title="維修"
          label="Maintenance"
          active={formType === "Maintenance"}
          invalid={false}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<DriveTimeIcon />}
          title="生命週期"
          label="Lifecycle"
          active={formType === "Lifecycle"}
          invalid={!!errors?.lifecycle}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<TimelineBarChartIcon />}
          title="財務"
          label="Financial"
          active={formType === "Financial"}
          invalid={!!errors?.finacial}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<ThListIcon />}
          title="規格"
          label="Specifications"
          active={formType === "Specifications"}
          invalid={!!errors?.specifications}
          onSelect={updateFormType}
        />
        <OptionItem
          icon={<CogIcon />}
          title="設定"
          label="Settings"
          active={formType === "Settings"}
          invalid={!!errors?.settings}
          onSelect={updateFormType}
        />
      </div>
    </BodySTY>
  );
}

export default BusOptions;
