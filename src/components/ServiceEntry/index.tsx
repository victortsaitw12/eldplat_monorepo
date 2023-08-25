import Image from "next/image";
import { BodySTY, IconSTY, LabelSTY } from "./style";
interface Props {
  imageUrl?: string;
  label: string;
  onClick?: () => void;
}
const ServerEntry = ({ imageUrl, label, onClick }: Props) => {
  return (
    <BodySTY className="serverEntryBtn" onClick={onClick}>
      <IconSTY>
        {imageUrl ? <Image src={imageUrl} alt="icon" fill={true} /> : null}
      </IconSTY>
      <LabelSTY>{label}</LabelSTY>
    </BodySTY>
  );
};
export default ServerEntry;
