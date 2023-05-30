import { Heading, Pane, Text } from "evergreen-ui";
import React, { useState } from "react";
import { BodySTY } from "./style";
import { language_MAP } from "@contents/Driver/Detail/LanguageAbility/data";
import { I_driverInfo } from "@contents/Driver/driver.type";

function LanguageAbility(props: I_driverInfo) {
  const { currentUserInfo } = props;
  return (
    <BodySTY>
      <Heading is="h4" className="title">
        語言能力
      </Heading>
      {currentUserInfo &&
        currentUserInfo.languages?.map((item, i) => (
          <Pane key={`lang-${i}`} className="input-line">
            <Text>{language_MAP.get(item.language)}</Text>
            <Pane className="description">
              <Text>聽-{language_MAP.get(item.listen)}</Text>
              <Text>說-{language_MAP.get(item.speak)}</Text>
              <Text>讀-{language_MAP.get(item.read)}</Text>
              <Text>寫-{language_MAP.get(item.write)}</Text>
            </Pane>
          </Pane>
        ))}
    </BodySTY>
  );
}

export default LanguageAbility;
