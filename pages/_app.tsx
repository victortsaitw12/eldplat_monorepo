import { useEffect, useState } from "react";
import type { AppPropsWithLayout } from "next/app";
import { ThemeProvider } from "styled-components";
//
import { I18Provider, LOCALES } from "@contexts/i18n";
import theme from "@styles/theme";
import { GlobalStyles } from "@styles/global";
import zhMessages from "../compiled-lang/zh.json";

// 看現在狀態是哪個語言則去抓哪個語言的json檔

async function bootstrapApplication(locale: string) {
  let mess: any;
  switch (locale) {
    case "en-us":
      mess = await import("../compiled-lang/en.json");
      break;
    case "th-th":
      mess = await import("../compiled-lang/th.json");
      break;
    default:
      mess = await import("../compiled-lang/zh.json");
  }
  return mess;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [locale, setLocale] = useState<string>(LOCALES.CHINESE);
  const [messages, setMessages] = useState<any>(zhMessages);

  useEffect(() => {
    bootstrapApplication(locale).then((mess) => {
      setMessages(mess);
    });
  }, [locale]);

  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <I18Provider locale={locale} messages={messages} defaultLocale="zh">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {getLayout(
          <Component {...pageProps} locale={locale} setLocale={setLocale} />
        )}
      </ThemeProvider>
    </I18Provider>
  );
}
