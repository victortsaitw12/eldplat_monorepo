import React from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useSession } from "next-auth/react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { BodySTY } from "./style";
import { useRouter } from "next/router";

import { getLayout } from "@layout/MainLayout";
import { getOrgList } from "@services/org/getOrgList";
import OrgList from "@contents/Org/OrgList";
import FormModal, { I_ModalContent } from "@contents/Org/FormModal";
import LoadingSpinner from "@components/LoadingSpinner";

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [data, setData] = React.useState([]);
  const [modalContent, setModalContent] = React.useState<I_ModalContent | null>(
    null
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isInitialRenderEnd, setIsInitialRenderEnd] =
    React.useState<boolean>(false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    if (!session) return;
    // TODO  const uk = session.user.account_no;
    const uk = "admin";

    try {
      const result = await getOrgList(uk);
      setData(result);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleRenderModal = (type: "create" | "edit", item: any, e: any) => {
    e.stopPropagation();
    const isCreate = type === "create";
    const formContent = {
      isCreate: isCreate,
      parentName: isCreate ? item["org_name"] : item["parent_org_name"],
      orgName: isCreate ? "" : item["org_name"],
      req: isCreate
        ? {
            org_no: item["org_no"],
            org_name: "",
            org_tp: item["org_tp"],
            org_lvl: item["org_lvl"]
          }
        : { org_no: item["org_no"], org_name: item["org_name"], org_enb: true }
    };
    setModalContent(formContent);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!session) return;
    fetchData();
  }, [session]);

  React.useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  // ------- render ------- //
  if (isLoading || !session)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );

  return (
    <BodySTY>
      <OrgList
        data={data}
        onCreate={handleRenderModal.bind(null, "create")}
        onEdit={handleRenderModal.bind(null, "edit")}
      />
      {modalContent && (
        <FormModal
          content={modalContent}
          setModalContent={setModalContent}
          refetch={fetchData}
        />
      )}
    </BodySTY>
  );
};

export const getServerSideProps: GetServerSideProps<Params> = async (
  context
) => {
  const { query } = context;
  return {
    props: {}
  };
};

Page.getLayout = (page: React.ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });

export default Page;
