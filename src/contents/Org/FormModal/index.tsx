import React from "react";
import { TextInputField, Switch, Group, toaster, Dialog } from "evergreen-ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormSTY } from "./style";

import { createOrg, I_CreateOrgReq } from "@services/org/createOrg";
import { updateOrg, I_EditOrgReq } from "@services/org/updateOrg";

const FormModal = ({ content, setModalContent }: I_Props) => {
  const isCreate = content.isCreate;
  console.log(content);
  const defaultValues = isCreate
    ? {
        org_no: content.req.org_no,
        org_name: "",
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
    formState: { errors }
  } = useForm({
    defaultValues
  });

  //------ functions ------//
  const asyncSubmitForm = async (data: any) => {
    console.log("🔜create data:", data);
    try {
      const res = isCreate ? await createOrg(data) : updateOrg();
      if (res.StatusCode === "200") {
        setModalContent(null);
        toaster.success(`${res.Message}`, {
          duration: 1.5
        });
      } else {
        throw new Error(`${res.Message}`);
      }
    } catch (e: any) {
      console.log(e);
      toaster.warning(e.message);
    }
  };

  const handleCancel = () => {
    setModalContent(null);
  };
  const handleConfirm = () => {
    handleSubmit(asyncSubmitForm)();
    setModalContent(null);
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
        <TextInputField label="父層組織" value={content.parentName} />
        <TextInputField
          label="組織名稱"
          placeholder="請輸入組織名稱"
          {...register("org_name", {
            required: "不可空白"
          })}
        />
        {!content.isCreate && (
          <Group className="modal__status">
            <Switch height={16} name="status" checked={true} />
            <span>啟用</span>
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
}

export interface I_ModalContent {
  isCreate: boolean;
  parentName: string;
  orgName: string;
  org_enb?: boolean;
  req: any;
}
