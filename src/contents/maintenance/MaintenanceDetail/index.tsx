import React, { useState, forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextInputField, TextInput, SelectField, Select } from "evergreen-ui";
//@components
import InfoBox from "@components/InfoBox";
//@layout
import FlexWrapper from "@layout/FlexWrapper";
//@service
//@utils
//
import { I_Maintenance_Type } from "@typings/maintenance_type";
import { getMaintenanceById } from "@services/maintenance/getMaintenanceById";
import { getCreateDdl } from "@services/maintenance/getCreateDdl";
import ItemListTable from "./ItemListTable";
import { dashDate } from "@utils/convertDate";
import { BodySTY } from "./style";
interface I_Props {
  isEdit: boolean;
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
  asyncSubmitForm: (data: any) => Promise<void>;
  maintenance_id: string;
  mainCreateDdl?: any;
}
const MaintenanceDetail = ({
  isEdit,
  submitRef,
  asyncSubmitForm,
  maintenance_id,
  mainCreateDdl
}: I_Props) => {
  const {
    register,
    control,
    formState: { errors },
    setValue,
    getValues,
    handleSubmit
  } = useForm<I_Maintenance_Type>({
    defaultValues: async () => {
      return getMaintenanceById(maintenance_id).then((data) => {
        console.log("data for single one", data);
        const newData = { ...data };
        newData["service_start_date"] = dashDate(data.service_start_date);
        newData["service_end_date"] = dashDate(data.service_end_date);
        return newData;
      });
    }
  });

  if (getValues("maintenance_no") === undefined) {
    return <div></div>;
  }

  //車輛資料
  const vehicle_info = [
    {
      readonly: true,
      label: "車輛編號",
      value: getValues("bus_no")
    },
    {
      req: false,
      label: "車輛名稱",
      value: getValues("bus_name")
    },
    {
      req: false,
      label: "車牌",
      value: getValues("license_plate")
    },
    {
      req: false,
      label: "出廠年份",
      value: getValues("year")
    },
    {
      req: false,
      label: "主要駕駛",
      value: getValues("operator_name")
    },
    {
      req: false,
      label: "派工駕駛",
      value: getValues("driver_name"),
      editEle: (
        <Select key="driver_no" {...register("driver_no")} marginBottom="0">
          {mainCreateDdl?.driver_options.map((item: any) => {
            return (
              <option key={item.no} value={item.no}>
                {item.name}
              </option>
            );
          })}
        </Select>
      )
    }
  ];

  console.log("vehicle_info", vehicle_info);
  console.log("mainCreateDdl", mainCreateDdl);

  // 檢查詳情
  const check_info = [
    {
      req: false,
      label: "維保序號",
      value: getValues("maintenance_no")
    },
    {
      req: true,
      label: "分類",
      value: getValues("type_name"),
      editEle: (
        <Select
          key="maintenance_type"
          {...register("maintenance_type")}
          marginBottom="0"
        >
          {mainCreateDdl?.type_options.map((item: any) => {
            return (
              <option key={item.no} value={item.no}>
                {item.name}
              </option>
            );
          })}
        </Select>
      )
    },
    {
      req: false,
      label: "起始日期",
      value: dashDate(getValues("service_start_date")),
      editEle: <TextInput type="date" {...register("service_start_date")} />
    },
    {
      req: false,
      label: "截止日期",
      value: dashDate(getValues("service_end_date")),
      editEle: <TextInput type="date" {...register("service_end_date")} />
    },
    {
      req: false,
      label: "里程數",
      value: getValues("meter")?.toLocaleString(),
      editEle: <TextInput {...register("meter")} />
    },
    {
      req: true,
      label: "維修廠",
      value: getValues("vendor_name"),
      editEle: (
        <Select key="vendor_no" {...register("vendor_no")} marginBottom="0">
          {mainCreateDdl?.vendor_options.map((item: any) => {
            return (
              <option key={item.no} value={item.no}>
                {item.name}
              </option>
            );
          })}
        </Select>
      )
    },
    {
      req: true,
      label: "項目",
      value: getValues("package_name"),
      editEle: (
        <Select
          key="package_code"
          {...register("package_code")}
          marginBottom="0"
        >
          {mainCreateDdl?.package_options.map((item: any) => {
            return (
              <option key={item.no} value={item.no}>
                {item.name}
              </option>
            );
          })}
        </Select>
      )
    }
  ];

  // 項目清單表
  const item_list = [
    {
      req: false,
      inputType: "custom",
      editEle: (
        <ItemListTable
          key="item_List"
          titles={[
            { label: "發票", value: "invoice" },
            { label: "單據資料", value: "file" },
            { label: "金額", value: "price" },
            { label: "備註", value: "remark" },
            { label: "刪除", value: "delete" }
          ]}
          control={control}
          register={register}
          setValue={setValue}
          getValues={getValues}
          isEdit={isEdit}
          arrayName="maintenanceDts"
        ></ItemListTable>
      )
      // editEle: [
      //   <ContactList
      //     key="contact_list"
      //     hide={false}
      //     control={control}
      //     errors={errors}
      //     register={register}
      //     isEdit={isEdit}
      //     arrayName="customer_contact"
      //   />
      // ]
    }
  ];

  console.log("register", register("meter"));
  return (
    <form onSubmit={handleSubmit(asyncSubmitForm)}>
      <button ref={submitRef} type="submit" style={{ display: "none" }}>
        儲存
      </button>

      <FlexWrapper style={{ paddingBottom: "10px" }}>
        <InfoBox isEdit={isEdit} infoData={vehicle_info} infoTitle="車輛資料" />
        <InfoBox isEdit={isEdit} infoData={check_info} infoTitle="檢查詳情" />
      </FlexWrapper>
      <BodySTY>
        <InfoBox isEdit={isEdit} infoData={item_list} infoTitle="項目清單" />
      </BodySTY>
    </form>
  );
};

export default MaintenanceDetail;
