import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { FormSTY } from "./style";

import {
  I_AccountDetailItem,
  I_AccountRole
} from "@services/account/getOneAccount";
import BasicInfoBox from "./BasicInfoBox";
import EmployeeInfoBox from "./EmployeeInfoBox";
import RoleInfoBox from "./RoleInfoBox";
import { I_ReqBody as I_CreateReqBody } from "@services/account/createAccount";
import { I_ReqBody as I_UpdateReqBody } from "@services/account/updateAccount";
import { I_AccountDDLItem } from "@services/account/getAccountDDL";
import { I_RoleItem } from "@services/account/getOneAccount";

const AccountDetail = ({
  data,
  ddl,
  isEdit,
  asyncSubmitForm,
  submitRef
}: I_Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const isCreate = router.query.id === "create";

  const createValues: I_CreateReqBody = {
    account_fname: data?.account_fname || "",
    account_lname: data?.account_lname || "",
    org_no: data?.org_no || [],
    creorgno: session?.user.org_no || "",
    staff_no: data?.staff_no || "",
    job_title: data?.job_title || "",
    content_phone_tel_country_code1:
      data?.content_phone_tel_country_code1 || "",
    content_phone_tel1: data?.content_phone_tel1 || "",
    content_priv_email: data?.content_priv_email || "",
    account_role: (data && getSelectedRoles(data)) || []
  };

  const defaultValues = isCreate
    ? createValues
    : { ...createValues, account_no: data?.account_no || "" };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues
  });

  return (
    <FormSTY onSubmit={handleSubmit(asyncSubmitForm)}>
      <BasicInfoBox
        data={data}
        isEdit={isEdit}
        register={register}
        errors={errors}
      />
      <EmployeeInfoBox
        data={data}
        ddl={ddl}
        isEdit={isEdit}
        register={register}
        control={control}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      <RoleInfoBox
        data={data.account_role}
        isEdit={isEdit}
        register={register}
        control={control}
        setValue={setValue}
        getValues={getValues}
        errors={errors}
      />
      <button style={{ display: "none" }} ref={submitRef} type="submit">
        發送表單
      </button>
    </FormSTY>
  );
};

export default AccountDetail;

interface I_Props {
  data: I_AccountDetailItem;
  ddl: I_AccountDDLItem;
  isEdit: boolean;
  asyncSubmitForm: (data: any) => Promise<void>;
  submitRef: React.RefObject<HTMLButtonElement>;
}

// ===== FUNCTION NOT IN RENDERS ===== //
const getSelectedRoles = (data: I_AccountDetailItem) => {
  if (!data) return;
  const flattenRoleList = data.account_role.flatMap(
    (accoountRole: I_AccountRole) => accoountRole.roles
  );
  const selectedRoleList = flattenRoleList.filter(
    (item: I_RoleItem) => item.is_select === true
  );
  if (selectedRoleList.length === 0) return [];
  const roleStrList = selectedRoleList.map((item) => item.role_no);
  console.log("🍅", roleStrList);
  return roleStrList;
};
