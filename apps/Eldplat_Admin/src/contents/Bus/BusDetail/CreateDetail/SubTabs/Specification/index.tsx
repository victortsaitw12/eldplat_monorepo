import React, { useState } from "react";
import Image from "next/image";
import { Pane } from "evergreen-ui";
import { DivSTY } from "./style";

import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  Control
} from "react-hook-form";
import InfoCard from "@components/InfoCard";
import CustomTextInputField from "@components/CustomTextInputField";

interface Props {
  isEdit: boolean;
}

interface InfoItem {
  listClassName: string;
  readonly: boolean;
  req: boolean;
  label: string;
  bold: boolean;
  value: string;
  editEle: React.ReactNode;
}

type InfoArray = InfoItem[][];

function SpecificationDetail({ isEdit }: Props) {
  const SpecificationInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "寬度",
        bold: true,
        value: "100 公分",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "高度",
        bold: true,
        value: "100 公分",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "長度",
        bold: true,
        value: "100 公分",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "內部容積",
        bold: true,
        value: "100 公升",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "載客量",
        bold: true,
        value: "100 公升",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "貨物量",
        bold: true,
        value: "100 公升",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "離地間隙",
        bold: true,
        value: "100 公分",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "底盤長度",
        bold: true,
        value: "100 公分",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const AppearanceInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "顏色",
        bold: true,
        value: "白",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "符號",
        bold: true,
        value: "雄獅LOGO",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const WeightInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "空車重量",
        bold: true,
        value: "100 公斤",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "車輛總重量",
        bold: true,
        value: "100 公斤",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const PerformanceInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "空車重量",
        bold: true,
        value: "100 公斤",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "車輛總重量",
        bold: true,
        value: "100 公斤",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const EngineInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "引擎摘要",
        bold: true,
        value: "摘要",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "引擎品牌",
        bold: true,
        value: "品牌",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "進氣系統",
        bold: true,
        value: "進氣系統",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "引擎缸體類型",
        bold: true,
        value: "引擎缸體類型",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "汽缸孔徑",
        bold: true,
        value: "100 公分",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "凸輪軸類型",
        bold: true,
        value: "凸輪軸類型",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "壓縮比",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "汽缸",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "排量大小",
        bold: true,
        value: "100 公分",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "燃油進氣方式",
        bold: true,
        value: "燃油進氣方式",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "最大馬力",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "最大扭矩",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "最大轉速",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "衝程",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "每缸氣門數量",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const TireInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "驅動類型",
        bold: true,
        value: "驅動類型",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "煞車系統",
        bold: true,
        value: "煞車系統",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "前輪輪距",
        bold: true,
        value: "前輪輪距",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後輪輪距",
        bold: true,
        value: "後輪輪距",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "軸距",
        bold: true,
        value: "100 公分",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "前輪直徑",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後輪直徑",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後軸",
        bold: true,
        value: "後軸",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "前輪輪胎類型",
        bold: true,
        value: "前輪輪胎類型",
        editEle: <CustomTextInputField />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "前輪胎壓大小",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後輪輪胎類型",
        bold: true,
        value: "後輪輪胎類型",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後輪胎壓大小",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const TransmissionInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "摘要",
        bold: true,
        value: "摘要",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "品牌",
        bold: true,
        value: "品牌",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "類別",
        bold: true,
        value: "類別",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "檔位",
        bold: true,
        value: "檔位",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const EcoMileageInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "市區",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "高速公路",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "綜合",
        bold: true,
        value: "100",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const FuelInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "汽油質量",
        bold: true,
        value: "汽油質量",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "油箱1容量大小",
        bold: true,
        value: "100 公升",
        editEle: <CustomTextInputField />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "油箱2容量大小",
        bold: true,
        value: "100 公升",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  const OilInfo: InfoArray = [
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "機油容量",
        bold: true,
        value: "100 公升",
        editEle: <CustomTextInputField />
      }
    ]
  ];

  return (
    <DivSTY>
      <InfoCard isEdit={isEdit} infoData={SpecificationInfo} infoTitle="尺寸" />
      <Pane className={"row"}>
        <InfoCard isEdit={isEdit} infoData={AppearanceInfo} infoTitle="車身" />
        <InfoCard isEdit={isEdit} infoData={WeightInfo} infoTitle="重量" />
        <InfoCard isEdit={isEdit} infoData={PerformanceInfo} infoTitle="性能" />
      </Pane>
      <InfoCard isEdit={isEdit} infoData={EngineInfo} infoTitle="引擎" />
      <InfoCard isEdit={isEdit} infoData={TireInfo} infoTitle="車輪和輪胎" />
      <Pane className={"row"}>
        <InfoCard
          isEdit={isEdit}
          infoData={TransmissionInfo}
          infoTitle="變速器"
          height={365}
        />
        <InfoCard
          isEdit={isEdit}
          infoData={WeightInfo}
          infoTitle="重量"
          height={365}
        />
        <InfoCard
          isEdit={isEdit}
          infoData={EcoMileageInfo}
          infoTitle="EPA燃油經濟性/油耗表現"
          height={365}
        />
        <InfoCard
          isEdit={isEdit}
          infoData={FuelInfo}
          infoTitle="燃料"
          height={365}
        />
        <InfoCard
          isEdit={isEdit}
          infoData={OilInfo}
          infoTitle="機油"
          height={365}
        />
      </Pane>
    </DivSTY>
  );
}

export default SpecificationDetail;
