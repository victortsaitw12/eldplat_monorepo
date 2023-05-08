//
import { NextPageWithLayout, NextPage } from "next";
import { AppProps } from "next/app";
import { ReactNode } from "react";
//
interface LayoutProps {
  locale?: any;
  setLocale?: (locale: any) => void;
}
//
declare module "next" {
  type NextPageWithLayout<P, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactNode, layoutProps: LayoutProps) => ReactNode;
  };
}

declare module "next/app" {
  type AppPropsWithLayout<P = { [key: string]: any }> = AppProps<P> & {
    Component: NextPageWithLayout<P>;
  };
}
