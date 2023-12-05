import { CrossIcon, SmallPlusIcon } from "evergreen-ui";
import { useEffect, useState } from "react";
import { BodySTY } from "./style";
import SecondaryButton from "@components/Button/Secondary/IconLeft";

interface I_Tag {
  label?: string;
  value?: string;
}

interface Props {
  data?: I_Tag[];
}

const TagGenerator: React.FC<Props> = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [enteredInput, setEnteredInput] = useState("");
  const [renderedTags, setRenderedTags] = useState<I_Tag[]>([]);

  useEffect(() => {
    // editData && setSelectedOptions(editData);
  }, [data]);

  const clickCreateHandler = () => {
    setIsEditing(true);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (enteredInput.trim().length > 0) {
        setIsEditing(false);
        setRenderedTags((prev) => [
          ...prev,
          { label: enteredInput, value: (renderedTags?.length + 2).toString() }
        ]);
        setEnteredInput("");
      }
    }
  };

  const handleDelete = (value?: string) => {
    const newRenderedTags = renderedTags.filter((item) => item.value !== value);
    setRenderedTags(newRenderedTags);
  };

  const handleBlur = () => {
    setIsEditing(false);
    setEnteredInput("");
  };

  let creatingTag = (
    <SecondaryButton
      text="新增標籤"
      className={"create-button"}
      onClick={clickCreateHandler}
    >
      <SmallPlusIcon />
    </SecondaryButton>
  );

  if (isEditing) {
    creatingTag = (
      <input
        className="input"
        onChange={changeHandler}
        value={enteredInput}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        autoFocus
      />
    );
  }

  return (
    <BodySTY>
      {renderedTags.length > 0 &&
        renderedTags.map((tag: I_Tag, index) => {
          return (
            <li
              className="tag"
              key={index}
              onClick={() => handleDelete(tag.value)}
            >
              <span className="text">{tag.label}</span>
              <span className="button">
                <CrossIcon size={12} />
              </span>
            </li>
          );
        })}
      {creatingTag}
    </BodySTY>
  );
};

export default TagGenerator;
