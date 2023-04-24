import { Heading, Pane, Text } from "evergreen-ui";
import React, { useState } from "react";
import { BodySTY } from "./style";

function LanguageAbility() {
  return (
    <BodySTY>
      <Heading is="h4">語言能力</Heading>

      <Pane className="input-line">
        <Text>中文</Text>
        <Pane className="description">
          <Text>聽-精通</Text>
          <Text>說-精通</Text>
          <Text>讀-精通</Text>
          <Text>寫-精通</Text>
        </Pane>
      </Pane>
      <Pane className="input-line">
        <Text>英文</Text>
        <Pane className="description">
          <Text>聽-精通</Text>
          <Text>說-精通</Text>
          <Text>讀-精通</Text>
          <Text>寫-精通</Text>
        </Pane>
      </Pane>
    </BodySTY>
  );
}

export default LanguageAbility;
