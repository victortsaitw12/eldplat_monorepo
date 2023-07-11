import { Heading, Pane, Text } from "evergreen-ui";
import React from "react";
import { BodySTY } from "./style";
import { language_MAP } from "@contents/Driver/Detail/LanguageAbility/data";
import { DriverInfo } from "@contents/Driver/driver.type";

function LanguageAbility({ currentUserInfo }: { currentUserInfo: DriverInfo }) {
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
      {currentUserInfo.languages.length === 0 && (
        <div style={{ textAlign: "center" }}>無資料，請至員工設定頁面編輯</div>
      )}
    </BodySTY>
  );
}

export default LanguageAbility;
