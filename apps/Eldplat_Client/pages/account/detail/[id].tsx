import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout, GetServerSideProps } from "next";
import { RadioGroup } from "evergreen-ui";
// import { useSession } from "next-auth/react";
import { useSession } from "@utils/dummySession";

//
import { getLayout } from "@layout/MainLayout";
import { ParsedUrlQuery } from "querystring";
import { DUMMY_ACC_LIST } from "@services/account/getAccountList";
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
  I_ReqBody as I_CreateReq
} from "@services/account/createAccount";
import {
  updateAccount,
  I_ReqBody as I_UpdateReq
} from "@services/account/updateAccount";
import {
  DUMMY_ACC_DDL,
  I_AccountDDLItem as I_DDL
} from "@services/account/getAccountDDL";
import ControlBar from "@components/ControlBar";
import AccountDetail from "@contents/Account/AccountDetail";
import { useModal } from "@contexts/ModalContext/ModalProvider";
import ButtonSet from "@components/ButtonSet";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();
  const submitRef = React.useRef<HTMLButtonElement | null>(null);
  const { data: session, status } = useSession();
  const { showLeavePageModal } = useModal();
  const { editPage } = router.query;
  const [data, setData] = React.useState<I_AccountDetailItem | null>(null);
  const [ddl, setDDL] = React.useState<I_DDL>(DUMMY_ACC_DDL.ResultList[0]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState(editPage === "edit" || false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    const editedData = localStorage.getItem("accountEditData");
    const editedDummy = editedData ? JSON.parse(editedData) : null;
    const editDummy = editedDummy
      ? { ...editedDummy }
      : DUMMY_ONE_ACCOUNT.ResultList[0];
    setData(editDummy);
    setDDL(DUMMY_ACC_DDL.ResultList[0]);

    // if (!session) return;
    // try {
    // const uk = session.user.account_no;
    // const reqBody = {
    //   account_no: id,
    //   creorgno: session.user.org_no
    // };
    // const res = await getOneAccount(uk, reqBody);
    // const result = res.ResoutList[0];
    // } catch (e: any) {
    //   console.log(e);
    // }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    // console.log("🔜 data:", data);
    // TODO: to be remved, just for DEMO
    const accountRoleArrFromDummy =
      DUMMY_ONE_ACCOUNT.ResultList[0].account_role;
    const editedDataFitFormatForRead = accountRoleArrFromDummy.map((item) => {
      const updatedRoles = item.roles.map((role) => {
        if (data.account_role.includes(role.role_no)) {
          return { ...role, is_select: true };
        }
        return role;
      });
      return { ...item, roles: updatedRoles };
    });
    const editedDataForDemo = {
      ...DUMMY_ONE_ACCOUNT.ResultList[0],
      ...data,
      account_role: editedDataFitFormatForRead
    };
    localStorage.setItem("accountEditData", JSON.stringify(editedDataForDemo));
    router.push(`/account/detail/${id}?editPage=view`);

    // if (!session) return;
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

  const handleChangeRoute = async (path: string) => showLeavePageModal(path);
  const handleCancel = () => {
    if (!isEdit) {
      router.push("/account");
    } else {
      setIsEdit(false);
      handleChangeRoute(`/account/detail/${id}?editPage=view`);
    }
  };

  const handleConfirm = () => {
    if (!isEdit) {
      setIsEdit(true);
      router.push(`/account/detail/${id}?editPage=edit`);
    } else {
      submitRef.current && submitRef.current.click();
      setIsEdit(false);
      router.push(`/account/detail/${id}?editPage=view`);
    }
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!session) return;
    fetchData();
  }, [session, router]);

  return (
    <>
      <ControlBar hasShadow={true} flexEnd={true}>
        <ButtonSet
          isEdit={editPage === "edit"}
          secondaryBtnOnClick={handleCancel}
          secondaryBtnText={editPage === "edit" ? "取消" : "回列表頁"}
          primaryBtnOnClick={handleConfirm}
          primaryBtnText={editPage === "edit" ? "儲存" : "編輯"}
        />
      </ControlBar>
      {data && (
        <AccountDetail
          data={data}
          ddl={ddl}
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
