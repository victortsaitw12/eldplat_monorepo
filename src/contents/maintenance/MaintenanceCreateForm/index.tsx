import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
//@sevices
import { createCustomer } from "@services/customer/createCustomer";
import FiledInput from "./FieldInput";
import { PlusIcon, Text, SelectField, Select } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import FlexWrapper from "@layout/FlexWrapper";
import { getCreateDdl } from "@services/maintenance/getCreateDdl";
import { createMaintenance } from "@services/maintenance/createMaintenance";
import router from "next/router";

//@components
export interface CreateMaintenancePayload {
  bus_no: string;
  bus_name: string;
  driver_no: string;
  driver_name: string;
  maintenance_type: string;
  vendor_no: string;
  package_code: string;
}

interface I_MaintenanceCreateFormProps {
  data?: any;
  reloadData?: () => void;
}

function MaintenanceCreateForm({
  data,
  reloadData
}: I_MaintenanceCreateFormProps) {
  // default value
  const defaultValues: CreateMaintenancePayload = {
    bus_no: "",
    bus_name: "",
    driver_no: "",
    driver_name: "",
    maintenance_type: "",
    vendor_no: "",
    package_code: ""
  };
  const { register, handleSubmit, control, reset } =
    useForm<CreateMaintenancePayload>({
      defaultValues
    });
  const [loading, setLoading] = useState(false);
  const [mainCreateDdl, setMainCreateDdl] = useState<any>(null);

  console.log("data for create", data);

  // 取得新增時的下拉式資料
  useEffect(() => {
    setLoading(true);
    try {
      getCreateDdl().then((data) => {
        console.log("DDL data", data);
        const newData = { ...data.dataList[0] };
        newData["bus_options"].unshift({ no: "0", name: "請選擇" });
        newData["driver_options"].unshift({ no: "0", name: "請選擇" });
        newData["package_options"].unshift({ no: "0", name: "請選擇" });
        newData["type_options"].unshift({ no: "0", name: "請選擇" });
        newData["vendor_options"].unshift({ no: "0", name: "請選擇" });
        setMainCreateDdl(newData);
      });
    } catch (err) {
      console.error("getDDL error: ", err);
    }
    setLoading(false);
  }, []);

  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    console.log("data for submitting", data);
    const newData = { ...data };
    const selectedBus = mainCreateDdl.bus_options.filter((v: { no: any }) => {
      return v.no === data.bus_no;
    });
    newData["bus_name"] = selectedBus[0].name;
    const selectedDriver = mainCreateDdl.driver_options.filter(
      (v: { no: any }) => {
        return v.no === data.driver_no;
      }
    );
    newData["driver_name"] = selectedDriver[0].name;
    console.log("💦newData", newData);
    try {
      const res = await createMaintenance(newData);
      router.push("/maintenance/mission");
      console.log("res (success to insert a new maintenance data):", res);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    setLoading(false);
    reloadData && reloadData();
    reset();
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        asyncSubmitForm({
          ...data
        });
      })}
    >
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車輛名稱
          </div>
        }
        {...register("bus_no", { required: "此欄位必填" })}
      >
        {mainCreateDdl?.bus_options.map((item: any) => {
          return (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          );
        })}
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>駕駛
          </div>
        }
        {...register("driver_no", { required: "此欄位必填" })}
      >
        {mainCreateDdl?.driver_options.map((item: any) => {
          return (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          );
        })}
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>分類
          </div>
        }
        {...register("maintenance_type", { required: "此欄位必填" })}
      >
        {mainCreateDdl?.type_options.map((item: any) => {
          return (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          );
        })}
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>維修廠
          </div>
        }
        {...register("vendor_no", { required: "此欄位必填" })}
      >
        {mainCreateDdl?.vendor_options.map((item: any) => {
          return (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          );
        })}
      </SelectField>
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>項目
          </div>
        }
        {...register("package_code", { required: "此欄位必填" })}
      >
        {mainCreateDdl?.package_options.map((item: any) => {
          return (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          );
        })}
      </SelectField>

      <IconLeft text={"新增維保任務"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
}

export default MaintenanceCreateForm;
