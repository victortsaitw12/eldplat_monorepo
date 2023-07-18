import TableWithEdit from "@components/Table/TableWithEdit";
import { BodySTY } from "./style";
import { getMaintenanceNoticeTitle } from "@services/maintenance/getMaintenanceNotice";
import { Checkbox, Pane, Pill, Select } from "evergreen-ui";
import { useEffect, useState } from "react";
import DeleteDialog from "./MissionCheckbox/DeleteModal";

interface Props {
  clientData: any;
  checkboxData: any;
  setCheckboxData: (t: any) => void;
  goToCreatePage: () => void;
  deleteItemHandler: (id: string) => void;
}

function MaintenanceNoticeList({
  clientData,
  checkboxData,
  setCheckboxData,
  goToCreatePage,
  deleteItemHandler
}: Props) {
  const clientTitle = getMaintenanceNoticeTitle();
  const [value, setValue] = useState("cancel");
  const [selectCount, setSelectCount] = useState<number>(0);
  const [isShown, setIsShown] = useState<boolean>(false);

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

  const theadClass = [{ label: "新增任務", value: "mission" }];

  return (
    <BodySTY>
      {/* 🚫取消的方塊 (PM說先暫時不顯示 2023.7.14) */}
      {/* {selectCount !== 0 && (
        <Pane className="select">
          <Pill display="inline-flex" margin={6}>
            {selectCount}
          </Pill>
          <button onClick={handleShown}>取消</button>
         
        </Pane>
      )} */}

      <DeleteDialog
        isShown={isShown}
        setIsShown={setIsShown}
        data={checkboxData}
      />

      <TableWithEdit
        tableName="維保通知"
        titles={clientTitle}
        data={clientData}
        goToCreatePage={goToCreatePage}
        deleteItem={deleteItemHandler}
        handleCheckboxChange={handleCheckboxChange}
        handleSelectAll={handleSelectAll}
        handleDeselectAll={handleDeselectAll}
        checkboxData={checkboxData}
        theadClass={theadClass}
      />
    </BodySTY>
  );
}

export default MaintenanceNoticeList;

{
  /* <select
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              handleShown(event);
            }}
          >
            <option value="">動作</option>
            <option value="cancel" onClick={handleShown}>
              取消
            </option>
          </select> */
}
