import React, { ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";
import { useSession } from "@utils/dummySession";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

//
import { getLayout } from "@layout/MainLayout";
import {
  getOneRole,
  I_RoleDetail,
  I_RoleReq,
  DUMMY_ONE_ROLE_CREATE,
  DUMMY_ONE_ROLE
} from "@services/role/getOneRole";
import { I_CreateRoleReq, DUMMY_CREATE_ROLE } from "@services/role/createRole";
import { DUMMY_UPDATE_ROLE } from "@services/role/updateRole";
import ControlBar from "@components/ControlBar";
import RoleDetail from "@contents/Roles/RoleDetail";
import { useModal } from "@contexts/ModalContext/ModalProvider";
import ButtonSet from "@components/ButtonSet";

const Page: NextPageWithLayout<never> = ({ id }) => {
  const router = useRouter();
  const { showLeavePageModal, showModal } = useModal();
  const isCreate = router.query.id === "create";
  const { editPage } = router.query;
  const { data: session } = useSession();
  const submitRef = React.useRef<HTMLButtonElement | null>(null);
  const [isEdit, setIsEdit] = React.useState(editPage === "edit" || false);
  const [data, setData] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  //------ functions ------//
  const fetchData = async () => {
    setIsLoading(true);
    const createDummy = DUMMY_ONE_ROLE_CREATE.ResultList[0];
    const editedData = localStorage.getItem("roleEditData");
    const editedDummy = editedData ? JSON.parse(editedData) : null;
    const editDummy = editedDummy
      ? { ...editedDummy }
      : DUMMY_ONE_ROLE.ResultList[0];
    setData(isCreate ? createDummy : editDummy);
    // if (!session) return;
    // const uk = session?.user.account_no;
    // const createData = {
    //   creorgno: session.user.org_no
    // };
    // const data = isCreate
    //   ? createData
    //   : { ...createData, role_no: router.query.id };
    // try {
    //   const result = await getOneRole(uk, data as I_RoleReq);
    //   setData(result.ResultList[0]);
    // } catch (e: any) {
    //   console.log(e);
    // }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    // console.log("🔜 data:", data);
    if (isCreate) {
      localStorage.setItem(
        "roleCreateData",
        JSON.stringify({
          ...data,
          id: "create",
          module_name: "車管系統",
          role_enb: true
        })
      );
      router.push("/role");
    } else {
      localStorage.setItem("roleEditData", JSON.stringify({ ...data }));
      router.push(`/role/detail/${id}?editPage=view`);
    }
    // if (!session) return;
    // const uk = session.user.account_no;
    // try {
    //   const res = isCreate
    //     ? await createRole(uk, {...data,creorgno: session?.user.org_no})
    //     : await updateRole(uk,{...data,creorgno: session?.user.org_no});

    //   if (res.StatusCode === "200") {
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

  const handleChangeRoute = (path: string) => {
    showLeavePageModal(path);
    // example for showModal
    // const modalContent = {
    //   title: "標題(唯一必填)",
    //   children: <div>內文元件或文字</div>,
    //   onConfirm: () => router.push(path),
    //   onCancel: () => router.push(path),
    //   customBtns: <Button>自訂按鈕</Button>
    // };

    // showModal(modalContent);
  };

  const handleCancel = async () => {
    // onCreate
    if (isCreate) {
      handleChangeRoute("/role");
      return;
    }
    // onView
    if (!isEdit) {
      router.push("/role");
    } else {
      // onEdit
      setIsEdit(false);
      handleChangeRoute(`/role/detail/${id}?editPage=view`);
    }
  };

  const handleConfirm = () => {
    // onCreate
    if (isCreate) {
      submitRef.current && submitRef.current.click();
      return;
    }
    // onEdit
    if (isEdit) {
      submitRef.current && submitRef.current.click();
      setIsEdit(false);
      router.push(`/role/detail/${id}?editPage=view`);
    } else {
      // onView
      setIsEdit(true);
      router.push(`/role/detail/${id}?editPage=edit`);
    }
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!session) return;
    fetchData();
  }, [session, router]);

  React.useEffect(() => {
    if (isEdit) return;
    localStorage.removeItem("roleEditData");
  }, [router]);

  return (
    <>
      <ControlBar hasShadow={true} flexEnd={true}>
        <ButtonSet
          isEdit={editPage === "edit"}
          secondaryBtnOnClick={handleCancel}
          secondaryBtnText={
            isCreate ? "回列表頁" : editPage === "edit" ? "取消" : "回列表頁"
          }
          primaryBtnOnClick={handleConfirm}
          primaryBtnText={
            isCreate ? "儲存" : editPage === "edit" ? "儲存" : "編輯"
          }
        />
      </ControlBar>
      {data && (
        <RoleDetail
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
  const { params, query } = context;
  return {
    props: {
      editPage: query.editPage == "edit",
      id: params!.id
    }
  };
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;

// ===== FUNCTION NOT IN RENDERS ===== //
const getFlattenAuthDataArr = (data: I_RoleDetail) => {
  const result = data?.func_auth.map((item) => {
    item.func_element.map((elem) => {
      return {
        fg_no: item.fg_no,
        func_no: item.func_no,
        module_no: item.module_no,
        element_no: elem.element_no,
        element_default: elem.element_default
      };
    });
  });
  return result;
};

interface Props {
  id: string;
}
