import { BodySTY } from "./style";
import Image from "next/image";
interface Props {
  imageUrl?: string;
  label: string;
}
const FlowItem = ({ imageUrl, label }: Props) => {
  return (
    <BodySTY>
      <div className="image-container">
        {imageUrl ? <Image src={imageUrl} alt="icon" fill={true} /> : null}
      </div>
      <div className="label-container">{label}</div>
    </BodySTY>
  );
};

export default FlowItem;
