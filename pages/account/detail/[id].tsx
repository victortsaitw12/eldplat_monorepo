import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import {
  NextPageWithLayout,
  GetServerSideProps,
  InferGetServerSidePropsType
} from "next";
import { BodySTY } from "./style";

//
import { getLayout } from "@layout/MainLayout";
import BasicInfoBox from "@contents/Account/BasicInfoBox";
import EmployeeInfoBox from "@contents/Account/EmployeeInfoBox";
import { ParsedUrlQuery } from "querystring";

import {
  getOneAccount,
  I_AccountDetailItem
} from "@services/account/getOneAccount";
import ControlBar from "@contents/Account/ControlBar";
import { ModalContext } from "@contexts/ModalContext/ModalProvider";
import RoleInfoBox from "@contents/Account/RoleInfoBox";
import LoadingSpinner from "@components/LoadingSpinner";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();
  const modal = React.useContext(ModalContext);
  const { editPage } = router.query; //是否為編輯頁的判斷1或0
  const [data, setData] = React.useState<I_AccountDetailItem | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const isEdit = editPage === "edit";

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getOneAccount();
      const result = res.DataList[0];
      setData(result);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("data", data);
  };

  const handleNavigation = async (path: string) => {
    router.push(path);
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (!isEdit) return;

    const handleRouteChange = (url: string) => {
      console.log("🍅 before", modal);
      modal.showLeavePageModal();
      console.log("🍅 after");
    };

    router.beforePopState(({ url, as, options }) => {
      if (modal.modalContent) {
        // If there's a confirmation modal open, prevent the route change
        return false;
      }
      return true;
    });

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [isEdit]);

  return (
    <>
      <ControlBar
        isEdit={editPage === "edit"}
        handleNavigation={handleNavigation}
      />
      <BodySTY>
        {data ? (
          <>
            <BasicInfoBox data={data} isEdit={editPage === "edit"} />
            <EmployeeInfoBox data={data} isEdit={editPage === "edit"} />
            <RoleInfoBox
              data={data.account_role}
              isEdit={editPage === "edit"}
            />
          </>
        ) : (
          <LoadingSpinner />
        )}
      </BodySTY>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      driverNo: params!.id
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;

interface Props {
  driverNo: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}
