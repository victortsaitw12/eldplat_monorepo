import React from "react";
import { Pane, TextInput, Textarea, Radio } from "evergreen-ui";
import { useFormContext } from "react-hook-form";
// import DetailList from "@components/DetailList";
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import VerticalDetail from "@components/VerticalDetail";
import CounterInput from "@components/CounterInput";
import CustomSelect from "@components/CustomSelect";
import VerticalTextArea from "@components/VerticalTextArea";
import { BodySTY } from "./style";
interface I_Props {
  methods: any;
}

const SpecialInfoEdit = ({ methods }: I_Props) => {
  const { register, control } = useFormContext();

  return (
    <BodySTY>
      <Pane style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            control={control}
            inputName="pickup_sign_check"
            label="舉牌 （NT$200）"
            description=""
          >
            <Pane>
              <Textarea
                placeholder="Textarea placeholder..."
                {...register("pickup_sign_remark")}
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            control={control}
            inputName="mineral_water_check"
            label="杯水"
            description="免費提供。每車提供一箱，總共有x杯。"
          ></CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            control={control}
            inputName="driver_guide_check"
            description=""
            label="司導（NT$200）"
          />
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            control={control}
            inputName="bottled_water_check"
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
                        getValues={methods.getValues}
                        setValue={methods.setValue}
                        inputName="bottled_water_box"
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
            control={control}
            inputName="bus_age_check"
            description=""
            label="指定車齡（視選項加價）"
          >
            <Pane>
              <CustomSelect
                selectName="bus_age"
                register={register}
                options={[
                  {
                    value: "01",
                    text: "3年 （+NT$1000 / 天）"
                  }
                ]}
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            control={control}
            inputName="child_seat_check"
            description=""
            label="兒童座椅"
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
                        getValues={methods.getValues}
                        setValue={methods.setValue}
                        inputName="child_seat_seller"
                        label="由店家提供（+NT$200/ 天）"
                      />
                    )
                  },
                  {
                    label: "",
                    value: (
                      <CounterInput
                        register={register}
                        getValues={methods.getValues}
                        setValue={methods.setValue}
                        inputName="child_seat_yourself"
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
            control={control}
            inputName="special_luggage_check"
            description=""
            label="攜帶特大/特殊行李"
          />
        </Pane>
        <Pane style={{ width: "50%", marginBottom: "20px", padding: "10px" }}>
          <CheckBoxWrapper
            control={control}
            inputName="infant_seat_check"
            description=""
            label="嬰兒座椅"
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
                        getValues={methods.getValues}
                        setValue={methods.setValue}
                        inputName="infant_seat_seller"
                        label="由店家提供（+NT$200/ 天）"
                      />
                    )
                  },
                  {
                    label: "",
                    value: (
                      <CounterInput
                        register={register}
                        getValues={methods.getValues}
                        setValue={methods.setValue}
                        inputName="infant_seat_yourself"
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
            control={control}
            inputName="bring_pets_check"
            description=""
            label="攜帶寵物"
          >
            <Pane>
              <Radio
                {...register("bring_pets_radio")}
                value="01"
                label="攜帶小型寵物，且會裝於寵物籠/背包中。"
              />
              <Radio
                {...register("bring_pets_radio")}
                value="02"
                label="寵物無法裝籠，將直接帶上車（NT$1,000） "
              />
            </Pane>
          </CheckBoxWrapper>
        </Pane>
      </Pane>
      <Pane style={{ padding: "20px" }}>
        <VerticalTextArea register={register} inputName="remark" title="備註" />
      </Pane>
    </BodySTY>
  );
};
export default SpecialInfoEdit;
