import {
  ThemeProvider,
  mergeTheme,
  defaultTheme,
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
    <ThemeProvider value={customTheme}>
      <DivSTY>
        <Tooltip content={tip || "操作"}>
          <button>{btn}</button>
        </Tooltip>
      </DivSTY>
    </ThemeProvider>
  );
};

const customTheme = mergeTheme(defaultTheme, {
  components: {
    Tooltip: {
      baseStyle: {
        paddingY: 4,
        paddingX: 8,
        borderRadius: 4
      }
    }
  }
});

interface I_Props {
  tip?: string;
  type?: "create" | "edit" | "delete" | "envelope";
  onClick?: (e?: any) => void;
  customIcon?: React.ReactNode;
}

export default IconBtn;
