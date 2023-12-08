import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DivSTY } from "./style";

import { UpdateDriverInfoPayload } from "../driver.type";
import DriverInfo from "@contents/Driver/Detail/DriverInfo";
import TrainingList from "@contents/Driver/Detail/TrainingList";
import HealthRecords from "@contents/Driver/Detail/HealthRecords";
import InfoCard from "@components/InfoCard";
import { Select, TextInput, SmallPlusIcon, Pane } from "evergreen-ui";
import SecondaryButton from "@components/Button/Secondary/IconLeft";
import CustomTextArea from "@components/CustomTextArea";
import NewUploader from "@components/NewUploader";
import CustomTextInputField from "@components/CustomTextInputField";
import CustomDatePicker from "@components/CustomDatePicker";
import TagGenerator from "@components/TagGenerator";
import { DUMMY_TAG_DATA, DUMMY_COMMENT_DATA } from "../detail.data";
import FileCard from "@components/FileCard";
import EditHistory from "@contents/Driver/Detail/EditHistory";

interface Props {
  isEdit: boolean;
  submitRef: React.RefObject<HTMLButtonElement>;
  asyncSubmitForm: (data: any) => Promise<void>;
  driverData: any;
  formType: string;
  refetch: () => void;
  driverNo: string;
}

function DriverDetail(props: Props) {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  //   getValues
  // } = useForm<UpdateDriverInfoPayload>({
  //   defaultValues: {
  //     driver_no: driverData.info.driver_no,
  //     license_no: driverData.info.license_no,
  //     license_area: driverData.info.license_area,
  //     license_lvl: driverData.info.license_lvl,
  //     driver_seniority: driverData.info.driver_seniority,
  //     driver_country: driverData.info.driver_country,
  //     dsph_area: driverData.info.dsph_area,
  //     dsph_group: driverData.info.dsph_group,
  //     working_hours_code: driverData.info.working_hours_code,
  //     working_hours_name: driverData.info.working_hours_name
  //   }
  // });

  const [visibleForm, setVisibleForm] = useState("1");
  const {
    isEdit,
    submitRef,
    asyncSubmitForm,
    driverData,
    formType,
    refetch,
    driverNo
  } = props;

  const driverInfo = driverData.info;

  const tagList = (
    <ul className="tag-wrapper">
      {DUMMY_TAG_DATA.map((tag) => (
        <li key={tag.value} className="tag">
          {tag.label}
        </li>
      ))}
    </ul>
  );

  const BasicInFo = [
    {
      listClassName: "fb-50",
      readonly: false,
      req: true,
      label: "駕駛姓名",
      bold: false,
      value: driverInfo.user_name
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "英文姓名",
      value: "CHUN-YI ZHONG"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "國籍",
      value: driverInfo.driver_country_name
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "身分證字號",
      value: "E123456789"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "性別",
      value: "男"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "生日",
      value: "1977-01-01"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "語言",
      value: "中文/英文"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "身高",
      value: "180 cm"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "體重",
      value: "75 kg"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "手機",
      value: driverInfo.user_phone
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "學歷",
      value: "大學"
    },
    {
      listClassName: "fb-50",
      readonly: false,
      req: false,
      label: "信箱",
      value: driverInfo.user_email
    }
  ];

  const EmployeeInFo = [
    {
      listClassName: "fb-33",
      readonly: false,
      req: false,
      label: "員工編號",
      bold: false,
      value: driverInfo.user_no
    },
    {
      listClassName: "fb-66",
      readonly: false,
      req: false,
      label: "隸屬組織",
      bold: false,
      value: "大中巴業務組/選項B"
    },
    {
      listClassName: "fb-33",
      readonly: false,
      req: false,
      bold: false,
      label: "入職日期",
      value: "2000-03-10"
    },
    {
      listClassName: "fb-66",
      readonly: false,
      req: true,
      bold: false,
      label: "派駐區域",
      value: driverInfo.dsph_area_name,
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-33",
      readonly: false,
      req: true,
      bold: false,
      label: "車隊",
      value: driverInfo.dsph_group_name,
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-66",
      readonly: false,
      req: true,
      bold: false,
      label: "排班設定",
      value: driverInfo.working_hours_name,
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-33 m-0",
      readonly: false,
      req: false,
      bold: false,
      label: "駕駛分級",
      value: "S級",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    }
  ];

  const TagInFo = [
    {
      listClassName: "fb-100 m-0 gap-0",
      readonly: false,
      req: false,
      label: "",
      bold: false,
      value: tagList,
      editEle: <TagGenerator data={DUMMY_TAG_DATA} />
    }
  ];

  const CommentInFo = [
    {
      listClassName: "fb-100 m-0",
      readonly: false,
      req: false,
      label: "備註",
      bold: true,
      value: <p>{DUMMY_COMMENT_DATA}</p>,
      editEle: (
        <CustomTextArea placeholder={"請輸入備註"} data={DUMMY_COMMENT_DATA} />
      )
    }
  ];

  const LicenseInFo = [
    {
      listClassName: "fb-33",
      readonly: false,
      req: true,
      label: "駕照種類",
      bold: true,
      value: "大客車職業駕駛執照",
      editEle: (
        <Select className={"select-wrapper"}>
          <option value="foo" selected>
            請選擇
          </option>
        </Select>
      )
    },
    {
      listClassName: "fb-66 m-0",
      readonly: false,
      req: true,
      label: "附件/相關檔案",
      bold: true,
      value: <FileCard />,
      editEle: <NewUploader isEditable={true} />
    },
    {
      listClassName: "fb-66",
      readonly: false,
      req: true,
      label: "有效期限",
      bold: true,
      value: "2023-12-31",
      editEle: <CustomDatePicker placeholder="請輸入有效期限" />
    }
  ];

  const TrainingInFo = [
    {
      listClassName: "fb-33 m-0",
      readonly: false,
      req: true,
      label: "訓練通過日期",
      bold: true,
      value: "2023-12-31",
      editEle: <CustomDatePicker placeholder="請輸入訓練期間" />
    },
    {
      listClassName: "fb-66 m-0",
      readonly: false,
      req: false,
      label: "附件/相關檔案",
      bold: true,
      value: <FileCard />,
      editEle: <NewUploader isMultiple={true} isEditable={true} />
    }
  ];

  // useEffect(() => {
  //   if (errors) console.log(errors);
  // }, [errors]);

  useEffect(() => {
    setVisibleForm(formType);
  }, [formType]);

  return (
    <DivSTY>
      {visibleForm === "1" && (
        <>
          <Pane className={"main-column fb-33"}>
            <InfoCard
              isEdit={isEdit}
              infoData={BasicInFo}
              infoTitle="基本資料"
            />
          </Pane>
          <Pane className={"main-column fb-66"}>
            <InfoCard
              isEdit={isEdit}
              infoData={EmployeeInFo}
              infoTitle="職員資料"
            />
            <InfoCard isEdit={isEdit} infoData={TagInFo} infoTitle="標籤" />
            <InfoCard isEdit={isEdit} infoData={CommentInFo} infoTitle="備註" />
            <InfoCard isEdit={isEdit} infoData={LicenseInFo} infoTitle="駕照" />
            <InfoCard
              isEdit={isEdit}
              infoData={TrainingInFo}
              infoTitle="華語領隊人員執業證"
            />
          </Pane>
        </>
      )}
      {visibleForm === "2" && (
        <TrainingList driverNo={driverNo} userName={"123"} isEdit={isEdit} />
      )}

      {visibleForm === "3" && (
        <HealthRecords userNo={driverData.info.user_no} userName={"123"} />
      )}

      {visibleForm === "4" && (
        <EditHistory userNo={driverData.info.user_no} userName={"123"} />
      )}
    </DivSTY>
  );

  // return (
  //   <DivSTY>
  //     <form
  //       onSubmit={handleSubmit((currentData) => {
  //         asyncSubmitForm(currentData);
  //       })}
  //     >
  //       <button ref={submitRef} type="submit" style={{ display: "none" }}>
  //         儲存
  //       </button>
  //       <DriverInfo
  //         selected={visibleForm === "1"}
  //         register={register}
  //         getValues={getValues}
  //         isEdit={isEdit}
  //         driverData={driverData}
  //       />
  //     </form>
  //     {visibleForm === "2" && (
  //       <LicensesList driverNo={driverNo} userName={userName} isEdit={isEdit} />
  //     )}
  //     {visibleForm === "3" && (
  //       <HealthRecords userNo={driverData.info.user_no} userName={userName} />
  //     )}
  //   </DivSTY>
  // );
}

export default DriverDetail;
