import React, { useState } from "react";
import { Pane, TextInputField, Checkbox, Button } from "evergreen-ui";
import DetailTable from "@components/Table/DetailTable";
import { MOCK_DATA } from "src/mock-data/03MeterHistory";
import { Detail } from "./style";

interface I_Edit {
  handleCloseLightBox: () => void;
  onCheck?: (items: any) => void;
}

function Edit({ handleCloseLightBox }: I_Edit) {
  const [checkedItems, setCheckedItems] = useState(false);

  const handleCheck = () => {
    checkedItems ? setCheckedItems(false) : setCheckedItems(true);
  };
  return (
    <>
      <Pane marginBottom="24px">
        <DetailTable data={MOCK_DATA[0]} />
      </Pane>
      <Detail>
        <div>
          As a reference, here are some existing Meter Entries around Mon, Mar
          06, 2023:
        </div>
        <div className="date">
          <span>
            Tue, Feb 14, 2023 - <b>20,778</b>
          </span>
          <span>
            Tue, Feb 14, 2023 - <b>20,811</b>
          </span>
        </div>
        <a href="javascript:void(0)" className="more">
          View all Meter History for this Vehicle
        </a>
      </Detail>
      <Pane display="flex" justifyContent="space-between" alignItems="center">
        <TextInputField
          flex="1"
          label="儀錶板數據 *"
          hint="Lasr updated: 20,811 mi (8 days ao)"
        />
        <Checkbox
          justifyContent="right"
          width="10%"
          label="Void"
          marginTop="-8px"
          checked={checkedItems}
          onChange={() => handleCheck()}
        />
      </Pane>
      <TextInputField type="date" label="日期" />
      <Pane display="flex" justifyContent="right">
        <Button
          marginRight={16}
          appearance="minimal"
          onClick={handleCloseLightBox}
        >
          取消
        </Button>
        <Button
          marginRight={16}
          appearance="primary"
          intent="none"
          onClick={handleCloseLightBox}
        >
          送出儲存
        </Button>
      </Pane>
    </>
  );
}

export default Edit;
