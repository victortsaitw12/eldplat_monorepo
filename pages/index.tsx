import React from "react";
import { Textarea } from "evergreen-ui";
//@componets
import Collapse from "@components/Collapse";
import CounterInput from "@components/CounterInput";
import CustomSelect from "@components/CustomSelect";
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import VerticalTextArea from "@components/VerticalTextArea";
import DetailList from "@components/DetailList";
import VerticalDetail from "@components/VerticalDetail";
import ScheduleList from "@components/ScheduleList";
import { useForm } from "react-hook-form";
//
function Home() {
  const { register, control, getValues, setValue } = useForm<any>({
    defaultValues: {
      counter: 0,
      customSelect: "B",
      "schedule-list": [
        {
          label: "",
          location: "桃園國際機場"
        },
        {
          label: "",
          location: "你家"
        }
      ]
    }
  });
  return (
    <div style={{ height: "100vh", padding: "1rem" }}>
      <h1>Lion EldPlat</h1>
    </div>
  );
}

export default Home;
