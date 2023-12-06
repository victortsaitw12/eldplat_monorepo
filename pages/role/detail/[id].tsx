import React, { ReactNode } from "react";
import { GetServerSideProps, NextPageWithLayout } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
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

const Page: NextPageWithLayout<never> = ({ id }) => {
  const { showLeavePageModal } = useModal();
  const router = useRouter();
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
    if (!session) return;
    const uk = session?.user.account_no;
    const createData = {
      creorgno: session.user.org_no
    };
    const data = isCreate
      ? createData
      : { ...createData, role_no: router.query.id };
    try {
      // const result = await getOneRole(uk, data as I_RoleReq);
      const createDummy = DUMMY_ONE_ROLE_CREATE.ResultList[0];
      const editDummy = DUMMY_ONE_ROLE.ResultList[0];

      setData(isCreate ? createDummy : editDummy);
    } catch (e: any) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const asyncSubmitForm = async (data: any) => {
    console.log("🔜 data:", data);
    localStorage.setItem(
      "roleCreateData",
      JSON.stringify({ ...data, id: "create", module_name: "車管系統" })
    );
    if (!session) return;
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
  };

  const handleCancel = async () => {
    handleChangeRoute("/role");
    // if (!isEdit) router.push("/role");
    // setIsEdit(false);
    // router.push(`/role/detail/${id}?editPage=view`, undefined, {
    //   shallow: true
    // });
  };

  const handleConfirm = () => {
    if (isCreate) {
      submitRef.current && submitRef.current.click();
      router.push("/role");
    }
    if (isEdit) {
      submitRef.current && submitRef.current.click();
      setIsEdit(false);
      router.push(`/role/detail/${id}?editPage=view`, undefined, {
        shallow: true
      });
    } else {
      setIsEdit(true);
      router.push(`/role/detail/${id}?editPage=edit`, undefined, {
        shallow: true
      });
    }
  };

  // ------- useEffect ------- //
  React.useEffect(() => {
    if (!session) return;
    fetchData();
  }, [session]);

  return (
    <>
      <ControlBar
        isEdit={isEdit}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        primaryDisable={false}
      />
      {data && (
        <RoleDetail
          submitRef={submitRef}
          isEdit={isEdit}
          data={data}
          asyncSubmitForm={asyncSubmitForm}
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
