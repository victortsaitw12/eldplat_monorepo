import {
  Button,
  Heading,
  Pane,
  Text,
  PlusIcon,
  IconButton,
  TrashIcon,
  EditIcon
} from "evergreen-ui";
import React, { useEffect, useState } from "react";
// import { language_DATA } from "./data";
import NewLanguage from "./NewLanguage";
import { BodySTY } from "./style";
import { language_DATA } from "./data";

interface I_languageType {
  language: string;
  listen: string;
  speak: string;
  read: string;
  write: string;
  saved: boolean;
}

interface I_Language_Props {
  viewOnly?: boolean;
  insertData: any;
  setInsertData?: (insertData: any) => void;
}

function LanguageAbility({
  viewOnly = false,
  insertData,
  setInsertData
}: I_Language_Props) {
  const [insertLang, setInsertLang] = useState<I_languageType[]>([]); // 檢視樣子的:
  // [{language:"中文", listen:"聽-精通", read:"讀-精通", saved:true, speak:"說-精通", write:"寫-精通"}]
  const [LangForApi, setLangForApi] = useState<any[]>([]);
  console.log("🍅insertData", insertData);

  // 一進來有editData的話先設好要顯示的語言們
  useEffect(() => {
    const editLangArr = insertData?.languages; // 從api取回來的資料是代碼形式的: speak:1 之類的
    setLangForApi(editLangArr);
    const transLangArr = editLangArr?.map((v: any) => {
      const compareLang = language_DATA.language.find((item) => {
        return item.value === v.language;
      });
      const compareListen = language_DATA.listen.find((item) => {
        return item.value === v.listen;
      });
      const compareSpeak = language_DATA.speak.find((item) => {
        return item.value === v.speak;
      });
      const compareRead = language_DATA.read.find((item) => {
        return item.value === v.read;
      });
      const compareWrite = language_DATA.write.find((item) => {
        return item.value === v.write;
      });
      return {
        language: compareLang?.label,
        listen: compareListen?.label,
        speak: compareSpeak?.label,
        read: compareRead?.label,
        write: compareWrite?.label,
        saved: true
      };
    });
    setInsertLang(transLangArr);
  }, []);

  // 新增語言空欄位
  const handleInsertLang = () => {
    setInsertLang((prev) => [
      ...prev,
      { language: "", listen: "", speak: "", read: "", write: "", saved: false }
    ]);
  };

  // 取得按下勾勾的function
  const getHandleSaveLang = (idx: number) => {
    return (lang: I_languageType) => {
      const newLangs = [...insertLang];
      newLangs[idx] = { ...lang, saved: true };
      setInsertLang(newLangs);
    };
  };

  // 移除該欄語言
  const handleRemoveLang = (idx: number, e: any) => {
    setInsertLang(
      insertLang.filter((item, i) => {
        return i !== idx;
      })
    );
    setLangForApi(
      LangForApi.filter((item, i) => {
        return i !== idx;
      })
    );
    const newData = { ...insertData };
    newData.languages = LangForApi;
    setInsertData && setInsertData(newData);
  };

  const handleCancel = (idx: number) => {
    // TODO: 移除畫面上該行
    setInsertLang(
      insertLang.filter((item, i) => {
        return i !== idx;
      })
    );
    setLangForApi(
      LangForApi.filter((item, i) => {
        return i !== idx;
      })
    );

    // TODO: 移除大物件(insertData)中該物件
    const newData = { ...insertData };
    newData.languages = LangForApi;
    setInsertData && setInsertData(newData);
  };

  const handleEdit = (idx: number, lang_line: any) => {
    const newLangs = [...insertLang];
    newLangs[idx] = { ...lang_line, saved: false };
    setInsertLang(newLangs);
  };

  useEffect(() => {
    const newData = { ...insertData };
    newData.languages = LangForApi;
    setInsertData && setInsertData(newData);
  }, [LangForApi, setInsertData]);

  return (
    <BodySTY>
      <Pane className="language-title">
        <Heading is="h4">語言能力</Heading>
        {!viewOnly && (
          <Button
            marginRight={12}
            iconBefore={PlusIcon}
            onClick={() => {
              handleInsertLang();
            }}
          >
            新增語言
          </Button>
        )}
      </Pane>
      {insertLang?.map((lang_line, idx) => {
        if (lang_line.saved)
          return (
            <Pane key={idx} className="input-line">
              <Text>{lang_line.language}</Text>
              <Pane className="content-line">
                <Pane className="description">
                  <Text>{lang_line.listen}</Text>
                  <Text>{lang_line.speak}</Text>
                  <Text>{lang_line.read}</Text>
                  <Text>{lang_line.write}</Text>
                </Pane>
                <Pane>
                  {!viewOnly && (
                    <>
                      <IconButton
                        icon={EditIcon}
                        className="edit-icon"
                        onClick={() => {
                          handleEdit(idx, lang_line);
                        }}
                      />
                      <IconButton
                        icon={TrashIcon}
                        className="trash-icon"
                        onClick={() => {
                          handleCancel(idx);
                        }}
                      />
                    </>
                  )}
                </Pane>
              </Pane>
            </Pane>
          );
        return (
          <NewLanguage
            key={idx}
            idx={idx}
            handleSave={getHandleSaveLang(idx)}
            defaultData={lang_line}
            handleRemoveLang={(e: any) => {
              handleRemoveLang(idx, e);
            }}
            LangForApi={LangForApi}
            setLangForApi={setLangForApi}
          />
        );
      })}
      {(!insertLang || insertLang.length == 0) && (
        <Text className="empty-msg">目前無資料</Text>
      )}
    </BodySTY>
  );
}

export default LanguageAbility;
