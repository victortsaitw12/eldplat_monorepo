import React from "react";
import {
  IconButton,
  ChevronDownIcon,
  ChevronRightIcon,
  Button
} from "evergreen-ui";
import { DivSTY } from "./style";

import Table, { I_Table } from "@components/Table/Table";
import IconBtn from "@components/Button/IconBtn";
import { head, set } from "lodash";

interface I_Props extends I_Table {
  maxRow?: number;
  hasControlAllBtns?: boolean;
}

function CollapseTable({
  maxRow = 2,
  hasControlAllBtns = true,
  ...props
}: I_Props) {
  const {
    titles,
    data,
    onCheck,
    noData,
    onView,
    headNode,
    footerNode,
    className
  } = props;

  const [collapse, setCollapse] = React.useState<number[]>([]);
  const [isAllOpen, setIsAllOpen] = React.useState(false);
  const [isAllFold, setIsAllFold] = React.useState(false);

  console.log("🍅 collapse", collapse);

  //------ functions ------//
  const toggleCollapse = ({ e, i }: { e: any; i: number }) => {
    e.stopPropagation();
    console.log("🍅 i", i);
    const index = i + 1;
    if (collapse.includes(index)) {
      setCollapse(collapse.filter((item) => item !== index));
    } else {
      setCollapse([...collapse, index]);
    }
  };

  const handleFoldAll = () => {
    console.log("foldAll");
  };
  const handleOpenAll = () => {
    console.log("openAll");
  };

  // ------ effect ------ //
  React.useEffect(() => {
    const getTotalTableRows = () => (data ? data.length : 0);
    const totalTableRows = getTotalTableRows();
    const totalCollapseRowsArr = Array.from(
      { length: totalTableRows },
      (_, i) => i
    );
    setCollapse(totalCollapseRowsArr.slice(1, totalTableRows + 1));
  }, [data, isAllFold]);

  React.useEffect(() => {
    if (isAllOpen) {
      setCollapse([]);
    }
  }, [isAllOpen]);

  // ------- render ------- //
  const dataCollapse = data?.map((item, i) => {
    return {
      checkbox: (
        <IconButton
          icon={collapse.includes(i + 1) ? ChevronRightIcon : ChevronDownIcon}
          value={i}
          onClick={(e: any) => toggleCollapse({ e, i })}
        />
      ),
      ...item
    };
  });

  const defaultHeadNode = (
    <div className="headNode">
      <div className="btns">
        <Button onClick={handleFoldAll}>全部收合</Button>
        <Button onClick={handleOpenAll}>全部展開</Button>
      </div>
      {headNode ? headNode : null}
    </div>
  );

  return (
    <DivSTY className="collapseTable" collapse={collapse} maxRow={maxRow}>
      <Table
        titles={titles}
        data={dataCollapse}
        onView={onView}
        headNode={defaultHeadNode}
        onCheck={toggleCollapse}
      />
    </DivSTY>
  );
}

export default CollapseTable;
