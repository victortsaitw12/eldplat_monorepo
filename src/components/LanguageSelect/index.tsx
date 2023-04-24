import React from "react";
import { LOCALES } from "@contexts/i18n";
import { BodySTY } from "./style";

const languages = [
  { value: LOCALES.CHINESE, language: "Chinese" },
  { value: LOCALES.ENGLISH, language: "English" },
  { value: LOCALES.THAI, language: "Thai" }
];

interface selectType {
  locale?: string;
  setLocale?: (locale: string) => void;
}

function LanguageSelect(props: selectType) {
  const { locale, setLocale } = props;
  const handleLanguages = (languageVal: string) => {
    if (setLocale) setLocale(languageVal);
  };

  return (
    <BodySTY>
      {/* <span>{translate("language_choose")}</span> */}
      <select
        onChange={(e) => {
          handleLanguages(e.target.value);
        }}
        value={locale}
      >
        {languages.map((lang, idx) => {
          return (
            <option key={lang.value} value={lang.value}>
              {lang.language}
            </option>
          );
        })}
      </select>
    </BodySTY>
  );
}

export default LanguageSelect;
