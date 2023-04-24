import React, { useState } from "react";
import {
  Pane,
  SelectField,
  TextInputField,
  Checkbox,
  Button
} from "evergreen-ui";

interface I_Add {
  handleCloseLightBox: () => void;
}

function Add({ handleCloseLightBox }: I_Add) {
  const [checkedItems, setCheckedItems] = useState(false);
  const handleCheck = () => {
    checkedItems ? setCheckedItems(false) : setCheckedItems(true);
  };
  return (
    <>
      <SelectField label="車輛" placeholder="請選擇">
        <option value="請選擇" selected disabled>
          請選擇
        </option>
        <option value="sample">sample</option>
      </SelectField>
      <Pane display="flex" justifyContent="space-between" alignItems="center">
        <TextInputField
          flex="1"
          label="儀錶板數據"
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
        <Button marginRight={16} onClick={handleCloseLightBox}>
          儲存並新增其他
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

export default Add;
