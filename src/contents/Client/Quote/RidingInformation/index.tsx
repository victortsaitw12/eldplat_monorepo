import React, { useEffect } from "react";
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
  UseFormGetValues,
  useWatch
} from "react-hook-form";
interface RidingInformationProps {
  control: Control<QuotationCreatePayload>;
  register: UseFormRegister<QuotationCreatePayload>;
  errors: FieldErrors<QuotationCreatePayload>;
  setValue: UseFormSetValue<QuotationCreatePayload>;
  getValues: UseFormGetValues<QuotationCreatePayload>;
  validateSubForm: (data: { valid: boolean; errorMessage: string }) => void;
}
function validateBusData(
  bus_data: Array<{
    type_name: string;
    ddl_code: string;
    bus_list: Array<{
      bus_type: string;
      bus_name: string;
      bus_seat: number;
      order_quantity: number;
    }>;
  }>
) {
  let totalBus = 0;
  bus_data.forEach((item) => {
    item.bus_list.forEach((bus) => {
      totalBus += bus.order_quantity;
    });
  });
  return totalBus > 0;
}
const RidingInformation = ({
  register,
  setValue,
  control,
  getValues,
  validateSubForm
}: RidingInformationProps) => {
  const { fields } = useFieldArray({
    control,
    name: "bus_data"
  });
  const [adult, child, infant, bus_data] = useWatch({
    control,
    name: ["adult", "child", "infant", "bus_data"]
  });
  useEffect(() => {
    const isValidPassenger = adult + child + infant > 0;
    const isValidBusData = validateBusData(bus_data);
    if (!isValidPassenger) {
      validateSubForm({ valid: false, errorMessage: "乘客總數不能為0" });
      return;
    }
    if (!isValidBusData) {
      validateSubForm({ valid: false, errorMessage: "車輛總數不能為0" });
      return;
    }
    validateSubForm({ valid: true, errorMessage: "" });
  }, [adult, child, infant, bus_data]);
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
                    opened={true}
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

export default RidingInformation;
