import {
  Select,
  TextInput,
  Textarea,
  FileUploader,
  FileCard
} from "evergreen-ui";
import Image from "next/image";
import { BodySTY } from "./style";

import InfoBox from "@components/InfoBox";
import LoadingSpinner from "@components/LoadingSpinner";
import { I_UserDetailItem } from "@services/account/getOneAccount";

const BasicInfoBox = ({ data, isEdit }: I_Props) => {
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
          {data.image ? (
            <Image src="" width={120} height={150} alt="Picture of the user" />
          ) : (
            <FileUploader
              browseOrDragText={() => {
                return "Upload";
              }}
            />
          )}
        </div>
      ),

      value: (
        <div className="basic__photo">
          {data.image ? (
            <Image src="" width={120} height={150} alt="Picture of the user" />
          ) : (
            <FileCard name="upload" />
          )}
        </div>
      )
    },
    {
      readonly: false,
      req: false,
      label: "使用者姓名",
      editEle: (
        <>
          <TextInput className="required basic__lastName" placeholder="姓氏" />
          <TextInput className="required basic__firstName" placeholder="名字" />
        </>
      ),

      value: data.account_lname?.concat(" ", data.account_fname) || "--"
      // subLabel?: string | React.ReactNode;
      // inputType?: string;
    },
    {
      readonly: false,
      req: true,
      label: "手機",
      editEle: <TextInput className="required" placeholder="請輸入手機" />,

      value: data.account_no || "--"
    },
    {
      readonly: false,
      req: true,
      label: "信箱",
      editEle: <TextInput className="required" placeholder="請輸入信箱" />,
      value: data.account_no || "--"
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
  data: I_UserDetailItem;
  isEdit: boolean;
}
