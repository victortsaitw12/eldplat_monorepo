import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
import { PlusIcon, SelectField, TextInputField } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import { getCreateDdl } from "@services/maintenance/getCreateDdl";
import { createMaintenance } from "@services/maintenance/createMaintenance";
import router from "next/router";
import dayjs from "dayjs";

//@components
export interface CreateMaintenancePayload {
  bus_no: string;
  bus_name: string;
  driver_no: string;
  driver_name: string;
  maintenance_type: string;
  vendor_no: string;
  package_code: string;
  service_start_date: string;
  service_end_date: string | any;
}

interface I_MaintenanceCreateFormProps {
  data?: any;
  reloadData?: () => void;
  busNo?: string;
}

function MaintenanceCreateForm({
  data,
  reloadData,
  busNo
}: I_MaintenanceCreateFormProps) {
  const [mainCreateDdl, setMainCreateDdl] = useState<any>(null);
  // default value
  const defaultValues: CreateMaintenancePayload = {
    bus_no: "",
    bus_name: "",
    driver_no: "",
    driver_name: "",
    maintenance_type: "",
    vendor_no: "",
    package_code: "",
    service_start_date: "",
    service_end_date: ""
  };
  const { register, handleSubmit, control, reset, setValue, getValues } =
    useForm<CreateMaintenancePayload>({
      defaultValues
    });
  const [loading, setLoading] = useState(false);
  // 取得新增時的下拉式資料
  useEffect(() => {
    setLoading(true);
    try {
      getCreateDdl("").then((DDLdata) => {
        console.log("DDL data", DDLdata);
        console.log("維保通知打開側邊新增的data", data);
        const newData = { ...DDLdata.dataList[0] };
        newData.bus_options.map((v: { no: any }, idx: any) => {
          if (v.no === busNo) {
            newData.bus_options.splice(idx, 1);
            newData.bus_options.splice(0, 0, v);
            setValue("bus_no", v.no);
          }
        });
        setMainCreateDdl(newData);
      });
    } catch (err) {
      console.error("getDDL error: ", err);
    }
    setLoading(false);
  }, [loading]);

  // 選完車輛時，抓到該車輛的主要駕駛
  const handleChangeBusDDL = (e: any) => {
    getCreateDdl("").then((data) => {
      const newData = { ...data.dataList[0] };
      const busChosen = newData.bus_options.filter((v: { no: any }) => {
        return v.no === e.target.value;
      });

      const driverChosen = newData.driver_options.filter((v: { no: any }) => {
        return v.no === busChosen[0].driver_no;
      });

      newData.driver_options.map((v: { no: any }, idx: any) => {
        if (v.no === driverChosen[0]?.no && driverChosen.length > 0) {
          newData.driver_options.splice(idx, 1);
          newData.driver_options.splice(0, 0, driverChosen[0]);
          setValue("driver_no", driverChosen[0]?.no);
        }
      });
      console.log("🆑newData", newData);
      setMainCreateDdl(newData);
      setValue("bus_no", busChosen[0]?.no);
    });
  };

  // 選維修廠之後分類會變
  const handleChangeVendorDDL = (e: any) => {
    getCreateDdl(e.target.value).then((data) => {
      const newData = { ...data.dataList[0] };
      console.log("㊗newData", newData);
      setValue("vendor_no", e.target.value);
      setMainCreateDdl(newData);
    });
  };

  // 送出表單:
  const asyncSubmitForm = async (data: any) => {
    setLoading(true);
    console.log("BEFORE:data for submitting", data);
    const newData = { ...data };
    newData["bus_no"] = !newData["bus_no"]
      ? mainCreateDdl?.bus_options[0]?.no
      : getValues("bus_no");
    newData["driver_no"] = !newData["driver_no"]
      ? mainCreateDdl?.driver_options[0]?.no
      : getValues("driver_no");
    newData["maintenance_type"] = !newData["maintenance_type"]
      ? mainCreateDdl?.type_options[0]?.no
      : getValues("maintenance_type");
    newData["vendor_no"] = !newData["vendor_no"]
      ? mainCreateDdl?.vendor_options[0]?.no
      : getValues("vendor_no");
    newData["package_code"] = !newData["package_code"]
      ? mainCreateDdl?.package_options[0]?.no || ""
      : getValues("package_code");

    const selectedBus = mainCreateDdl.bus_options.filter((v: { no: any }) => {
      return v.no === newData.bus_no;
    });
    newData["bus_name"] = selectedBus[0]?.name;
    const selectedDriver = mainCreateDdl.driver_options.filter(
      (v: { no: any }) => {
        return v.no === newData.driver_no;
      }
    );
    newData["driver_name"] = selectedDriver[0]?.name;
    console.log("AFTER: 💦newData", newData);
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
        {...(register("bus_no"),
        {
          onChange: (e) => {
            handleChangeBusDDL(e);
          }
        })}
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
        {...register("driver_no")}
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
        {...register("maintenance_type")}
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
        {...(register("vendor_no"),
        {
          onChange: (e) => {
            handleChangeVendorDDL(e);
          }
        })}
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
        {...register("package_code")}
      >
        {mainCreateDdl?.package_options.map((item: any) => {
          return (
            <option key={item.no} value={item.no}>
              {item.name}
            </option>
          );
        })}
      </SelectField>
      <TextInputField
        label="起始日期"
        type="date"
        {...register("service_start_date")}
      />
      <TextInputField
        label="截止日期"
        type="date"
        {...register("service_end_date")}
      />

      <IconLeft text={"新增維保任務"} type="submit">
        <PlusIcon size={14} />
      </IconLeft>
    </FormSTY>
  );
}

export default MaintenanceCreateForm;
