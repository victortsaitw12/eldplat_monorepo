import React from "react";
import { Pane, TextInput, Select } from "evergreen-ui";
import { useFormContext } from "react-hook-form";

import DetailList from "@components/DetailList";
import CustomSelect from "@components/CustomSelect";

const FlightInfoEdit = () => {
  const { register, control } = useFormContext();
  const contact_1 = [
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>航班日期
        </>
      ),
      value: (
        <TextInput
          type="date"
          {...register("flight_date", { required: "此欄位必填" })}
        />
      )
    },
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>機場
        </>
      ),
      value: <TextInput {...register("airport", { required: "此欄位必填" })} />
    },
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>航班出發時間
        </>
      ),
      value: (
        <TextInput
          type="time"
          {...register("flight_departure_time", { required: "此欄位必填" })}
        />
      )
    }
  ];
  const contact_2 = [
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>航班編號
        </>
      ),
      value: (
        <TextInput {...register("flight_number", { required: "此欄位必填" })} />
      )
    },
    {
      title: (
        <>
          <span style={{ color: "#D14343" }}>*</span>航廈
        </>
      ),
      value: <TextInput {...register("terminal", { required: "此欄位必填" })} />
    },
    {
      title: <>航空公司</>,
      value: <TextInput {...register("airline")} />
    }
  ];
  return (
    <Pane style={{ padding: "20px", display: "flex" }}>
      <Pane style={{ flex: "1" }}>
        <DetailList listArray={contact_1} />
      </Pane>
      <Pane style={{ flex: "1" }}>
        <DetailList listArray={contact_2} />
      </Pane>
    </Pane>
  );
};
export default FlightInfoEdit;
