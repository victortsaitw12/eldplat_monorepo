import React, { memo, useId } from "react";
import FlowItem from "./FlowItem";
import { BodySTY, IconSTY } from "./style";
import { ArrowRightIcon } from "evergreen-ui";
//
interface Props {
  dataLists: Array<{ imageUrl?: string; label: string }>;
}
//
const StyledArrayIcon = () => {
  return (
    <IconSTY>
      <ArrowRightIcon size={14} />
    </IconSTY>
  );
};
//
function FlowList({ dataLists }: Props) {
  const renderList: Array<React.ReactNode> = [];
  const id = useId();
  dataLists.forEach((item, index) => {
    if (index !== 0) {
      renderList.push(<StyledArrayIcon key={id + "icon-" + index} />);
    }
    renderList.push(<FlowItem key={id + "item-" + index} {...item} />);
  });
  return <BodySTY>{renderList.length > 0 ? renderList : <div></div>}</BodySTY>;
}
export default memo(FlowList);
