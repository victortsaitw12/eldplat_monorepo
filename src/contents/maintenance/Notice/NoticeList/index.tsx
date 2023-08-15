import TableWithEdit from "@components/Table/TableWithEdit";
import { BodySTY } from "./style";
import { getMaintenanceNoticeTitle } from "@services/maintenance/getMaintenanceNotice";
import { useEffect, useState } from "react";
import DeleteDialog from "./MissionCheckbox/DeleteModal";
import { I_PageInfo } from "@components/PaginationField";
import AddMissionBtn from "@contents/maintenance/Notice/NoticeList/AddMissionBtn";
import { useMaintenanceStore } from "@contexts/filter/maintenanceStore";
interface Props {
  maintenanceData: any;
  checkboxData: any;
  setCheckboxData: (t: any) => void;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
  pageInfo: I_PageInfo;
  handlePageChange?: (pageQuery: I_PageInfo) => void;
  setReminderNo: (reminderNo: string) => void;
}

function MaintenanceNoticeList({
  maintenanceData,
  checkboxData,
  setCheckboxData,
  goToCreatePage,
  deleteItemHandler,
  pageInfo,
  handlePageChange,
  setReminderNo
}: Props) {
  const clientTitle = getMaintenanceNoticeTitle();
  const { setDrawerOpen } = useMaintenanceStore();
  const [value, setValue] = useState("cancel");
  const [selectCount, setSelectCount] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);
  const newData = maintenanceData?.map((item: any) => {
    const mappingItem = {
      id: { label: item.id.label, value: item.id.value },
      bus_name: { label: item.bus_name.label, value: item.bus_name.value },
      driver_name: {
        label: item.driver_name.label,
        value: item.driver_name.value
      },
      meter: { label: item.meter.label, value: item.meter.value },
      vendor_name: {
        label: item.vendor_name.label,
        value: item.vendor_name.value
      },
      component_name: {
        label: item.component_name.label,
        value: item.component_name.value
      },
      mission: {
        label: (
          <AddMissionBtn
            item={item}
            setDrawerOpen={setDrawerOpen}
            setReminderNo={setReminderNo}
          ></AddMissionBtn>
        ),
        value: item.reminders_no.label
      }
    };
    return mappingItem;
  });
  const handleCheckboxChange = (itemId: number) => {
    setCheckboxData((prevItems: any[]) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSelectAll = () => {
    setCheckboxData((prevItems: any[]) =>
      prevItems.map((item) => ({ ...item, checked: true }))
    );
  };

  const handleDeselectAll = () => {
    setCheckboxData((prevItems: any[]) =>
      prevItems.map((item) => ({ ...item, checked: false }))
    );
  };

  const handleShown = () => {
    setIsShown(true);
  };

  useEffect(() => {
    const countArr = [];
    checkboxData.map((v: { checked: boolean }) => {
      if (v.checked === true) {
        countArr.push(v.checked);
      }
    });
    setSelectCount(countArr.length);
  }, [checkboxData]);

  const customTableClass = [{ label: "新增任務", value: "mission" }];
  console.log();
  return (
    <BodySTY>
      <DeleteDialog
        isShown={isShown}
        setIsShown={setIsShown}
        data={checkboxData}
      />
      <TableWithEdit
        tableName="維保通知"
        titles={clientTitle}
        data={newData}
        goToCreatePage={goToCreatePage}
        deleteItem={deleteItemHandler}
        handleCheckboxChange={handleCheckboxChange}
        handleSelectAll={handleSelectAll}
        handleDeselectAll={handleDeselectAll}
        checkboxData={checkboxData}
        customTableClass={customTableClass}
        pageInfo={pageInfo}
        onPageChange={handlePageChange}
      />
    </BodySTY>
  );
}

export default MaintenanceNoticeList;
