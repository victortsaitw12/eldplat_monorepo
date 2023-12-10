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
import FilterSelect from "./FilterSelect";
import NoResult from "@components/NoResult";

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
  const [filter, setFilter] = React.useState("");
  const [subFilter, setSubFilter] = React.useState("");

  const filtedData = data.filter((item) => item.fg_no === filter);

  //------ functions ------//
  const handleFilter = (v: string) => {
    setFilter(v);
  };

  const handleSubFilter = (v: string) => {
    setSubFilter(v);
  };

  // ------- render ------- //
  const controlBar = {
    readonly: false,
    req: false,
    label: "",
    editEle: (
      <FilterSelect
        data={data}
        onChange={handleFilter}
        onSubChange={handleSubFilter}
        filter={filter}
        subFilter={subFilter}
      />
    ),
    value: (
      <FilterSelect
        data={data}
        onChange={handleFilter}
        filter={filter}
        onSubChange={handleSubFilter}
        subFilter={subFilter}
      />
    )
  };

  const noData = {
    readonly: false,
    req: false,
    label: "",
    editEle: <NoResult />,
    value: <NoResult />
  };

  const dataFitInfoBox = (filter ? filtedData : data).map(
    (item: I_AuthFuncItem, i: number) => {
      // if (filter && item.func_no !== filter) return;
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
            subFilter={subFilter}
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
            subFilter={subFilter}
          />
        )
      };
    }
  );
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
