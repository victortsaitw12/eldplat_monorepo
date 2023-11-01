import {
  Tooltip,
  SmallPlusIcon,
  EditIcon,
  TrashIcon,
  MoreIcon
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
    case "more":
      btn = <MoreIcon onClick={onClick} />;
      break;
    default:
      btn = <MoreIcon onClick={onClick} />;
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
  tip: string;
  type?: "create" | "edit" | "delete" | "more";
  onClick?: () => void;
  customIcon?: React.ReactNode;
}

export default IconBtn;
