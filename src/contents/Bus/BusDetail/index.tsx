import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Details,
  Financial,
  Lifecycle,
  Maintenance,
  Specifications
} from "./SubFrom";
//@components
import InfoBox from "@components/InfoBox";
//@layout
import FlexWrapper from "@layout/FlexWrapper";
//@service
//@utils
import { BusDataTypes } from "../busDefaultData";
import { getBusById } from "@services/bus/getBusById";
interface I_Props {
  isEdit: boolean;
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
  asyncSubmitForm: (data: any) => Promise<void>;
  busId: string;
  formType: string;
}
const BusDetail = ({
  isEdit,
  submitRef,
  asyncSubmitForm,
  busId,
  formType
}: I_Props) => {
  const [visibleForm, setVisibleForm] = useState("1");
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
    defaultValues: async () => getBusById(busId)
  });
  //TODO 分類的選法
  console.log("render!");
  console.log(getValues("bus"));
  if (getValues("bus") === undefined) {
    return <div></div>;
  }
  return (
    <form onSubmit={handleSubmit(asyncSubmitForm)}>
      <button ref={submitRef} type="submit" style={{ display: "none" }}>
        儲存
      </button>
      <Details
        selected={visibleForm === "1"}
        register={register}
        errors={errors}
        getValues={getValues}
        control={control}
      />
      <Maintenance
        selected={visibleForm === "2"}
        register={register}
        errors={errors}
        getValues={getValues}
        control={control}
      />
      <Lifecycle
        selected={visibleForm === "3"}
        register={register}
        errors={errors}
        getValues={getValues}
        control={control}
      />
      <Financial
        selected={visibleForm === "4"}
        register={register}
        errors={errors}
        getValues={getValues}
        control={control}
      />
      <Specifications
        selected={visibleForm === "5"}
        register={register}
        errors={errors}
        getValues={getValues}
        control={control}
      />
    </form>
  );
};

export default BusDetail;
