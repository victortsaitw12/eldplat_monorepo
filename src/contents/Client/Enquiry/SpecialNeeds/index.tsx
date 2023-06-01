import React from "react";
import Collapse from "@components/Collapse";
import { useForm } from "react-hook-form";
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import { BodySTY, ItemSTY } from "./style";
import { Textarea, Select, Checkbox } from "evergreen-ui";
import CounterInput from "@components/CounterInput";
type SchduleType = {
  departureTime: string;
  startPoint: { location: string };
  destinationPoint: { location: string };
  middlePoints: Array<{ location: string }>;
};

type FormValues = {
  bottleWater: number;
  childSeat: {
    store: number;
    self: number;
  };
  babySeat: {
    store: number;
    self: number;
  };
};
const TravelInformation = () => {
  const {
    control,
    register,
    formState: { errors }
  } = useForm<FormValues>({});
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px"
      }}
    >
      <Collapse title="特殊需求" opened={true}>
        <BodySTY>
          <ItemSTY>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper
                label="舉牌(NT$200)"
                checked={true}
                description="若欲接送非母語人士/國外友人，建議選擇此選項。"
              >
                <Textarea width={310} />
              </CheckBoxWrapper>
            </div>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper
                label="杯水"
                checked={true}
                description="免費提供。每車提供一箱，總共有x杯。"
              ></CheckBoxWrapper>
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper
                label="司導(NT$200)"
                checked={true}
                description="由司機兼任導遊，講解沿路風光。"
              ></CheckBoxWrapper>
            </div>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper
                label="瓶裝水(NT$120)"
                checked={true}
                description=""
              >
                <CounterInput
                  label="24瓶/箱"
                  register={register}
                  inpurName="bottleWater"
                />
              </CheckBoxWrapper>
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper
                label="指定車齡(視選項加價)"
                checked={true}
                description=""
              >
                <Select width={310}>
                  <option value={"01"}>{"3年 (+NT$ 1000 / 天)"}</option>
                </Select>
              </CheckBoxWrapper>
            </div>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper
                label="兒童座椅"
                checked={true}
                description="若有需要說明文字，車公司可自行輸入於此。"
              >
                <CounterInput
                  label="由店家提供 (+NT$ 200 / 天)"
                  register={register}
                  inpurName="childSeat.store"
                />
                <CounterInput
                  label="自備"
                  register={register}
                  inpurName="childSeat.self"
                />
              </CheckBoxWrapper>
            </div>
          </ItemSTY>

          <ItemSTY>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper
                label="攜帶特大/特殊行李"
                checked={true}
                description="若有特大/特殊行李，像是貴重物、易碎品等等，請盡量事前告知。"
              ></CheckBoxWrapper>
            </div>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper label="嬰兒座椅" checked={true} description="">
                <CounterInput
                  label="由店家提供 (+NT$ 200 / 天)"
                  register={register}
                  inpurName="babySeat.store"
                />
                <CounterInput
                  label="自備"
                  register={register}
                  inpurName="babySeat.self"
                />
              </CheckBoxWrapper>
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1"
              }}
            >
              <CheckBoxWrapper
                label="攜帶寵物"
                checked={true}
                description="若寵物造成車內髒污，將收取清潔費 NT$1,000 予司機。若弄髒部分為司機無法清潔之處（例：皮椅），則將另請清潔公司處理，並酌收相關費用。"
              >
                <Checkbox label="攜帶小型寵物，且會裝於寵物籠/背包中。" />
                <Checkbox label="寵物無法裝籠，將直接帶上車（NT$1,000） " />
              </CheckBoxWrapper>
            </div>
            <div
              style={{
                flex: "1"
              }}
            ></div>
          </ItemSTY>
          <div>
            <div>備註</div>
            <div>
              此欄位可補充說明以上需求之細節，或提出您的其他需求。若有其他特殊需求，專人將會再提供報價。
            </div>
            <Textarea width={"100%"} />
          </div>
        </BodySTY>
      </Collapse>
    </form>
  );
};

export default TravelInformation;
