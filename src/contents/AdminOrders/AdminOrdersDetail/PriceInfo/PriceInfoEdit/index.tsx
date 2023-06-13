import React from "react";
import { Pane, Text, TextInput } from "evergreen-ui";
import { BodySTY } from "./style";
import { useFormContext } from "react-hook-form";
import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";
interface I_Props {
  status: string;
  priceList: [
    {
      label: string;
      name: string;
    }
  ];
}

const PriceInfoEdit = ({ status, priceList }: I_Props) => {
  const { register, control } = useFormContext();
  return (
    <BodySTY>
      <Pane>
        <Pane className="total_price">
          <Text>總金額</Text>
          <Text>
            NT$
            <TextInput
              {...register("full_payment_amount", {
                validate: numberValidation
              })}
            />
          </Text>
        </Pane>
        <Text>2023-05-01 前繳款</Text>
        <hr />
      </Pane>
      <Pane className="price_detail">
        <Pane>
          <Text>基本車資</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("basic_amount", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>小費</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("tip", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>旺季加價</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("high_season_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>夜間加價</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("night_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>偏遠地區加價</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("remote_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>司導</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("driver_guide_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>指定車齡</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("bus_age_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>特大/特殊行李</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("special_luggage_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>攜帶寵物</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("bring_pets_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>杯水</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("mineral_water_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>瓶裝水</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("bottled_water_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>兒童座椅</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("child_seat_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        <Pane>
          <Text>嬰兒座椅</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput
              {...register("infant_seat_charge", {
                validate: numberValidation
              })}
            />
          </Pane>
        </Pane>
        {/* {priceList.map((child, i) => {
          return (
            <Pane key={child.name + "-" + i}>
              <Text>{child.label}</Text>
              <Pane>
                <Text>NT$</Text>
                <TextInput name={child.name} />
              </Pane>
            </Pane>
          );
        })} */}
      </Pane>
    </BodySTY>
  );
};
export default PriceInfoEdit;
