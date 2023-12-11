import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout, GetServerSideProps } from "next";
import { Radio, toaster } from "evergreen-ui";
import { useSession } from "next-auth/react";

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
  DUMMY_ONE_ACCOUNT,
  DUMMY_ROLE_NAME_MOUDULE_MAP,
  DUMMY_ROLE_NAME_MAP
} from "@services/account/getOneAccount";
import {
  createAccount,
  I_ReqBody as I_CreateReqBody
} from "@services/account/createAccount";
import {
  updateAccount,
  I_ReqBody as I_UpdateReqBody
} from "@services/account/updateAccount";
import {
  DUMMY_ACC_DDL,
  I_AccountDDLItem as I_DDL
} from "@services/account/getAccountDDL";
import ControlBar from "@components/ControlBar";
import AccountDetail from "@contents/Account/AccountDetail";
import { useModal } from "@contexts/ModalContext/ModalProvider";
import ButtonSet from "@components/ButtonSet";
import { get } from "lodash";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();
  const submitRef = React.useRef<HTMLButtonElement | null>(null);
  const { data: session } = useSession();
  const { showLeavePageModal, showModal } = useModal();
  const { editPage } = router.query;
  const [data, setData] = React.useState<I_AccountDetailItem | null>(null);
  const [ddl, setDDL] = React.useState<I_DDL>(DUMMY_ACC_DDL.ResultList[0]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState(editPage === "edit" || false);
  const isCreate = id === "create";

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    const createDummy = DUMMY_DATA_CREATE.ResultList[0];
    const editedDummy = localStorage.getItem("accountEditData");
    const editDummy = editedDummy
      ? { ...DUMMY_ONE_ACCOUNT.ResultList[0], editedDummy }
      : DUMMY_ONE_ACCOUNT.ResultList[0];
    setData(isCreate ? createDummy : editDummy);
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

  // TODO: to be remve, just for DEMO
  const getAccountName = (data: any) => {
    return `${data.account_lname}${data.account_fname}`;
  };

  const getRoleNames = (data: any) => {
    const groupedRoles = data.account_role.reduce((acc: any, item: string) => {
      const role_no = item.slice(item.length - 2);
      const module_no = item.slice(0, item.length - 2);
      if (!acc[module_no]?.includes(role_no)) {
        return {
          ...acc,
          [module_no]: [...(acc[module_no] || []), role_no]
        };
      }
      return acc;
    }, {});

    const result = [];
    for (const [key, value] of Object.entries(groupedRoles)) {
      result.push({
        role_name_m: DUMMY_ROLE_NAME_MOUDULE_MAP.get(key),
        role_name: value.map((item: string) => DUMMY_ROLE_NAME_MAP.get(item))
      });
    }

    return result;
  };

  const asyncSubmitForm = async (data: any) => {
    // check user
    console.log("🔜 data:", data);
    const account_name = getAccountName(data);
    const roles = getRoleNames(data);
    if (isCreate) {
      const isUserExist = DUMMY_ACC_LIST.ResultList.find(
        (item) => item.account_name === account_name
      );
      if (isUserExist) {
        showModal(userExistModalContent);
        return;
      }
      localStorage.setItem(
        "accountCreateData",
        JSON.stringify({
          ...data,
          id: "create",
          account_name: account_name,
          roles: roles,
          invt_sts: "03"
        })
      );
      router.push("/account");
    } else {
      localStorage.setItem("accountEditData", JSON.stringify({ ...data }));
      router.push(`/role/detail/${id}?editPage=view`);
    }

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

  const handleChangeRoute = async (path: string) => {
    showLeavePageModal(path);
  };

  const handleCancel = () => {
    // onCreate
    if (isCreate) {
      handleChangeRoute("/account");
      return;
    }
    // onView
    if (!isEdit) {
      handleChangeRoute("/account");
    } else {
      // onEdit
      setIsEdit(false);
      handleChangeRoute(`/account/detail/${id}?editPage=view`);
    }
  };

  const handleConfirm = () => {
    // onCreate
    if (isCreate) {
      submitRef.current && submitRef.current.click();
      return;
    }
    if (isEdit) {
      submitRef.current && submitRef.current.click();
      setIsEdit(false);
      router.push(`/account/detail/${id}?editPage=view`);
    } else {
      setIsEdit(true);
      router.push(`/account/detail/${id}?editPage=edit`);
    }
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!session) return;
    fetchData();
  }, [session, isCreate]);

  return (
    <>
      <ControlBar hasShadow={true}>
        <ButtonSet
          isEdit={editPage === "edit"}
          secondaryBtnOnClick={handleCancel}
          primaryBtnOnClick={handleConfirm}
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
interface I_GroupedRoles {
  [module_no: string]: string[];
}

const userExistModalContent = {
  title: "您先前已建立該使用者",
  children: (
    <div>
      <div>是否前往編輯該使用者？</div>
      <div>若要編輯該使用者，請選擇下列選項，再點擊「前往編輯」按鈕：</div>
      <div>
        <div>
          <input type="radio" name="data" id="retrieve" />
          使用以前的資料
        </div>
        <div>
          <input type="radio" name="data" id="renewal" />
          使用我剛剛填寫的資料
        </div>
      </div>
    </div>
  ),
  customBtns: <ButtonSet primaryBtnText="前往編輯" />
};
