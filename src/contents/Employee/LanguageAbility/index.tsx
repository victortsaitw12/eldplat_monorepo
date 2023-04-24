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

interface I_languageType {
  languag: string;
  listen: string;
  speak: string;
  read: string;
  write: string;
  saved: boolean;
}

interface I_Language_Props {
  insertData: any;
  setInsertData: (insertData: any) => void;
}

function LanguageAbility({ insertData, setInsertData }: I_Language_Props) {
  const [insertLang, setInsertLang] = useState<I_languageType[]>([]);
  const [LangForApi, setLangForApi] = useState<any[]>([]);

  // 新增語言空欄位
  const handleInsertLang = () => {
    setInsertLang((prev) => [
      ...prev,
      { languag: "", listen: "", speak: "", read: "", write: "", saved: false }
    ]);
  };

  // 取得按下勾勾的function
  const getHandleSaveLang = (idx: number) => {
    return (lang: I_languageType) => {
      const newLangs = [...insertLang];
      newLangs[idx] = { ...lang, saved: true };
      console.log("newLangs", newLangs);
      setInsertLang(newLangs);
    };
  };

  // 移除該欄語言
  const handleRemoveLang = (idx: number, e: any) => {
    console.log("idx-------", idx);

    console.log("e", e);
    setInsertLang(
      insertLang.filter((item, i) => {
        console.log("新增的i", i);
        return i !== idx;
      })
    );
    setLangForApi(
      LangForApi.filter((item, i) => {
        return i !== idx;
      })
    );
    const newData = { ...insertData };
    newData.languags = LangForApi;
    setInsertData(newData);
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
    newData.languags = LangForApi;
    setInsertData(newData);
  };

  const handleEdit = (idx: number, lang_line: any) => {
    const newLangs = [...insertLang];
    newLangs[idx] = { ...lang_line, saved: false };
    setInsertLang(newLangs);
  };

  useEffect(() => {
    const newData = { ...insertData };
    newData.languags = LangForApi;
    console.log("newData", newData);
    setInsertData(newData);
  }, [LangForApi, setInsertData]);

  console.log("🎗insertLang", insertLang);
  console.log("🎨LangForApi", LangForApi);

  return (
    <BodySTY>
      <Pane className="language-title">
        <Heading is="h4">語言能力</Heading>
        <Button
          marginRight={12}
          iconBefore={PlusIcon}
          onClick={() => {
            handleInsertLang();
          }}
        >
          新增語言
        </Button>
      </Pane>

      {insertLang.map((lang_line, idx) => {
        console.log("lang_line", lang_line);

        if (lang_line.saved)
          return (
            <Pane className="input-line">
              <Text>{lang_line.languag}</Text>
              <Pane className="content-line">
                <Pane className="description">
                  <Text>{lang_line.listen}</Text>
                  <Text>{lang_line.speak}</Text>
                  <Text>{lang_line.read}</Text>
                  <Text>{lang_line.write}</Text>
                </Pane>
                <Pane>
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
                </Pane>
              </Pane>
            </Pane>
          );
        return (
          <NewLanguage
            key={idx}
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
    </BodySTY>
  );
}

export default LanguageAbility;
