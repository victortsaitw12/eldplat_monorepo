import { CrossIcon, SmallPlusIcon, TrashIcon, PlusIcon } from "evergreen-ui";
import { useEffect, useId, useState } from "react";
import { BodySTY } from "./style";
import CustomTextInputField from "@components/CustomTextInputField";

interface I_Tag {
  label?: string;
  value?: string;
}

interface Props {
  data?: I_Tag[];
}

const DUMMY_DATA = [
  { label: "01", value: "第一車隊" },
  { label: "02", value: "第二車隊" }
];

const InputGenerator: React.FC<Props> = ({ data }) => {
  const [renderedInputs, setRenderedInputs] = useState<I_Tag[]>([]);

  useEffect(() => {
    // data && setRenderedInputs(DUMMY_DATA);
    setRenderedInputs(DUMMY_DATA);
  }, [data]);

  function generateRandomNumberId(length = 8) {
    const chars = "0123456789";
    return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  }

  const handleDelete = (label?: string) => {
    if (renderedInputs.length > 1) {
      const newRenderedInputs = renderedInputs.filter(
        (item) => item.label !== label
      );
      setRenderedInputs(newRenderedInputs);
    }
  };

  const handleCreate = (index: number) => {
    const randomNumberId = generateRandomNumberId();
    const newRenderedInputs = [...renderedInputs];
    newRenderedInputs.splice(index + 1, 0, {
      label: randomNumberId,
      value: ""
    });
    setRenderedInputs(newRenderedInputs);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newRenderedInputs = [...renderedInputs];
    const index = newRenderedInputs.findIndex((item) => item.label === name);
    newRenderedInputs[index].value = value;
    setRenderedInputs(newRenderedInputs);
  };

  return (
    <BodySTY>
      {renderedInputs.length > 0 &&
        renderedInputs.map((tag: I_Tag, index) => {
          return (
            <li className="input-wrapper" key={tag.label}>
              <CustomTextInputField
                onChange={handleInputChange}
                name={tag.label}
              />
              <button className="button">
                <TrashIcon size={16} onClick={() => handleDelete(tag.label)} />
              </button>
              <button className="button">
                <PlusIcon size={16} onClick={() => handleCreate(index)} />
              </button>
            </li>
          );
        })}
    </BodySTY>
  );
};

export default InputGenerator;
