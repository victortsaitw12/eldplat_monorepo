import React from "react";
import {
  Pane,
  Button,
  DocumentShareIcon,
  Paragraph,
  Text,
  Dialog,
  toaster
} from "evergreen-ui";
import dayjs from "dayjs";
import { DivSTY } from "./style";

import {
  I_ManualAssignType,
  I_ManualCreateType
} from "@typings/assignment_type";
import { convertDateAndTimeFormat } from "@utils/convertDate";
import VehicleForm from "@contents/Assignment/AssignmentAdditional/VehicleForm";
import DriverForm from "@contents/Assignment/AssignmentAdditional/DriverForm";
import { getAllAssignments } from "@services/assignment/getAllAssignment";
import {
  createOtherAssignment,
  I_OtherAssignment
} from "@services/assignment/createOtherAssignment";
import { I_creatOtherAssignment } from "@services/assignment/createReplaceAssignment";
import CheckBox from "@components/CheckBox";

interface I_AssignmentAdditionalVehicleProps {
  type: "car" | "driver";
  orderInfo: I_ManualAssignType[];
  createAssignData: I_ManualCreateType;
  setSubAssignData: (v: any) => void;
  setCreatDrawerOpen: (v: "car" | "driver" | "") => void;
}

// TODO merge Vehicle/Driver, merge VehicleForm/DriverForm components
const AssignmentAdditional = ({
  type,
  orderInfo,
  createAssignData,
  setSubAssignData,
  setCreatDrawerOpen
}: I_AssignmentAdditionalVehicleProps) => {
  const [loading, setLoading] = React.useState(false);
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false);
  const [busRestShifts, setBusRestShifts] =
    React.useState<I_creatOtherAssignment | null>(null);

  // ----- function ----- //
  // refetch function (待抽出:等page/assignment 裡面的fetchAssignData拆開)
  const refetch = async (resDataListZero: I_OtherAssignment) => {
    console.log("🍅🍅🍅resDataListZero:", resDataListZero);
    // refetch 更新子列表
    getAllAssignments()
      .then((data) => {
        const newSubData = data.contentList.map(
          (item: { assignments: any }) => {
            return item.assignments;
          }
        );
        setSubAssignData(newSubData);
      })
      .catch((err) => {
        console.error("error in assignment list", err);
      });
    // 檢查原本那台(車/駕駛)於該筆訂單後面還有單 => refetch一併更新的彈窗
    if (resDataListZero && resDataListZero.time_list.length !== 0) {
      setBusRestShifts(resDataListZero);
      setTimeout(() => {
        setIsLightBoxOpen(true);
      }, 2000);
    } else {
      //關抽屜;
      setCreatDrawerOpen("");
    }
  };
  const handleCheckDates = (e: any) => {
    if (!e.checked && busRestShifts && busRestShifts.time_list) {
      const updatedTimeList = busRestShifts.time_list.filter(
        (item) => item.assignment_no !== e.value
      );
      setBusRestShifts(
        (prevState) =>
          ({
            ...prevState,
            time_list: updatedTimeList
          } as I_creatOtherAssignment)
      );
    }
  };
  const handleCreateOther = React.useCallback(async () => {
    console.log("handleCreateOther:", busRestShifts);
    if (!busRestShifts) return;
    try {
      const res = await createOtherAssignment(busRestShifts);
      // 成功or失敗訊息
      if (res.statusCode !== "200") throw new Error(` ${res.resultString}`);
      toaster.success("新增成功", {
        description: "一併新增其他日期派車成功",
        duration: 2,
        hasCloseButton: true
      });
    } catch (e: any) {
      console.log(e);
      toaster.success("新增失敗", {
        description: `${e.message}`,
        duration: 2,
        hasCloseButton: true
      });
    } finally {
      //關抽屜;
      setCreatDrawerOpen("");
    }
  }, [busRestShifts]);

  return (
    <DivSTY>
      <Pane display="flex" justifyContent="center">
        <Button iconBefore={DocumentShareIcon} marginRight={12}>
          車輛分配
        </Button>
        <Button iconBefore={DocumentShareIcon}>駕駛排班</Button>
      </Pane>
      <Pane className="info-box">
        <Paragraph>{orderInfo && orderInfo[0].quote_no}</Paragraph>
        <Paragraph>{orderInfo && orderInfo[0].quote_type}</Paragraph>
        <Pane className="date-area">
          <Text>
            {orderInfo && convertDateAndTimeFormat(orderInfo[0].departure_date)}
          </Text>
          <Text marginX={26}>—</Text>
          <Text>
            {orderInfo && convertDateAndTimeFormat(orderInfo[0].return_date)}
          </Text>
        </Pane>
      </Pane>{" "}
      {type === "car" ? (
        <VehicleForm
          orderInfo={orderInfo}
          setLoading={setLoading}
          refetch={refetch}
        />
      ) : (
        <DriverForm
          orderInfo={orderInfo}
          setLoading={setLoading}
          refetch={refetch}
        />
      )}
      {isLightBoxOpen && (
        <Pane>
          <Dialog
            isShown={isLightBoxOpen}
            title="是否需要一起修改之後天數的派單？"
            onConfirm={handleCreateOther}
            onCloseComplete={() => setIsLightBoxOpen(false)}
            cancelLabel="取消"
            confirmLabel="確認"
          >
            {({}) => (
              <Pane>
                <Paragraph style={{ lineHeight: "32px" }}>
                  {busRestShifts &&
                    busRestShifts.time_list.length !== 0 &&
                    busRestShifts.time_list.map((item, i) => (
                      <CheckBox
                        key={`upcomming-${i}`}
                        label={dayjs(item.task_start_time).format("YYYY-MM-DD")}
                        value={item.assignment_no}
                        onChange={handleCheckDates}
                        defaultChecked
                      />
                    ))}
                </Paragraph>
              </Pane>
            )}
          </Dialog>
        </Pane>
      )}
    </DivSTY>
  );
};

export default AssignmentAdditional;
