import React from "react";
import { UseFormRegister } from "react-hook-form";
import { BodySTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import { I_FuncAuthElemReq } from "@services/role/createRole";
import InfoBox from "@components/InfoBox";
import AutnModule from "./AuthModule";

const AuthPanel = ({ data, isEdit, isCreate }: I_Props) => {
  console.log("✨ data:", data);
  console.log("✨ flatten data:", flatten(data));

  const [authData, setAuthData] = React.useState<I_FuncAuthElemReq[]>(
    flatten(data)
  );

  const funcAuth = [];
  //------ functions ------//

  const handleAuthFuncModuleChange = (v: I_FuncAuthElemReq) => {
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
  const dataFitInfoBox = data.map((item: I_AuthFuncItem) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: <AutnModule data={item} isEdit={true} />,
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

// ===== FUNCTION NOT IN RENDERS ===== //
const flatten = (nestArr: any[]) => {
  const result: any[] = [];
  nestArr.map((item) => {
    if (item.func_element)
      item.func_element.forEach((elem: any) => {
        const flattenObj = {
          fg_no: item.fg_no,
          func_no: item.func_no,
          module_no: item.module_no,
          element_no: elem.element_no,
          element_default: elem.element_default
        };
        result.push(flattenObj);
      });
  });
  return result;
};
