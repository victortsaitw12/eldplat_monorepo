import React, { useState } from "react";
import { Pane, TextInputField, SelectField } from "evergreen-ui";
import FormCard from "@components/FormCard";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  useFormContext
} from "react-hook-form";
import { BusDataTypes } from "../busDefaultData";
import Select from "@components/HookForm/Select";
import Card from "@components/Card";
import FlexWrapper from "@layout/FlexWrapper";
import { SubFromProps } from "./type";
import HorizatalInput from "@components/HookForm/Input/HorizatalInput";

function Specifications({
  hide,
  register,
  errors,
  control,
  isDisabled = false
}: SubFromProps) {
  return (
    <div style={{ display: hide ? "none" : "block" }}>
      <Card title="尺寸">
        <HorizatalInput
          label="寬度"
          errorMessage={errors?.bus_specifications?.width?.message as string}
          {...register("bus_specifications.width")}
        />
        <HorizatalInput
          label="高度"
          errorMessage={errors?.bus_specifications?.height?.message as string}
          {...register("bus_specifications.height")}
        />
        <HorizatalInput
          label="長度"
          errorMessage={errors?.bus_specifications?.length?.message as string}
          {...register("bus_specifications.length")}
        />
        <HorizatalInput
          label="內部容積"
          errorMessage={
            errors?.bus_specifications?.interior_volume?.message as string
          }
          {...register("bus_specifications.interior_volume")}
        />
        <HorizatalInput
          label="載客量"
          errorMessage={
            errors?.bus_specifications?.passenger_volume?.message as string
          }
          {...register("bus_specifications.passenger_volume")}
        />
        <HorizatalInput
          label="貨物量"
          errorMessage={
            errors?.bus_specifications?.cargo_volume?.message as string
          }
          {...register("bus_specifications.cargo_volume")}
        />
        <HorizatalInput
          label="離地間隙"
          errorMessage={
            errors?.bus_specifications?.ground_clearance?.message as string
          }
          {...register("bus_specifications.ground_clearance")}
        />
        <HorizatalInput
          label="底盤長度"
          errorMessage={
            errors?.bus_specifications?.bed_length?.message as string
          }
          {...register("bus_specifications.bed_length")}
        />
      </Card>
      <Card title="車輪&輪胎">
        <div>
          <div>驅動類型</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus_specifications.drive_type"
            options={[{ label: "驅動", value: "01" }]}
          />
        </div>
        <div>
          <div>煞車系統</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus_specifications.brake_system"
            options={[
              { label: "北部", value: "01" },
              { label: "中部", value: "02" },
              { label: "南部", value: "03" }
            ]}
          />
        </div>
        <HorizatalInput
          label="前輪輪距"
          errorMessage={
            errors?.bus_specifications?.front_track_width?.message as string
          }
          {...register("bus_specifications.front_track_width")}
        />
        <HorizatalInput
          label="後輪輪距"
          errorMessage={
            errors?.bus_specifications?.rear_track_width?.message as string
          }
          {...register("bus_specifications.rear_track_width")}
        />
        <HorizatalInput
          label="軸距"
          errorMessage={
            errors?.bus_specifications?.wheelbase?.message as string
          }
          {...register("bus_specifications.wheelbase")}
        />
        <HorizatalInput
          label="前輪直徑"
          errorMessage={
            errors?.bus_specifications?.front_wheel_diameter?.message as string
          }
          {...register("bus_specifications.front_wheel_diameter")}
        />
        <HorizatalInput
          label="後輪直徑"
          errorMessage={
            errors?.bus_specifications?.rear_wheel_diameter?.message as string
          }
          {...register("bus_specifications.rear_wheel_diameter")}
        />
        <HorizatalInput
          label="後軸"
          errorMessage={
            errors?.bus_specifications?.rear_axle?.message as string
          }
          {...register("bus_specifications.rear_axle")}
        />
        <HorizatalInput
          label="前輪輪胎類型"
          errorMessage={
            errors?.bus_specifications?.front_tire_type?.message as string
          }
          {...register("bus_specifications.front_tire_type")}
        />
        <HorizatalInput
          label="前輪胎壓大小"
          errorMessage={
            errors?.bus_specifications?.front_tire_psi?.message as string
          }
          {...register("bus_specifications.front_tire_psi")}
        />
        <HorizatalInput
          label="後輪輪胎類型"
          errorMessage={
            errors?.bus_specifications?.rear_tire_type?.message as string
          }
          {...register("bus_specifications.rear_tire_type")}
        />
        <HorizatalInput
          label="後輪胎壓大小"
          errorMessage={
            errors?.bus_specifications?.rear_tire_psi?.message as string
          }
          {...register("bus_specifications.rear_tire_psi")}
        />
      </Card>
      <Card title="重量">
        <HorizatalInput
          label="空車重量"
          errorMessage={
            errors?.bus_specifications?.curb_weight?.message as string
          }
          {...register("bus_specifications.curb_weight")}
        />
        <HorizatalInput
          label="車輛總重量等級"
          errorMessage={
            errors?.bus_specifications?.weight_rating?.message as string
          }
          {...register("bus_specifications.weight_rating")}
        />
      </Card>
      <Card title="性能">
        <HorizatalInput
          label="牽引能力"
          errorMessage={
            errors?.bus_specifications?.towing_capacity?.message as string
          }
          {...register("bus_specifications.towing_capacity")}
        />
        <HorizatalInput
          label="最大有效乘載"
          errorMessage={
            errors?.bus_specifications?.max_payload?.message as string
          }
          {...register("bus_specifications.max_payload")}
        />
      </Card>
      <Card title="燃油經濟性/油耗表現">
        <HorizatalInput
          label="EPA城市燃油經濟性\\n市區油耗表現"
          errorMessage={errors?.bus_specifications?.epa_city?.message as string}
          {...register("bus_specifications.epa_city")}
        />
        <HorizatalInput
          label="EPA高速公路燃油經濟性\\n高速公路油耗表現"
          errorMessage={
            errors?.bus_specifications?.epa_highway?.message as string
          }
          {...register("bus_specifications.epa_highway")}
        />
        <HorizatalInput
          label="EPA綜合燃油經濟性\\n綜合油耗表現"
          errorMessage={
            errors?.bus_specifications?.epa_combined?.message as string
          }
          {...register("bus_specifications.epa_combined")}
        />
      </Card>
      <Card title="變速器">
        <HorizatalInput
          label="變速器摘要"
          errorMessage={
            errors?.bus_specifications?.transmission_summary?.message as string
          }
          {...register("bus_specifications.transmission_summary")}
        />
        <HorizatalInput
          label="變速器品牌"
          errorMessage={
            errors?.bus_specifications?.transmission_brand?.message as string
          }
          {...register("bus_specifications.transmission_brand")}
        />
        <div>
          <div>變速器類別</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus_specifications.transmission_type"
            options={[
              { label: "北部", value: "01" },
              { label: "中部", value: "02" },
              { label: "南部", value: "03" }
            ]}
          />
        </div>
        <HorizatalInput
          label="變速器檔位"
          errorMessage={
            errors?.bus_specifications?.transmission_gears?.message as string
          }
          {...register("bus_specifications.transmission_gears")}
        />
      </Card>
      <Card title="機油">
        <HorizatalInput
          label="機油容量"
          errorMessage={
            errors?.bus_specifications?.oil_capacity?.message as string
          }
          {...register("bus_specifications.oil_capacity")}
        />
      </Card>
      <Card title="引擎">
        <HorizatalInput
          label="引擎摘要"
          errorMessage={
            errors?.bus_specifications?.engine_summary?.message as string
          }
          {...register("bus_specifications.engine_summary")}
        />
        <HorizatalInput
          label="引擎品牌"
          errorMessage={
            errors?.bus_specifications?.engine_brand?.message as string
          }
          {...register("bus_specifications.engine_brand")}
        />
        <div>
          <div>進氣系統</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus_specifications.aspiration"
            options={[{ label: "進氣", value: "01" }]}
          />
        </div>
        <div>
          <div>引擎缸體類型</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus_specifications.block_type"
            options={[{ label: "引擎缸體", value: "01" }]}
          />
        </div>
        <div>
          <div>引擎孔徑</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus_specifications.bore"
            options={[{ label: "汽缸", value: "01" }]}
          />
        </div>
        <div>
          <div>凸輪軸類型</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus_specifications.cam_type"
            options={[{ label: "凸輪軸", value: "01" }]}
          />
        </div>
        <HorizatalInput
          label="壓縮比"
          errorMessage={
            errors?.bus_specifications?.compression?.message as string
          }
          {...register("bus_specifications.compression")}
        />
        <HorizatalInput
          label="汽缸"
          errorMessage={
            errors?.bus_specifications?.cylinders?.message as string
          }
          {...register("bus_specifications.cylinders")}
        />
        <HorizatalInput
          label="排量大小"
          errorMessage={
            errors?.bus_specifications?.displacement?.message as string
          }
          {...register("bus_specifications.displacement")}
        />
        <div>
          <div>燃油感應器</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus.bus_group"
            options={[{ label: "燃油感應", value: "01" }]}
          />
        </div>
        <HorizatalInput
          label="最大馬力"
          errorMessage={errors?.bus_specifications?.max_hp?.message as string}
          {...register("bus_specifications.max_hp")}
        />
        <HorizatalInput
          label="最大扭矩"
          errorMessage={
            errors?.bus_specifications?.max_torque?.message as string
          }
          {...register("bus_specifications.max_torque")}
        />
        <HorizatalInput
          label="最大轉速"
          errorMessage={
            errors?.bus_specifications?.redline_rpm?.message as string
          }
          {...register("bus_specifications.redline_rpm")}
        />
        <HorizatalInput
          label="衝程"
          errorMessage={errors?.bus_specifications?.stroke?.message as string}
          {...register("bus_specifications.stroke")}
        />
        <HorizatalInput
          label="每缸氣門數量"
          errorMessage={errors?.bus_specifications?.valves?.message as string}
          {...register("bus_specifications.valves")}
        />
      </Card>
      <Card title="燃料">
        <div>
          <div>燃料類型</div>
          <Select
            control={control}
            isDisabled={isDisabled}
            name="bus_specifications.fuel_type"
            options={[{ label: "北部", value: "01" }]}
          />
        </div>
        <HorizatalInput
          label="汽油質量"
          errorMessage={
            errors?.bus_specifications?.fuel_quality?.message as string
          }
          {...register("bus_specifications.fuel_quality")}
        />
        <HorizatalInput
          label="油箱容量大小1"
          errorMessage={
            errors?.bus_specifications?.fuel_tank_capacity1?.message as string
          }
          {...register("bus_specifications.fuel_tank_capacity1")}
        />
        <HorizatalInput
          label="油箱容量大小2"
          errorMessage={
            errors?.bus_specifications?.fuel_tank_capacity2?.message as string
          }
          {...register("bus_specifications.fuel_tank_capacity2")}
        />
      </Card>
    </div>
  );
}

export default Specifications;
