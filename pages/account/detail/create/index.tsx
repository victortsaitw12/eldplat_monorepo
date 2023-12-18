import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout, GetServerSideProps } from "next";
import { RadioGroup } from "evergreen-ui";
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
import LightBox from "@components/Lightbox";
import { getAccountName, getRoleNames } from "@contents/Account/account.util";

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const submitRef = React.useRef<HTMLButtonElement | null>(null);
  const { data: session, status } = useSession();
  const { showLeavePageModal } = useModal();
  const { editPage } = router.query;
  const [data, setData] = React.useState<I_AccountDetailItem | null>(null);
  const [ddl, setDDL] = React.useState<I_DDL>(DUMMY_ACC_DDL.ResultList[0]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const isEdit = true;
  const isCreate = true;
  const [options] = React.useState([
    { label: "使用以前的資料", value: "0" },
    { label: "使用我剛剛填寫的資料", value: "1" }
  ]);
  const [dataChoice, setDataChoice] = React.useState("");
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    const createDummy = DUMMY_DATA_CREATE.ResultList[0];
    const editedData = localStorage.getItem("accountEditData");
    const editedDummy = editedData ? JSON.parse(editedData) : null;
    const editDummy = editedDummy
      ? { ...editedDummy }
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

  const asyncSubmitForm = async (data: any) => {
    // console.log("🔜 data:", data);

    // TODO: to be remved, just for DEMO
    // check user + store data
    const account_name = getAccountName(data);
    const roles = getRoleNames(data);
    if (isCreate) {
      const isUserExist = DUMMY_ACC_LIST.ResultList.find(
        (item) => item.account_name === account_name
      );
      if (isUserExist && dataChoice === "") {
        setDataChoice("0");
        setLightboxOpen(true);
        // showModal(userExistModalContent);
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
      localStorage.setItem(
        "accountEditData",
        JSON.stringify(editedDataForDemo)
      );
      router.push("/account/detail/create?editPage=view");
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

  const handleChangeRoute = async (path: string) => showLeavePageModal(path);
  const handleCancel = () => {
    // onCreate
    if (isCreate) {
      handleChangeRoute("/account");
      return;
    }
  };

  const handleConfirm = () => {
    // onCreate
    if (isCreate) {
      submitRef.current && submitRef.current.click();
      return;
    }
  };

  const handleDataChoice = () => {
    if (dataChoice === "1") {
      submitRef.current && submitRef.current.click();
      setLightboxOpen(false);
    } else {
      router.push("/account/detail/007217?editPage=view");
      setLightboxOpen(false);
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
          isEdit={true}
          secondaryBtnOnClick={handleCancel}
          secondaryBtnText="回列表頁"
          primaryBtnOnClick={handleConfirm}
          primaryBtnText="儲存"
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
      {lightboxOpen && (
        <LightBox
          title="您先前已建立該使用者"
          onCancel={() => setLightboxOpen(false)}
          onConfirm={handleDataChoice}
          isOpen={true}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div>是否前往編輯該使用者？</div>
            <div>
              若要編輯該使用者，請選擇下列選項，再點擊「前往編輯」按鈕：
            </div>
            <RadioGroup
              value={dataChoice}
              options={options}
              onChange={(event) => setDataChoice(event.target.value)}
              size={16}
            />
          </div>
        </LightBox>
      )}
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
