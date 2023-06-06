import React from "react";
import Collapse from "@components/Collapse";
import { BodySTY, CardSTY } from "./style";
import CounterInput from "@components/CounterInput";
import { QuotationCreatePayload } from "../type";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
interface TravelInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
}
const TravelInformation = ({
  register,
  control,
  errors
}: TravelInformationProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      <Collapse title="乘車資訊" opened={true}>
        <BodySTY>
          <div className="header-container">
            <div className="header-item">
              <div className="header-title">
                <span style={{ color: "#D14343" }}>*</span>
                <span>乘車數量</span>
              </div>
              <CounterInput
                register={register}
                label="成人"
                inpurName="adult"
              />
              <CounterInput
                register={register}
                label="兒童(2~4歲)"
                inpurName="child"
              />
              <CounterInput
                register={register}
                label="嬰兒(0~1歲)"
                inpurName="infant"
              />
            </div>
            <div className="header-item">
              <div className="header-title">
                <span>行李件數</span>
              </div>
              <CounterInput
                register={register}
                label="託運行李(21吋以上)"
                inpurName="check_in_luggage"
              />
              <CounterInput
                register={register}
                label="手提行李(20吋以下)"
                inpurName="carry_on_luggage"
              />
            </div>
          </div>
          <div className="content-container">
            <div style={{ color: "#567190", fontWeight: "700" }}>
              <span style={{ color: "#D14343" }}>*</span>
              <span>車型及數量</span>
            </div>
            <Collapse title="大型巴士(28~43人)" color="#EEF8F4">
              <CardSTY>
                <CounterInput
                  register={register}
                  label="車輛名稱(35~43人)"
                  inpurName="largeBus.large1"
                />
                <CounterInput
                  register={register}
                  label="車輛名稱(28~34人)"
                  inpurName="largeBus.large2"
                />
              </CardSTY>
            </Collapse>
            <Collapse title="中型巴士(10~28人)" color="#EEF8F4">
              <CardSTY>
                <CounterInput
                  register={register}
                  label="車輛名稱(21~25人)"
                  inpurName="mediumBus.medium1"
                />
                <CounterInput
                  register={register}
                  label="車輛名稱(10~21人)"
                  inpurName="mediumBus.medium2"
                />
              </CardSTY>
            </Collapse>
            <Collapse title="小型巴士(9人以下)" color="#EEF8F4">
              <CardSTY>
                <CounterInput
                  register={register}
                  label="車輛名稱(9人)"
                  inpurName="smallBus.small1"
                />
              </CardSTY>
            </Collapse>
          </div>
        </BodySTY>
      </Collapse>
    </div>
  );
};

export default TravelInformation;
