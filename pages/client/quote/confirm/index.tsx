import { BodySTY } from "./style";
import { Label } from "@components/Button/Primary";
import TermOfUse from "@components/TermOfUse";
import { useRef, useState } from "react";
import CustomPickup from "@contents/Client/Quote/CustomPickup";
import FlightPickup from "@contents/Client/Quote/FlightPickup";
import { ParsedUrlQuery } from "querystring";
import {
  GetServerSideProps,
  NextPageWithLayout,
  InferGetServerSidePropsType
} from "next";

import { getLayout } from "@layout/ClientLayout";
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  type = "custom",
  departureDate,
  flightDate,
  flightNo,
  purpose,
  returnDate,
  airport,
  terminal,
  airline,
  flightTime
}) => {
  const formButtonRef = useRef<HTMLButtonElement | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  console.log(departureDate, flightDate, flightNo, purpose, returnDate);
  return (
    <BodySTY>
      {type === "custom" ? (
        <CustomPickup
          ref={formButtonRef}
          departureDate={departureDate}
          purpose={purpose}
          returnDate={returnDate}
        />
      ) : (
        <FlightPickup
          ref={formButtonRef}
          flightDate={flightDate}
          flightNo={flightNo}
          airport={airport}
          terminal={terminal}
          airline={airline}
          flightTime={flightTime}
        />
      )}
      <TermOfUse
        type="checkbox"
        checked={checked}
        onCheck={(value: boolean) => {
          setChecked(value);
        }}
      >
        <div>
          我已了解
          <span style={{ color: "#3670C9" }}>預約注意事項</span>、
          <span style={{ color: "#3670C9" }}>使用條款</span>、
          <span style={{ color: "#3670C9" }}>隱私權條款</span>
        </div>
      </TermOfUse>
      <Label
        text={type === "custom" ? "前往訂車" : "下一步"}
        onClick={() => {
          formButtonRef.current?.click();
        }}
        disabled={!checked}
      />
    </BodySTY>
  );
};

interface Props {
  type: string;
  title: string;
  departureDate?: string;
  returnDate?: string;
  purpose?: string;
  flightDate?: string;
  flightNo?: string;
  airport?: string;
  terminal?: string;
  airline?: string;
  flightTime?: string;
}

interface RouterQuery extends ParsedUrlQuery {
  type: string;
  departureDate: string;
  returnDate: string;
  purpose: string;
  flightDate: string;
  flightNo: string;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  RouterQuery
> = async (context) => {
  const { query } = context;
  const type = query.type ? (query.type as string) : "custom";
  const pageProps: Props = {
    type: query.type ? (query.type as string) : "custom",
    title: type === "custom" ? "客製包車" : "機場接送"
  };
  if (query.departureDate)
    pageProps.departureDate = query.departureDate as string;
  if (query.returnDate) pageProps.returnDate = query.returnDate as string;
  if (query.purpose) pageProps.purpose = query.purpose as string;
  if (query.flightDate) pageProps.flightDate = query.flightDate as string;
  if (query.flightNo) pageProps.flightNo = query.flightNo as string;
  if (query.airport) pageProps.airport = query.airport as string;
  if (query.terminal) pageProps.terminal = query.terminal as string;
  if (query.airline) pageProps.airline = query.airline as string;
  if (query.flightTime) pageProps.flightTime = query.flightTime as string;
  return {
    props: pageProps
  };
};

Page.getLayout = getLayout;
export default Page;
