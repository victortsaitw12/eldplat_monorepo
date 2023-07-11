import { useEffect, useState } from "react";
import type { AppPropsWithLayout } from "next/app";
import { ThemeProvider } from "styled-components";
//
import { I18Provider, LOCALES } from "@contexts/i18n";
import theme from "@styles/theme";
import { GlobalStyles } from "@styles/global";
import { getVendorsLang } from "@services/vendor/getAllVendors";
import { useRouter } from "next/router";
import { Noto_Sans } from "next/font/google";
import LoadingModal from "@components/LoadingModal";
import LoadingSpinner from "@components/LoadingSpinner";
const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "600", "700", "800"]
});

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

function Loader() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url: string) => {
      setLoading(true);
    };
    const handleComplete = (url: string) => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return loading ? (
    <LoadingModal>
      <LoadingSpinner></LoadingSpinner>
    </LoadingModal>
  ) : null;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [locale, setLocale] = useState<string>(LOCALES.CHINESE);
  const [messages, setMessages] = useState<any>(null);

  const [pageType, setPageType] = useState<string>(
    router.pathname.replace("/", "")
  ); // 先預設是vendor頁的多國語page
  // 存放從後端打API取回的多國語系JSON資料
  const [langJSONData, setLangJSONData] = useState<any>(null);

  useEffect(() => {
    getVendorsLang(locale, pageType)
      .then((data) => {
        const newData = JSON.parse(data.resultString);
        setLangJSONData(newData);
      })
      .catch((err) => console.error("多國語系error : ", err));
  }, [locale]);

  // 因為多國語系是抓message資料，所以一進來一定要先抓取api取到的JSON檔
  useEffect(() => {
    setMessages(langJSONData);
  }, [langJSONData]);
  const loadLocaleData = () => {
    return langJSONData;
  };

  useEffect(() => {
    async function bootstrapApplication(locale: string) {
      const mess = await loadLocaleData();
      setMessages(mess);
    }
  }, [locale]);

  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
  return (
    <main className={notoSans.className}>
      <Loader />
      <I18Provider locale={locale} messages={messages} defaultLocale="zh">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {getLayout(
            <Component
              {...pageProps}
              locale={locale}
              setLocale={setLocale}
              setPageType={setPageType}
            />,
            { ...pageProps, locale: locale, setLocale: setLocale }
          )}
        </ThemeProvider>
      </I18Provider>
    </main>
  );
}
