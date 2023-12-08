import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LightBoxBlock } from "./style";

export interface I_LightBoxProps {
  title?: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  wrapperStyle?: React.CSSProperties;
  isOpen: boolean;
  handleCloseLightBox?: () => void;
}

function LightBox({
  title,
  children,
  onConfirm,
  onCancel,
  wrapperStyle,
  isOpen, // intent to be removed if only be used in ModalProvider (always true)
  handleCloseLightBox // intent to be replaced by onConfirm and onCancel
}: I_LightBoxProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const stopPropagation = (e: any) => e.stopPropagation();

  if (!mounted) return null;
  return createPortal(
    <LightBoxBlock isOpen={isOpen} onClick={onCancel || handleCloseLightBox}>
      <div style={wrapperStyle} className="wrapper" onClick={stopPropagation}>
        <div className="titleWrap">
          <div className="title">{title}</div>
          <div className="closeBtn" onClick={onCancel || handleCloseLightBox}>
            ×
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </LightBoxBlock>,
    document.getElementById("overlay-root") as HTMLElement
  );
}

export default LightBox;
