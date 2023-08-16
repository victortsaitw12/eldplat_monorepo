import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormSTY } from "./style";
import { PlusIcon, SelectField, TextInputField } from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import { createMaintenance } from "@services/maintenance/createMaintenance";
import router from "next/router";
import { CancelMaintenanceById } from "@services/maintenance/getMaintenanceNotice";
import LoadingSpinner from "@components/LoadingSpinner";

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
  noticeData?: any;
  reloadData?: () => void;
  busNo?: string;
  reminderNo?: string;
  mainCreateDdl: any;
}

function MaintenanceCreateForm({
  noticeData,
  reloadData,
  reminderNo,
  mainCreateDdl
}: I_MaintenanceCreateFormProps) {
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
  useEffect(() => {
    if (reminderNo) {
      console.log("busNo", reminderNo);
      console.log("noticeData", noticeData);
      const targetReminder = noticeData?.find(
        (reminder: any) => reminder.id.value === reminderNo
      );
      console.log("targetReminder", targetReminder);
      if (targetReminder) {
        setValue("bus_no", targetReminder.bus_no.value);
        setValue("driver_no", targetReminder.driver_no.value);
        setValue("vendor_no", targetReminder.vendor_no.value);
        setValue("package_code", targetReminder.component_code.value);
      }
    }
  }, [reminderNo]);
  const { register, handleSubmit, control, reset, setValue, getValues, watch } =
    useForm<CreateMaintenancePayload>({
      defaultValues
    });
  //
  watch("vendor_no");
  // 送出表單:
  const asyncSubmitForm = async (data: any) => {
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
      console.log("res (success to insert a new maintenance data):", res);
      if (noticeData && reminderNo !== undefined) {
        CancelMaintenanceById(reminderNo)
          .then((res) => {
            console.log("移除維保通知:", res);
          })
          .catch((err) => console.log("移除維保通知失敗", err));
      }
      router.push("/maintenance/mission");
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
    reloadData && reloadData();
    reset();
  };

  return (
    <FormSTY
      onSubmit={handleSubmit((data) => {
        console.log("data", data);
        asyncSubmitForm({
          ...data
        });
      })}
    >
      {!mainCreateDdl ? (
        <LoadingSpinner />
      ) : (
        <>
          <Controller
            name="bus_no"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectField
                label={
                  <div>
                    <span style={{ color: "#D14343" }}>*</span>車輛名稱
                  </div>
                }
                value={value}
                onChange={(e) => {
                  const targetBusOption = mainCreateDdl?.bus_options.find(
                    (bus_option: any) => bus_option.no === e.target.value
                  );
                  onChange(e.target.value);
                  setValue("driver_no", targetBusOption?.driver_no);
                }}
              >
                {mainCreateDdl?.bus_options.map((item: any) => {
                  return (
                    <option key={item.no} value={item.no}>
                      {item.name}
                    </option>
                  );
                })}
              </SelectField>
            )}
          />
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
          <Controller
            name="vendor_no"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectField
                label={
                  <div>
                    <span style={{ color: "#D14343" }}>*</span>維修廠
                  </div>
                }
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  setValue("package_code", "");
                }}
              >
                {mainCreateDdl?.vendor_options.map((item: any) => {
                  return (
                    <option key={item.no} value={item.no}>
                      {item.name}
                    </option>
                  );
                })}
              </SelectField>
            )}
          />
          <SelectField
            label={
              <div>
                <span style={{ color: "#D14343" }}>*</span>項目
              </div>
            }
            {...register("package_code")}
          >
            <>
              <option value={""} disabled hidden>
                請選擇
              </option>
              {mainCreateDdl?.package_options
                .filter((package_option: any) => {
                  const vendorNo = getValues("vendor_no") || "";
                  if (!vendorNo) return true;
                  return package_option.vendor_no === vendorNo;
                })
                .map((package_option: any) => {
                  console.log("filtered optoin: ", package_option);
                  return (
                    <option key={package_option.no} value={package_option.no}>
                      {package_option.name}
                    </option>
                  );
                })}
            </>
          </SelectField>
          <TextInputField
            label="起始日期"
            type="datetime-local"
            {...register("service_start_date")}
          />
          <TextInputField
            label="截止日期"
            type="datetime-local"
            {...register("service_end_date")}
          />

          <IconLeft text={"新增維保任務"} type="submit">
            <PlusIcon size={14} />
          </IconLeft>
        </>
      )}
    </FormSTY>
  );
}

export default MaintenanceCreateForm;
