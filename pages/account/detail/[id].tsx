import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout, GetServerSideProps } from "next";

import { toaster } from "evergreen-ui";
import { useSession } from "next-auth/react";

//
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import {
  getOneAccount,
  I_AccountDetailItem,
  I_AccountRole,
  I_RoleItem,
  DUMMY_DATA_CREATE,
  DUMMY_ONE_ACCOUNT
} from "@services/account/getOneAccount";
import {
  createAccount,
  I_ReqBody as I_CreateReqBody
} from "@services/account/createAccount";
import {
  updateAccount,
  I_ReqBody as I_UpdateReqBody
} from "@services/account/updateAccount";
import ControlBar from "@components/ControlBar";
import AccountDetail from "@contents/Account/AccountDetail";
import { useModal } from "@contexts/ModalContext/ModalProvider";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();
  const submitRef = React.useRef<HTMLButtonElement | null>(null);
  const { data: session } = useSession();
  const { showLeavePageModal, showModal } = useModal();
  const { editPage } = router.query;
  const [data, setData] = React.useState<I_AccountDetailItem | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState(editPage === "edit" || false);
  const isCreate = id === "create";

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    if (!session) return;
    try {
      // const uk = session.user.account_no;
      // const reqBody = {
      //   account_no: id,
      //   creorgno: session.user.org_no
      // };
      // const res = await getOneAccount(uk, reqBody);
      // const result = res.ResoutList[0];
      if (isCreate) {
        setData(DUMMY_DATA_CREATE.ResultList[0]);
      } else {
        setData(DUMMY_ONE_ACCOUNT.ResultList[0]);
      }
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("🔜 data:", data);
    localStorage.setItem(
      "accountCreateData",
      JSON.stringify({ ...data, id: "create" })
    );
    if (!session) return;
    // const uk = session.user.account_no;
    // try {
    //   const res = isCreate
    //     ? await createAccount(uk, data)
    //     : await updateAccount(uk, data);

    //   if (res.StatusCode === "200") {
    //     // refetch();
    //     toaster.success(`${res.Message}`, {
    //       duration: 1.5
    //     });
    //   } else {
    //     throw new Error(`${res.Message}`);
    //   }
    // } catch (err: any) {
    //   toaster.warning(err.message);
    // }
  };

  const handleChangeRoute = async (path: string) => {
    const modalContent = {
      title: "Leave Page?",
      children: "Are you sure you want to leave this page?",
      onConfirm: () => router.push(path)
    };

    showModal(modalContent);
    // showLeavePageModal(path);
  };

  const handleCancel = () => {
    // onView
    if (!isEdit) handleChangeRoute("/account");
    // onEdit
    setIsEdit(false);
    handleChangeRoute(`/account/detail/${id}?editPage=view`);
  };

  const handleConfirm = () => {
    // onCreate
    if (isCreate) {
      submitRef.current && submitRef.current.click();
      router.push("/account");
    }
    // onEdit
    if (isEdit) {
      submitRef.current && submitRef.current.click();
      setIsEdit(false);
      router.push(`/account/detail/${id}?editPage=view`, undefined, {
        shallow: true
      });
    } else {
      setIsEdit(true);
      router.push(`/account/detail/${id}?editPage=edit`, undefined, {
        shallow: true
      });
    }
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!session) return;
    fetchData();
  }, [session, isCreate]);

  return (
    <>
      <ControlBar
        isEdit={editPage === "edit"}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        primaryDisable={false}
      />
      {data && (
        <AccountDetail
          data={data}
          isEdit={isEdit}
          asyncSubmitForm={asyncSubmitForm}
          submitRef={submitRef}
        />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const { params } = context;
  return {
    props: {
      id: params!.id
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;

interface Props {
  id: string;
}
interface Params extends ParsedUrlQuery {
  id: string;
}
