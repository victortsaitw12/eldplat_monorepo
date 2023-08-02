import { EditIcon, MoreIcon } from "evergreen-ui";
import React, { useState } from "react";

interface I_EditBtn {
  setOptionIsOpen?: (t: any) => void;
  item: any;
  goToEditPage?: (item: any) => void;
}

const EditBtn = ({
  item,
  goToEditPage = (item: any) => {
    console.log("EDIT");
  }
}: I_EditBtn) => {
  const [optionIsOpen, setOptionIsOpen] = useState<boolean>(false);
  // console.log("item", item);
  return (
    <>
      <button
        onClick={(e) => {
          setOptionIsOpen((prev) => !prev);
        }}
      >
        <MoreIcon />
      </button>
      {optionIsOpen && (
        <div className="table-row-option">
          <button
            className="option-item"
            onClick={(e) => {
              console.log("按下編輯的e", e);
              setOptionIsOpen(false);
              goToEditPage(item);
            }}
          >
            <EditIcon size={14} />
            <div>編輯</div>
          </button>
        </div>
      )}
    </>
  );
};

export default EditBtn;
