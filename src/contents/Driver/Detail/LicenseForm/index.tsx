import React from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import {
  Heading,
  Pane,
  DocumentIcon,
  CogIcon,
  Tooltip,
  Button,
  Dialog,
  TextInput,
  Select,
  Checkbox,
  PlusIcon,
  toaster
} from "evergreen-ui";
import { FormSTY } from "./style";

import { UpdateDriverInfoPayload } from "@contents/Driver/driver.type";
import FlexWrapper from "@layout/FlexWrapper";
import InfoBox from "@components/InfoBox";
import { formatDateFromAPI } from "@utils/formatDateFromAPI";
import { updateDriverLicense } from "@services/driver/updateDriverLicense";
import { LICN_TYP } from "@services/getDDL";

interface Props {
  licensesData: any;
  userName: string;
  refetch: () => void;
}

function LicenseForm({ licensesData, userName, refetch }: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<UpdateDriverInfoPayload>({
    defaultValues: {
      licn_typ: licensesData.licn_typ,
      licn_name: licensesData.licn_name,
      licn_unit: licensesData.licn_unit,
      licn_issue: formatDateFromAPI(licensesData.licn_issue),
      licn_exp: formatDateFromAPI(licensesData.licn_exp),
      licn_examine_date: formatDateFromAPI(licensesData.licn_examine_Date),
      licn_filename: licensesData.licn_filename,
      licn_link: licensesData.licn_link
    }
  });
  const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false);

  const asyncSubmitForm = async (data: any) => {
    try {
      const res = await updateDriverLicense(driverNo, data); //type: true = 新增，false = 更新
      console.log("updateDriver:", res);
      if (res.statusCode === "200") toaster.success("成功更新駕駛證照");
      refetch();
      console.log(res);
    } catch (e: any) {
      console.log(e);
      toaster.warning(e.message);
    }
  };
  const handleCancel = () => {
    setIsLightBoxOpen(false);
  };

  const handleConfirm = () => {
    console.log("handleConfirm");
  };

  // 駕駛證照
  const licenseInfo = [
    {
      req: false,
      label: "證照種類",
      value: getValues("licn_typ") || "目前無資料",
      editEle: (
        <Select key="licn_typ" {...register("licn_typ")} marginBottom="0">
          <option value="01">小型車普通駕駛執照</option>
          <option value="02">大貨車普通駕駛執照</option>
          <option value="03">大客車普通駕駛執照</option>
          <option value="04">聯結車普通駕駛執照</option>
          <option value="05">小型車職業駕駛執照</option>
          <option value="06">大貨車職業駕駛執照</option>
          <option value="07">大客車職業駕駛執照</option>
          <option value="08">聯結車職業駕駛執照</option>
          <option value="09">國際駕駛執照</option>
          <option value="10">輕型機車駕駛執照</option>
          <option value="11">小型輕型機車駕駛執照</option>
          <option value="12">普通輕型機車駕駛執照</option>
          <option value="13">重型機車駕駛執照</option>
          <option value="14">普通重型機車駕駛執照</option>
          <option value="15">大型重型機車駕駛執照</option>
        </Select>
      )
    },
    {
      req: false,
      label: "證照名稱",
      value: getValues("licn_name") || "目前無資料",
      editEle: <TextInput {...register("licn_name")} />
    },
    {
      req: false,
      label: "發照單位",
      value: getValues("licn_unit") || "目前無資料",
      editEle: <TextInput {...register("licn_unit")} />
    },
    {
      req: false,
      label: "發照日期",
      value: getValues("licn_issue") || "目前無資料",
      editEle: <TextInput type="date" {...register("licn_issue")} />
    },
    {
      req: false,
      label: "有效日期",
      value: getValues("licn_exp") || "目前無資料",
      editEle: <TextInput type="date" {...register("licn_exp")} />
    },
    {
      req: false,
      label: "下次審驗日期",
      value: getValues("licn_examine_date") || "目前無資料",
      editEle: <TextInput type="date" {...register("licn_examine_date")} />
    }
  ];
  return (
    <FormSTY
      onSubmit={handleSubmit((currentData) => {
        asyncSubmitForm(currentData);
      })}
    >
      <Pane>
        <Dialog
          isShown={isLightBoxOpen}
          title="新增駕駛證照"
          onConfirm={handleConfirm}
          onCloseComplete={handleCancel}
          cancelLabel="取消"
          confirmLabel="確定"
        >
          {({}) => (
            <FlexWrapper flexDirection="column">
              <InfoBox
                isEdit={false}
                infoData={licenseInfo}
                infoTitle="駕駛證照"
              />
            </FlexWrapper>
          )}
        </Dialog>
      </Pane>
    </FormSTY>
  );
}

export default LicenseForm;
