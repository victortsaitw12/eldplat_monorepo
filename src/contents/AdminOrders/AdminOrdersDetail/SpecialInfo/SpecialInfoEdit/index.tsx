import React from "react";
import { Pane, TextInput, Textarea, RadioGroup } from "evergreen-ui";
import { useFormContext } from "react-hook-form";
// import DetailList from "@components/DetailList";
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import VerticalDetail from "@components/VerticalDetail";
import CounterInput from "@components/CounterInput";
import CustomSelect from "@components/CustomSelect";
import VerticalTextArea from "@components/VerticalTextArea";
import { BodySTY } from "./style";

const SpecialInfoEdit = () => {
  const { register, control } = useFormContext();
  const [options] = React.useState([
    { label: "攜帶小型寵物，且會裝於寵物籠/背包中。", value: "01" },
    { label: "寵物無法裝籠，將直接帶上車（NT$1,000） ", value: "02" }
  ]);

  const [value, setValue] = React.useState("01");
  return (
    <BodySTY>
      <Pane style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            label="舉牌 （NT$200）"
            checked={true}
            description=""
          >
            <Pane>
              <Textarea
                name="textarea-1"
                placeholder="Textarea placeholder..."
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            label="杯水"
            checked={true}
            description="免費提供。每車提供一箱，總共有x杯。"
          ></CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            checked={true}
            description=""
            label="司導（NT$200）"
          />
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            checked={true}
            description=""
            label="瓶裝水（NT$120/箱）"
          >
            <Pane>
              <VerticalDetail
                title=""
                items={[
                  {
                    label: "",
                    value: (
                      <CounterInput
                        register={register}
                        inpurName="counter-01"
                        label="24瓶/箱"
                      />
                    )
                  }
                ]}
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            checked={true}
            description=""
            label="指定車齡（視選項加價）"
          >
            <Pane>
              <CustomSelect
                selectName="bus-age"
                register={register}
                options={[
                  {
                    value: "3",
                    text: "3年 （+NT$1000 / 天）"
                  }
                ]}
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper checked={true} description="" label="兒童座椅">
            <Pane>
              <VerticalDetail
                title=""
                items={[
                  {
                    label: "",
                    value: (
                      <CounterInput
                        register={register}
                        inpurName="counter-01"
                        label="由店家提供（+NT$200/ 天）"
                      />
                    )
                  },
                  {
                    label: "",
                    value: (
                      <CounterInput
                        register={register}
                        inpurName="counter-01"
                        label="自備"
                      />
                    )
                  }
                ]}
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            checked={true}
            description=""
            label="攜帶特大/特殊行李"
          />
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper checked={true} description="" label="嬰兒座椅">
            <Pane>
              <VerticalDetail
                title=""
                items={[
                  {
                    label: "",
                    value: (
                      <CounterInput
                        register={register}
                        inpurName="counter-01"
                        label="由店家提供（+NT$200/ 天）"
                      />
                    )
                  },
                  {
                    label: "",
                    value: (
                      <CounterInput
                        register={register}
                        inpurName="counter-01"
                        label="自備"
                      />
                    )
                  }
                ]}
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper checked={true} description="" label="攜帶寵物">
            <Pane>
              <RadioGroup
                size={16}
                value={value}
                options={options}
                onChange={(event) => setValue(event.target.value)}
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
      </Pane>
      <Pane style={{ padding: "20px" }}>
        <VerticalTextArea title="備註" description="" />
      </Pane>
    </BodySTY>
  );
};
export default SpecialInfoEdit;
