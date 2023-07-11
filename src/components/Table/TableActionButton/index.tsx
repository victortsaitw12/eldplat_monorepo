import React from "react";
import {
  MoreIcon,
  EditIcon,
  DisableIcon,
  EyeOpenIcon,
  DeleteIcon
} from "evergreen-ui";
//
import { BodySTY } from "./style";
interface Props {
  onDelete?: () => void;
  onEdit?: () => void;
  onView?: () => void;
  openOption?: () => void;
  closeOption?: () => void;
  deleteText?: string;
  isOpen?: boolean;
  tableName?: string;
}
//
function Index({
  onDelete,
  onEdit,
  onView,
  openOption,
  closeOption,
  tableName,
  deleteText = "停用",
  isOpen = false
}: Props) {
  return (
    <BodySTY>
      <button
        onClick={(event) => {
          // if (isOpen) {
          //   closeOption && closeOption();
          // } else {
          //   openOption && openOption();
          // }
          if (!isOpen) {
            event.stopPropagation();
            openOption && openOption();
          }
        }}
      >
        <MoreIcon />
      </button>
      {isOpen && (
        <div className="table-row-option">
          {onView && (
            <button
              className="option-item"
              onClick={() => {
                onView();
                closeOption && closeOption();
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
                closeOption && closeOption();
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
                closeOption && closeOption();
              }}
            >
              {tableName === "維保通知" ? (
                <>
                  <DeleteIcon size={14} color="#8EA8C7" />
                  <div>取消</div>
                </>
              ) : (
                <>
                  <DisableIcon size={14} />
                  <div>{deleteText}</div>
                </>
              )}
            </button>
          )}
        </div>
      )}
    </BodySTY>
  );
}
export default Index;
