import React from "react";
import { BodySTY } from "./style";

import { I_AccountRole } from "@services/account/getOneAccount";
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

  // ------- render ------- //
  const dataFitInfoBox = data.map((item, i: number) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: <RoleModule data={item} onChange={handleRoleChange} />,
      value: (
        <div className="roles--view">
          <div className="roles__module">{item.module_name}</div>
          <div className="roles__role">
            {item.roles
              .filter((elem: any) => elem.is_select === true)
              .map((elem: any, i: number) => (
                <div key={`role-${i}`} data-id={elem.role_no}>
                  {elem.role_name}
                </div>
              ))}
          </div>
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
