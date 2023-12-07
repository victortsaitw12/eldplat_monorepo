import React from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FormSTY } from "./style";

import {
  I_AuthFuncItem,
  I_AuthFuncElement,
  I_RoleDetail
} from "@services/role/getOneRole";
import DetailPanel from "./DetailPanel";
import AuthPanel from "../AuthPanel";

const RoleDetail = ({ data, isEdit, asyncSubmitForm, submitRef }: I_Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const isCreate = router.query.id === "create";

  const createValues = {
    role_name: data?.role_name || "",
    role_desc: data?.role_desc || "",
    role_tp: "O",
    module_no: data?.module_no || "bus",
    creorgno: session?.user.org_no,
    func_auth: data?.func_auth || []
  };

  const defaultValues = isCreate
    ? createValues
    : {
        ...createValues,
        role_no: data?.role_no || "",
        role_enb: data?.role_enb || ""
      };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({ defaultValues: defaultValues });

  return (
    <FormSTY onSubmit={handleSubmit((data) => asyncSubmitForm({ ...data }))}>
      <DetailPanel
        data={data}
        register={register}
        errors={errors}
        getValues={getValues}
        control={control}
      />
      <AuthPanel
        getValues={getValues}
        data={data.func_auth}
        register={register}
        control={control}
        setValue={setValue}
        // errors={errors}
      />
      <button style={{ display: "none" }} ref={submitRef} type="submit">
        發送表單
      </button>
    </FormSTY>
  );
};

export default RoleDetail;

interface I_Props {
  data: I_RoleDetail;
  isEdit: boolean;
  asyncSubmitForm: (data: any) => Promise<void>;
  submitRef: React.RefObject<HTMLButtonElement>;
}
