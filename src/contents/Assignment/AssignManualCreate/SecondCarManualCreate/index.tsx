import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormSTY } from "./style";
//@sevices
// import { createVendor } from "@services/vendor/createVendor";
import { createCustomer } from "@services/customer/createCustomer";
import FiledInput from "../FieldInput";
import {
  PlusIcon,
  Text,
  SelectField,
  Select,
  Button,
  Pane,
  DocumentShareIcon,
  Paragraph,
  FloppyDiskIcon,
  Textarea,
  TextInputField,
  TextareaField
} from "evergreen-ui";
import { IconLeft } from "@components/Button/Primary";

//@layout
import FlexWrapper from "@layout/FlexWrapper";
import Drawer from "@components/Drawer";
import { I_ManualCreateType } from "@typings/assignment_type";
import { getAssignBusDDL } from "@services/assignment/getAssignmentDDL";
import { hours, minutes } from "@services/assignment/mock_data";

//@components
// import { I_contactData } from "../vendor.type";

// default value
const defaultValues: I_ManualCreateType = {
  quote_no: "",
  manual_driver: [
    {
      driver_no: "",
      bus_day_number: 1,
      bus_group: "",
      task_start_time: "",
      task_end_time: "",
      remark: ""
    }
  ],
  manual_bus: [
    {
      bus_no: "",
      bus_day_number: 1,
      bus_group: "",
      task_start_time: "",
      task_end_time: "",
      remark: ""
    }
  ]
};

interface I_AssignManualCreateProps {
  timeRef: any;
  handleAssignmentCarChange: (e: any) => void;
  createAssignData: I_ManualCreateType;
  showSecondTitle: any;
  data?: any;
  reloadData?: () => void;
}

function SecondCarAssignManualCreate({
  timeRef,
  handleAssignmentCarChange,
  showSecondTitle,
  reloadData,
  createAssignData
}: I_AssignManualCreateProps) {
  // const { register, handleSubmit, control, reset } =
  //   useForm<I_ManualCreateType>({
  //     defaultValues
  //   });
  const [loading, setLoading] = useState(false);
  const [secondDrawerOpen, setSecondDrawerOpen] = useState<boolean>(false);
  const [busGroupDDL, setBusGroupDDL] = useState<any>([
    { bus_group: "00", bus_group_name: "請選擇" }
  ]);
  const [busNameDDL, setBusNameDDL] = useState<any>([
    { bus_no: "00", bus_name: "請選擇", license_plate: "" }
  ]);
  const [plateNo, setPlateNo] = useState<string>("");

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
        console.log("getQuotationByID Error:", e);
        console.log(e);
      }
      setLoading(false);
    };
    getbusData();
    setLoading(false);
  }, []);

  const handleClick = (e: any) => {
    e.preventDefault();
    setSecondDrawerOpen(!secondDrawerOpen);
  };

  const handleBusGroupChange = async (e: any) => {
    console.log("e", e);
    const res = await getAssignBusDDL(e.target.value);
    // setBusNameDDL(res.dataList[0].bus_options);
    setBusNameDDL([
      { bus_no: "00", bus_name: "請選擇", license_plate: "" },
      ...res.dataList[0].bus_options
    ]);
  };

  const handleCarPlate = (e: any) => {
    const newDDL = [...busNameDDL];
    const result = newDDL.filter((v) => {
      return v.bus_no === e.target.value;
    });
    setPlateNo(result[0].license_plate);
  };

  return (
    <FormSTY>
      {/* 資訊小方塊 */}
      <Pane className="info-box">
        <Pane className="title">
          <Paragraph>
            {showSecondTitle?.date} {showSecondTitle?.day}
          </Paragraph>
          <Paragraph>{`第0${showSecondTitle.car}車 ${showSecondTitle.assignType}`}</Paragraph>
        </Pane>
      </Pane>

      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車隊
          </div>
        }
        name="bus_group"
        onClick={(e: any) => {
          handleBusGroupChange(e);
        }}
        onChange={(e: any) => {
          handleAssignmentCarChange(e);
        }}
      >
        {busGroupDDL?.map(
          (item: { bus_group: string; bus_group_name: string }) => {
            return (
              <option key={item.bus_group} value={item.bus_group}>
                {item.bus_group_name}
              </option>
            );
          }
        )}
      </SelectField>

      <SelectField
        label={
          <div>
            <span style={{ color: "#D14343" }}>*</span>車輛名稱
          </div>
        }
        name="bus_no"
        onClick={(e: any) => {
          handleCarPlate(e);
        }}
        onChange={(e: any) => {
          handleAssignmentCarChange(e);
        }}
      >
        {busNameDDL?.map((item: any) => {
          return (
            <option key={item.bus_no} value={item.bus_no}>
              {item.bus_name}
            </option>
          );
        })}
      </SelectField>

      <TextInputField label="車牌" placeholder={plateNo} disabled />

      <Pane className="time-area">
        <Paragraph>起始時間</Paragraph>
        <Select
          name="start_hours"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          {hours.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Text fontSize={20}> : </Text>
        <Select
          name="start_minutes"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          {minutes().map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select
          name="start_type"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </Select>
      </Pane>

      <Pane className="time-area">
        <Paragraph>截止時間</Paragraph>
        <Select
          name="end_hours"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          {hours.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Text fontSize={20}> : </Text>
        <Select
          name="end_minutes"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          {minutes().map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select
          name="end_type"
          onClick={(e: any) => {
            handleAssignmentCarChange(e);
          }}
          ref={timeRef}
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </Select>
      </Pane>

      <TextareaField
        label="備註"
        name="remark"
        onChange={(e: any) => {
          handleAssignmentCarChange(e);
        }}
        marginTop={16}
      />
    </FormSTY>
  );
}

export default SecondCarAssignManualCreate;
