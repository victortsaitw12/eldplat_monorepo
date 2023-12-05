import React from "react";
import {
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
  Control
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Select, TextInput, Textarea, Switch, Text, Pane } from "evergreen-ui";
import { BodySTY } from "./style";

import { I_RoleListItem } from "@services/role/getRoleList";
import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";
import { textValidation, emailValidation } from "@utils/inputValidation";
import CustomTextArea from "@components/CustomTextArea";
import CustomTextInput from "@components/CustomTextInput";

const DetailPanel = ({ data, isEdit, isCreate, register, errors }: I_Props) => {
  const [isEnabled, setIsEnabled] = React.useState(true);

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
      label: "模組",
      editEle: (
        <Select disabled className={`${"disabled"}`}>
          <option value="foo" selected>
            {data.module_name || "--"}
          </option>
        </Select>
      ),
      value: data.module_name || "--"
    },
    {
      readonly: false,
      req: true,
      label: "角色名稱",
      editEle: (
        <Pane>
          <CustomTextInput
            className="required"
            placeholder="請輸入角色名稱"
            {...register("role_name", {
              required: "必填欄位，不可輸入符號",
              validate: textValidation
            })}
          />
          <ErrorMessage
            errors={errors}
            name="role_name"
            render={({ message }) => (
              <Text className="input-error">{message}</Text>
            )}
          />
        </Pane>
      ),
      value: data.role_name || "--"
    },
    {
      readonly: false,
      req: false,
      label: "職責描述",
      editEle: (
        <CustomTextArea
          placeholder="請輸入職責描述"
          {...register("role_desc", { required: false })}
        />
      ),
      value: data.role_desc || "--"
    },
    isCreate
      ? {}
      : {
          readonly: false,
          req: true,
          label: "啟用",
          editEle: (
            <>
              <Switch
                checked={isEnabled}
                onChange={(e) => setIsEnabled(e.target.checked)}
              />
              <span>啟用</span>
            </>
          ),
          value:
            (
              <>
                <Switch
                  checked={isEnabled}
                  onChange={(e) => setIsEnabled(e.target.checked)}
                  disabled
                />
                <span>啟用</span>
              </>
            ) || "--"
        }
  ];
  return (
    <BodySTY>
      <InfoBox isEdit={isEdit} infoData={dataFitInfoBox} infoTitle="角色明細" />
    </BodySTY>
  );
};

export default DetailPanel;

interface I_Props {
  data: I_RoleListItem;
  isEdit: boolean;
  isCreate: boolean;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}
