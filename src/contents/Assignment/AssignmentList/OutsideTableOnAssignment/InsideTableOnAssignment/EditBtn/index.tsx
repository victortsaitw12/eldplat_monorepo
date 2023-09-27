import { EditIcon, MoreIcon } from "evergreen-ui";
import React, { useState } from "react";

interface I_EditBtn {
  setOptionIsOpen?: (t: any) => void;
  item: any;
  editItem?: (item: any) => void;
}

const EditBtn = ({
  item,
  editItem = () => console.log("item", item)
}: I_EditBtn) => {
  const [optionIsOpen, setOptionIsOpen] = useState<boolean>(false);
  // console.log("item", item);
  return (
    <>
      <button
        className="table-action"
        onClick={(e) => {
          setOptionIsOpen((prev) => !prev);
        }}
      >
        <MoreIcon />
      </button>
      {optionIsOpen && (
        <div className="table-row-option ">
          <button
            className="option-item"
            onClick={() => {
              setOptionIsOpen(false);
              editItem(item);
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
