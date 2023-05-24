import { Heading, Pane, Text } from "evergreen-ui";
import React, { useState } from "react";
import { BodySTY } from "./style";
import { language_DATA } from "@contents/Employee/LanguageAbility/data";
import { I_driverInfo } from "@contents/driver/driver.typing";

function LanguageAbility(props: I_driverInfo) {
  const { currentUserInfo } = props;
  return (
    <BodySTY>
      <Heading is="h4">語言能力</Heading>
      {currentUserInfo &&
        currentUserInfo.languages?.map((item, i) => (
          <Pane key={`lang-${i}`} className="input-line">
            <Text>{item.language}</Text>
            <Pane className="description">
              <Text>聽-{item.listen}</Text>
              <Text>說-{item.speak}</Text>
              <Text>讀-{item.read}</Text>
              <Text>寫-{item.write}</Text>
            </Pane>
          </Pane>
        ))}
      <Pane className="input-line">
        <Text>中文</Text>
        <Pane className="description">
          <Text>聽-精通2</Text>
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
