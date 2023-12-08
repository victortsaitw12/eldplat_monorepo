import { TextInput, FileUploader } from "evergreen-ui";
import Image from "next/image";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { BodySTY } from "./style";

import InfoBox from "@components/InfoBox";
import InfoCard from "@components/InfoCard";
import LoadingSpinner from "@components/LoadingSpinner";
import { I_AccountDetailItem } from "@services/account/getOneAccount";
import { hideEmail, hidePhoneNumber } from "@utils/hideString";
import CustomTextInput from "@components/CustomTextInput";
import { phoneValidation, emailValidation } from "@utils/inputValidation";

const BasicInfoBox = ({ data, isEdit, register, errors }: I_Props) => {
  if (!data)
    return (
      <BodySTY>
        <LoadingSpinner />
      </BodySTY>
    );
  //------ functions ------//
  // ------- render ------- //
  const dataFitInfoBox = [
    {
      readonly: false,
      req: false,
      label: "",
      editEle: (
        <div className="basic__photo">
          <FileUploader
            browseOrDragText={() => {
              return "Upload";
            }}
          />
        </div>
      ),

      value: (
        <div className="basic__photo">
          <Image
            src="/image/Photo.jpg"
            alt="user"
            width={120}
            height={150}
            className="user__photo"
          />
        </div>
      )
    },
    {
      readonly: false,
      req: true,
      label: "使用者姓名",
      editEle: (
        <>
          <CustomTextInput
            className="required basic__lastName"
            placeholder="姓氏"
            {...register("account_lname")}
          />
          <CustomTextInput
            className="required basic__firstName"
            placeholder="名字"
            {...register("account_fname")}
          />
        </>
      ),

      value: data.account_fname?.concat(" ", data.account_lname) || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: true,
      label: "手機",
      editEle: (
        <CustomTextInput
          className="required"
          placeholder="請輸入手機"
          {...register("content_phone_tel1", {
            required: "格式不符",
            validate: phoneValidation
          })}
        />
      ),
      value: hidePhoneNumber(data.content_phone_tel1) || "--"
    },
    {
      readonly: false,
      req: true,
      label: "信箱",
      editEle: (
        <TextInput
          className="required"
          placeholder="請輸入信箱"
          {...register("content_priv_email", {
            required: "格式不符",
            validate: emailValidation
          })}
        />
      ),
      value: hideEmail(data.content_priv_email) || "--"
    }
  ];
  return (
    <BodySTY className="basic">
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="基本資料" />
    </BodySTY>
  );
};

export default BasicInfoBox;

interface I_Props {
  data: I_AccountDetailItem;
  isEdit: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}
