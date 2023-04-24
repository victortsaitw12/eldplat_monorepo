import React, { useState } from "react";
import { Pane, TextInputField, SelectField } from "evergreen-ui";
import FormCard from "@components/FormCard";

interface Props {
  hide?: boolean;
}
function Specifications({ hide }: Props) {
  const [financingTab, setFinancingTab] = useState("0");

  const handleFinancingTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinancingTab(e.target.value);
  };
  return (
    <Pane marginX="20px" display={hide ? "none" : "block"}>
      <FormCard formTitle="尺寸">
        <div className="w50">
          <TextInputField label="寬度" name="width" type="number" />
          <TextInputField label="高度" name="height" type="number" />
          <TextInputField label="長度" name="length" type="number" />
          <TextInputField
            label="內部容積"
            name="interior_volume"
            type="number"
          />
          <TextInputField
            label="載客量"
            name="passenger_volume"
            type="number"
          />
          <TextInputField label="貨物量" name="cargo_volume" type="number" />
          <TextInputField
            label="離地間隙"
            name="ground_clearance"
            type="number"
          />
          <TextInputField label="底盤長度" name="bed_length" type="number" />
        </div>
      </FormCard>
      <FormCard formTitle="重量">
        <div className="w50">
          <TextInputField label="空車重量" name="curb_weight" type="number" />
          <TextInputField
            label="車輛總重量等級"
            name="weight_rating"
            type="number"
          />
        </div>
      </FormCard>
      <FormCard formTitle="性能">
        <div className="w50">
          <TextInputField
            label="牽引能力"
            name="towing_capacity"
            type="number"
          />
          <TextInputField
            label="最大有效承載"
            name="max_payload"
            type="number"
          />
        </div>
      </FormCard>
      <FormCard formTitle="燃油經濟性 / 油耗表現">
        <div className="w33">
          <TextInputField
            label="（EPA）城市燃油經濟性 / 市區油耗表現"
            name="epa_city"
            type="number"
          />
          <TextInputField
            label="（EPA）高速公路燃油經濟性 / 高速公路油耗表現"
            name="epa_highway"
            type="number"
          />
          <TextInputField
            label="（EPA）綜合燃油經濟性 / 綜合油耗表現"
            name="epa_combined"
            type="number"
          />
        </div>
      </FormCard>
      <FormCard formTitle="引擎">
        <div className="w33">
          <TextInputField label="引擎摘要" name="engine_summary" />
          <TextInputField label="引擎品牌" name="engine_brand" />
          <SelectField label="進氣系統" name="aspiration">
            <option value="" disabled>
              Please select
            </option>
            <option value="01">自然進氣</option>
            <option value="02">渦輪增壓</option>
            <option value="03">雙渦輪增壓</option>
          </SelectField>

          <SelectField label="引擎缸體類型" name="block_type">
            <option value="" disabled>
              Please select
            </option>
            <option value="01">I</option>
            <option value="02">V</option>
          </SelectField>
          <SelectField label="汽缸孔徑" name="bore">
            <option value="" disabled>
              Please select
            </option>
          </SelectField>
          <SelectField label="凸輪軸類型" name="cam_type">
            <option value="" disabled>
              Please select
            </option>
            <option value="01">DOHC</option>
            <option value="02">OHV</option>
          </SelectField>

          <TextInputField label="壓縮比" name="compression" type="number" />
          <TextInputField label="汽缸" name="cylinders" type="number" />
          <TextInputField label="排量大小" name="displacement" type="number" />
        </div>
        <div className="w50">
          <SelectField label="燃油感應器" name="fuel_induction">
            <option value="" disabled>
              Please select
            </option>
            <option value="01">直噴共槽</option>
            <option value="02">多點式連續噴射</option>
            <option value="03">連續噴射</option>
          </SelectField>
          <TextInputField label="最大馬力" name="max_hp" type="number" />
        </div>
        <div className="w33">
          <TextInputField label="最大扭矩" name="max_torque" type="number" />
          <TextInputField label="最大轉速" name="redline_rpm" />
          <TextInputField label="衝程" name="stroke" type="number" />
          <TextInputField label="每缸氣門數量" name="valves" type="number" />
        </div>
      </FormCard>
      <FormCard formTitle="變速器">
        <div className="w33">
          <TextInputField label="變速器摘要" name="transmission_summary" />
          <TextInputField
            label="變速器品牌"
            name="transmission_brand"
            type="number"
          />
          <SelectField label="變速器類別" name="transmission_type">
            <option value="" disabled>
              Please select
            </option>
            <option value="01">自動</option>
            <option value="02">無段變速</option>
          </SelectField>
          <TextInputField
            label="變速器檔位"
            name="transmission_gears"
            type="number"
          />
        </div>
      </FormCard>
      <FormCard formTitle="車輪&輪胎">
        <div className="w33">
          <SelectField label="驅動類型" name="drive_type">
            <option value="" disabled>
              Please select
            </option>
            <option value="01">4X4</option>
            <option value="02">6X4</option>
            <option value="03">FWD</option>
            <option value="04">RWD</option>
          </SelectField>
          <SelectField label="剎車系統" name="brake_system">
            <option value="" disabled>
              Please select
            </option>
            <option value="01">氣壓</option>
            <option value="02">液壓</option>
          </SelectField>
          <TextInputField
            label="前輪輪距"
            name="front_track_width"
            type="number"
          />
          <TextInputField
            label="後輪輪距"
            name="rear_track_width"
            type="number"
          />
          <TextInputField label="軸距" name="wheelbase" type="number" />
          <TextInputField
            label="Front Wheel Diameter"
            name="front_wheel_diameter"
            type="number"
          />
          <TextInputField
            label="前輪直徑"
            name="rear_wheel_diameter"
            type="number"
          />
          <TextInputField label="後軸" name="rear_axle" type="number" />
          <TextInputField
            label="前輪輪胎類型"
            name="front_tire_type"
            type="number"
          />
          <TextInputField
            label="前胎胎壓大小"
            name="front_tire_psi"
            type="number"
          />
          <TextInputField
            label="後輪輪胎類型"
            name="rear_tire_type"
            type="number"
          />
          <TextInputField
            label="後胎胎壓大小"
            name="rear_tire_psi"
            type="number"
          />
        </div>
      </FormCard>
      <FormCard formTitle="燃料">
        <div className="w50">
          <SelectField label="燃料類型" name="fuel_type">
            <option value="" disabled>
              Please select
            </option>
            <option value="01">壓縮天然氣(CNG)</option>
            <option value="02">柴油</option>
            <option value="03">汽油</option>
            <option value="04">丙烷</option>
          </SelectField>
          <TextInputField label="汽油質量" name="fuel_quality" type="number" />
          <TextInputField
            label="油箱1容量大小"
            name="fuel_tank_capacity1"
            type="number"
          />
          <TextInputField
            label="油箱2容量大小"
            name="fuel_tank_capacity2"
            type="number"
          />
        </div>
      </FormCard>
      <FormCard formTitle="機油">
        <div className="w100">
          <TextInputField label="機油容量" name="oil_capacity" type="number" />
        </div>
      </FormCard>
    </Pane>
  );
}

export default Specifications;
