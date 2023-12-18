import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BusDataTypes } from "../bus.type";
import SubTabsWrapper from "@layout/SubTabsWrapper";
import { DivSTY } from "./style";
import Details from "./SubForm/Detail";
import Maintenance from "./SubForm/Maintenance";
import Equipment from "./SubForm/Equipment";
import FuelRecord from "./SubForm/FuelRecord";

interface I_Props {
  isEdit: boolean;
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
  asyncSubmitForm: (data: any) => Promise<void>;
  busId: string;
  formType: string;
  busDefaultData: BusDataTypes;
  busOptions: any;
  fetchDDL: (v: any) => void;
}

const subTabsArray = [
  { id: 1, label: "明細", value: "1" },
  { id: 2, label: "維保", value: "2" },
  { id: 4, label: "財務", value: "3" },
  { id: 5, label: "規格", value: "4" }
];

const BusDetail = ({
  isEdit,
  submitRef,
  asyncSubmitForm,
  formType,
  busDefaultData,
  busOptions,
  busId,
  fetchDDL
}: I_Props) => {
  const [visibleForm, setVisibleForm] = useState("1");

  const [currentTab, setCurrentTab] = useState<string>("1");

  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);

  const {
    register,
    control,
    formState: { errors },
    getValues,
    setValue,
    handleSubmit
  } = useForm<BusDataTypes>({
    defaultValues: busDefaultData
  });

  React.useEffect(() => {
    const bus_group = getValues("bus.operator_bus_group_no");
    fetchDDL(bus_group);
  }, [busDefaultData]);

  const changeTabHandler = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <form onSubmit={handleSubmit(asyncSubmitForm)}>
      <button ref={submitRef} type="submit" style={{ display: "none" }}>
        儲存
      </button>
      <DivSTY>
        {visibleForm === "1" && (
          <>
            <SubTabsWrapper
              tabsArray={subTabsArray}
              currentTab={currentTab}
              onChangeTab={changeTabHandler}
            />
            <Details
              currentTab={currentTab}
              register={register}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
              control={control}
              isEdit={isEdit}
              busOptions={busOptions}
              fetchDDL={fetchDDL}
              className="details"
            />
          </>
        )}

        {visibleForm === "3" && (
          <Maintenance
            busId={busId}
            register={register}
            errors={errors}
            getValues={getValues}
            control={control}
            isEdit={isEdit}
          />
        )}

        {visibleForm === "4" && (
          <Equipment
            busId={busId}
            register={register}
            errors={errors}
            getValues={getValues}
            control={control}
            isEdit={isEdit}
          />
        )}

        {visibleForm === "5" && (
          <FuelRecord
            busId={busId}
            register={register}
            errors={errors}
            getValues={getValues}
            control={control}
            isEdit={isEdit}
          />
        )}
      </DivSTY>
    </form>
  );
};

export default BusDetail;
