import React from "react";
import { useRouter } from "next/router";
import { Pane, Text } from "evergreen-ui";
import { BodySTY } from "./style";
import DetailList from "@components/DetailList";
import LabelButton from "@components/Button/Primary/Label";
import LabelSecondaryButton from "@components/Button/Secondary/Label";
import LightBox from "@components/Lightbox";
//@service
import { deleteQuotation } from "@services/admin_orders/deleteQuotation";
import { updateBEStatusLog } from "@services/admin_orders/updateBEStatusLog";
import dayjs from "dayjs";

interface I_Props {
  orderData: any;
}
const PriceInfoView = ({ orderData }: I_Props) => {
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [isCancelOpen, setIsCancelOpen] = React.useState(false);
  const router = useRouter();
  const delete_quotation = async () => {
    try {
      const res = await deleteQuotation(orderData.quote_no);
      console.log(res);
      router.push("/admin_orders/");
    } catch (err: any) {
      console.log(err);
    }
  };
  const update_BE_status = async (quote_no: string, status_code: string) => {
    try {
      const res = await updateBEStatusLog(quote_no, status_code);
      console.log(res);
      router.push("/admin_orders/");
    } catch (err: any) {
      console.log(err);
    }
  };
  const update_FE_status = async (quote_no: string, status_code: string) => {
    try {
      const res = await updateBEStatusLog(quote_no, status_code);
      console.log(res);
      router.push("/admin_orders/");
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <BodySTY>
      <Pane>
        <Pane className="btn_list">
          <LabelSecondaryButton
            onClick={(e) => {
              e.preventDefault();
              setIsCancelOpen(true);
            }}
            className="cancel_btn"
            text="取消報價"
          />
          <LabelButton
            onClick={(e) => {
              e.preventDefault();
              setIsConfirmOpen(true);
            }}
            className="submit_btn"
            text="送出報價"
          />
        </Pane>
        <Pane className="total_price">
          <Text>總金額</Text>
          <Text>
            NT${orderData?.quote_total_amount.toLocaleString() || "0"}
          </Text>
        </Pane>
        <Text>
          {dayjs(orderData.full_payment_period).format("YYYY-MM-DD")} 前繳款
        </Text>
        <hr />
      </Pane>
      <Pane className="price_detail">
        <DetailList
          listArray={[
            {
              title: "基本車資",
              value: orderData?.basic_amount
                ? "NT$" + orderData?.basic_amount.toLocaleString()
                : "0"
            },
            {
              title: "小費",
              value: orderData?.tip
                ? "NT$" + orderData?.tip.toLocaleString()
                : "0"
            },
            {
              title: "旺季加價",
              value: orderData?.high_season_charge
                ? "NT$" + orderData?.high_season_charge.toLocaleString()
                : "0"
            },
            {
              title: "夜間加價",
              value: orderData?.night_charge
                ? "NT$" + orderData?.night_charge.toLocaleString()
                : "0"
            },
            {
              title: "偏遠地區加價",
              value: orderData?.remote_charge
                ? "NT$" + orderData?.remote_charge.toLocaleString()
                : "0"
            },
            {
              title: "司導",
              value: orderData?.driver_guide_charge
                ? "NT$" + orderData?.driver_guide_charge.toLocaleString()
                : "0"
            },
            {
              title: "指定車齡",
              value: orderData?.bus_age_charge
                ? "NT$" + orderData?.bus_age_charge.toLocaleString()
                : "0"
            },
            {
              title: "特大/特殊行李",
              value: orderData?.special_luggage_charge
                ? "NT$" + orderData?.special_luggage_charge.toLocaleString()
                : "0"
            },
            {
              title: "攜帶寵物",
              value: orderData?.bring_pets_charge
                ? "NT" + orderData?.bring_pets_charge.toLocaleString()
                : "0"
            },
            {
              title: "杯水",
              value: orderData?.mineral_water_charge
                ? "NT$" + orderData?.mineral_water_charge.toLocaleString()
                : "0"
            },
            {
              title: "瓶裝水",
              value: orderData?.bottled_water_charge
                ? "NT$" + orderData?.bottled_water_charge.toLocaleString()
                : "0"
            },
            {
              title: "兒童座椅",
              value: orderData?.child_seat_charge
                ? "NT$" + orderData?.child_seat_charge.toLocaleString()
                : "0"
            },
            {
              title: "嬰兒座椅",
              value: orderData?.infant_seat_charge
                ? "NT$" + orderData?.infant_seat_charge.toLocaleString()
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
          報價將傳送給客人
        </Text>
        <Pane style={{ display: "flex", justifyContent: "flex-end" }}>
          <LabelSecondaryButton
            onClick={(e) => {
              e.preventDefault();
              setIsConfirmOpen((prev) => !prev);
            }}
            className="cancel_btn"
            text="取消"
          />
          <LabelButton
            onClick={(e) => {
              e.preventDefault();
              update_BE_status(orderData.quote_no, "3");
            }}
            className="submit_btn"
            text="確認"
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
            onClick={(e) => {
              e.preventDefault();
              setIsCancelOpen((prev) => !prev);
            }}
            className="cancel_btn"
            text="取消"
          />
          <LabelButton
            onClick={(e) => {
              e.preventDefault();
              delete_quotation();
            }}
            className="submit_btn"
            text="確認"
          />
        </Pane>
      </LightBox>
    </BodySTY>
  );
};
export default PriceInfoView;
