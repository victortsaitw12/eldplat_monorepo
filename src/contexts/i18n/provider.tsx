import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";

const provider = ({ children, locale, messages }: any) => {
  // console.log("locale", locale); // fr-ca
  // console.log("message", messages); // 存放各個語言的內容物件
  // message[locale] => 取得其中一種語言的物件內容，ex: {hello: 'Bonjour', edit: 'Modifiez {path} et enregistrez pour recharger.'}

  return (
    <IntlProvider locale={locale} textComponent={Fragment} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default provider;
