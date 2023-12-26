import { DivSTY } from "./style";
import { useState } from "react";
import InfoCard from "@components/InfoCard/PureStyle";
import Collapse from "@components/Collapse";
import { Pane, ArrowRightIcon } from "evergreen-ui";

const MOCK_DATA = {
  contactInfo: {
    orderContact: {
      name: "宋琳淑",
      nationality: "台灣",
      phone: "0912345678",
      email: "54linlin@gmail.com"
    },
    passengerRepresentative: {
      name: "宋琳淑",
      phone: "0971027144",
      email: "54linlin@gmail.com"
    }
  },
  itineraryInfo: [
    {
      date: "2023-11-22（三）",
      departureTime: "10:00",
      boardingLocation: "台北車站",
      intermediateStops: ["台中車站", "審計新村"],
      dropOffLocation: "台中長榮酒店"
    },
    {
      date: "2023-11-23（四）",
      departureTime: "--",
      boardingLocation: "台中長榮酒店",
      intermediateStops: ["彩虹眷村", "高美濕地", "屋馬燒肉"],
      dropOffLocation: "台中長榮酒店"
    },
    {
      date: "2023-11-24（五）",
      boardingLocation: "台中長榮酒店",
      intermediateStops: ["彩虹眷村", "高美濕地", "屋馬燒肉"],
      dropOffLocation: "台北車站",
      arrivalTime: "22:00"
    }
  ],
  passengerInfo: {
    adults: 30,
    children: 2,
    infants: 1
  },
  luggageInfo: {
    largeLuggage: 22,
    smallLuggage: 10
  },
  vehicleInfo: {
    typeA: 1,
    typeB: 1
  },
  additionalServices: {
    signService: {
      price: "NTD $200",
      content: "舉牌內容舉牌內容舉牌內容"
    },
    safetySeat: {
      companyProvided: {
        price: "NTD $200/個",
        quantity: 2
      },
      selfProvided: {
        quantity: 1
      }
    },
    remarks: "備註內容備註內容備註內容"
  }
};

const MainDetail = () => {
  const [data, setData] = useState(MOCK_DATA);
  const {
    contactInfo,
    itineraryInfo,
    passengerInfo,
    luggageInfo,
    vehicleInfo,
    additionalServices
  } = data;

  return (
    <DivSTY>
      <InfoCard isEdit={false} hasPadding={false} infoTitle={"聯絡資訊"}>
        <Collapse title={"訂單聯絡人"} color="#F4F5F7">
          <Pane>
            <div className="row">
              <div className="label">姓名</div>
              <div className="value">{contactInfo.orderContact.name}</div>
            </div>
            <div className="row">
              <div className="label">國籍</div>
              <div className="value">
                {contactInfo.orderContact.nationality}
              </div>
            </div>
            <div className="row">
              <div className="label">電話</div>
              <div className="value">{contactInfo.orderContact.phone}</div>
            </div>
            <div className="row">
              <div className="label">信箱</div>
              <div className="value">{contactInfo.orderContact.email}</div>
            </div>
          </Pane>
        </Collapse>

        <Collapse title={"乘客代表人"} color="#F4F5F7">
          <Pane>
            <div className="row">
              <div className="label">姓名</div>
              <div className="value">
                {contactInfo.passengerRepresentative.name}
              </div>
            </div>
            <div className="row">
              <div className="label">電話</div>
              <div className="value">
                {contactInfo.passengerRepresentative.phone}
              </div>
            </div>
            <div className="row">
              <div className="label">信箱</div>
              <div className="value">
                {contactInfo.passengerRepresentative.email}
              </div>
            </div>
          </Pane>
        </Collapse>
      </InfoCard>

      <InfoCard isEdit={false} hasPadding={false} infoTitle={"行程資訊"}>
        {itineraryInfo.map((item, index) => {
          return (
            <Collapse
              title={`第${index + 1}天 ${item.date}`}
              color="#F4F5F7"
              key={index}
            >
              <Pane>
                {item.departureTime && (
                  <div className="row">
                    <div className="label">出發時間</div>
                    <div className="value">{item.departureTime}</div>
                  </div>
                )}
                <div className="row">
                  <div className="label">上車地點</div>
                  <div className="value">{item.boardingLocation}</div>
                </div>
                <div className="row">
                  <div className="label">中途停靠點</div>
                  <div className="value">
                    {item.intermediateStops.map((stop, index) => {
                      if (index === item.intermediateStops.length - 1) {
                        return <>{stop}</>;
                      }
                      return (
                        <>
                          {stop}
                          <ArrowRightIcon size={12} />
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="row">
                  <div className="label">下車地點</div>
                  <div className="value">{item.dropOffLocation}</div>
                </div>
                {item.arrivalTime && (
                  <div className="row">
                    <div className="label">抵達時間</div>
                    <div className="value">{item.arrivalTime}</div>
                  </div>
                )}
              </Pane>
            </Collapse>
          );
        })}
      </InfoCard>

      <InfoCard isEdit={false} hasPadding={false} infoTitle={"乘車資訊"}>
        <Collapse title={"乘客"} color="#F4F5F7">
          <Pane>
            <div className="row">
              <div className="label">成人</div>
              <div className="value">{passengerInfo.adults}</div>
            </div>
            <div className="row">
              <div className="label">兒童（2~4歲）</div>
              <div className="value">{passengerInfo.children}</div>
            </div>
            <div className="row">
              <div className="label">嬰兒（0~1歲）</div>
              <div className="value">{passengerInfo.infants}</div>
            </div>
          </Pane>
        </Collapse>

        <Collapse title={"行李"} color="#F4F5F7">
          <Pane>
            <div className="row">
              <div className="label">大件行李</div>
              <div className="value">{luggageInfo.largeLuggage}</div>
            </div>
            <div className="row">
              <div className="label">小件行李</div>
              <div className="value">{luggageInfo.smallLuggage}</div>
            </div>
          </Pane>
        </Collapse>

        <Collapse title={"車型與數量"} color="#F4F5F7">
          <Pane>
            <div className="row">
              <div className="label">A型車</div>
              <div className="value">{vehicleInfo.typeA}</div>
            </div>
            <div className="row">
              <div className="label">B型車</div>
              <div className="value">{vehicleInfo.typeB}</div>
            </div>
          </Pane>
        </Collapse>
      </InfoCard>

      <InfoCard isEdit={false} hasPadding={false} infoTitle={"乘車資訊"}>
        <Pane>
          <div className="row">
            <div className="label emphasis">
              <span>舉牌服務</span>
              <span>（NTD $200）</span>
            </div>
            <div className="value">
              {additionalServices.signService.content}
            </div>
          </div>
          <div className="row">
            <div className="label emphasis">安全座椅</div>
            <div className="value sub-wrapper">
              <div className="row">
                <div className="label">車公司提供（NTD $200/個）</div>
                <div className="value">
                  {additionalServices.safetySeat.companyProvided.quantity}
                </div>
              </div>
              <div className="row">
                <div className="label">自備</div>
                <div className="value">
                  {additionalServices.safetySeat.selfProvided.quantity}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="label emphasis">備註</div>
            <div className="value">{additionalServices.remarks}</div>
          </div>
        </Pane>
      </InfoCard>
    </DivSTY>
  );
};

export default MainDetail;
