import React from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import {
  Control,
  UseFormSetValue,
  UseFormGetValues
} from "react-hook-form/dist/types/form";
import { Select } from "evergreen-ui";
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
  const controlBar = {
    readonly: false,
    req: false,
    label: "",
    editEle: (
      <div className="authPanel__control">
        <div className="group">
          <Select onChange={(event) => alert(event.target.value)}>
            {data.map((item, i) => (
              <option key={`module-${i}`} value="foo" selected>
                {item.func_name}
              </option>
            ))}
          </Select>
          <Select onChange={(event) => alert(event.target.value)}>
            <option value="foo" selected>
              元件
            </option>
            <option value="bar">新增</option>
            <option value="bar">編輯</option>
            <option value="bar">檢視</option>
          </Select>
        </div>
      </div>
    ),
    value: (
      <div className="authPanel__control">
        <Select onChange={(event) => alert(event.target.value)}>
          <option value="foo" selected>
            功能
          </option>
          <option value="bar">功能1</option>
        </Select>
        <Select onChange={(event) => alert(event.target.value)}>
          <option value="foo" selected>
            元件
          </option>
          <option value="bar">元件2</option>
        </Select>
      </div>
    )
  };

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
      <InfoBox
        isEdit={isEdit}
        infoData={[controlBar, ...dataFitInfoBox]}
        infoTitle="權限"
      />
    </BodySTY>
  );
};

export default AuthPanel;

interface I_Props {
  data: I_AuthFuncItem[];
  register: UseFormRegister<any>;
  control: Control<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
}
