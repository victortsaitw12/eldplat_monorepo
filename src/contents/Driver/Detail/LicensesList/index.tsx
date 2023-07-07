import React from "react";
import dayjs from "dayjs";
import {
  Heading,
  Pane,
  DocumentIcon,
  CogIcon,
  Tooltip,
  Button,
  Dialog,
  TextInput,
  Select,
  Checkbox
} from "evergreen-ui";
import { UseFormRegister, UseFormGetValues } from "react-hook-form";
import { BodySTY } from "./style";

import { UpdateDriverInfoPayload } from "@contents/Driver/driver.type";
import FlexWrapper from "@layout/FlexWrapper";
import InfoBox from "@components/InfoBox";
import PaginationField from "@components/PaginationField/";
import TableWithEdit from "@components/Table/TableWithEdit";
import { mappingQueryData } from "@utils/mappingQueryData";

const table_title = [
  <Checkbox key={"checkbox-title"} />,
  "證照種類",
  "證照名稱",
  "發照單位",
  "發照日期",
  "有效日期",
  "下次審驗日期",
  "證照檔案"
];
interface Props {
  selected?: boolean;
  register: UseFormRegister<UpdateDriverInfoPayload>;
  getValues: UseFormGetValues<UpdateDriverInfoPayload>;
  isEdit: boolean;
  driverData: any;
  healths: any;
  userName: string;
}

function LicensesList({
  selected,
  register,
  getValues,
  isEdit,
  driverData,
  userName
}: Props) {
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false);

  const driverPattern = {
    id: true,
    licn_typ: true,
    licn_name: true,
    licn_unit: true,
    licn_issue: true,
    licn_exp: true,
    licn_examine_date: true,
    // licn_filename: true,
    licn_link: true
  };
  const driverParser = (
    data: any,
    key: string
  ): { label: any; value: any } | any => {
    if (key === "id") {
      return {
        label: <Checkbox key={`checkbox-${data["license_no"]}`} />,
        value: data["license_no"]
      };
    }
    if (
      key === "licn_issue" ||
      key === "licn_exp" ||
      key === "licn_examine_date"
    ) {
      return (
        {
          label: dayjs(data[key]).format("YYYY / MM / DD"),
          value: data[key]
        } || <div> </div>
      );
    }
    if (key === "licn_link") {
      return (
        {
          label: (
            <Tooltip content={`下載${data["licn_filename"] || ""}`}>
              <DocumentIcon
                className="reportIcon"
                size={12}
                color="#718BAA"
                onClick={() => {
                  console.log(`從${data["licn_link"]}下載`);
                }}
              />
            </Tooltip>
          ),
          value: data[key]
        } || <div> </div>
      );
    }
    return { label: data[key], value: data[key] } || <div>---</div>;
  };
  const orderedDriverData = mappingQueryData(
    [driverData.info] || [],
    driverPattern,
    driverParser
  );

  const handleConfirm = () => {
    console.log("handleConfirm");
  };
  //打開編輯彈窗
  const goToEditPageHandler = (id: string, item: any) => {
    setIsLightBoxOpen(true);
    console.log("打開編輯彈窗");
  };
  //刪除該筆證照資料
  const deleteItemHandler = async (id: string) => {
    try {
      alert("刪除該筆證照資料");
    } catch (e) {
      console.log(e);
    }
  };
  // 駕駛證照
  const licenseInfo = [
    {
      req: false,
      label: "證照種類",
      value: getValues("licn_typ"),
      editEle: (
        <Select key="licn_typ" {...register("licn_typ")} marginBottom="0">
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
  return (
    <BodySTY>
      <Pane className="licn-title">
        <Heading is="h4">{userName}</Heading>
      </Pane>
      <Pane className="licn-title-right">
        <PaginationField />
        <CogIcon color="#718BAA" size={11} />
      </Pane>
      {getValues("licn_typ") ? (
        <TableWithEdit
          tableName=""
          titles={table_title}
          data={orderedDriverData}
          goToEditPage={goToEditPageHandler}
          deleteItem={deleteItemHandler}
        />
      ) : (
        <div style={{ textAlign: "center" }}>無資料，請至員工設定頁面編輯</div>
      )}
      <Button
        type="button"
        style={{ background: "red" }}
        onClick={() => {
          setIsLightBoxOpen(true);
          console.log("🍅🍅🍅 driverData:", driverData);
          console.log("🍅🍅🍅 orderedDriverData:", orderedDriverData);
        }}
      >
        新增駕駛證照
      </Button>
      {isLightBoxOpen && (
        <Pane>
          <Dialog
            isShown={isLightBoxOpen}
            title="新增駕駛證照"
            onConfirm={handleConfirm}
            onCloseComplete={() => setIsLightBoxOpen(false)}
            cancelLabel="取消"
            confirmLabel="確定"
          >
            {({}) => (
              <FlexWrapper flexDirection="column">
                <InfoBox
                  isEdit={isEdit}
                  infoData={licenseInfo}
                  infoTitle="駕駛證照"
                />
              </FlexWrapper>
            )}
          </Dialog>
        </Pane>
      )}
    </BodySTY>
  );
}

export default LicensesList;

/* 舊的，昱光稍後會改回傳結構跟欄位 參考用 7/7
driverData = {
  "info": {
      "user_name": "WEI",
      "user_email": "football@test.com",
      "user_phone": "0963258741",
      "driver_no": "DRV202305220003",
      "license_no": "L05251003",
      "license_area": "02",
      "license_lvl": "最高級",
      "driver_seniority": 5,
      "dsph_area": "02",
      "dsph_city": "02",
      "licn_typ": "03",
      "licn_name": "大客車駕照",
      "licn_unit": "台北市監理所",
      "licn_issue": "2023-05-25T00:00:00",
      "licn_exp": "2023-05-25T00:00:00",
      "licn_examine_Date": "2023-05-25T00:00:00",
      "licn_link": "link",
      "licn_filename": "testFileName"
  },
  "languages": [
      {
          "user_no": "USR202305220017",
          "language": "02",
          "listen": "1",
          "speak": "1",
          "read": "1",
          "write": "1"
      }
  ],
  "healths": [
      {
          "user_no": "USR202305220017",
          "heal_date": "2023-03-24T00:00:00",
          "heal_typ": "01",
          "heal_agency": "台北榮總",
          "heal_status": "01",
          "heal_examine_date": null,
          "heal_filename": null,
          "heal_link": "路徑設定-等待討論中",
          "invalid": null,
          "invalid_remark": null
      }
  ]
}



orderedDriverData = [
  { 
    id: {label: {…}, value: 'L05251003'},
    licn_examine_date: {label: '2023 / 07 / 07', value: undefined},
    licn_exp: {label: '2023 / 05 / 25', value: '2023-05-25T00:00:00'},
    licn_issue: {label: '2023 / 05 / 25', value: '2023-05-25T00:00:00'},
    licn_link: {label: {…}, value: 'link'},
    licn_name: {label: '大客車駕照', value: '大客車駕照'},
    licn_typ: {label: '03', value: '03'},
    licn_unit: {label: '台北市監理所', value: '台北市監理所'
  },
]
*/
