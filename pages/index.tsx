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
      <Collapse title="客製包車">
        <p>內容內容</p>
        <p>內容內容</p>
        <p>內容內容</p>
        <p>內容內容</p>
        <p>內容內容</p>
        <p>內容內容</p>
        <p>內容內容</p>
        <p>內容內容</p>
      </Collapse>
      <div style={{ width: "300px" }}>
        <CounterInput
          register={register}
          inputName="counter"
          label="成人"
          getValues={getValues}
          setValue={setValue}
        />
      </div>
      <div>
        <CustomSelect
          selectName="customSelect"
          register={register}
          label="標籤"
          options={[
            {
              value: "A",
              text: "A市"
            },
            {
              value: "B",
              text: "B市"
            }
          ]}
        />
      </div>
      <div>
        <CheckBoxWrapper
          control={control}
          label="舉牌 (NT$200)"
          inputName="remark-sign-check"
        >
          <Textarea />
        </CheckBoxWrapper>
      </div>
      <div>
        <VerticalTextArea />
      </div>
      <div>
        <DetailList
          listArray={[
            {
              title: "訂單編號",
              value: "ORD0002992992000"
            },
            {
              title: "訂單編號",
              value: "ORD0002992992000"
            },
            {
              title: <h4>訂單編號</h4>,
              value: "ORD0002992992000"
            }
          ]}
        />
      </div>
      <div>
        <VerticalDetail />
      </div>
      <div>
        <ScheduleList
          dayIndex={0}
          fatherArrayName={"schedule-list"}
          arrayName="stopover_addresses"
          register={register}
          isEdit={true}
          disabledFirst={true}
          control={control}
        />
      </div>
    </div>
  );
}

export default Home;
