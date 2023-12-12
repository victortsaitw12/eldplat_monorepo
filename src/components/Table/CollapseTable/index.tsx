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

function CollapseTable({ maxRow, ...props }: I_Props) {
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
  const [collapse, setCollapse] = React.useState<number[]>([2]);

  const toggleCollapse = (e: any) => {
    e.stopPropagation();
    const index = e.target.value;
    if (collapse.includes(index)) {
      setCollapse(collapse.filter((item) => item !== index));
    } else {
      setCollapse([...collapse, index]);
    }
  };

  const dataCollapse = data?.map((item, i) => {
    return {
      checkbox: (
        <IconButton
          icon={collapse.includes(i) ? ChevronDownIcon : ChevronRightIcon}
          value={i}
          onClick={toggleCollapse}
        />
      ),
      ...item
    };
  });

  return (
    <DivSTY className="collapseTable" collapse={collapse}>
      <Table
        titles={titles}
        data={dataCollapse}
        onView={onView}
        headNode={headNode}
        onCheck={toggleCollapse}
      />
    </DivSTY>
  );
}

export default CollapseTable;

interface I_Props extends I_Table {
  maxRow?: number;
}
