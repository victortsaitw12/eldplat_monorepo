import { Dialog } from "evergreen-ui";
import { GetServerSideProps, NextPageWithLayout } from "next";
import React from "react";
import { BodySTY } from "./style";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import { getLayout } from "@layout/MainLayout";
import { getOrgList } from "@services/org/getOrgList";
import OrgList from "@contents/Org/OrgList";
import ModalContent, {
  I_PopContent,
  defaultPopContent
} from "@contents/Org/ModalContent";
import LoadingSpinner from "@components/LoadingSpinner";
import { useSession, signIn, signOut } from "next-auth/react";

const Page: NextPageWithLayout<{
  locale: string;
  setPageType: (t: string) => void;
}> = () => {
  const { data: session } = useSession();
  const userId = "admin";
  const [data, setData] = React.useState([]);
  const [isDialogShown, setIsDialogShown] = React.useState(false);
  const [popContent, setPopContent] =
    React.useState<I_PopContent>(defaultPopContent);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getOrgList(userId);
      setData(result);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleRenderCreateModal = (item: any, e: any) => {
    e.stopPropagation();
    const createContent = {
      title: "新增下級",
      parentOrgId: "o-001",
      parentName: item.label,
      newOrgName: ""
    };
    setPopContent(createContent);
    setIsDialogShown(true);
  };

  const handleRenderEditModal = (item: any, e: any) => {
    e.stopPropagation();
    const editContent = {
      title: "編輯組織",
      parentOrgId: "o-001",
      parentName: "雄獅通運開發中",
      newOrgName: item.label,
      enabled: true
    };
    setPopContent(editContent);
    setIsDialogShown(true);
  };

  // ------- useEffect ------- //

  React.useEffect(() => {
    fetchData();
  }, []);

  // ------- render ------- //
  if (isLoading)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );

  if (!session) return <div>Your're not signed in. redirect to login in</div>;

  return (
    <BodySTY>
      <OrgList
        data={data}
        onCreate={handleRenderCreateModal}
        onEdit={handleRenderEditModal}
      />
      <Dialog
        title={popContent.title}
        isShown={isDialogShown}
        onCloseComplete={() => setIsDialogShown(false)}
        confirmLabel="確定"
        cancelLabel="取消"
      >
        <ModalContent popContent={popContent} />
      </Dialog>
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

// Page.getLayout = getLayout;
Page.getLayout = (page: React.ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
