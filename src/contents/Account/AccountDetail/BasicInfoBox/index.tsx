import { Pane, Group, Text, FileUploader } from "evergreen-ui";
import Image from "next/image";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { BodySTY } from "./style";

import InfoBox from "@components/InfoBox";
import InfoCard from "@components/InfoCard";
import { ErrorMessage } from "@hookform/error-message";
import LoadingSpinner from "@components/LoadingSpinner";
import { I_AccountDetailItem } from "@services/account/getOneAccount";
import { hideEmail, hidePhoneNumber } from "@utils/hideString";
import CustomTextInput from "@components/CustomTextInput";
import {
  textValidation,
  phoneValidation,
  emailValidation
} from "@utils/inputValidation";

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
        <Pane className="basic__name">
          <Group className="group">
            <CustomTextInput
              className="required lastName"
              placeholder="姓氏"
              isInvalid={!!errors.account_lname}
              {...register("account_lname", {
                required: "不能有標點符號或空白",
                validate: textValidation
              })}
            />

            <CustomTextInput
              className="required firstName"
              placeholder="名字"
              isInvalid={!!errors.account_fname}
              {...register("account_fname", {
                required: "不能有標點符號或空白",
                validate: textValidation
              })}
            />
          </Group>
          {(
            <ErrorMessage
              errors={errors}
              name="account_lname"
              render={({ message }) => (
                <Text className="input-error">{message}</Text>
              )}
            />
          ) || (
            <ErrorMessage
              errors={errors}
              name="account_fname"
              render={({ message }) => (
                <Text className="input-error">{message}</Text>
              )}
            />
          )}
        </Pane>
      ),
      value: (
        <CustomTextInput
          className="required lastName"
          placeholder="姓氏"
          isInvalid={false}
          disabled={true}
          value={data.account_fname?.concat(" ", data.account_lname)}
        />
      )

      // value: data.account_fname?.concat(" ", data.account_lname) || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: true,
      label: "手機",
      editEle: (
        <Pane>
          <CustomTextInput
            className="required"
            placeholder="請輸入手機"
            isInvalid={!!errors.content_phone_tel1}
            {...register("content_phone_tel1", {
              required: "電話格式必須09開頭10碼",
              validate: phoneValidation
            })}
          />
          <ErrorMessage
            errors={errors}
            name="content_phone_tel1"
            render={({ message }) => (
              <Text className="input-error">{message}</Text>
            )}
          />
        </Pane>
      ),
      value: (
        <CustomTextInput
          className="required"
          placeholder="請輸入手機"
          isInvalid={false}
          disabled={true}
          value={hidePhoneNumber(data.content_phone_tel1)}
        />
      )
      // value: hidePhoneNumber(data.content_phone_tel1) || "--"
    },
    {
      readonly: false,
      req: true,
      label: "信箱",
      editEle: (
        <Pane>
          <CustomTextInput
            className="required"
            placeholder="請輸入信箱"
            isInvalid={!!errors.content_priv_email}
            {...register("content_priv_email", {
              required: "請輸入有效的Email信箱",
              validate: emailValidation
            })}
          />{" "}
          <ErrorMessage
            errors={errors}
            name="content_priv_email"
            render={({ message }) => (
              <Text className="input-error">{message}</Text>
            )}
          />
        </Pane>
      ),
      value: (
        <CustomTextInput
          className="required"
          placeholder="請輸入信箱"
          isInvalid={false}
          disabled={true}
          value={hideEmail(data.content_priv_email)}
        />
      )
      // value: hideEmail(data.content_priv_email) || "--"
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
