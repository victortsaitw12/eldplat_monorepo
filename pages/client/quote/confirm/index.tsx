import Collapse from "@components/Collapse";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import { Select, Button } from "evergreen-ui";
import ConditionCard from "@components/ConditionCard";
import { useRef } from "react";
import CustomPickup from "@contents/Client/Quote/CustomPickup";
import FlightPickup from "@contents/Client/Quote/FlightPickup";
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
  const handleCheck = (e: any) => {
    console.log("check:", e.target.checked);
    console.log("check name:", e.target.name);
  };
  return (
    <BodySTY>
      {type === "custom" ? (
        <CustomPickup ref={formButtonRef} />
      ) : (
        <FlightPickup ref={formButtonRef} />
      )}
      <ConditionCard
        type="checkbox"
        title="預約注意事項、使用條款、隱私權條款、寵物條款"
        onChange={handleCheck}
      ></ConditionCard>
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
