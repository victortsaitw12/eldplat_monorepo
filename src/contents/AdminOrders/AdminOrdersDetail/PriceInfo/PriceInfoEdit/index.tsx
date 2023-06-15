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
            <TextInput type="number" {...register("full_payment_amount")} />
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
            <TextInput type="number" {...register("basic_amount")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>小費</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("tip")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>旺季加價</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("high_season_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>夜間加價</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("night_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>偏遠地區加價</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("remote_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>司導</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("driver_guide_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>指定車齡</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("bus_age_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>特大/特殊行李</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("special_luggage_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>攜帶寵物</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("bring_pets_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>杯水</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("mineral_water_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>瓶裝水</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("bottled_water_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>兒童座椅</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("child_seat_charge")} />
          </Pane>
        </Pane>
        <Pane>
          <Text>嬰兒座椅</Text>
          <Pane>
            <Text>NT$</Text>
            <TextInput type="number" {...register("infant_seat_charge")} />
          </Pane>
        </Pane>
      </Pane>
    </BodySTY>
  );
};
export default PriceInfoEdit;
