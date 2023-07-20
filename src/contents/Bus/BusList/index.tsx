import TableWithEdit from "@components/Table/TableWithEdit";
import { getBusTitle } from "@services/bus/getAllBuses";
import { BodySTY } from "./style";
import StatusIcon from "@components/StatusIcon";
import { PageInfoType } from "@services/type";
interface Props {
  busData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  goToEditPageHandler: (
    id: string,
    item: { [key: string]: { value: any; label: any } }
  ) => void;
  goToDetailPage: (
    id: string,
    item: { [key: string]: { value: any; label: any } }
  ) => void;
  upDatePageHandler?: (pageInfo: PageInfoType) => void;
  pageInfo: PageInfoType;
}

function BusList({
  busData,
  goToCreatePage,
  deleteItemHandler,
  goToEditPageHandler,
  goToDetailPage,
  upDatePageHandler,
  pageInfo
}: Props) {
  const busTitle = getBusTitle();
  busData.forEach((data: any) => {
    data["status"] = {
      label: <StatusIcon status={data["status"].value}></StatusIcon>,
      value: data.status.value
    };
  });
  return (
    <BodySTY>
      <TableWithEdit
        tableName="車輛"
        titles={busTitle}
        data={busData}
        goToCreatePage={goToCreatePage}
        deleteItem={deleteItemHandler}
        goToEditPage={goToEditPageHandler}
        viewItem={goToDetailPage}
        pageInfo={pageInfo}
        onPageChange={upDatePageHandler}
      />
    </BodySTY>
  );
}

export default BusList;
