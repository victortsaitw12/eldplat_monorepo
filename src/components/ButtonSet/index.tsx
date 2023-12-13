import { EditIcon } from "evergreen-ui";
import React from "react";
import { useRouter } from "next/router";
import { DivSTY } from "./style";
import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";

interface I_Props {
  isEdit?: boolean;
  secondaryBtnOnClick?: () => void;
  secondaryBtnText?: string;
  primaryBtnOnClick?: () => void;
  primaryBtnText?: string;
  primaryDisable?: boolean;
}

function ButtonSet({
  isEdit,
  secondaryBtnOnClick,
  secondaryBtnText = "取消",
  primaryBtnOnClick,
  primaryBtnText = "儲存",
  primaryDisable
}: I_Props) {
  const router = useRouter();

  return (
    <DivSTY>
      <SecondaryBtn text={secondaryBtnText} onClick={secondaryBtnOnClick} />
      <PrimaryBtn
        text={primaryBtnText}
        onClick={primaryBtnOnClick}
        disabled={primaryDisable}
      >
        {primaryBtnText === "編輯" && <EditIcon size={14} />}
      </PrimaryBtn>
    </DivSTY>
  );
}

export default ButtonSet;
