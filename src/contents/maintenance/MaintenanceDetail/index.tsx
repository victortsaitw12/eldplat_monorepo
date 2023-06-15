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
import ContactList from "@components/ContactList";
import { CustomerDataTypes } from "@contents/Customer/customer.type";
import { getCustomerById } from "@services/customer/getCustomerById";
import { I_Maintenance_Type } from "@typings/maintenance_type";
import { getMaintenanceById } from "@services/maintenance/getMaintenanceById";
import { getCreateDdl } from "@services/maintenance/getCreateDdl";
import ItemListTable from "./ItemListTable";
import { onlyDate } from "@utils/convertDate";
import { BodySTY } from "./style";
interface I_Props {
  isEdit: boolean;
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
  asyncSubmitForm: (data: any) => Promise<void>;
  maintenance_id: string;
}
const CustomerDetail = ({
  isEdit,
  submitRef,
  asyncSubmitForm,
  maintenance_id
}: I_Props) => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm<I_Maintenance_Type>({
    defaultValues: async () => {
      return getMaintenanceById(maintenance_id).then((data) => {
        const newData = { ...data };
        newData["service_start_date"] = onlyDate(data.service_start_date);
        newData["service_end_date"] = onlyDate(data.service_end_date);
        return newData;
      });
    }
  });

  const [loading, setLoading] = useState(false);
  const [mainCreateDdl, setMainCreateDdl] = useState<any>(null);

  // 取得新增時的下拉式資料
  useEffect(() => {
    setLoading(true);
    try {
      getCreateDdl().then((data) => {
        setMainCreateDdl(data.dataList[0]);
      });
    } catch (err) {
      console.error("getDDL error: ", err);
    }
    setLoading(false);
  }, []);

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
      value: getValues("operator_no")
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
      value: onlyDate(getValues("service_start_date")),
      editEle: <TextInput type="date" {...register("service_start_date")} />
    },
    {
      req: false,
      label: "截止日期",
      value: onlyDate(getValues("service_end_date")),
      editEle: <TextInput type="date" {...register("service_end_date")} />
    },
    {
      req: false,
      label: "里程數",
      value: getValues("meter"),
      editEle: (
        <TextInput
          {...register("meter", {
            required: "必填"
          })}
        />
      )
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
          titles={["發票", "金額", "備註"]}
          control={control}
          register={register}
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

export default CustomerDetail;
