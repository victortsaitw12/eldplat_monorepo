import { getBusTitle } from "@services/bus/getAllBuses";
import { BodySTY } from "./style";
import StatusIcon from "@components/StatusIcon";
import { I_PageInfo } from "@components/PaginationField";
import Table from "@components/Table/Table";
import IconBtn from "@components/Button/IconBtn";
import { I_BusData } from "@services/bus/getAllBuses";
import PaginationField from "@components/PaginationField";
import { FullCircleIcon, DisableIcon, PlusIcon } from "evergreen-ui";
import { useRouter } from "next/router";

interface Props {
  busData: any;
  pageInfo: I_PageInfo;
}

function BusList({ busData, pageInfo }: Props) {
  const router = useRouter();
  const busTitle = getBusTitle();

  const handleEdit = () => {
    console.log("edit");
  };

  const switchStatus = (status: string) => {
    switch (status) {
      case "1":
        return (
          <>
            <FullCircleIcon className={"green"} size={15} />
            <span>待機中</span>
          </>
        );
      case "2":
        return (
          <>
            <FullCircleIcon className={"teal"} size={15} />
            <span>保留中</span>
          </>
        );
      case "3":
        return (
          <>
            <FullCircleIcon className={"blue"} size={15} />
            <span>任務中</span>
          </>
        );
      case "4":
        return (
          <>
            <FullCircleIcon className={"yellow"} size={15} />
            <span>在維修廠</span>
          </>
        );
      case "5":
        return (
          <>
            <DisableIcon className={"disable"} size={15} />
            <span>停用</span>
          </>
        );
      case "6":
        return (
          <>
            <FullCircleIcon className={"authorized"} size={15} />
            <span>已授權某車公司</span>
          </>
        );
      default:
        return (
          <>
            <FullCircleIcon className={"green"} size={15} />
            <span>待機中</span>
          </>
        );
    }
  };

  const changeKey = (data: Array<I_BusData>) => {
    return data.map((item: I_BusData) => {
      return {
        id: item["id"],
        bus_name: item["bus_name"],
        license_plate: item["license_plate"],
        type: item["type"],
        available_seats: item["available_seats"],
        age: item["age"],
        depot: item["depot"],
        team: item["team"],
        current_dep: item["current_dep"],
        main_driver: item["main_driver"],
        status: switchStatus(item["status"]),
        action: <IconBtn tip="編輯" type="more" onClick={handleEdit} />
      };
    });
  };

  const modifiedData = busData ? changeKey(busData) : undefined;

  const handleView = () => {
    router.push("/bus/detail/1?editPage=view");
  };

  return (
    <BodySTY>
      <Table
        titles={busTitle}
        data={modifiedData}
        onView={handleView}
        headNode={<PaginationField pageInfo={pageInfo} />}
      />
    </BodySTY>
  );
}

export default BusList;
