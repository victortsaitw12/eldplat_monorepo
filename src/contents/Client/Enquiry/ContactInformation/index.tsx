import React from "react";
import Collapse from "@components/Collapse";
import { useForm } from "react-hook-form";
import CheckBoxWrapper from "@components/CheckBoxWrapper";
import { BodySTY, ItemSTY } from "./style";
import { Textarea, Select, TextInput } from "evergreen-ui";
import CustomSelect from "@components/CustomSelect";
type SchduleType = {
  departureTime: string;
  startPoint: { location: string };
  destinationPoint: { location: string };
  middlePoints: Array<{ location: string }>;
};

type FormValues = {
  contactUser: {
    phoneCode: string;
    phone: string;
    telCode: string;
    tel: string;
  };
  represatation: {
    phoneCode: string;
    phone: string;
    telCode: string;
    tel: string;
    socialMedia: string;
    socialMediaAccount: string;
  };
};
const ContactInformation = () => {
  const {
    control,
    register,
    formState: { errors }
  } = useForm<FormValues>({});
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px"
      }}
    >
      <Collapse title="訂單聯絡人資訊" opened={true}>
        <BodySTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "0px"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "60px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>姓</span>
              </div>
              <TextInput />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>名</span>
              </div>
              <TextInput />
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>手機</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="contactUser.phoneCode"
              />
              <TextInput />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span>電話</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="contactUser.telCode"
              />
              <TextInput />
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>信箱</span>
              </div>
              <TextInput />
            </div>
          </ItemSTY>
        </BodySTY>
      </Collapse>
      <Collapse title="旅客代表人" opened={true}>
        <BodySTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "0px"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "60px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>信箱</span>
              </div>
              <TextInput />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>名</span>
              </div>
              <TextInput />
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>手機</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="represatation.phoneCode"
              />
              <TextInput />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span>電話</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="represatation.telCode"
              />
              <TextInput />
            </div>
          </ItemSTY>
          <ItemSTY>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>信箱</span>
              </div>
              <TextInput />
            </div>
            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{ color: "#567190", fontWeight: "700", width: "80px" }}
              >
                <span style={{ color: "#D14343" }}>*</span>
                <span>通訊軟體</span>
              </div>
              <CustomSelect
                options={[
                  {
                    text: "+886",
                    value: "+886"
                  }
                ]}
                register={register}
                selectName="contactUser.socialMedia"
              />
              <TextInput />
            </div>
          </ItemSTY>
        </BodySTY>
      </Collapse>
    </form>
  );
};

export default ContactInformation;
