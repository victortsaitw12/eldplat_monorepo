import TableWithEdit from "@components/Table/TableWithEdit";
import { getBusTitle } from "@services/bus/getAllBuses";
import { BodySTY } from "./style";
import StatusIcon from "@components/StatusIcon";
import { I_PageInfo } from "@components/PaginationField";

interface Props {
  listType: string;
  busData: any;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  recoverItemHandler?: (id: string) => void;
  goToEditPageHandler: (
    id: string,
    item: { [key: string]: { value: any; label: any } }
  ) => void;
  goToDetailPage: (
    id: string,
    item: { [key: string]: { value: any; label: any } }
  ) => void;

  upDatePageHandler?: (pageInfo: I_PageInfo) => void;
  pageInfo: I_PageInfo;
}

function BusList({
  listType,
  busData,
  goToCreatePage,
  deleteItemHandler,
  recoverItemHandler,
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
        viewItem={goToDetailPage}
        pageInfo={pageInfo}
        onPageChange={upDatePageHandler}
        {...(listType == "1" && {
          goToEditPage: (id, item) => {
            goToEditPageHandler(id, item);
          },
          deleteItem: (id) => {
            deleteItemHandler(id);
          }
        })}
        {...(listType == "2" && {
          recoverItem: (id) => {
            recoverItemHandler && recoverItemHandler(id);
          }
        })}
      />
    </BodySTY>
  );
}

export default BusList;
