import { useRouter } from "next/router";
import { DriverListSTY } from "./style";

import { getDriverTitle } from "@services/driver/getAllDrivers";
import Table from "@components/Table/Table";
import { I_PageInfo } from "@components/PaginationField";
import Checkbox from "@components/CheckBox";
import IconBtn from "@components/Button/IconBtn";
import { I_DriverItem } from "@services/driver/getAllDrivers";
import PaginationField from "@components/PaginationField";

interface Props {
  driverData: any;
  pageInfo: I_PageInfo;
  handleDeleteDriver: (id: string) => void;
  handleRecoverDriver?: (id: string) => void;
  handlePageChange?: (pageQuery: I_PageInfo) => void;
}

function DriverList({
  driverData,
  pageInfo,
  handleDeleteDriver,
  handleRecoverDriver,
  handlePageChange
}: Props) {
  // const driverTitle = getDriverTitle();
  const driverTitle = [
    <Checkbox key={"driver"} />,
    "駕駛姓名",
    "英文姓名",
    "車隊",
    "派駐區域",
    ""
  ];
  const router = useRouter();

  const handleView = (id: string) => {
    router.push(`/driver/detail/${id}`);
  };

  const changeKey = (data: Array<I_DriverItem>) => {
    return data.map((item: I_DriverItem) => {
      return {
        id: item["driver_no"],
        checkbox: <Checkbox value={item["driver_name"]} />,
        driver_name: item["driver_name"],
        english_name: item["english_name"],
        team_name: item["team_name"],
        region: item["region"],
        action: <IconBtn tip="編輯" type="edit" onClick={handleEdit} />
      };
    });
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const modifiedData = driverData ? changeKey(driverData) : undefined;

  return (
    <DriverListSTY>
      <Table
        titles={driverTitle}
        data={modifiedData}
        onView={handleView}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </DriverListSTY>
  );
}

export default DriverList;
