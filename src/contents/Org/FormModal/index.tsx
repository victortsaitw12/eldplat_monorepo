import React from "react";
import { Switch, Group, Text, TextInputField } from "evergreen-ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";
import { ErrorMessage } from "@hookform/error-message";
import { FormSTY } from "./style";

import { createOrg, I_CreateOrgReq } from "@services/org/createOrg";
import { updateOrg, I_EditOrgReq } from "@services/org/updateOrg";
import { textValidation } from "@utils/hookFormValidation";
import CustomTextInputField from "@components/CustomTextInputField";
import LightBox from "@components/Lightbox";
import Required from "@components/Required";

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
        org_name: "", // ""
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
      <LightBox
        title={isCreate ? "新增下級" : "編輯組織"}
        isOpen={true}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        <>
          <TextInputField
            className="evergreenInput"
            style={{ fontSize: "16px", height: "38px", color: "#7A869A" }}
            label={
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px"
                }}
              >
                父層組織
              </div>
            }
            value={content.parentName}
            disabled
          />
          <TextInputField
            className="evergreenInput"
            style={{ fontSize: "16px", height: "38px", color: "#7A869A" }}
            label={
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "8px",
                  display: "flex"
                }}
              >
                <Required />
                組織名稱
              </div>
            }
            placeholder="請輸入組織名稱"
            {...register("org_name", {
              required: "不可輸入特殊符號",
              validate: textValidation
            })}
            isInvalid={!!errors.org_name}
            hint={
              <div style={{ color: "red", fontSize: "12px", marginTop: "8px" }}>
                {errors.org_name?.message}
              </div>
            }
          />
          {/* <ErrorMessage
            errors={errors}
            name="org_name"
            render={({ message }) => (
              <Text className="input-error">{message}</Text>
            )}
          /> */}
          {!content.isCreate && (
            <Group
              style={{ display: "flex", gap: "8px", marginTop: "24px" }}
              className="switch"
            >
              <Switch
                height={16}
                checked={checked}
                {...register("org_enb", {
                  onChange: (e) => setChecked(e.target.checked)
                })}
              />
              <div>啟用</div>
            </Group>
          )}
        </>
      </LightBox>

      {/* confirmLabel="確定"
        cancelLabel="取消" */}
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
