import React, { useState } from "react";
import { MoreIcon, EditIcon, DisableIcon, EyeOpenIcon } from "evergreen-ui";
//
import { BodySTY } from "./style";
// import useClickOutside from "@hooks/useClickOutside";
//
interface Props {
  onDelete?: () => void;
  onEdit?: () => void;
  onView?: () => void;
}
//
function Index({ onDelete, onEdit, onView }: Props) {
  const [optionIsOpen, setOptionIsOpen] = useState<boolean>(false);
  // const handleClickOutside = () => {
  //   setOptionIsOpen(false);
  // };
  // const ref = useClickOutside(handleClickOutside);

  return (
    <BodySTY>
      <button
        onClick={() => {
          setOptionIsOpen((prev) => !prev);
        }}
      >
        <MoreIcon />
      </button>
      {optionIsOpen && (
        <div className="table-row-option">
          {onView && (
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
          )}
          {onEdit && (
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
          )}
          {onDelete && (
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
          )}
        </div>
      )}
    </BodySTY>
  );
}
export default Index;
