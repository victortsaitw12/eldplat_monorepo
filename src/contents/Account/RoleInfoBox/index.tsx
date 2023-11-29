import React from "react";
import { BodySTY } from "./style";

import { I_AccountRole, I_RoleItem } from "@services/account/getOneAccount";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";
import RoleModule from "./RoleModule";

const RoleInfoBox = ({ data, isEdit }: I_Props) => {
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );

  //------ functions ------//

  const handleRoleChange = () => {
    console.log("role change");
  };

  const getRoles = (data: I_RoleItem[]) => {
    const selectedRoles = data.filter((elem: any) => elem.is_select === true);
    if (selectedRoles.length === 0) return "--";
    const roles = selectedRoles.map((elem: any, i: number) => (
      <div key={`role-${i}`} data-id={elem.role_no}>
        {elem.role_name}
      </div>
    ));
    return roles;
  };

  // ------- render ------- //
  const dataFitInfoBox = data.map((item) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: <RoleModule data={item} onChange={handleRoleChange} />,
      value: (
        <div className="roles--view">
          <div className="roles__module">{item.module_name}</div>
          <div className="roles__role">{getRoles(item.roles)}</div>
        </div>
      )
    };
  });

  return (
    <BodySTY className="role">
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="平台角色" />
    </BodySTY>
  );
};

export default RoleInfoBox;

interface I_Props {
  data: I_AccountRole[];
  isEdit: boolean;
}
