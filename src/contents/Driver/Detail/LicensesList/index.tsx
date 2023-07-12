import React from "react";
import dayjs from "dayjs";
import { DocumentIcon, Tooltip } from "evergreen-ui";
import { DivSTY } from "./style";

import TableWithEdit from "@components/Table/TableWithEdit";
import { mappingQueryData } from "@utils/mappingQueryData";
import LicenseForm from "@contents/Driver/Detail/LicenseForm";
import { LICN_TYP } from "@services/getDDL";

const table_title = [
  "證照種類",
  "證照名稱",
  "發照單位",
  "發照日期",
  "有效日期",
  "下次審驗日期",
  "證照檔案"
];
interface Props {
  licensesData: any;
  userName: string;
  refetch: () => void;
}

function LicensesList({ licensesData, userName, refetch }: Props) {
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
        label: data["no"],
        value: data["no"]
      };
    }
    if (key === "licn_typ") {
      return (
        {
          label: LICN_TYP[data[key]]?.label,
          value: data[key]
        } || <div>--</div>
      );
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
        } || <div>--</div>
      );
    }
    if (key === "licn_link") {
      return (
        {
          label: (
            <Tooltip content={`下載${data["licn_filename"] || ""}`}>
              <DocumentIcon
                className="documentIcon"
                size={12}
                color="#718BAA"
                onClick={() => {
                  console.log(`從${data["licn_link"]}下載`);
                }}
              />
            </Tooltip>
          ),
          value: data[key]
        } || <div>--</div>
      );
    }
    return { label: data[key], value: data[key] } || <div>--</div>;
  };
  const orderedLicensesData = mappingQueryData(
    licensesData || [],
    driverPattern,
    driverParser
  );

  const handleCreate = () => {
    setIsLightBoxOpen(true);
  };

  const handleEdit = (id: string) => {
    setIsLightBoxOpen(true);
    console.log("打開新增彈窗");
  };
  //刪除該筆證照資料
  const handleDelete = async (id: string) => {
    try {
      alert("刪除該筆證照資料");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DivSTY>
      {orderedLicensesData && (
        <TableWithEdit
          tableName="駕駛證照"
          titles={table_title}
          data={orderedLicensesData}
          goToEditPage={handleEdit}
          deleteItem={handleDelete}
        />
      )}

      {isLightBoxOpen && (
        <LicenseForm
          licensesData={licensesData}
          userName={userName}
          refetch={refetch}
        />
      )}
    </DivSTY>
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
