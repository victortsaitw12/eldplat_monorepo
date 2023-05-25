import React, { useState } from "react";
import { Pane, TextInputField, SelectField } from "evergreen-ui";
import FormCard from "@components/FormCard";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  useFormContext
} from "react-hook-form";
import { BusDataTypes } from "../../bus.type";
interface Props {
  hide?: boolean;
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
}
function Specifications({ hide, register, errors }: Props) {
  return (
    <Pane marginX="20px" display={hide ? "none" : "block"}>
      <FormCard formTitle="尺寸">
        <div className="w50">
          <TextInputField
            label="寬度"
            type="number"
            {...register("specifications.width")}
          />
          <TextInputField
            label="高度"
            type="number"
            {...register("specifications.height")}
          />
          <TextInputField
            label="長度"
            type="number"
            {...register("specifications.length")}
          />
          <TextInputField
            label="內部容積"
            type="number"
            {...register("specifications.interior_volume")}
          />
          <TextInputField
            label="載客量"
            type="number"
            {...register("specifications.passenger_volume")}
          />
          <TextInputField
            label="貨物量"
            type="number"
            {...register("specifications.cargo_bolume")}
          />
          <TextInputField
            label="離地間隙"
            type="number"
            {...register("specifications.ground_clearance")}
          />
          <TextInputField
            label="底盤長度"
            type="number"
            {...register("specifications.bed_length")}
          />
        </div>
      </FormCard>
      <FormCard formTitle="重量">
        <div className="w50">
          <TextInputField
            label="空車重量"
            type="number"
            {...register("specifications.curb_weight")}
          />
          <TextInputField
            label="車輛總重量等級"
            type="number"
            {...register("specifications.weight_rating")}
          />
        </div>
      </FormCard>
      <FormCard formTitle="性能">
        <div className="w50">
          <TextInputField
            label="牽引能力"
            type="number"
            {...register("specifications.towing_capacity")}
          />
          <TextInputField
            label="最大有效承載"
            type="number"
            {...register("specifications.max_payload")}
          />
        </div>
      </FormCard>
      <FormCard formTitle="燃油經濟性 / 油耗表現">
        <div className="w33">
          <TextInputField
            label="（EPA）城市燃油經濟性 / 市區油耗表現"
            type="number"
            {...register("specifications.epa_city")}
          />
          <TextInputField
            label="（EPA）高速公路燃油經濟性 / 高速公路油耗表現"
            type="number"
            {...register("specifications.epa_highway")}
          />
          <TextInputField
            label="（EPA）綜合燃油經濟性 / 綜合油耗表現"
            type="number"
            {...register("specifications.epa_combined")}
          />
        </div>
      </FormCard>
      <FormCard formTitle="引擎">
        <div className="w33">
          <TextInputField
            label="引擎摘要"
            {...register("specifications.engine_summary")}
          />
          <TextInputField
            label="引擎品牌"
            {...register("specifications.engine_brand")}
          />
          <SelectField
            label="進氣系統"
            {...register("specifications.aspiration")}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="01">自然進氣</option>
            <option value="02">渦輪增壓</option>
            <option value="03">雙渦輪增壓</option>
          </SelectField>

          <SelectField
            label="引擎缸體類型"
            {...register("specifications.block_type")}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="01">I</option>
            <option value="02">V</option>
          </SelectField>
          <SelectField label="汽缸孔徑" {...register("specifications.bore")}>
            <option value="" disabled>
              Please select
            </option>
          </SelectField>
          <SelectField
            label="凸輪軸類型"
            {...register("specifications.cam_type")}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="01">DOHC</option>
            <option value="02">OHV</option>
          </SelectField>

          <TextInputField
            label="壓縮比"
            type="number"
            {...register("specifications.compression")}
          />
          <TextInputField
            label="汽缸"
            type="number"
            {...register("specifications.cylinders")}
          />
          <TextInputField
            label="排量大小"
            type="number"
            {...register("specifications.displacement")}
          />
        </div>
        <div className="w50">
          <SelectField
            label="燃油感應器"
            {...register("specifications.fuel_induction")}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="01">直噴共槽</option>
            <option value="02">多點式連續噴射</option>
            <option value="03">連續噴射</option>
          </SelectField>
          <TextInputField
            label="最大馬力"
            type="number"
            {...register("specifications.max_hp")}
          />
        </div>
        <div className="w33">
          <TextInputField
            label="最大扭矩"
            type="number"
            {...register("specifications.max_torque")}
          />
          <TextInputField
            label="最大轉速"
            {...register("specifications.redline_rpm")}
          />
          <TextInputField
            label="衝程"
            type="number"
            {...register("specifications.stroke")}
          />
          <TextInputField
            label="每缸氣門數量"
            type="number"
            {...register("specifications.valves")}
          />
        </div>
      </FormCard>
      <FormCard formTitle="變速器">
        <div className="w33">
          <TextInputField
            label="變速器摘要"
            {...register("specifications.transmission_summary")}
          />
          <TextInputField
            label="變速器品牌"
            type="number"
            {...register("specifications.transmission_brand")}
          />
          <SelectField
            label="變速器類別"
            {...register("specifications.transmission_type")}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="01">自動</option>
            <option value="02">無段變速</option>
          </SelectField>
          <TextInputField
            label="變速器檔位"
            type="number"
            {...register("specifications.transmission_gears")}
          />
        </div>
      </FormCard>
      <FormCard formTitle="車輪&輪胎">
        <div className="w33">
          <SelectField
            label="驅動類型"
            {...register("specifications.driver_type")}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="01">4X4</option>
            <option value="02">6X4</option>
            <option value="03">FWD</option>
            <option value="04">RWD</option>
          </SelectField>
          <SelectField
            label="剎車系統"
            {...register("specifications.break_system")}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="01">氣壓</option>
            <option value="02">液壓</option>
          </SelectField>
          <TextInputField
            label="前輪輪距"
            type="number"
            {...register("specifications.front_track_width")}
          />
          <TextInputField
            label="後輪輪距"
            type="number"
            {...register("specifications.rear_track_width")}
          />
          <TextInputField
            label="軸距"
            type="number"
            {...register("specifications.wheelbase")}
          />
          <TextInputField
            label="Front Wheel Diameter"
            type="number"
            {...register("specifications.front_wheel_diameter")}
          />
          <TextInputField
            label="前輪直徑"
            type="number"
            {...register("specifications.rear_wheel_diameter")}
          />
          <TextInputField
            label="後軸"
            type="number"
            {...register("specifications.rear_axle")}
          />
          <TextInputField
            label="前輪輪胎類型"
            type="number"
            {...register("specifications.front_tire_type")}
          />
          <TextInputField
            label="前胎胎壓大小"
            type="number"
            {...register("specifications.front_tire_psi")}
          />
          <TextInputField
            label="後輪輪胎類型"
            type="number"
            {...register("specifications.rear_tire_type")}
          />
          <TextInputField
            label="後胎胎壓大小"
            type="number"
            {...register("specifications.rear_tire_psi")}
          />
        </div>
      </FormCard>
      <FormCard formTitle="燃料">
        <div className="w50">
          <SelectField
            label="燃料類型"
            {...register("specifications.fuel_type")}
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="01">壓縮天然氣(CNG)</option>
            <option value="02">柴油</option>
            <option value="03">汽油</option>
            <option value="04">丙烷</option>
          </SelectField>
          <TextInputField
            label="汽油質量"
            type="number"
            {...register("specifications.fuel_quality")}
          />
          <TextInputField
            label="油箱1容量大小"
            type="number"
            {...register("specifications.fuel_tank_capacity1")}
          />
          <TextInputField
            label="油箱2容量大小"
            type="number"
            {...register("specifications.fuel_tank_capacity2")}
          />
        </div>
      </FormCard>
      <FormCard formTitle="機油">
        <div className="w100">
          <TextInputField
            label="機油容量"
            type="number"
            {...register("specifications.oil_capacity")}
          />
        </div>
      </FormCard>
    </Pane>
  );
}

export default Specifications;
