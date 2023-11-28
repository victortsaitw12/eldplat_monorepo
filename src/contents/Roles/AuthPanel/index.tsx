import React from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { BodySTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import { I_FuncAuthElemReq } from "@services/role/createRole";
import InfoBox from "@components/InfoBox";
import AutnModule from "./AuthModule";

const AuthPanel = ({ data, isEdit, isCreate, register }: I_Props) => {
  const [authData, setAuthData] = React.useState<I_FuncAuthElemReq[]>([]);

  //------ functions ------//
  const handleAuthFuncModuleChange = (v: I_FuncAuthElemReq) => {
    // check
    const updateAuthData = [...authData];
    const checkAuthDataExist = (
      arr: I_FuncAuthElemReq[],
      obj: I_FuncAuthElemReq
    ) => {
      const isObjExistInArr = arr.indexOf(obj) !== -1;
      const arrValueWithoutElemDefault = Array.from(arr, (item) =>
        Object.values(item)
      );
      const CompositStr = arrValueWithoutElemDefault.toString();
      if (isObjExistInArr) {
        updateAuthData.filter();
      } else {
        updateAuthData.push(obj);
      }
    };
    setAuthData(updateAuthData);
  };

  // ------- render ------- //
  const dataFitInfoBox = data.map((item: I_AuthFuncItem, i: number) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: <AutnModule data={item} isEdit={true} index={i} />,
      value: <AutnModule data={item} isEdit={false} />
    };
  });
  return (
    <BodySTY>
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="權限" />
    </BodySTY>
  );
};

export default AuthPanel;

interface I_Props {
  data: I_AuthFuncItem[];
  isEdit: boolean;
  isCreate: boolean;
  register: UseFormRegister<any>;
}
