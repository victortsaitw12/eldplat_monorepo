import { BodySTY } from "./style";
import { Button } from "evergreen-ui";
// import ConditionCard from "@components/ConditionCard";
import TermOfUse from "@components/TermOfUse";
import { useRef } from "react";
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
> = ({ type = "custom" }) => {
  const formButtonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <BodySTY>
      {type === "custom" ? (
        <CustomPickup ref={formButtonRef} />
      ) : (
        <FlightPickup ref={formButtonRef} />
      )}
      <TermOfUse type="checkbox">
        <div>
          我已了解
          <span style={{ color: "#3670C9" }}>預約注意事項</span>、
          <span style={{ color: "#3670C9" }}>使用條款</span>、
          <span style={{ color: "#3670C9" }}>隱私權條款</span>
        </div>
      </TermOfUse>
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
