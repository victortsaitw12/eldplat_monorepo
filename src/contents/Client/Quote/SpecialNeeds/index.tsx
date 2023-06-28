import React from "react";
import Collapse from "@components/Collapse";
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import { BodySTY, ItemSTY, RemarkSTY, CollapseCardSTY } from "./style";
import { Textarea, Select, Radio } from "evergreen-ui";
import CounterInput from "@components/CounterInput";
import { useFormContext } from "react-hook-form";
import { QuotationCreatePayload } from "../type";
const SpecialNeedsInformation = () => {
  const {
    register,
    control,
    formState: { errors },
    getValues,
    setValue
  } = useFormContext<QuotationCreatePayload>();
  return (
    <CollapseCardSTY>
      <Collapse title="特殊需求" opened={true}>
        <BodySTY>
          <ItemSTY>
            <div className="item">
              <CheckBoxWrapper
                label="舉牌(NT$200)"
                control={control}
                inputName="pickup_sign_check"
                description="若欲接送非母語人士/國外友人，建議選擇此選項。"
              >
                <Textarea
                  width={310}
                  {...register("pickup_sign_remark", {
                    validate: (value: any) => {
                      if (
                        getValues("pickup_sign_check") === "1" &&
                        value.trim() === ""
                      ) {
                        return "不可為空!";
                      }
                      return true;
                    }
                  })}
                  isInvalid={!!errors.pickup_sign_remark}
                />
                {errors.pickup_sign_remark && (
                  <div style={{ color: "#D14343" }}>
                    {errors.pickup_sign_remark?.message}
                  </div>
                )}
              </CheckBoxWrapper>
            </div>
            <div className="item">
              <CheckBoxWrapper
                label="杯水"
                control={control}
                inputName="mineral_water_check"
                description="免費提供。每車提供一箱，總共有x杯。"
              ></CheckBoxWrapper>
            </div>
          </ItemSTY>
          <ItemSTY>
            <div className="item">
              <CheckBoxWrapper
                label="司導(NT$200)"
                control={control}
                inputName="driver_guide_check"
                description="由司機兼任導遊，講解沿路風光。"
              ></CheckBoxWrapper>
            </div>
            <div className="item">
              <CheckBoxWrapper
                label="瓶裝水(NT$120)"
                control={control}
                inputName="bottled_water_check"
                description=""
              >
                <CounterInput
                  label="24瓶/箱"
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  inputName="bottled_water_box"
                />
              </CheckBoxWrapper>
            </div>
          </ItemSTY>
          <ItemSTY>
            <div className="item">
              <CheckBoxWrapper
                label="指定車齡(視選項加價)"
                control={control}
                inputName="bus_age_check"
                description=""
              >
                <Select width={310} {...register("bus_age")}>
                  <option value={"01"}>{"3年 (+NT$ 1000 / 天)"}</option>
                </Select>
              </CheckBoxWrapper>
            </div>
            <div className="item">
              <CheckBoxWrapper
                label="兒童座椅"
                control={control}
                inputName="child_seat_check"
                description="若有需要說明文字，車公司可自行輸入於此。"
              >
                <CounterInput
                  label="由店家提供 (+NT$ 200 / 天)"
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  inputName="child_seat_seller"
                />
                <CounterInput
                  label="自備"
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  inputName="child_seat_yourself"
                />
              </CheckBoxWrapper>
            </div>
          </ItemSTY>
          <ItemSTY>
            <div className="item">
              <CheckBoxWrapper
                label="攜帶特大/特殊行李"
                control={control}
                inputName="special_luggage_check"
                description="若有特大/特殊行李，像是貴重物、易碎品等等，請盡量事前告知。"
              ></CheckBoxWrapper>
            </div>
            <div className="item">
              <CheckBoxWrapper
                label="嬰兒座椅"
                control={control}
                inputName="infant_seat_check"
                description=""
              >
                <CounterInput
                  label="由店家提供 (+NT$ 200 / 天)"
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  inputName="infant_seat_seller"
                />
                <CounterInput
                  label="自備"
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  inputName="infant_seat_yourself"
                />
              </CheckBoxWrapper>
            </div>
          </ItemSTY>
          <ItemSTY>
            <div className="item">
              <CheckBoxWrapper
                label="攜帶寵物"
                control={control}
                inputName="bring_pets_check"
                description="若寵物造成車內髒污，將收取清潔費 NT$1,000 予司機。若弄髒部分為司機無法清潔之處（例：皮椅），則將另請清潔公司處理，並酌收相關費用。"
              >
                <Radio
                  label="攜帶小型寵物，且會裝於寵物籠/背包中。"
                  {...register("bring_pets_radio")}
                  value="1"
                />
                <Radio
                  label="寵物無法裝籠，將直接帶上車（NT$1,000）"
                  {...register("bring_pets_radio")}
                  value="2"
                />
              </CheckBoxWrapper>
            </div>
            <div className="item"></div>
          </ItemSTY>
          <RemarkSTY>
            <div className="title">備註</div>
            <div>
              此欄位可補充說明以上需求之細節，或提出您的其他需求。若有其他特殊需求，專人將會再提供報價。
            </div>
            <Textarea width={"100%"} {...register("remark")} />
          </RemarkSTY>
        </BodySTY>
      </Collapse>
    </CollapseCardSTY>
  );
};

export default SpecialNeedsInformation;
