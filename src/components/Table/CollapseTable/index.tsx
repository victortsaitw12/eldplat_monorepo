import React from "react";
import {
  IconButton,
  ChevronDownIcon,
  ChevronRightIcon,
  Button
} from "evergreen-ui";
import { DivSTY } from "./style";

import Table, { I_Table } from "@components/Table/Table";

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

  //------ functions ------//
  const toggleCollapse = ({ e, i }: { e: any; i: number }) => {
    e.stopPropagation();
    const index = i + 1;
    if (collapse.includes(index)) {
      setCollapse(collapse.filter((item) => item !== index));
    } else {
      setCollapse([...collapse, index]);
    }
  };

  const handleFoldAll = () => {
    const initCollapse = getInitCollapse();
    setCollapse(initCollapse);
  };

  const handleOpenAll = () => {
    setCollapse([]);
  };

  const getInitCollapse = React.useCallback(() => {
    const totalTableRows = data ? data.length : 0;
    const totalCollapseRowsArr = Array.from(
      { length: totalTableRows + 1 },
      (_, i) => i
    );
    return totalCollapseRowsArr.slice(1, totalTableRows + 1);
  }, [data]);

  // ------ effect ------ //
  React.useEffect(() => {
    const initCollapse = getInitCollapse();
    setCollapse(initCollapse);
  }, [data]);

  // ------- render ------- //
  const dataCollapse = data?.map((item, i) => {
    return {
      checkbox: (
        <IconButton
          className="collapseBtn"
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
