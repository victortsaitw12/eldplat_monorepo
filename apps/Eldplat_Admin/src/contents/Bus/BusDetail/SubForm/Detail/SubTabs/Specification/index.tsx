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
        bold: false,
        value: "100 公分",
        editEle: <CustomTextInputField value={"100 公分"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "高度",
        bold: false,
        value: "100 公分",
        editEle: <CustomTextInputField value={"100 公分"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "長度",
        bold: false,
        value: "100 公分",
        editEle: <CustomTextInputField value={"100 公分"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "內部容積",
        bold: false,
        value: "100 公升",
        editEle: <CustomTextInputField value={"100 公升"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "載客量",
        bold: false,
        value: "100 公升",
        editEle: <CustomTextInputField value={"100 公升"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "貨物量",
        bold: false,
        value: "100 公升",
        editEle: <CustomTextInputField value={"100 公升"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "離地間隙",
        bold: false,
        value: "100 公分",
        editEle: <CustomTextInputField value={"100 公分"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "底盤長度",
        bold: false,
        value: "100 公分",
        editEle: <CustomTextInputField value={"100 公分"} />
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
        bold: false,
        value: "白",
        editEle: <CustomTextInputField value={"白"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "符號",
        bold: false,
        value: "雄獅LOGO",
        editEle: <CustomTextInputField value={"雄獅LOGO"} />
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
        bold: false,
        value: "100 公斤",
        editEle: <CustomTextInputField value={"100 公斤"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "車輛總重量",
        bold: false,
        value: "100 公斤",
        editEle: <CustomTextInputField value={"100 公斤"} />
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
        bold: false,
        value: "100 公斤",
        editEle: <CustomTextInputField value={"100 公斤"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "車輛總重量",
        bold: false,
        value: "100 公斤",
        editEle: <CustomTextInputField value={"100 公斤"} />
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
        bold: false,
        value: "摘要",
        editEle: <CustomTextInputField value={"摘要"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "引擎品牌",
        bold: false,
        value: "品牌",
        editEle: <CustomTextInputField value={"品牌"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "進氣系統",
        bold: false,
        value: "進氣系統",
        editEle: <CustomTextInputField value={"進氣系統"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "引擎缸體類型",
        bold: false,
        value: "引擎缸體類型",
        editEle: <CustomTextInputField value={"引擎缸體類型"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "汽缸孔徑",
        bold: false,
        value: "100 公分",
        editEle: <CustomTextInputField value={"100 公分"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "凸輪軸類型",
        bold: false,
        value: "凸輪軸類型",
        editEle: <CustomTextInputField value={"凸輪軸類型"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "壓縮比",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "汽缸",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "排量大小",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "燃油進氣方式",
        bold: false,
        value: "燃油進氣方式",
        editEle: <CustomTextInputField value={"燃油進氣方式"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "最大馬力",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "最大扭矩",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "最大轉速",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "衝程",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "每缸氣門數量",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
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
        bold: false,
        value: "驅動類型",
        editEle: <CustomTextInputField value={"驅動類型"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "煞車系統",
        bold: false,
        value: "煞車系統",
        editEle: <CustomTextInputField value={"煞車系統"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "前輪輪距",
        bold: false,
        value: "前輪輪距",
        editEle: <CustomTextInputField value={"前輪輪距"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後輪輪距",
        bold: false,
        value: "後輪輪距",
        editEle: <CustomTextInputField value={"後輪輪距"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "軸距",
        bold: false,
        value: "100 公分",
        editEle: <CustomTextInputField value={"100 公分"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "前輪直徑",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後輪直徑",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後軸",
        bold: false,
        value: "後軸",
        editEle: <CustomTextInputField value={"後軸"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "前輪輪胎類型",
        bold: false,
        value: "前輪輪胎類型",
        editEle: <CustomTextInputField value={"前輪輪胎類型"} />
      }
    ],
    [
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "前輪胎壓大小",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後輪輪胎類型",
        bold: false,
        value: "後輪輪胎類型",
        editEle: <CustomTextInputField value={"後輪輪胎類型"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "後輪胎壓大小",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
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
        bold: false,
        value: "摘要",
        editEle: <CustomTextInputField value={"摘要"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "品牌",
        bold: false,
        value: "品牌",
        editEle: <CustomTextInputField value={"品牌"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "類別",
        bold: false,
        value: "類別",
        editEle: <CustomTextInputField value={"類別"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "檔位",
        bold: false,
        value: "檔位",
        editEle: <CustomTextInputField value={"檔位"} />
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
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "高速公路",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "綜合",
        bold: false,
        value: "100",
        editEle: <CustomTextInputField value={"100"} />
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
        bold: false,
        value: "汽油質量",
        editEle: <CustomTextInputField value={"汽油質量"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "油箱1容量大小",
        bold: false,
        value: "100 公升",
        editEle: <CustomTextInputField value={"100 公升"} />
      },
      {
        listClassName: "fb-100",
        readonly: false,
        req: false,
        label: "油箱2容量大小",
        bold: false,
        value: "100 公升",
        editEle: <CustomTextInputField value={"100 公升"} />
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
        bold: false,
        value: "100 公升",
        editEle: <CustomTextInputField value={"100 公升"} />
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
