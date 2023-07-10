import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Details,
  Financial,
  Lifecycle,
  Maintenance,
  Specifications
} from "./SubFrom";
import { BusDataTypes } from "../bus.type";
import { getBusById } from "@services/bus/getBusById";
interface I_Props {
  isEdit: boolean;
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
  asyncSubmitForm: (data: any) => Promise<void>;
  busId: string;
  formType: string;
  busDefaultData: BusDataTypes;
}
const BusDetail = ({
  isEdit,
  submitRef,
  asyncSubmitForm,
  formType,
  busDefaultData
}: I_Props) => {
  const [visibleForm, setVisibleForm] = useState("1");
  console.log("busDefaultData", busDefaultData);
  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);
  //
  const {
    register,
    control,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm<BusDataTypes>({
    defaultValues: busDefaultData
  });
  //TODO 分類的選法
  if (!busDefaultData) {
    return <div>查無相關資料...</div>;
  }
  return (
    <form onSubmit={handleSubmit(asyncSubmitForm)}>
      <button ref={submitRef} type="submit" style={{ display: "none" }}>
        儲存
      </button>
      {visibleForm === "1" && (
        <Details
          register={register}
          errors={errors}
          getValues={getValues}
          control={control}
          isEdit={isEdit}
        />
      )}
      {visibleForm === "2" && (
        <Maintenance
          register={register}
          errors={errors}
          getValues={getValues}
          control={control}
          isEdit={isEdit}
        />
      )}
      {visibleForm === "3" && (
        <Lifecycle
          register={register}
          errors={errors}
          getValues={getValues}
          control={control}
          isEdit={isEdit}
        />
      )}
      {visibleForm === "4" && (
        <Financial
          register={register}
          errors={errors}
          getValues={getValues}
          control={control}
          isEdit={isEdit}
        />
      )}
      {visibleForm === "5" && (
        <Specifications
          register={register}
          errors={errors}
          getValues={getValues}
          control={control}
          isEdit={isEdit}
        />
      )}
    </form>
  );
};

export default BusDetail;
