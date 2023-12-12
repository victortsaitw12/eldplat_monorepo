import { getBusTitle } from "@services/bus/getAllBuses";
import { BodySTY } from "./style";
import StatusIcon from "@components/StatusIcon";
import { I_PageInfo } from "@components/PaginationField";
import Table from "@components/Table/Table";
import IconBtn from "@components/Button/IconBtn";
import { I_BusData } from "@services/bus/getAllBuses";


interface Props {
  busData: any;
  pageInfo: I_PageInfo;
}

function BusList({ busData }: Props) {
  const busTitle = getBusTitle();

  const handleEdit = () => {
    console.log("edit");
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
        main_driver: item["team"],
        status: item["status"],
        action: <IconBtn tip="編輯" type="edit" onClick={handleEdit} />
      };
    });
  };

  const modifiedData = busData ? changeKey(busData) : undefined;

  return (
    <BodySTY>
      <Table titles={busTitle} data={modifiedData} />
    </BodySTY>
  );
}

export default BusList;
