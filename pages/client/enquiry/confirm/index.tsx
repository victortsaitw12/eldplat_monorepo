import Collapse from "@components/Collapse";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import { Select, Button } from "evergreen-ui";

import { useRef } from "react";
import CustomPickup from "@contents/Client/Enquiry/CustomPickup";
import FlightPickup from "@contents/Client/Enquiry/FlightPickup";
import { ParsedUrlQuery } from "querystring";
import {
  GetServerSideProps,
  NextPageWithLayout,
  InferGetServerSidePropsType
} from "next";

import { getLayout } from "@layout/QuoteLayout";
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ type = "custom" }) => {
  const formButtonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <BodySTY>
      {type === "custom" ? (
        <CustomPickup ref={formButtonRef} />
      ) : (
        <FlightPickup ref={formButtonRef} />
      )}
      <div>注意事項</div>
      <Button
        appearance="primary"
        onClick={() => {
          formButtonRef.current?.click();
        }}
      >
        {type === "custom" ? "前往訂車" : "下一步"}
      </Button>
    </BodySTY>
  );
};

interface Props {
  type: string;
  title: string;
}

interface RouterQuery extends ParsedUrlQuery {
  type: string;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  RouterQuery
> = async (context) => {
  const { query } = context;
  console.log(query);
  const type = query.type ? (query.type as string) : "custom";

  return {
    props: {
      type,
      title: type === "custom" ? "客製包車" : "機場接送"
    }
  };
};

Page.getLayout = getLayout;
export default Page;
