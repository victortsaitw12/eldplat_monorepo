import { Button, Heading, SelectMenu } from "evergreen-ui";
import React, { useState } from "react";
import { charactor_DATA } from "./data";
import { BodySTY } from "./style";

function Charactor() {
  const [charactorSelected, setCharactorSelected] = useState<any>(null);
  return (
    <BodySTY>
      <Heading is="h4">指定角色</Heading>
      <SelectMenu
        title="搜尋角色"
        options={charactor_DATA.map((label) => ({ label, value: label }))}
        selected={charactorSelected}
        onSelect={(item) => setCharactorSelected(item.value)}
      >
        <Button>{charactorSelected || "請新增角色"}</Button>
      </SelectMenu>
    </BodySTY>
  );
}

export default Charactor;
