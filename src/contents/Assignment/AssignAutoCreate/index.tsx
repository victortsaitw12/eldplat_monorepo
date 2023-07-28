import React, { useEffect, useState } from "react";
import { FormSTY } from "./style";
//@sevices
import {
  Text,
  Button,
  Pane,
  DocumentShareIcon,
  Paragraph,
  FloppyDiskIcon,
  SelectField
} from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import { convertDateAndTimeFormat } from "@utils/convertDate";
import {
  AutoAssignType,
  I_ManualAssignType,
  I_ManualCreateType
} from "@typings/assignment_type";

import { getAssignBusDDL } from "@services/assignment/getAssignmentDDL";
import { v4 as uuid } from "uuid";
import { createAssignmentByAuto } from "@services/assignment/createAssignByAuto";
import { useRouter } from "next/router";
import CreateFail from "../CreateFail";

//@components

interface I_AssignAutoCreateProps {
  orderInfo: I_ManualAssignType[];
  setDisabledAutoAssign: (v: any) => void;
}

function AssignAutoCreate({
  orderInfo,
  setDisabledAutoAssign
}: I_AssignAutoCreateProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "00", bus_group_name: "請選擇" }
  ]);
  const [autoAssignData, setAutoAssignData] = useState<AutoAssignType>();
  const [failIsShown, setFailIsShown] = useState<boolean>(false);
  const [failMessage, setFailMessage] = useState<string>("");

  // 一進來先抓bus_group DDL
  useEffect(() => {
    setLoading(true);
    const getbusData = async () => {
      setLoading(true);
      try {
        const res = await getAssignBusDDL();
        setBusGroupDDL([
          { bus_group: "00", bus_group_name: "請選擇" },
          ...res.dataList[0].bus_group_options
        ]);
      } catch (e: any) {
        console.log(e);
      }
      setLoading(false);
    };
    getbusData();
    setLoading(false);
  }, []);

  const handleBusGroupChange = (e: any) => {
    const newData = {
      quote_No: orderInfo[0]?.quote_no,
      estimated_Start_Date: orderInfo[0]?.departure_date,
      estimated_End_Date: orderInfo[0]?.return_date,
      areaConvoyGroupType: ""
    };
    newData["areaConvoyGroupType"] = e.target.value;
    console.log("newData", newData);
    setAutoAssignData(newData);
  };

  const asyncSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      const res = await createAssignmentByAuto(autoAssignData);
      console.log("auto assign res: ", res);
      if (res.statusCode === "200") {
        // router.reload();
      } else {
        setFailMessage(res.message || "請確認必填欄位");
        setFailIsShown(true);
        setDisabledAutoAssign((prev: any) => [...prev, orderInfo[0]?.quote_no]);
      }
    } catch (err) {
      console.log("auto assign err: ", err);
    }
    console.log("autoAssignData", autoAssignData);
  };

  return (
    <FormSTY onSubmit={asyncSubmitForm}>
      {/* 超連結按鈕 */}
      <Pane display="flex" justifyContent="center" className="anchorBtn">
        <Button iconBefore={DocumentShareIcon} marginRight={12}>
          車輛分配
        </Button>
        <Button
          iconBefore={DocumentShareIcon}
          onClick={(e: any) => {
            e.preventDefault();
            window.open("/driver", "_blank");
          }}
        >
          駕駛排班
        </Button>
      </Pane>

      {/* 資訊小方塊 */}
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
      </Pane>

      {/* 下拉選項 */}
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車隊
          </div>
        }
        name="bus_group"
        value={autoAssignData?.areaConvoyGroupType}
        onChange={(e: any) => {
          handleBusGroupChange(e);
        }}
      >
        {busGroupDDL?.map(
          (item: { bus_group: string; bus_group_name: string }) => {
            return (
              <option key={uuid()} value={item.bus_group}>
                {item.bus_group_name}
              </option>
            );
          }
        )}
      </SelectField>
      {/* 全部都填好之後的儲存按鈕 */}
      <IconLeft text={"確定"} type="submit">
        <FloppyDiskIcon size={14} />
      </IconLeft>
      {failIsShown && (
        <CreateFail
          failIsShown={failIsShown}
          setFailIsShown={setFailIsShown}
          failMessage={failMessage}
        />
      )}
    </FormSTY>
  );
}

export default AssignAutoCreate;

{
  /* <FiledInput
        label="名稱"
        controlProps={{
          name: "customer_name",
          control,
          rules: { required: "此欄位必填" }
        }}
        required
      />
      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>負責人
          </div>
        }
        {...register("customer_owner", { required: "此欄位必填" })}
      >
        <option value="負責人1">負責人1</option>
        <option value="負責人2">負責人2</option>
        <option value="負責人3">負責人3</option>
        <option value="負責人4">負責人4</option>
      </SelectField> */
}

{
  /* <Pane className="assign-table">
        <Pane borderBottom="1px solid #D5E2F1" paddingY={6} paddingX={12}>
          2022/11/23 週三
        </Pane>
        <Pane display="flex">
          <Pane
            borderRight="1px solid #D5E2F1"
            marginRight={10}
            padding={10}
            display="flex"
            alignItems="center"
          >
            第01車
          </Pane>
          <Pane>
            <Button
              display="flex"
              flexWrap="wrap"
              marginY={4}
              onClick={handleClick}
            >
              派車
            </Button>
            <Button marginBottom={4}>派工</Button>
          </Pane>
        </Pane>
      </Pane> */
}
