import { PlusIcon } from "evergreen-ui";
//
import { BodySTY } from "./style";
//
interface Props {
  name: string;
  children?: React.ReactNode;
  isPro?: true;
}

function Index({ name, children, isPro }: Props) {
  return (
    <BodySTY>
      <div className="item-content">
        {children}
        <div>{name}</div>
        {isPro && <i className="icon">Pro</i>}
      </div>
      <PlusIcon size={12} />
    </BodySTY>
  );
}

export default Index;
