import { Heading, Pane, Text } from "evergreen-ui";
import React from "react";
import { BodySTY } from "./style";
import { language_MAP } from "@contents/Driver/Detail/LanguageAbility/data";
import { I_DriverInfo } from "@contents/Driver/driver.type";
import { getOneDDL, I_LabelVal } from "@services/driver/getOneDDL";

function LanguageAbility({
  currentUserInfo
}: {
  currentUserInfo: I_DriverInfo;
}) {
  let lang_name: I_LabelVal[] = [];
  let lang_listen: I_LabelVal[] = [];
  let lang_read: I_LabelVal[] = [];
  let lang_speak: I_LabelVal[] = [];
  let lang_write: I_LabelVal[] = [];

  React.useEffect(() => {
    const fetchDDL = async () => {
      lang_name = await getOneDDL("language", "account");
    };
    fetchDDL();
  }, []);
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
        <div style={{ textAlign: "center" }}>
          目前無資料，請至員工設定頁面編輯
        </div>
      )}
    </BodySTY>
  );
}

export default LanguageAbility;
