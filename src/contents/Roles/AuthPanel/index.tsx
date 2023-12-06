import React from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { UseFormSetValue } from "react-hook-form/dist/types/form";
import { useRouter } from "next/router";
import { BodySTY } from "./style";

import { I_AuthFuncItem, I_AuthFuncElement } from "@services/role/getOneRole";
import { I_FuncAuthElemReq } from "@services/role/createRole";
import InfoBox from "@components/InfoBox";
import AuthModule from "./AuthModule";

const AuthPanel = ({
  data,
  register,
  control,
  setValue,
  getValues
}: I_Props) => {
  const router = useRouter();
  const { editPage } = router.query;
  const isEdit = editPage === "edit";

  //------ functions ------//

  // ------- render ------- //
  const dataFitInfoBox = data.map((item: I_AuthFuncItem, i: number) => {
    return {
      readonly: false,
      req: false,
      label: "",
      editEle: (
        <AuthModule
          data={item}
          isEdit={true}
          index={i}
          register={register}
          getValues={getValues}
          control={control}
          setValue={setValue}
        />
      ),
      value: (
        <AuthModule
          data={item}
          isEdit={false}
          register={register}
          getValues={getValues}
          control={control}
          setValue={setValue}
        />
      )
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
  register: UseFormRegister<any>;
  control: any;
  setValue: UseFormSetValue<any>;
}
