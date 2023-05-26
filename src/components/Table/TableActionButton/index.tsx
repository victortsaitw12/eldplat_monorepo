import React, { useState } from "react";
import { MoreIcon, EditIcon, DisableIcon, EyeOpenIcon } from "evergreen-ui";
//
import { BodySTY } from "./style";
//
interface Props {
  onDelete: () => void;
  onEdit: () => void;
  onView: () => void;
}
//
function Index({ onDelete, onEdit, onView }: Props) {
  const [optionIsOpen, setOptionIsOpen] = useState<boolean>(false);

  const handleClickElseWhere = React.useCallback(
    (event: any) => {
      if (!event?.target.classList.contains("table-row-option")) {
        setOptionIsOpen(false);
      }
    },
    [setOptionIsOpen]
  );

  React.useEffect(() => {
    console.log("1 useEffect:", optionIsOpen);
    if (!optionIsOpen) return;
    document.addEventListener("click", handleClickElseWhere);
    console.log("2 useEffect:", optionIsOpen);
    return () => {
      document.removeEventListener("click", handleClickElseWhere);
    };
  }, [handleClickElseWhere, optionIsOpen]);

  return (
    <BodySTY>
      <button
        onClick={() => {
          // console.log("click:", optionIsOpen);
          setOptionIsOpen((prev) => !prev);
        }}
      >
        <MoreIcon />
      </button>
      {optionIsOpen && (
        <div className="table-row-option">
          <button
            className="option-item"
            onClick={() => {
              onView();
              setOptionIsOpen(false);
            }}
          >
            <EyeOpenIcon size={14} />
            <div>檢視</div>
          </button>
          <button
            className="option-item"
            onClick={() => {
              onEdit();
              setOptionIsOpen(false);
            }}
          >
            <EditIcon size={14} />
            <div>編輯</div>
          </button>
          <button
            className="option-item"
            onClick={() => {
              onDelete();
              setOptionIsOpen(false);
            }}
          >
            <DisableIcon size={14} />
            <div>停用</div>
          </button>
        </div>
      )}
    </BodySTY>
  );
}
export default Index;
