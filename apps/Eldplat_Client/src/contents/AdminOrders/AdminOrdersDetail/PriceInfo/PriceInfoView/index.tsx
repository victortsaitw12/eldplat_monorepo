import React from "react";
import { useRouter } from "next/router";
import { Pane, Text, toaster } from "evergreen-ui";
import { BodySTY } from "./style";
import { useFormContext, useWatch } from "react-hook-form";

import DetailList from "@components/DetailList";
import LabelButton from "@components/Button/Primary/Label";
import LabelSecondaryButton from "@components/Button/Secondary/Label";
import LightBox from "@components/Lightbox";
//@service
import { deleteQuotation } from "@services/admin_orders/deleteQuotation";
import { updateBEStatusLog } from "@services/admin_orders/updateBEStatusLog";
import { updateFEStatusLog } from "@services/admin_orders/updateFEStatusLog";
import { assignmentClosed } from "@services/admin_orders/assignmentClosed";

import dayjs from "dayjs";

const PriceInfoView = () => {
  const {
    register,
    control,
    watch,
    setValue,
    getValues,
    trigger,
    formState: { errors }
  } = useFormContext();
  const {
    quote_no,
    full_payment_check,
    deposit_check,
    order_status_list,
    deposit_amount,
    deposit_period,
    balance_period,
    full_payment_period,
    balance_amount,
    quote_total_amount,
    basic_amount,
    tip,
    high_season_charge,
    night_charge,
    remote_charge,
    driver_guide_charge,
    bus_age_charge,
    special_luggage_charge,
    bring_pets_charge,
    mineral_water_charge,
    bottled_water_charge,
    child_seat_charge,
    infant_seat_charge
  } = useWatch({
    control
  });
  //全額付款
  const isFullPayment = full_payment_check === "1";
  //訂金付款
  const isDeposit = deposit_check === "1";
  console.log("order_status_list", order_status_list);
  const isCheckedStatus = () => {
    const checkedObj = order_status_list.filter(
      (child: any) => child.name == "接受報價"
    )[0];
    return checkedObj?.status === "ok";
  };
  //是否已預約派車
  const isAssignedStatus = () => {
    const assignedObj = order_status_list.filter(
      (child: any) => child.name == "預約派車"
    )[0];
    return assignedObj?.status === "ok";
  };
  //是否已預約完成
  const isAssignedComplete = () => {
    const assignedObj = order_status_list.filter(
      (child: any) => child.name == "預約完成"
    )[0];
    return assignedObj?.status === "ok";
  };
  const isPaid = () => {
    const paidObj = order_status_list.filter(
      (child: any) => child.name == "已付全額" || child.name == "已付尾款"
    )[0];
    return !!paidObj?.status && paidObj?.status === "ok";
  };
  const isFinished = () => {
    const paidObj = order_status_list.filter(
      (child: any) => child.name == "預約完成" || child.name == "結案"
    )[0];
    return !!paidObj?.status && paidObj?.status === "ok";
  };
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [isCancelOpen, setIsCancelOpen] = React.useState(false);
  const router = useRouter();
  const delete_quotation = async () => {
    try {
      const res = await deleteQuotation(quote_no);
      const res_assignmentClosed = await assignmentClosed(quote_no, "02");
      router.push("/admin_orders/");
    } catch (err: any) {
      console.log(err);
    }
  };
  const update_BE_status = async (quote_no: string, status_code: string) => {
    try {
      const res = await updateBEStatusLog(quote_no, status_code);
      console.log(res);
      // router.push("/admin_orders/");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <BodySTY>
      <Pane>
        {!isFinished() && (
          <Pane className="btn_list">
            <LabelSecondaryButton
              style={{
                fontWeight: "600",
                fontSize: "12px"
              }}
              onClick={(e) => {
                e.preventDefault();
                setIsCancelOpen(true);
              }}
              className="cancel_btn"
              text="取消報價"
            />
            {!isCheckedStatus() && (
              <LabelButton
                style={{
                  fontWeight: "600",
                  fontSize: "12px"
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsConfirmOpen(true);
                }}
                className="submit_btn"
                text="送出報價"
                disabled={(!isFullPayment && !isDeposit) || undefined}
              />
            )}
            {isCheckedStatus() && !isAssignedStatus() && (
              <LabelButton
                style={{
                  fontWeight: "600",
                  fontSize: "12px"
                }}
                onClick={(e) => {
                  e.preventDefault();
                  update_BE_status(quote_no, "13");
                  toaster.success(
                    "調度人員已收到訂單" + quote_no + "的預約派車需求",
                    {
                      description: "完成派車時，將會寄送通知給您。"
                    }
                  );
                  router.push("/admin_orders/");
                }}
                disabled={!isPaid()}
                className="submit_btn"
                text="預約派車"
              />
            )}
            {isAssignedStatus() && (
              <LabelButton
                style={{
                  fontWeight: "600",
                  fontSize: "12px"
                }}
                onClick={(e) => {
                  e.preventDefault();
                  update_BE_status(quote_no, "15");
                  router.push("/admin_orders/");
                }}
                disabled={!isAssignedComplete()}
                className="submit_btn"
                text="結案"
              />
            )}
          </Pane>
        )}
        {((!isDeposit && !isFullPayment) || isFullPayment) && (
          <>
            <Pane className="price_content">
              <Text>總金額</Text>
              <Text>NT${quote_total_amount?.toLocaleString() || "0"}</Text>
            </Pane>
            <Text>
              {dayjs(full_payment_period).isValid()
                ? dayjs(full_payment_period).format("YYYY-MM-DD") + " "
                : "--"}
              前繳款
            </Text>
            <hr />
          </>
        )}

        {isDeposit && (
          <>
            <Pane className="price_content">
              <Text>訂金</Text>
              <Text>NT${deposit_amount?.toLocaleString() || "0"}</Text>
            </Pane>
            <Text>{dayjs(deposit_period).format("YYYY-MM-DD")} 前繳款</Text>
            <hr />
            <Pane className="price_content">
              <Text>尾款</Text>
              <Text>NT${balance_amount?.toLocaleString() || "0"}</Text>
            </Pane>
            <Text>{dayjs(balance_period).format("YYYY-MM-DD")} 前繳款</Text>
            <hr />
          </>
        )}
      </Pane>
      <Pane className="price_detail">
        <DetailList
          listArray={[
            {
              title: "基本車資",
              value: basic_amount ? "NT$" + basic_amount.toLocaleString() : "0"
            },
            {
              title: "小費",
              value: tip ? "NT$" + tip.toLocaleString() : "0"
            },
            {
              title: "旺季加價",
              value: high_season_charge
                ? "NT$" + high_season_charge.toLocaleString()
                : "0"
            },
            {
              title: "夜間加價",
              value: night_charge ? "NT$" + night_charge.toLocaleString() : "0"
            },
            {
              title: "偏遠地區加價",
              value: remote_charge
                ? "NT$" + remote_charge.toLocaleString()
                : "0"
            },
            {
              title: "司導",
              value: driver_guide_charge
                ? "NT$" + driver_guide_charge.toLocaleString()
                : "0"
            },
            {
              title: "指定車齡",
              value: bus_age_charge
                ? "NT$" + bus_age_charge.toLocaleString()
                : "0"
            },
            {
              title: "特大/特殊行李",
              value: special_luggage_charge
                ? "NT$" + special_luggage_charge.toLocaleString()
                : "0"
            },
            {
              title: "攜帶寵物",
              value: bring_pets_charge
                ? "NT" + bring_pets_charge.toLocaleString()
                : "0"
            },
            {
              title: "杯水",
              value: mineral_water_charge
                ? "NT$" + mineral_water_charge.toLocaleString()
                : "0"
            },
            {
              title: "瓶裝水",
              value: bottled_water_charge
                ? "NT$" + bottled_water_charge.toLocaleString()
                : "0"
            },
            {
              title: "兒童座椅",
              value: child_seat_charge
                ? "NT$" + child_seat_charge.toLocaleString()
                : "0"
            },
            {
              title: "嬰兒座椅",
              value: infant_seat_charge
                ? "NT$" + infant_seat_charge.toLocaleString()
                : "0"
            }
          ]}
        />
      </Pane>
      <LightBox
        title="確定要送出報價?"
        isOpen={isConfirmOpen}
        handleCloseLightBox={() => {
          setIsConfirmOpen((prev) => !prev);
        }}
      >
        <Text style={{ display: "inline-block", padding: "15px 0" }}>
          報價將傳送給客人。
        </Text>
        <Pane style={{ display: "flex", justifyContent: "flex-end" }}>
          <LabelSecondaryButton
            style={{
              width: "unset",
              fontSize: "12px",
              fontWeight: "600"
            }}
            onClick={(e) => {
              e.preventDefault();
              setIsConfirmOpen((prev) => !prev);
            }}
            text="取消"
          />
          <LabelButton
            style={{
              width: "unset",
              fontSize: "12px"
            }}
            onClick={(e) => {
              e.preventDefault();
              const formData = getValues();
              console.log("當點擊送出報價後的表單資料:", formData);
              update_BE_status(quote_no, "3");
              router.push("/admin_orders/");
            }}
            text="送出報價"
          />
        </Pane>
      </LightBox>
      <LightBox
        title="確定要取消報價？"
        isOpen={isCancelOpen}
        handleCloseLightBox={() => {
          setIsCancelOpen((prev) => !prev);
        }}
      >
        <Text style={{ display: "inline-block", padding: "15px 0" }}>
          取消報價後，該筆訂單將移至【已取消】頁籤，且無法還原訂單。
        </Text>
        <Pane style={{ display: "flex", justifyContent: "flex-end" }}>
          <LabelSecondaryButton
            style={{
              width: "unset",
              fontSize: "12px",
              fontWeight: "600"
            }}
            onClick={(e) => {
              e.preventDefault();
              setIsCancelOpen((prev) => !prev);
            }}
            text="離開"
          />
          <LabelButton
            style={{
              width: "unset",
              fontSize: "12px"
            }}
            onClick={(e) => {
              e.preventDefault();
              delete_quotation();
            }}
            text="取消報價"
          />
        </Pane>
      </LightBox>
    </BodySTY>
  );
};
export default PriceInfoView;
