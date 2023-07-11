import TableWithEdit from "@components/Table/TableWithEdit";
import { getBusTitle } from "@services/bus/getAllBuses";
import { BodySTY, StyleIdIcon } from "./style";

interface Props {
  busData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  goToEditPageHandler: (id: string) => void;
  goToDetailPage: (id: string) => void;
}

const statusTextMap: { [key: string]: string } = {
  "01": "活躍中",
  "02": "已售出",
  "03": "終止服務",
  "04": "在維修廠",
  "05": "閒置中"
};

function StatusIcon({ status }: { status: string }) {
  return (
    <StyleIdIcon status={status}>
      <div className="icon-dot"></div>
      <div className="icon-text">{statusTextMap[status]}</div>
    </StyleIdIcon>
  );
}

function BusList({
  busData,
  goToCreatePage,
  deleteItemHandler,
  goToEditPageHandler,
  goToDetailPage
}: Props) {
  const busTitle = getBusTitle();
  busData.forEach((data: any) => {
    data["status"] = {
      label: <StatusIcon status={data["status"].value}></StatusIcon>,
      value: data.status.value
    };
  });
  console.log("busData", busData);
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
      />
    </BodySTY>
  );
}

export default BusList;
