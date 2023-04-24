import {
  Pane,
  Combobox,
  IconButton,
  SmallTickIcon,
  TrashIcon
} from "evergreen-ui";
import React, { useState } from "react";
import { language_DATA } from "../data";
import { BodySTY } from "./style";

interface I_languageType {
  languag: string;
  listen: string;
  speak: string;
  read: string;
  write: string;
}

interface I_newLanguage_props {
  handleSave: (lang: any) => void;
  defaultData: I_languageType;
  handleRemoveLang: (lang: any, e?: any) => void;
  LangForApi: any;
  setLangForApi: (t: any) => void;
}

function NewLanguage({
  handleSave,
  defaultData,
  handleRemoveLang,
  setLangForApi
}: I_newLanguage_props) {
  const [languageValue, setLanguageValue] = useState<any>({
    languag: "",
    listen: "",
    speak: "",
    read: "",
    write: ""
  }); // 代碼物件
  const [languageLabel, setLanguageLabel] =
    useState<I_languageType>(defaultData); // 文字物件
  console.log("defaultData", defaultData);
  // 下拉選語言別或是程度時
  const handleChangeLang = (
    select: { value: string; label: string },
    name: string
  ) => {
    const newData = { ...languageValue, [name]: select.value };
    setLanguageValue(newData); // 代碼版
    const newLabelData = { ...languageLabel, [name]: select.label };
    setLanguageLabel(newLabelData); // 文字版
  };

  const handleAdd = () => {
    console.log(" add languageValue fn", handleSave);
    handleSave(languageLabel);

    setLangForApi((prev: any) => [...prev, languageValue]); // 存代碼形式進陣列物件
  };

  console.log("🎭languageValue", languageValue);
  console.log("👓languageLabel", languageLabel);
  return (
    <BodySTY>
      <Pane className="add-language">
        <Combobox
          items={language_DATA.languag.map((v) => {
            return v;
          })}
          itemToString={(item) => (item ? item.label : "")}
          onChange={(selected) => {
            handleChangeLang(selected, "languag");
          }}
          name="languag"
          placeholder={languageLabel.languag || "選擇語言"}
        />
        <Combobox
          openOnFocus
          items={language_DATA.listen.map((v) => {
            return v;
          })}
          itemToString={(item) => (item ? item.label : "")}
          onChange={(selected) => {
            handleChangeLang(selected, "listen");
          }}
          placeholder={languageLabel.listen || "聽力能力"}
        />
        <Combobox
          openOnFocus
          items={language_DATA.speak.map((v) => {
            return v;
          })}
          itemToString={(item) => (item ? item.label : "")}
          onChange={(selected) => {
            handleChangeLang(selected, "speak");
          }}
          placeholder={languageLabel.speak || "口說能力"}
        />
        <Combobox
          openOnFocus
          items={language_DATA.read.map((v) => {
            return v;
          })}
          itemToString={(item) => (item ? item.label : "")}
          onChange={(selected) => {
            handleChangeLang(selected, "read");
          }}
          placeholder={languageLabel.read || "閱讀能力"}
        />
        <Combobox
          openOnFocus
          items={language_DATA.write.map((v) => {
            return v;
          })}
          itemToString={(item) => (item ? item.label : "")}
          onChange={(selected) => {
            handleChangeLang(selected, "write");
          }}
          placeholder={languageLabel.write || "寫作能力"}
        />
        <IconButton
          icon={SmallTickIcon}
          className="tick-btn"
          onClick={handleAdd}
        />
        <IconButton
          icon={TrashIcon}
          className="trash-btn"
          onClick={(e: any) => {
            handleRemoveLang(languageValue, e);
          }}
        />
      </Pane>
    </BodySTY>
  );
}

export default NewLanguage;
