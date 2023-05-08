import React, { useCallback } from "react";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
//
import { getLayout } from "@layout/MainLayout";
import { Pane } from "evergreen-ui";
import BusEditForm from "@contents/Bus/BusEditForm";
import { useRouter } from "next/router";
import { BodySTY } from "./style";
import { ParsedUrlQuery } from "querystring";
//
const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ busId }) => {
  const router = useRouter();
  const asyncSubmitForm = async (data: any) => {
    console.log("data", data);
  };
  const cancelFormHandler = useCallback(() => {
    router.push("/bus");
  }, [router]);
  return (
    <BodySTY>
      {
        <Pane
          width="100%"
          height="100%"
          background="#fff"
          borderRadius="10px"
          overflow="auto"
        >
          {/* Put your component here */}
          <BusEditForm
            submitForm={asyncSubmitForm}
            onCancel={cancelFormHandler}
          />
        </Pane>
      }
    </BodySTY>
  );
};

interface Props {
  busId: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      busId: params ? params.id : ""
    }
  };
};

Page.getLayout = getLayout;
export default Page;
