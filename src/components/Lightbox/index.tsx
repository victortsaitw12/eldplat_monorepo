import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LightBoxBlock, ButtonSetSTY } from "./style";

import PrimaryBtn from "@components/Button/Primary/IconLeft";
import SecondaryBtn from "@components/Button/Secondary/Label";

export interface I_LightBoxProps {
  title?: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  customBtns?: string | React.ReactNode;
  wrapperStyle?: React.CSSProperties;
  isOpen: boolean;
  handleCloseLightBox?: () => void;
  fullWidth?: boolean;
  confirmBtnText?: string;
}

function LightBox({
  title,
  children,
  onConfirm,
  onCancel,
  customBtns,
  wrapperStyle,
  isOpen, // intent to be removed if only be used in ModalProvider (always true)
  handleCloseLightBox, // intent to be replaced by onConfirm and onCancel
  fullWidth = false,
  confirmBtnText = "確定"
}: I_LightBoxProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stopPropagation = (e: any) => e.stopPropagation();

  if (!mounted) return null;
  return createPortal(
    <LightBoxBlock
      className="light-box"
      isOpen={isOpen}
      onClick={onCancel || handleCloseLightBox}
    >
      <div
        style={wrapperStyle}
        className={`wrapper ${fullWidth && "w-full"}`}
        onClick={stopPropagation}
      >
        <div className="titleWrap">
          <div className="title">{title}</div>
          <div className="closeBtn" onClick={onCancel || handleCloseLightBox}>
            ×
          </div>
        </div>
        <div className="content">{children}</div>
        {customBtns ? (
          <ButtonSetSTY>{customBtns}</ButtonSetSTY>
        ) : (
          <ButtonSetSTY>
            <SecondaryBtn
              text="取消"
              onClick={onCancel || handleCloseLightBox}
            />
            <PrimaryBtn text={confirmBtnText} onClick={onConfirm} />
          </ButtonSetSTY>
        )}
      </div>
    </LightBoxBlock>,
    document.getElementById("overlay-root") as HTMLElement
  );
}

export default LightBox;
