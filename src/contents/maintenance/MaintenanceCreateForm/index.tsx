import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormSTY } from "./style";
import {
  Pane,
  Paragraph,
  Text,
  Label,
  Select,
  PlusIcon,
  SelectField,
  TextInputField
} from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";
import router from "next/router";
//@layout
import { createMaintenance } from "@services/maintenance/createMaintenance";
import { CancelMaintenanceById } from "@services/maintenance/getMaintenanceNotice";

import { getCreateDdl } from "@services/maintenance/getCreateDdl";
import { getBusById } from "@services/bus/getBusById";

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
  setMainCreateDdl: (data: any) => void;
}

function MaintenanceCreateForm({
  noticeData,
  reloadData,
  reminderNo,
  mainCreateDdl,
  setMainCreateDdl
}: I_MaintenanceCreateFormProps) {
  const [busGroup, setBusGroup] = React.useState<string>("");
  const [driverGroup, setDriverGroup] = React.useState<string>("");
  const [isBusDDLLoading, setIsBusDDLoading] = React.useState<boolean>(false);
  const [isDriverDDLLoading, setIsDriverDDlLoading] =
    React.useState<boolean>(false);

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

  const targetReminder = React.useMemo(
    () => noticeData?.find((reminder: any) => reminder.id.value === reminderNo),
    [reminderNo]
  );
  console.log("🍅 targetReminder:", targetReminder);
  console.log("🍅 noticeData:", noticeData);

  useEffect(() => {
    if (reminderNo) {
      console.log("busNo", reminderNo);
      console.log("noticeData", noticeData);
      // const targetReminder = noticeData?.find(
      //   (reminder: any) => reminder.id.value === reminderNo
      // );
      // console.log("targetReminder", targetReminder);
      if (targetReminder) {
        setValue("bus_no", targetReminder.bus_no.value);
        setValue("driver_no", targetReminder.driver_no.value);
        setValue("vendor_no", targetReminder.vendor_no.value);
        setValue("package_code", targetReminder.component_code.value);
      }
    }
  }, [reminderNo]);

  useEffect(() => {
    if (!targetReminder) return;
    setDriverGroup(targetReminder.am_driver_bus_group_name.value);
    const bus_group = targetReminder.am_driver_bus_group_name.value;
    fetchDDL(bus_group, driverGroup);
  }, [targetReminder]);

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
    const selectedDriver = mainCreateDdl.operator_options.filter(
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

  const fetchDDL = async (bus_group?: string, dsph_group?: string) => {
    try {
      const res = await getCreateDdl(bus_group, dsph_group);
      if (res.statusCode === "200") {
        setMainCreateDdl(res.dataList[0]);
      } else {
        throw new Error(`${res.resultString}`);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };
  const handleBusGroupChange = async (e: any) => {
    setBusGroup(e.target.value);
    setIsBusDDLoading(true);
    const bus_group = e.target.value;
    await fetchDDL(bus_group, driverGroup);
    setIsBusDDLoading(false);
  };

  const handleBusChange = async (e: any) => {
    setIsDriverDDlLoading(true);
    const res = await getBusById(e.target.value);
    setDriverGroup(res.bus.operator_bus_group_no);
    setValue("driver_no", res.bus.operator_no);
    setIsDriverDDlLoading(false);
  };

  const handleOperatorGroupChange = async (e: any) => {
    setDriverGroup(e.target.value);
  };
  useEffect(() => {
    setIsDriverDDlLoading(true);
    const dsph_group = driverGroup;
    fetchDDL(busGroup, dsph_group);
    setIsDriverDDlLoading(false);
  }, [driverGroup]);
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
          {/* 資訊小方塊 */}
          {targetReminder ? (
            <Pane className="info-box">
              <Text>
                {targetReminder.bus_group_name?.label || "--"} /{" "}
                {targetReminder.bus_name.value || "--"}
              </Text>
            </Pane>
          ) : (
            <>
              <Label>
                <div>
                  <span style={{ color: "#D14343" }}>*</span>車輛名稱
                </div>
              </Label>
              <Select
                style={{ marginBottom: "0" }}
                onChange={handleBusGroupChange}
              >
                <option key="bus_group_options" value="" selected disabled>
                  請選擇車輛車隊
                </option>
                {mainCreateDdl?.bus_group_options.map((item: any) => {
                  return (
                    <option
                      key={item.no}
                      value={item.no}
                      selected={busGroup === item.no}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </Select>
              <Select onChange={handleBusChange} disabled={isBusDDLLoading}>
                <option key="bus_options" value="">
                  請選擇車輛
                </option>
                {mainCreateDdl?.bus_options.map((item: any) => (
                  <option
                    key={item.no}
                    value={item.no}
                    selected={getValues("bus_no") === item.no}
                  >
                    {item.name}
                  </option>
                ))}
              </Select>
            </>
          )}
          <Label style={{ marginTop: "12px" }}>
            {" "}
            <div>
              <span style={{ color: "#D14343" }}>*</span>派工駕駛
            </div>
          </Label>
          <Select onChange={handleOperatorGroupChange}>
            <option key="operator_bus_group_option" value="" selected disabled>
              請選擇駕駛車隊
            </option>
            {mainCreateDdl?.operator_bus_group_options?.map((item: any) => {
              return (
                <option
                  key={item.no}
                  value={item.no}
                  selected={driverGroup === item.no}
                >
                  {item.name}
                </option>
              );
            })}
          </Select>
          <Select {...register("driver_no")} disabled={isDriverDDLLoading}>
            <option key="driver_no_option" value="">
              請選擇駕駛
            </option>
            {mainCreateDdl?.operator_options?.map((item: any) => {
              return (
                <option
                  key={item.no}
                  value={item.no}
                  selected={getValues("driver_no") === item.no}
                >
                  {item.name}
                </option>
              );
            })}
          </Select>
          <SelectField
            label={
              <div style={{ marginTop: "20px" }}>
                <span style={{ color: "#D14343" }}>*</span>分類
              </div>
            }
            {...register("maintenance_type")}
          >
            <option key="vendor_options" value="" disabled>
              請選擇
            </option>
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
                <option key="vendor_options" value="" disabled>
                  請選擇
                </option>
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
