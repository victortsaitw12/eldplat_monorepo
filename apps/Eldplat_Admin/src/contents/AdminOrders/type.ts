export interface QuotationEditPayload {
  quote_no: string;
  quote_type: string;
  departure_date?: string;
  return_date?: string;
  purpose?: string;
  pickup_date?: string;
  dropoff_time?: string;
  flight_date?: string;
  flight_number?: string;
  airport?: string;
  terminal?: string;
  flight_departure_time?: string;
  airline?: string;
  adult: number;
  child: number;
  infant: number;
  /** dummy bus, waiting for backend to update*/
  bus_data: Array<{
    type_name: string;
    ddl_code: string;
    bus_list: Array<{
      bus_type: string;
      bus_name: string;
      bus_seat: number;
      order_quantity: number;
    }>;
  }>;
  /** dummy bus end */
  check_in_luggage: number;
  carry_on_luggage: number;
  order_contact_list: Array<{
    family_name: string;
    name: string;
    contact_phone_code?: string;
    contact_phone?: string;
    contact_tel_code?: string;
    contact_tel?: string;
    contact_email?: string;
    contact_type?: string;
    social_media_type?: string;
    social_media?: string;
  }>;
  pickup_sign_check: string;
  pickup_sign_remark: string;
  driver_guide_check: string;
  bus_age_check: string;
  bus_age: string;
  special_luggage_check: string;
  bring_pets_check: string;
  bring_pets_radio: string;
  mineral_water_check: string;
  bottled_water_check: string;
  bottled_water_box: number;
  child_seat_check: string;
  child_seat_seller: number;
  child_seat_yourself: number;
  infant_seat_check: string;
  infant_seat_seller: number;
  infant_seat_yourself: number;
  remark: string;
  quote_total_amount: number;
  order_itinerary_list: Array<{
    quote_no: string;
    day_number: number;
    day_date: string;
    departure_time: string;
    pickup_location: string;
    stopover_address_list: Array<{
      stopover_address: string;
      stopover_sort: string;
    }>;
    dropoff_location: string;
  }>;
  basic_amount?: number;
  tip?: number;
  pickup_sign_charge?: number;
  high_season_charge?: number;
  night_charge?: number;
  remote_charge?: number;
  driver_guide_charge?: number;
  bus_age_charge?: number;
  special_luggage_charge?: number;
  bring_pets_charge?: number;
  mineral_water_charge?: number;
  bottled_water_charge?: number;
  child_seat_charge?: number;
  infant_seat_charge?: number;
  extra_charge?: number;
  discount?: number;
  quote_change_count?: number;
}

export const defaultQuotationCreatePayload: QuotationEditPayload = {
  quote_no: "",
  quote_type: "1",
  departure_date: "",
  return_date: "",
  purpose: "",
  pickup_date: "",
  dropoff_time: "",
  flight_date: "",
  flight_number: "",
  airport: "",
  terminal: "",
  flight_departure_time: "",
  airline: "",
  adult: 0,
  child: 0,
  infant: 0,
  /* bus Data */
  bus_data: [],
  /* bus Data end */
  check_in_luggage: 0,
  carry_on_luggage: 0,
  order_contact_list: [
    {
      family_name: "",
      name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: "",
      contact_type: "2",
      social_media_type: "",
      social_media: ""
    },
    {
      family_name: "",
      name: "",
      contact_phone_code: "",
      contact_phone: "",
      contact_tel_code: "",
      contact_tel: "",
      contact_email: "",
      contact_type: "1",
      social_media_type: "",
      social_media: ""
    }
  ],
  pickup_sign_check: "0",
  pickup_sign_remark: "",
  driver_guide_check: "0",
  bus_age_check: "0",
  bus_age: "",
  special_luggage_check: "0",
  bring_pets_check: "0",
  bring_pets_radio: "1",
  mineral_water_check: "0",
  bottled_water_check: "0",
  bottled_water_box: 0,
  child_seat_check: "0",
  child_seat_seller: 0,
  child_seat_yourself: 0,
  infant_seat_check: "0",
  infant_seat_seller: 0,
  infant_seat_yourself: 0,
  remark: "",
  quote_total_amount: 2200,
  order_itinerary_list: [
    {
      quote_no: "",
      day_number: 1,
      day_date: "",
      departure_time: "",
      pickup_location: "",
      stopover_address_list: [],
      dropoff_location: ""
    }
  ],
  basic_amount: 1200,
  tip: 200,
  high_season_charge: 300,
  driver_guide_charge: 300,
  night_charge: 300,
  remote_charge: 300,
  special_luggage_charge: 300,
  quote_change_count: 2200
};
