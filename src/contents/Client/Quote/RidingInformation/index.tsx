import React from "react";
import Collapse from "@components/Collapse";
import { BodySTY, CardSTY, CollapseCardSTY } from "./style";
import CounterInput from "@components/CounterInput";
import { QuotationCreatePayload } from "../type";
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
  UseFormSetValue,
  UseFormGetValues
} from "react-hook-form";
interface TravelInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
  setValue: UseFormSetValue<QuotationCreatePayload>;
  getValues: UseFormGetValues<QuotationCreatePayload>;
}
const TravelInformation = ({
  register,
  setValue,
  control,
  getValues
}: TravelInformationProps) => {
  const { fields } = useFieldArray({
    control,
    name: "bus_data"
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      <CollapseCardSTY>
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
                  setValue={setValue}
                  getValues={getValues}
                  label="成人"
                  inputName="adult"
                />
                <CounterInput
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  label="兒童(2~4歲)"
                  inputName="child"
                />
                <CounterInput
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  label="嬰兒(0~1歲)"
                  inputName="infant"
                />
              </div>
              <div className="header-item">
                <div className="header-title">
                  <span>行李件數</span>
                </div>
                <CounterInput
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  label="託運行李(21吋以上)"
                  inputName="check_in_luggage"
                />
                <CounterInput
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  label="手提行李(20吋以下)"
                  inputName="carry_on_luggage"
                />
              </div>
            </div>
            <div className="content-container">
              <div style={{ color: "#567190", fontWeight: "700" }}>
                <span style={{ color: "#D14343" }}>*</span>
                <span>車型及數量</span>
              </div>
              {fields.map((item, index) => {
                return (
                  <Collapse
                    title={item.type_name}
                    color="#EEF8F4"
                    key={item.id}
                  >
                    <CardSTY>
                      {item.bus_list.map((bus, i) => {
                        return (
                          <CounterInput
                            register={register}
                            setValue={setValue}
                            getValues={getValues}
                            label={item.type_name + "-" + bus.bus_seat + "人座"}
                            inputName={`bus_data.${index}.bus_list.${i}.order_quantity`}
                            key={bus.bus_name + "-" + i}
                          />
                        );
                      })}
                    </CardSTY>
                  </Collapse>
                );
              })}
            </div>
          </BodySTY>
        </Collapse>
      </CollapseCardSTY>
    </div>
  );
};

export default TravelInformation;
