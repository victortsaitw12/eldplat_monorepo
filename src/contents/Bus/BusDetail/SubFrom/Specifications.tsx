import React, { useState } from "react";
import Image from "next/image";
import { Select, Button, FilePicker } from "evergreen-ui";
import InfoBox from "@components/InfoBox";
import { FilePickBtnSTY } from "@components/FormCard/style";
import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  Control
} from "react-hook-form";
import TextInput from "@components/CustomTextInput";
import { BusDataTypes } from "../../bus.type";
import FlexWrapper from "@layout/FlexWrapper";
import { convertMap } from "@utils/convertValueToText";
interface Props {
  register: UseFormRegister<BusDataTypes>;
  errors: FieldErrors<BusDataTypes>;
  getValues: UseFormGetValues<BusDataTypes>;
  control: Control<BusDataTypes, any>;
  isEdit: boolean;
}

function Details({ register, errors, getValues, control, isEdit }: Props) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  // 尺寸
  const sizeInfo = [
    {
      req: false,
      label: "寬度",
      value: getValues("bus_specifications.width") || "--",
      editEle: <TextInput {...register("bus_specifications.width")} />
    },
    {
      req: false,
      label: "高度",
      value: getValues("bus_specifications.height") || "--",
      editEle: <TextInput {...register("bus_specifications.height")} />
    },
    {
      req: false,
      label: "長度",
      value: getValues("bus_specifications.length") || "--",
      editEle: <TextInput {...register("bus_specifications.length")} />
    },
    {
      req: false,
      label: "內部容積",
      value: getValues("bus_specifications.interior_volume") || "--",
      editEle: <TextInput {...register("bus_specifications.interior_volume")} />
    },
    {
      req: false,
      label: "載客量",
      value: getValues("bus_specifications.passenger_volume") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.passenger_volume")} />
      )
    },
    {
      req: false,
      label: "貨物量",
      value: getValues("bus_specifications.cargo_volume") || "--",
      editEle: <TextInput {...register("bus_specifications.cargo_volume")} />
    },
    {
      req: false,
      label: "離地間隙",
      value: getValues("bus_specifications.ground_clearance") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.ground_clearance")} />
      )
    },
    {
      req: false,
      label: "底盤長度",
      value: getValues("bus_specifications.bed_length") || "--",
      editEle: <TextInput {...register("bus_specifications.bed_length")} />
    }
  ];
  // 車輪和輪胎
  const tireInfo = [
    {
      req: false,
      label: "驅動類型",
      value: getValues("bus_specifications.drive_type")
        ? convertMap["drive_type"][getValues("bus_specifications.drive_type")][
            "ch"
          ]
        : "--",
      editEle: (
        <Select
          key="bus_specifications.drive_type"
          {...register("bus_specifications.drive_type")}
          marginBottom="0"
        >
          <option value="01">4X4</option>
          <option value="02">6X4</option>
          <option value="03">FWD</option>
          <option value="04">RWD</option>
        </Select>
      )
    },
    {
      req: false,
      label: "煞車系統",
      value: getValues("bus_specifications.brake_system")
        ? convertMap["brake_system"][
            getValues("bus_specifications.brake_system")
          ]["ch"]
        : "--",
      // value: getValues("bus_specifications.brake_system"),
      editEle: (
        <Select
          key="bus_specifications.brake_system"
          {...register("bus_specifications.brake_system")}
          marginBottom="0"
        >
          <option value="01">煞車</option>
        </Select>
      )
    },
    {
      req: false,
      label: "前輪輪距",
      value: getValues("bus_specifications.front_track_width") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.front_track_width")} />
      )
    },
    {
      req: false,
      label: "後輪輪距",
      value: getValues("bus_specifications.rear_track_width") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.rear_track_width")} />
      )
    },
    {
      req: false,
      label: "軸距",
      value: getValues("bus_specifications.wheelbase") || "--",
      editEle: <TextInput {...register("bus_specifications.wheelbase")} />
    },
    {
      req: false,
      label: "前輪直徑",
      value: getValues("bus_specifications.front_wheel_diameter") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.front_wheel_diameter")} />
      )
    },
    {
      req: false,
      label: "後輪直徑",
      value: getValues("bus_specifications.rear_wheel_diameter") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.rear_wheel_diameter")} />
      )
    },
    {
      req: false,
      label: "後軸",
      value: getValues("bus_specifications.rear_axle") || "--",
      editEle: <TextInput {...register("bus_specifications.rear_axle")} />
    },
    {
      req: false,
      label: "前輪輪胎類型",
      value: getValues("bus_specifications.front_tire_type") || "--",
      editEle: <TextInput {...register("bus_specifications.front_tire_type")} />
    },
    {
      req: false,
      label: "前輪胎壓大小",
      value: getValues("bus_specifications.front_tire_psi") || "--",
      editEle: <TextInput {...register("bus_specifications.front_tire_psi")} />
    },
    {
      req: false,
      label: "後輪輪胎類型",
      value: getValues("bus_specifications.rear_tire_type") || "--",
      editEle: <TextInput {...register("bus_specifications.rear_tire_type")} />
    },
    {
      req: false,
      label: "後輪胎壓大小",
      value: getValues("bus_specifications.rear_tire_psi") || "--",
      editEle: <TextInput {...register("bus_specifications.rear_tire_psi")} />
    }
  ];
  // 重量
  const weightInfo = [
    {
      req: false,
      label: "空車重量",
      value: getValues("bus_specifications.curb_weight") || "--",
      editEle: <TextInput {...register("bus_specifications.curb_weight")} />
    },
    {
      req: false,
      label: "車輛總重量等級",
      value: getValues("bus_specifications.weight_rating") || "--",
      editEle: <TextInput {...register("bus_specifications.weight_rating")} />
    }
  ];
  //性能
  const powerInfo = [
    {
      req: false,
      label: "牽引能力",
      value: getValues("bus_specifications.towing_capacity") || "--",
      editEle: <TextInput {...register("bus_specifications.towing_capacity")} />
    },
    {
      req: false,
      label: "最大有效承載",
      value: getValues("bus_specifications.max_payload") || "--",
      editEle: <TextInput {...register("bus_specifications.max_payload")} />
    }
  ];
  //燃油經濟性
  const epaInfo = [
    {
      req: false,
      label: (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div>EPA城市燃油經濟性</div>
          <div>市區油耗表現</div>
        </div>
      ),
      value: getValues("bus_specifications.epa_city") || "--",
      editEle: <TextInput {...register("bus_specifications.epa_city")} />
    },
    {
      req: false,
      label: (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div>EPA高速公路燃油經濟性</div>
          <div>高速公路油耗表現</div>
        </div>
      ),
      value: getValues("bus_specifications.epa_highway") || "--",
      editEle: <TextInput {...register("bus_specifications.epa_highway")} />
    },
    {
      req: false,
      label: (
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div>EPA綜合燃油經濟性</div>
          <div>綜合油耗表現</div>
        </div>
      ),
      value: getValues("bus_specifications.epa_combined") || "--",
      editEle: <TextInput {...register("bus_specifications.epa_combined")} />
    }
  ];
  //變速器
  const transmissionInfo = [
    {
      req: false,
      label: "變速器摘要",
      value: getValues("bus_specifications.transmission_summary") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.transmission_summary")} />
      )
    },
    {
      req: false,
      label: "變速器品牌",
      value: getValues("bus_specifications.transmission_brand") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.transmission_brand")} />
      )
    },
    {
      req: false,
      label: "變速器類別",
      value: getValues("bus_specifications.transmission_type")
        ? convertMap["transmission_type"][
            getValues("bus_specifications.transmission_type")
          ]["ch"]
        : "--",
      editEle: (
        <Select
          key="bus_specifications.transmission_type"
          {...register("bus_specifications.transmission_type")}
          marginBottom="0"
        >
          <option value="01">自動</option>
          <option value="01">無段變速</option>
        </Select>
      )
    },
    {
      req: false,
      label: "變速器檔位",
      value: getValues("bus_specifications.transmission_gears") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.transmission_gears")} />
      )
    }
  ];
  //機油
  const oilInfo = [
    {
      req: false,
      label: "機油容量",
      value: getValues("bus_specifications.oil_capacity") || "--",
      editEle: <TextInput {...register("bus_specifications.oil_capacity")} />
    }
  ];
  //引擎
  const engineInfo = [
    {
      req: false,
      label: "引擎摘要",
      value: getValues("bus_specifications.engine_summary") || "--",
      editEle: <TextInput {...register("bus_specifications.engine_summary")} />
    },
    {
      req: false,
      label: "引擎品牌",
      value: getValues("bus_specifications.engine_brand") || "--",
      editEle: <TextInput {...register("bus_specifications.engine_brand")} />
    },
    {
      req: false,
      label: "進氣系統",
      value: getValues("bus_specifications.aspiration")
        ? convertMap["aspiration"][getValues("bus_specifications.aspiration")][
            "ch"
          ]
        : "--",
      // value: getValues("bus_specifications.aspiration"),
      editEle: (
        <Select
          key="bus_specifications.aspiration"
          {...register("bus_specifications.aspiration")}
          marginBottom="0"
        >
          <option value="01">自然進氣</option>
          <option value="02">渦輪增壓</option>
          <option value="03">雙渦輪增壓</option>
        </Select>
      )
    },
    {
      req: false,
      label: "引擎缸體類型",
      value: getValues("bus_specifications.block_type")
        ? convertMap["block_type"][getValues("bus_specifications.block_type")][
            "ch"
          ]
        : "--",
      // value: getValues("bus_specifications.block_type"),
      editEle: (
        <Select
          key="bus_specifications.block_type"
          {...register("bus_specifications.block_type")}
          marginBottom="0"
        >
          <option value="01">I</option>
          <option value="02">V</option>
        </Select>
      )
    },
    {
      req: false,
      label: "汽缸孔徑",
      value: getValues("bus_specifications.bore") || "--",
      editEle: <TextInput {...register("bus_specifications.bore")} />
    },
    {
      req: false,
      label: "凸輪軸類型",
      value: getValues("bus_specifications.cam_type")
        ? convertMap["cam_type"][getValues("bus_specifications.cam_type")]["ch"]
        : "--",
      editEle: (
        <Select
          key="bus_specifications."
          {...register("bus_specifications.cam_type")}
          marginBottom="0"
        >
          <option value="01">凸輪軸</option>
        </Select>
      )
    },

    {
      req: false,
      label: "壓縮比",
      value: getValues("bus_specifications.compression") || "--",
      editEle: <TextInput {...register("bus_specifications.compression")} />
    },
    {
      req: false,
      label: "汽缸",
      value: getValues("bus_specifications.cylinders") || "--",
      editEle: <TextInput {...register("bus_specifications.cylinders")} />
    },
    {
      req: false,
      label: "排量大小",
      value: getValues("bus_specifications.displacement") || "--",
      editEle: <TextInput {...register("bus_specifications.displacement")} />
    },
    {
      req: false,
      label: "燃油進氣方式",
      value: getValues("bus_specifications.fuel_induction")
        ? convertMap["fuel_induction"][
            getValues("bus_specifications.fuel_induction")
          ]["ch"]
        : "--",
      // value: getValues("bus_specifications.fuel_induction"),
      editEle: (
        <Select
          key="bus_specifications.fuel_induction"
          {...register("bus_specifications.fuel_induction")}
          marginBottom="0"
        >
          <option value="01">高壓共軌</option>
          <option value="01">順序多點燃油噴射</option>
          <option value="01">順序燃油噴射</option>
        </Select>
      )
    },
    {
      req: false,
      label: "最大馬力",
      value: getValues("bus_specifications.max_hp") || "--",
      editEle: <TextInput {...register("bus_specifications.max_hp")} />
    },
    {
      req: false,
      label: "最大扭矩",
      value: getValues("bus_specifications.max_torque") || "--",
      editEle: <TextInput {...register("bus_specifications.max_torque")} />
    },
    {
      req: false,
      label: "最大轉速",
      value: getValues("bus_specifications.redline_rpm") || "--",
      editEle: <TextInput {...register("bus_specifications.redline_rpm")} />
    },
    {
      req: false,
      label: "衝程",
      value: getValues("bus_specifications.stroke") || "--",
      editEle: <TextInput {...register("bus_specifications.stroke")} />
    },
    {
      req: false,
      label: "每缸氣門數量",
      value: getValues("bus_specifications.valves") || "--",
      editEle: <TextInput {...register("bus_specifications.valves")} />
    }
  ];
  //燃料
  const gasInfo = [
    {
      req: false,
      label: "燃料類型",
      value: getValues("bus_specifications.fuel_type")
        ? convertMap["fuel_type"][getValues("bus_specifications.fuel_type")][
            "ch"
          ]
        : "--",
      // value: getValues("bus_specifications.fuel_type"),
      editEle: (
        <Select
          key="bus_specifications.fuel_type"
          {...register("bus_specifications.fuel_type")}
          marginBottom="0"
        >
          <option value="01">生質柴油</option>
          <option value="02">壓縮天然氣 (CNG)</option>
          <option value="03">DEF (車用尿素)</option>
          <option value="04">柴油</option>
          <option value="05">柴油/電動混合</option>
          <option value="06">電動</option>
          <option value="07">彈性燃料</option>
          <option value="08">汽油/電動混合</option>
          <option value="09">汽油</option>
          <option value="10">插電式油電複合</option>
          <option value="11">液化石油氣</option>
        </Select>
      )
    },
    {
      req: false,
      label: "汽油質量",
      value: getValues("bus_specifications.fuel_quality") || "--",
      editEle: <TextInput {...register("bus_specifications.fuel_quality")} />
    },
    {
      req: false,
      label: "油箱1容量大小",
      value: getValues("bus_specifications.fuel_tank_capacity1") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.fuel_tank_capacity1")} />
      )
    },
    {
      req: false,
      label: "油箱2容量大小",
      value: getValues("bus_specifications.fuel_tank_capacity2") || "--",
      editEle: (
        <TextInput {...register("bus_specifications.fuel_tank_capacity2")} />
      )
    }
  ];
  return (
    <FlexWrapper padding="0">
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={isEdit} infoData={sizeInfo} infoTitle="尺寸" />
        <InfoBox isEdit={isEdit} infoData={tireInfo} infoTitle="車輪 & 輪胎" />
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={isEdit} infoData={weightInfo} infoTitle="重量" />
        <InfoBox isEdit={isEdit} infoData={powerInfo} infoTitle="性能" />
        <InfoBox
          isEdit={isEdit}
          infoData={epaInfo}
          infoTitle="燃油經濟性/油耗表現"
        />
        <InfoBox
          isEdit={isEdit}
          infoData={transmissionInfo}
          infoTitle="變速器"
        />
        <InfoBox isEdit={isEdit} infoData={oilInfo} infoTitle="機油" />
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <InfoBox isEdit={isEdit} infoData={engineInfo} infoTitle="引擎" />
        <InfoBox isEdit={isEdit} infoData={gasInfo} infoTitle="燃料" />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default Details;
