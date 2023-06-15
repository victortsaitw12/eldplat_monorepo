import React from "react";
import { Pane, Text } from "evergreen-ui";
import { useFormContext } from "react-hook-form";

import VerticalDetail from "@components/VerticalDetail";
import Collapse from "@components/Collapse";
import CounterInput from "@components/CounterInput";
import { BodySTY } from "./style";
import { I_busType, I_busItem } from "@contents/AdminOrders/AdminOrdersDetail";
interface I_Props {
  methods: any;
  busType: I_busType[];
}
const TakeBusInfoEdit = ({ busType, methods }: I_Props) => {
  const { register, control } = useFormContext();
  return (
    <BodySTY>
      <Pane style={{ padding: "20px" }}>
        <Pane style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
          <Pane style={{ flex: "1" }}>
            <VerticalDetail
              title="乘客數量"
              items={[
                {
                  label: "",
                  value: (
                    <CounterInput
                      setValue={methods.setValue}
                      getValues={methods.getValues}
                      register={register}
                      inputName="adult"
                      label="成人"
                    />
                  )
                },
                {
                  label: "",
                  value: (
                    <CounterInput
                      setValue={methods.setValue}
                      getValues={methods.getValues}
                      register={register}
                      inputName="child"
                      label="兒童 (2~4歲)"
                    />
                  )
                },
                {
                  label: "",
                  value: (
                    <CounterInput
                      setValue={methods.setValue}
                      getValues={methods.getValues}
                      register={register}
                      inputName="infant"
                      label="嬰兒 (0~1歲)"
                    />
                  )
                }
              ]}
            />
          </Pane>
          <Pane style={{ flex: "1" }}>
            <VerticalDetail
              title="行李件數"
              items={[
                {
                  label: "",
                  value: (
                    <CounterInput
                      setValue={methods.setValue}
                      getValues={methods.getValues}
                      register={register}
                      inputName="check_in_luggage"
                      label="托運行李 (21吋以上)"
                    />
                  )
                },
                {
                  label: "",
                  value: (
                    <CounterInput
                      setValue={methods.setValue}
                      getValues={methods.getValues}
                      register={register}
                      inputName="carry_on_luggage"
                      label="手提行李 (20吋以下)"
                    />
                  )
                }
              ]}
            />
          </Pane>
        </Pane>
        <Text className="bus_amount_title">車型及數量</Text>
        <Pane className="bus_amount">
          {busType.map((child: any, i: number) => {
            return (
              <Collapse key={child.ddl_code + "-" + i} title={child.type_name}>
                <Pane style={{ padding: "20px 0" }}>
                  <VerticalDetail
                    title=""
                    items={child.bus_list.map(
                      (busItem: I_busItem, j: number) => {
                        return {
                          label: "",
                          value: (
                            <CounterInput
                              setValue={methods.setValue}
                              getValues={methods.getValues}
                              register={register}
                              inputName={
                                "bus_type_list[" +
                                i +
                                "].bus_list[" +
                                j +
                                "].order_quantity"
                              }
                              label={busItem.bus_name}
                            />
                          )
                        };
                      }
                    )}
                  />
                </Pane>
              </Collapse>
            );
          })}
        </Pane>
      </Pane>
    </BodySTY>
  );
};
export default TakeBusInfoEdit;
