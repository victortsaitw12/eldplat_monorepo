import React from "react";
import { Pane, Text, TextInput } from "evergreen-ui";
import { BodySTY } from "./style";
import { useFormContext, useWatch } from "react-hook-form";
import {
  emailValidation,
  numberValidation,
  textValidation
} from "@utils/inputValidation";
import dayjs from "dayjs";
interface I_Props {
  full_payment_period?: any; // 全額付款期限
  deposit_period?: any; // 預付訂金付款期限
  status: string;
  priceList: [
    {
      label: string;
      name: string;
    }
  ];
}

const PriceInfoEdit = ({
  full_payment_period,
  deposit_period,
  status,
  priceList
}: I_Props) => {
  const { register, control, watch, setValue, getValues } = useFormContext();

  React.useEffect(() => {
    // --- func --- //
    const calcExtraChargeTotal = (data: any) => {
      let subTotal = 0;
      const option = [
        { check: "pickup_sign_check", charge: "pickup_sign_charge" }, //舉牌
        { check: "driver_guide_check", charge: "driver_guide_charge" }, //司導
        { check: "bus_age_check", charge: "bus_age_charge" }, //指定車齡
        { check: "special_luggage_check", charge: "special_luggage_charge" }, //攜帶特大行李
        { check: "bring_pets_check", charge: "bring_pets_charge" }, //攜帶寵物
        { check: "mineral_water_check", charge: "mineral_water_charge" }, //杯水
        { check: "bottled_water_check", charge: "bottled_water_charge" }, //瓶裝水
        { check: "child_seat_check", charge: "child_seat_charge" }, //兒童座椅
        { check: "infant_seat_check", charge: "infant_seat_charge" } //嬰兒座椅
      ];
      option.forEach((item) => {
        if (data[item.check] === "1")
          subTotal += parseInt(data[item.charge] || 0);
      });

      return subTotal;
    };
    const calcTotalAmount = (data: any) => {
      const namesArr = [
        "basic_amount",
        "tip",
        "high_season_charge",
        "night_charge",
        "remote_charge"
      ];
      const sum = namesArr.reduce(
        (acc, item) => acc + parseInt(data[item] || 0),
        0
      );
      return sum + calcExtraChargeTotal(data);
    };
    // --- subscribe & call func--- //
    const subscription = watch((data, { name, type }) => {
      if (name === "quote_total_amount" || name === "extra_charge") return;
      setValue("extra_charge", calcExtraChargeTotal(data));
      setValue("quote_total_amount", calcTotalAmount(data));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const isFullPayment = useWatch({
    control,
    name: "full_payment_check"
  });
  const isDepositPayment = useWatch({
    control,
    name: "deposit_check"
  });
  const watch_deposit_amount = useWatch({
    control,
    name: "deposit_amount"
  });
  const watch_balance_amount = useWatch({
    control,
    name: "balance_amount"
  });
  return (
    <BodySTY>
      <Pane>
        {isFullPayment === "1" && (
          <>
            <Pane className="total_price">
              <Text>總金額</Text>
              <Text>
                NT$
                <TextInput
                  type="number"
                  {...register("quote_total_amount")}
                  disabled
                />
              </Text>
            </Pane>
            <Text>
              {dayjs(full_payment_period).format("YYYY-MM-DD")} 前繳款
            </Text>
            <hr />
          </>
        )}
        {isDepositPayment === "1" && (
          <>
            <Pane className="total_price">
              <Text>總金額</Text>
              <Text>
                NT$
                <TextInput
                  type="number"
                  {...register("quote_total_amount")}
                  disabled
                />
              </Text>
            </Pane>
            <Text>
              {dayjs(full_payment_period).format("YYYY-MM-DD")} 前繳款
            </Text>
            <hr />
            <Pane className="total_price">
              <Text>訂金</Text>
              <Text>
                NT$
                <TextInput
                  type="number"
                  value={watch_deposit_amount}
                  // {...register("deposit_amount")}
                  disabled
                />
              </Text>
            </Pane>
            <Text> 前繳款</Text>
            <hr />
            <Pane className="total_price">
              <Text>尾款</Text>
              <Text>
                NT$
                <TextInput
                  type="number"
                  value={watch_balance_amount}
                  disabled
                  // {...register("balance_amount")}
                />
              </Text>
            </Pane>
            <Text> 前繳款</Text>
            <hr />
          </>
        )}
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
