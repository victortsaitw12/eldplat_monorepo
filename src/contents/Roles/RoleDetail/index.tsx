import React from "react";
import { DivSTY } from "./style";

import DetailPanel from "@contents/Roles/DetailPanel";
import AuthPanel from "@contents/Roles/AuthPanel";

const RoleDetail = ({ data }: I_Props) => {
  return (
    <DivSTY>
      {data && (
        <>
          {/* <input {...register("role_name", { required: "test" })} />
          <div>Test</div> */}
          <DetailPanel
            data={data}
            isEdit={editPage === "edit"}
            isCreate={isCreate}
            register={register}
            errors={errors}
          />
          {/* <AuthPanel
        data={data.func_auth}
        isEdit={editPage === "edit"}
        register={register}
        control={control}
        setValue={setValue}
        errors={errors}
      /> */}
        </>
      )}
    </DivSTY>
  );
};

export default RoleDetail;

interface I_Props {
  data: any;
}
