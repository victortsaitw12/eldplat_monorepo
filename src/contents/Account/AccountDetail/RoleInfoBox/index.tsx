import React from "react";
import {
  FieldErrors,
  UseFormRegister,
  Control,
  UseFormSetValue,
  UseFormGetValues
} from "react-hook-form";
import { BodySTY } from "./style";

import { I_AccountRole, I_RoleItem } from "@services/account/getOneAccount";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";
import RoleModule from "./RoleModule";
import { getValue } from "evergreen-ui/types/theme";
import { get } from "lodash";

const RolePanel = ({
  data,
  isEdit,
  register,
  control,
  setValue,
  getValues
}: I_Props) => {
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );

  //------ functions ------//
  const handleRoleChange = (v: string[]) => {
    console.log("🍅 v", v);
    setValue("account_role", v);
  };

  console.log("🍅 data", getValues());

  // ------- render ------- //
  const dataFitInfoBox = data.map((item) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: (
        <RoleModule data={item} onChange={handleRoleChange} isEdit={true} />
      ),
      value: (
        <RoleModule data={item} onChange={handleRoleChange} isEdit={false} />
      )
    };
  });

  return (
    <BodySTY className="role">
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="平台角色" />
    </BodySTY>
  );
};

export default RolePanel;

interface I_Props {
  data: I_AccountRole[];
  isEdit: boolean;
  register: UseFormRegister<any>;
  control: Control<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
}

// const getRoles = (data: I_RoleItem[]) => {
//   const selectedRoles = data.filter((elem: any) => elem.is_select === true);
//   if (selectedRoles.length === 0) return "--";
//   const roles = selectedRoles.map((elem: any, i: number) => (
//     <div key={`role-${i}`} data-id={elem.role_no}>
//       {elem.role_name}
//     </div>
//   ));
//   return roles;
// };
