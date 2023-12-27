import React, { ReactNode } from "react";
import {
  GetServerSideProps,
  NextPageWithLayout,
  InferGetServerSidePropsType
} from "next";

import { getLayout } from "@layout/MainLayout";
import { BodySTY } from "./style";
import { useRouter } from "next/router";
import ControlBar from "@components/ControlBar";
import InfoCard from "@components/InfoCard/PureStyle";
import { Select, Pane, Checkbox, TrashIcon, PlusIcon } from "evergreen-ui";
import ButtonSet from "@components/ButtonSet";
import Collapse from "@components/Collapse";
import InfoItem from "@components/InfoCard/InfoItem";
import CustomDatePicker from "@components/CustomDatePicker";
import CustomTextInputField from "@components/CustomTextInputField";
import CheckboxField from "@components/CheckboxField";
import { TimeIcon } from "evergreen-ui";
import CounterInput from "@components/CounterInput";
import { useForm } from "react-hook-form";
import VerticalDetail from "@components/VerticalDetail";
import CustomTextArea from "@components/CustomTextArea";

export interface I_infoData {
  editEle?: React.ReactNode;
  readonly?: boolean; //只讀
  req?: boolean; //必填
  value?: string | Array<string> | React.ReactNode; //值
  label?: string | React.ReactNode; //label文字
  inputType?: string;
  listClassName?: string;
  bold?: boolean;
  direction?: string;
}

const Page: NextPageWithLayout<never> = () => {
  const router = useRouter();
  const { register, getValues, setValue } = useForm();

  const OrderContactInFo = [
    {
      listClassName: "fb-25 mt-1",
      readonly: false,
      req: true,
      label: "姓名",
      bold: true,
      value: (
        <CustomTextInputField
          placeholder="姓氏"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-25 mt-2",
      readonly: false,
      req: false,
      label: "",
      value: (
        <CustomTextInputField
          placeholder="名字"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-50 mt-1",
      readonly: false,
      req: true,
      label: "國籍",
      value: (
        <Select width="100%" className="select-full">
          <option value="foo">請選擇</option>
        </Select>
      )
    },
    {
      listClassName: "fb-50 mb-1",
      readonly: false,
      req: true,
      label: "電話",
      value: (
        <CustomTextInputField
          placeholder="請輸入電話"
          width="100%"
          className="input-full"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-50 mb-1",
      readonly: false,
      req: true,
      label: "信箱",
      value: (
        <CustomTextInputField
          placeholder="請輸入信箱"
          width="100%"
          className="input-full"
        ></CustomTextInputField>
      )
    }
  ];
  const PassengerInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: (
        <div className="checkbox">
          <Checkbox label="同訂單聯絡人" />
        </div>
      )
    },
    {
      listClassName: "fb-25",
      readonly: false,
      req: true,
      label: "姓名",
      bold: true,
      value: (
        <CustomTextInputField
          placeholder="姓氏"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-25 mt-1",
      readonly: false,
      req: false,
      label: "",
      value: (
        <CustomTextInputField
          placeholder="名字"
          width="100%"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-25 mt-1",
      readonly: false,
      req: false,
      label: "",
      value: ""
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      label: "電話",
      value: (
        <CustomTextInputField
          placeholder="請輸入電話"
          width="100%"
          className="input-full"
        ></CustomTextInputField>
      )
    },
    {
      listClassName: "fb-50 ",
      readonly: false,
      req: true,
      label: "信箱",
      value: (
        <CustomTextInputField
          placeholder="請輸入信箱"
          width="100%"
          className="input-full"
        ></CustomTextInputField>
      )
    }
  ];
  const TotalPriceInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "總金額",
      bold: true,
      value: (
        <>
          <div className="row">
            <span className="nowrap">NTD $</span>
            <CustomTextInputField placeholder="2,805" disabled={true} />
          </div>
        </>
      ),
      direction: "row"
    }
  ];
  const PriceInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "基本車資",
      bold: true,
      value: (
        <>
          <div className="row">
            <span className="nowrap">NTD $</span>
            <CustomTextInputField placeholder="1,500" disabled={true} />
          </div>
        </>
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "中途停靠站",
      bold: true,
      value: (
        <>
          <div className="row">
            <span className="nowrap">NTD $</span>
            <CustomTextInputField placeholder="500" disabled={true} />
          </div>
        </>
      ),
      direction: "row"
    },

    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "小費",
      bold: true,
      value: (
        <>
          <div className="row">
            <span className="nowrap">NTD $</span>
            <CustomTextInputField placeholder="805" disabled={true} />
          </div>
        </>
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "項目A",
      bold: true,
      value: (
        <>
          <div className="row">
            <span className="nowrap">NTD $</span>
            <CustomTextInputField placeholder="0" disabled={true} />
          </div>
        </>
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "項目B",
      bold: true,
      value: (
        <>
          <div className="row">
            <span className="nowrap">NTD $</span>
            <CustomTextInputField placeholder="0" disabled={true} />
          </div>
        </>
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "折扣",
      bold: true,
      value: (
        <>
          <div className="row">
            <span className="nowrap">NTD $</span>
            <CustomTextInputField placeholder="0" disabled={true} />
          </div>
        </>
      ),
      direction: "row"
    }
  ];
  const ServiceInFo = [
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      label: "服務項目",
      bold: false,
      value: (
        <Select width="100%" className="select-full">
          <option value="foo">請選擇</option>
        </Select>
      )
    },
    {
      listClassName: "fb-66",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: <CustomDatePicker></CustomDatePicker>
    },
    {
      listClassName: "fb-33",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: (
        <>
          <div className="mb-3 label">出發</div>
          <div className="mb-2 value">2023-11-22 （三）</div>
          <div className="mb-3 label">回程</div>
          <div className="mb-2 value">2023-11-24 （五）</div>
          <hr />
        </>
      )
    }
  ];
  const ItineraryInFo = [
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "出發時間",
      bold: false,
      value: (
        <div className="row">
          <CustomTextInputField
            placeholder="出發時間"
            className="input-full"
          ></CustomTextInputField>
          <span className="icon">
            <TimeIcon></TimeIcon>
          </span>
        </div>
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "",
      bold: false,
      value: (
        <div className="row-container">
          <div className="row">
            <label className="label">
              <span className="required">*</span>上車地點
            </label>
            <CustomTextInputField
              placeholder="請輸入地點"
              className="input-full"
            ></CustomTextInputField>
          </div>
          <div className="row">
            <span className="normal">也可輸地址</span>
            <Select className="select-wrapper">
              <option>縣市</option>
            </Select>
            <CustomTextInputField placeholder="區域"></CustomTextInputField>
            <CustomTextInputField placeholder="請輸入地址"></CustomTextInputField>
          </div>
        </div>
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: true,
      label: "",
      bold: false,
      value: (
        <div className="row-container">
          <div className="row">
            <label className="label">
              <span>中途點1</span>
            </label>
            <CustomTextInputField
              placeholder="請輸入地點"
              className="input-full"
            ></CustomTextInputField>
          </div>
          <div className="row">
            <span className="normal">也可輸地址</span>
            <Select className="select-wrapper">
              <option>縣市</option>
            </Select>
            <CustomTextInputField placeholder="區域"></CustomTextInputField>
            <CustomTextInputField placeholder="請輸入地址"></CustomTextInputField>
            <span className="outer-icon">
              <TrashIcon></TrashIcon>
            </span>
            <span className="outer-icon">
              <PlusIcon></PlusIcon>
            </span>
          </div>
        </div>
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: (
        <div className="row-container">
          <div className="row">
            <label className="label">
              <span className="required">*</span>下車地點
            </label>
            <CustomTextInputField
              placeholder="請輸入地點"
              className="input-full"
            ></CustomTextInputField>
          </div>
          <div className="row">
            <span className="normal">也可輸地址</span>
            <Select className="select-wrapper">
              <option>縣市</option>
            </Select>
            <CustomTextInputField placeholder="區域"></CustomTextInputField>
            <CustomTextInputField placeholder="請輸入地址"></CustomTextInputField>
          </div>
        </div>
      ),
      direction: "row"
    }
  ];
  const TravelInFo = [
    {
      listClassName: "fb-100 mt-1",
      readonly: false,
      req: false,
      label: "成人",
      bold: true,
      value: (
        <VerticalDetail
          title=""
          items={[
            {
              label: "",
              value: (
                <CounterInput
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  inputName="adult"
                  label=""
                />
              )
            }
          ]}
        />
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100 mt-1",
      readonly: false,
      req: false,
      label: "兒童（2~4歲）",
      bold: true,
      value: (
        <VerticalDetail
          title=""
          items={[
            {
              label: "",
              value: (
                <CounterInput
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  inputName="child"
                  label=""
                />
              )
            }
          ]}
        />
      ),
      direction: "row"
    },
    {
      listClassName: "fb-50 mt-1",
      readonly: false,
      req: false,
      label: "嬰兒（0~1歲）",
      bold: true,
      value: (
        <VerticalDetail
          title=""
          items={[
            {
              label: "",
              value: (
                <CounterInput
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  inputName="infant"
                  label=""
                />
              )
            }
          ]}
        />
      ),
      direction: "row"
    }
  ];
  const LuggageInFo = [
    {
      listClassName: "fb-100 mt-1",
      readonly: false,
      req: false,
      label: "成人",
      bold: true,
      value: (
        <VerticalDetail
          title=""
          items={[
            {
              label: "",
              value: (
                <CounterInput
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  inputName="adult"
                  label=""
                />
              )
            }
          ]}
        />
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100 mt-1",
      readonly: false,
      req: false,
      label: "大件行李",
      bold: true,
      value: (
        <VerticalDetail
          title=""
          items={[
            {
              label: "",
              value: (
                <CounterInput
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  inputName="lg-luggage"
                  label=""
                />
              )
            }
          ]}
        />
      ),
      direction: "row"
    },
    {
      listClassName: "fb-50 mt-1",
      readonly: false,
      req: false,
      label: "小件行李",
      bold: true,
      value: (
        <VerticalDetail
          title=""
          items={[
            {
              label: "",
              value: (
                <CounterInput
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  inputName="sm-luggage"
                  label=""
                />
              )
            }
          ]}
        />
      ),
      direction: "row"
    }
  ];
  const VehicleInFo = [
    {
      listClassName: "fb-100 mt-1",
      readonly: false,
      req: false,
      label: "A型車",
      bold: true,
      value: (
        <VerticalDetail
          title=""
          items={[
            {
              label: "",
              value: (
                <CounterInput
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  inputName="vehicle-A"
                  label=""
                />
              )
            }
          ]}
        />
      ),
      direction: "row"
    },
    {
      listClassName: "fb-100 mt-1",
      readonly: false,
      req: false,
      label: "B型車",
      bold: true,
      value: (
        <VerticalDetail
          title=""
          items={[
            {
              label: "",
              value: (
                <CounterInput
                  register={register}
                  getValues={getValues}
                  setValue={setValue}
                  inputName="vehicle-B"
                  label=""
                />
              )
            }
          ]}
        />
      ),
      direction: "row"
    }
  ];
  const OtherServiceInFo = [
    {
      listClassName: "fb-100 mt-1",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <div>
          <div className="checkbox">
            <CheckboxField
              label="項目名稱 NTD $200"
              checked={false}
              toggleFuelValue={() => {
                return;
              }}
            />
          </div>
          <span className="normal instruction-text">說明文字</span>
        </div>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <div>
          <div className="checkbox">
            <CheckboxField
              label="項目名稱"
              checked={false}
              toggleFuelValue={() => {
                return;
              }}
            />
          </div>
          <span className="normal instruction-text">說明文字</span>
        </div>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <div>
          <div className="checkbox">
            <CheckboxField
              label="項目名稱 NTD $200"
              checked={false}
              toggleFuelValue={() => {
                return;
              }}
            />
          </div>
          <span className="normal instruction-text">說明文字</span>
        </div>
      )
    },
    {
      listClassName: "fb-100",
      readonly: false,
      req: false,
      label: "",
      bold: true,
      value: (
        <div className="mb-1">
          <div className="checkbox">
            <CheckboxField
              label="項目名稱 NTD $200"
              checked={false}
              toggleFuelValue={() => {
                return;
              }}
            />
          </div>
          <span className="normal instruction-text">說明文字</span>
        </div>
      )
    }
  ];
  const RemarkInFo = [
    {
      listClassName: "fb-100 mt-2",
      readonly: false,
      req: false,
      label: "備註",
      bold: true,
      value: (
        <div>
          <div className="mb-1">
            <span className="normal">說明文字</span>
          </div>
          <CustomTextArea placeholder="請輸入備註"></CustomTextArea>
        </div>
      )
    }
  ];

  function MakeInfoCard(info: I_infoData[]): ReactNode {
    return (
      <ul className="col">
        {info.map((item, index) => (
          <InfoItem
            key={index}
            item={item}
            isEdit={true}
            direction={item?.direction}
          />
        ))}
      </ul>
    );
  }

  const handleCancel = () => {
    router.push("/orders");
  };

  const handleSave = () => {
    router.push("/orders");
  };

  return (
    <>
      <ControlBar flexEnd hasShadow>
        <ButtonSet
          isEdit={false}
          primaryDisable={true}
          secondaryBtnText={"取消"}
          secondaryBtnOnClick={handleCancel}
          primaryBtnText={"儲存"}
          primaryBtnOnClick={handleSave}
        />
      </ControlBar>
      <BodySTY>
        <Pane className={"two-column"}>
          <InfoCard
            style={{ flexBasis: "75%" }}
            isEdit={true}
            infoTitle="聯絡資訊"
          >
            <Collapse
              title="訂單聯絡人"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(OrderContactInFo)}
            </Collapse>
            <Collapse
              title="乘車代表人"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(PassengerInFo)}
            </Collapse>
          </InfoCard>
          <InfoCard
            style={{ flexBasis: "25%" }}
            isEdit={true}
            infoTitle="金額計算"
            className="price-column"
          >
            {MakeInfoCard(TotalPriceInFo)}
            <hr className="my-1" />
            {MakeInfoCard(PriceInFo)}
          </InfoCard>
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard isEdit={true} infoTitle="選擇項目">
            {MakeInfoCard(ServiceInFo)}
          </InfoCard>
        </Pane>
        <Pane className={"main-column"}>
          <InfoCard isEdit={true} infoTitle="行程資訊">
            <Collapse
              title="2023-11-22（三）"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(ItineraryInFo)}
              <div className="checkbox">
                <CheckboxField
                  label="通過山區"
                  checked={false}
                  toggleFuelValue={() => {
                    return;
                  }}
                />
              </div>
            </Collapse>
            <hr className="mt-1" />
            <Collapse
              title="2023-11-23（四）"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(ItineraryInFo)}
              <div className="checkbox">
                <CheckboxField
                  label="通過山區"
                  checked={false}
                  toggleFuelValue={() => {
                    return;
                  }}
                />
              </div>
            </Collapse>
            <hr className="mt-1" />
            <Collapse
              title="2023-11-24（五）"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(ItineraryInFo)}
              <div className="checkbox">
                <CheckboxField
                  label="通過山區"
                  checked={false}
                  toggleFuelValue={() => {
                    return;
                  }}
                />
              </div>
            </Collapse>
          </InfoCard>
        </Pane>
        <Pane className={"travel-column"}>
          <InfoCard isEdit={true} infoTitle="乘車資訊">
            <Collapse
              title="乘客"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(TravelInFo)}
            </Collapse>
            <hr className="mt-2 mb-1" />
            <Collapse
              title="行李"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(LuggageInFo)}
            </Collapse>
            <hr className="mt-2 mb-1" />
            <Collapse
              title="車型與數量"
              color="transparent"
              iconPosition="icon_start"
              opened={true}
            >
              {MakeInfoCard(VehicleInFo)}
            </Collapse>
          </InfoCard>
        </Pane>
        <Pane className={"other-column"}>
          <InfoCard isEdit={true} infoTitle="其他需求">
            <Collapse title="服務項目" color="#F4F5F7" opened={true}>
              {MakeInfoCard(OtherServiceInFo)}
            </Collapse>
            <Collapse title="備註" color="#F4F5F7" opened={true}>
              {MakeInfoCard(RemarkInFo)}
            </Collapse>
          </InfoCard>
        </Pane>
      </BodySTY>
    </>
  );
};

Page.getLayout = (page: ReactNode, layoutProps: any) =>
  getLayout(page, { ...layoutProps });
export default Page;
