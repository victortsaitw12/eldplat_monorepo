import React from "react";
import { TextInputField, Switch, Group, toaster, Dialog } from "evergreen-ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";
import { FormSTY } from "./style";

import { createOrg, I_CreateOrgReq } from "@services/org/createOrg";
import { updateOrg, I_EditOrgReq } from "@services/org/updateOrg";
import { textValidation } from "@utils/hookFormValidation";
// import { fetchData } from "next-auth/client/_utils";

const FormModal = ({
  content,
  setModalContent,
  refetch,
  handleCreateDummy,
  handleEditDummy
}: I_Props) => {
  const { data: session } = useSession();
  const [checked, setChecked] = React.useState(true);
  const isCreate = content.isCreate;
  const defaultValues = isCreate
    ? {
        porg_no: content.req.org_no,
        org_name: "前端測試新增組織", // ""
        org_tp: content.req.org_tp,
        org_lvl: content.req.org_lvl
      }
    : {
        org_no: content.req.org_no,
        org_name: content.req.org_name,
        org_enb: content.req.org_enb
      };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues
  });
  console.log("🍅 errors:", errors);

  //------ functions ------//
  const asyncSubmitForm = async (data: any) => {
    isCreate ? handleCreateDummy(data) : handleEditDummy(data);
    // TODO
    // if (!session) return;
    // const uk = session.user.account_no;
    // console.log("🔜 data:", data);
    // try {
    //   const res = isCreate
    //     ? await createOrg(uk, data)
    //     : await updateOrg(uk, data);

    //   if (res.StatusCode === "200") {
    //     setModalContent(null);
    //     refetch();
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

  const handleCancel = () => {
    setModalContent(null);
  };
  const handleConfirm = () => {
    const data = getValues();
    console.log("🔜 data:", data);
    handleSubmit(asyncSubmitForm)();
  };

  // ------- render ------- //
  return (
    <FormSTY
      className="modal"
      onSubmit={handleSubmit((data) => {
        asyncSubmitForm({ ...data });
      })}
    >
      <Dialog
        title={isCreate ? "新增下級" : "編輯組織"}
        isShown={true}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        confirmLabel="確定"
        cancelLabel="取消"
      >
        <TextInputField label="父層組織" value={content.parentName} disabled />
        <TextInputField
          label="組織名稱"
          placeholder="請輸入組織名稱"
          {...register("org_name", {
            required: "不可輸入特殊符號",
            validate: textValidation
          })}
          isInvalid={!!errors.org_name}
        />
        {errors.org_name && (
          <div className="input-error">{errors.org_name?.message}</div>
        )}
        {!content.isCreate && (
          <Group style={{ display: "flex", gap: "8px" }}>
            <Switch
              height={16}
              checked={checked}
              {...register("org_enb", {
                required: "不可空白",
                onChange: (e) => setChecked(e.target.checked)
              })}
            />
            <div>啟用</div>
          </Group>
        )}
      </Dialog>
    </FormSTY>
  );
};

export default FormModal;

//====== OUTSIDE-REACT-DOM: VARIABLES ======//
//====== OUTSIDE-REACT-DOM: FUNCTIONS ======//
//====== OUTSIDE-REACT-DOM: TYPING ======//
interface I_Props {
  content: I_ModalContent;
  setModalContent: (v: any) => void;
  refetch: () => void;
  handleCreateDummy: (v: any) => void;
  handleEditDummy: (v: any) => void;
}

export interface I_ModalContent {
  isCreate: boolean;
  parentName: string;
  orgName: string;
  org_enb?: boolean;
  req: any;
  parent_org_name?: string;
}
