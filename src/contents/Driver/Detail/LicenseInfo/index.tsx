import {
  Heading,
  Pane,
  DocumentIcon,
  CogIcon,
  Tooltip,
  Select,
  TextInput
} from "evergreen-ui";
import { UseFormRegister, UseFormGetValues } from "react-hook-form";
import { BodySTY } from "./style";

import { DRIVER_LICENSE_TYPE } from "./licenseInfo.data";
import Table from "@components/Table/Table";
import { DriverInfo } from "@contents/Driver/driver.type";
import PaginationField from "@components/PaginationField/";
import React, { useState } from "react";
import { UpdateDriverInfoPayload } from "../../driver.type";

type ObjectType = {[key: string]: any};

interface I_License_TYPE extends ObjectType {
  id: string;
  licn_typ: string;
  licn_name: string;
  licn_unit: string;
  licn_issue: string;
  licn_exp: string;
  licn_examine_date: string;
  licn_link?: string;
  licn_filename?: any;
}

interface DataDetail {
  id: string;
  heal_date: string;
  heal_typ: string;
  heal_agency: string;
  invalid_remark: string;
  heal_link: any;
}

const table_title = [
  "證照種類",
  "證照名稱",
  "發照單位",
  "有效日期",
  "下次審驗日期",
  "證照檔案"
];

function LicenseInfo({
  licenseData,
  userName,
  register,
  getValues
}: {
  licenseData: I_License_TYPE[];
  userName: string;
  getValues: UseFormGetValues<UpdateDriverInfoPayload>;
  register: UseFormRegister<UpdateDriverInfoPayload>;
}) {
  const licenseInfo = [
    {
      req: false,
      label: "證照種類",
      value: getValues("licn_typ"),
      editEle: (
        <Select key="licn_typ" {...register("licn_typ")} marginBottom="0">
          {Array.from(DRIVER_LICENSE_TYPE).map(([key, val]) => (
            <option key={`type-${key}`} value={val}>
              {val}
            </option>
          ))}
          <option value="01">小型車普通駕駛執照</option>
          <option value="02">大貨車普通駕駛執照</option>
          <option value="03">大客車普通駕駛執照</option>
          <option value="04">聯結車普通駕駛執照</option>
          <option value="05">小型車職業駕駛執照</option>
          <option value="06">大貨車職業駕駛執照</option>
          <option value="07">大客車職業駕駛執照</option>
          <option value="08">聯結車職業駕駛執照</option>
          <option value="09">國際駕駛執照</option>
          <option value="10">輕型機車駕駛執照</option>
          <option value="11">小型輕型機車駕駛執照</option>
          <option value="12">普通輕型機車駕駛執照</option>
          <option value="13">重型機車駕駛執照</option>
          <option value="14">普通重型機車駕駛執照</option>
          <option value="15">大型重型機車駕駛執照</option>
        </Select>
      )
    },
    {
      req: false,
      label: "證照名稱",
      value: getValues("licn_name"),
      editEle: <TextInput {...register("licn_name")} />
    },
    {
      req: false,
      label: "發照單位",
      value: getValues("licn_unit"),
      editEle: <TextInput {...register("licn_unit")} />
    },
    {
      req: false,
      label: "發照日期",
      value: getValues("licn_issue"),
      editEle: <TextInput type="date" {...register("licn_issue")} />
    },
    {
      req: false,
      label: "有效日期",
      value: getValues("licn_exp"),
      editEle: <TextInput type="date" {...register("licn_exp")} />
    },
    {
      req: false,
      label: "下次審驗日期",
      value: getValues("licn_examine_date"),
      editEle: <TextInput type="date" {...register("licn_examine_date")} />
    }
  ];

  const orderedTableData = licenseData.map((item: any) => {
    const dataDetail: I_License_TYPE = {
      id: "",
      licn_typ: "",
      licn_name: "",
      licn_unit: "",
      licn_issue: "",
      licn_exp: "",
      licn_examine_date: "",
      licn_link: "",
      licn_filename: ""
    };
    dataDetail.id = item.user_no;
    dataDetail.licn_typ =
      (item.licn_typ && DRIVER_LICENSE_TYPE.get(item.licn_typ)) || "---";
    dataDetail.licn_name = item.licn_name;
    dataDetail.licn_unit = item.licn_unit;

    dataDetail.licn_issue = item.licn_issue?.split("T")[0];
    dataDetail.licn_exp = item.licn_exp?.split("T")[0];
    dataDetail.licn_examine_date = item.licn_examine_date?.split("T")[0];

    dataDetail.licn_link = item.licn_link;
    dataDetail.licn_filename = item.licn_filename ? (
      <Tooltip content={`下載${item.heal_filename}`}>
        <DocumentIcon
          className="reportIcon"
          size={12}
          color="#718BAA"
          onClick={() => {
            console.log(`從${item.licn_link}下載`);
          }}
        />
      </Tooltip>
    ) : (
      ""
    );
    return dataDetail;
  });

  return (
    <BodySTY>
      <Pane className="license-title">
        <Heading is="h4">{userName}</Heading>
      </Pane>
      <Pane className="license-title-right">
        <PaginationField />
        <CogIcon color="#718BAA" size={11} />
      </Pane>
      <Table titles={table_title} data={orderedTableData} />
    </BodySTY>
  );
}

export default LicenseInfo;
