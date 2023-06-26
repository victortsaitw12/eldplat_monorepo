// 檢視訂單

export const getQuotation = async (quote_no: string) => {
  const response = await fetch(
    `https://localhost:7088/ORD/GetFE_QuotationByID?quote_no=${quote_no}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
      }
    }
  );
  const result = await response.json();
  const data: I_OrderDetail = result.data;
  return data;
};

export interface I_StatusList {
  name: string;
  status: string; //"ok","pending","error",
  date: string; //"2023-06-07 16:31"
}
export interface I_Contact {
  quote_no: string;
  family_name: string | null;
  name: string | null;
  contact_phone_code: string | null;
  contact_phone: string | null;
  contact_tel_code: string | null;
  contact_tel: string | null;
  contact_email: string | null;
  contact_type: string | null;
  social_media_type: string | null;
  social_media: string | null;
}
export interface I_BusType {
  bus_type: string;
  bus_seat: number | null;
  order_quantity: number | null;
}
export interface I_Itinerary {
  quote_no: string | null;
  day_number: number | null; //1
  day_date: string | null;
  departure_time: string | null;
  pickup_location: string | null;
  stopover_addresses: string[] | null;
  dropoff_location: string | null;
}
export interface I_OrderDetail {
  actual_full_payment_date: string | null;
  actual_deposit_date: string | null;
  actual_balance_date: string | null;
  airport: string | null;
  airline: string | null;
  adult: number | null;
  balance_amount: number | null;
  balance_period: string | null;
  balance_history: string | null; //01: 現金 02: 匯款
  bus_data: I_BusType[];
  bus_age_check: any | null;
  bus_age: string; //"01"
  bring_pets_check: string; //"1"
  bring_pets_radio: string; //"2"
  bottled_water_check: string; //"1"
  bottled_water_box: number; //2
  bring_pets_charge: number; // 100,
  bottled_water_charge: number; //100,
  basic_amount: number; //2000,
  bus_age_charge: number; //100,
  customer_check: number; //null,
  checktimeout: string | null;
  child_seat_charge: number; // 50,
  child_seat_check: string; //"1",
  child_seat_seller: number; //0,
  child_seat_yourself: number; //0,
  customer_no: string | null;
  company_no: string;
  costs_no: string;
  child: number | null;
  check_in_luggage: number | null;
  carry_on_luggage: number | null;
  departure_date: string | null; // "2024-02-01T00:00:00",
  deposit_tax: string | null;
  deposit_percent: number | null;
  deposit_amount: number | null;
  deposit_period: string | null;
  deposit_history: string | null; //01: 現金 02: 匯款
  dropoff_time: string | null;
  driver_guide_charge: number; //600,
  driver_guide_check: string; //"0"
  flight_date: string | null;
  flight_number: string | null;
  flight_departure_time: string | null;
  full_payment_tax: string;
  full_payment_period: string | null;
  full_payment_history: string | null; //01: 現金 02: 匯款
  orderStatusesList: I_StatusList[];
  quote_no: string;
  quote_type: string;
  return_date: string | null; // "2024-02-01T00:00:00",
  purpose: string | null; //"01"
  pickup_date: string | null;
  terminal: string | null;
  infant: number | null;
  isfullpay: boolean;
  order_contact_list: I_Contact[];
  pickup_sign_check: string; //"1"
  pickup_sign_remark: string; //"舉牌備註"
  special_luggage_check: string; //"1"
  mineral_water_check: string; //"0"
  infant_seat_check: string; //1",
  infant_seat_seller: number; //1,
  infant_seat_yourself: number; //1,
  remark: string; //備註",
  tip: number; //100,
  high_season_charge: number; //100,
  night_charge: number; //100,
  remote_charge: number; //100,
  special_luggage_charge: number; //100,
  mineral_water_charge: number; // 100,
  infant_seat_charge: number; //50,
  extra_charge: number; // 0,
  discount: any | null;
  quote_change_count: number; // null,
  checkdeposit: boolean;
  deposit: number; // 0,
  quote_total_amount: number; //0,
  order_itinerary_list: I_Itinerary[];
}
