//
import { NextPageWithLayout, NextPage } from "next";
import { AppProps } from "next/app";
import { ReactNode } from "react";
//
declare module "next" {
  type NextPageWithLayout<P, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module "next/app" {
  type AppPropsWithLayout<P = { [key: string]: any }> = AppProps<P> & {
    Component: NextPageWithLayout<P>;
  };
}
