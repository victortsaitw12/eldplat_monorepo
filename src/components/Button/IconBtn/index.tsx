import {
  Tooltip,
  SmallPlusIcon,
  EditIcon,
  TrashIcon,
  MoreIcon,
  EnvelopeIcon
} from "evergreen-ui";
import { DivSTY } from "./style";

const IconBtn = ({ tip, type, onClick }: I_Props) => {
  let btn;
  switch (type) {
    case "create":
      btn = <SmallPlusIcon onClick={onClick} />;
      break;
    case "edit":
      btn = <EditIcon onClick={onClick} />;
      break;
    case "delete":
      btn = <TrashIcon onClick={onClick} />;
      break;
    case "envelope":
      btn = <EnvelopeIcon onClick={onClick} />;
      break;
    default:
      btn = <button type="button" />;
  }
  return (
    <DivSTY>
      <Tooltip content={tip || "操作"}>
        <button>{btn}</button>
      </Tooltip>
    </DivSTY>
  );
};

interface I_Props {
  tip?: string;
  type?: "create" | "edit" | "delete" | "envelope";
  onClick?: (e?: any) => void;
  customIcon?: React.ReactNode;
}

export default IconBtn;
