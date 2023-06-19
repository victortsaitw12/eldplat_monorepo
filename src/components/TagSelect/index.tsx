import { Pane, Text, SelectField, IconButton, CrossIcon } from "evergreen-ui";
import { useEffect, useState } from "react";
import { BodySTY } from "./style";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  handleCustomData: (t: any) => void;
  editData?: any;
}

const TagSelect: React.FC<Props> = ({
  options,
  handleCustomData,
  editData
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useEffect(() => {
    editData && setSelectedOptions(editData);
  }, [editData]);

  const handleChangeSelect = async (e: any) => {
    const optArr = options.filter((v) => {
      if (e.target.value === "no") return;
      return v.value === e.target.value;
    });
    await optArr.filter((opt) => {
      const repeatVal = selectedOptions.find((v) => {
        return v.value === opt.value;
      });
      if (repeatVal) {
        return;
      } else {
        setSelectedOptions((prev) => [...prev, optArr[0]]);
        handleCustomData((prev: any) => [...selectedOptions, optArr[0]]);
      }
    });
  };

  const handleRemoveTags = (e: any, option: any) => {
    e.preventDefault();
    const newSelected = selectedOptions.filter((item) => {
      return item.value !== option.value;
    });
    setSelectedOptions(newSelected);
    handleCustomData(newSelected);
  };

  return (
    <BodySTY>
      <SelectField
        // value={selectedOptions.map((opt) => opt.value)}
        onChange={(e) => {
          handleChangeSelect(e);
        }}
        marginBottom="6px"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
      <Pane className="option-tags">
        {selectedOptions.map((option) => (
          <div
            key={option.value}
            className="tags"
            onClick={(e: any) => {
              handleRemoveTags(e, option);
            }}
          >
            <Text>{option.label}</Text>
            <IconButton icon={CrossIcon} />
          </div>
        ))}
      </Pane>
    </BodySTY>
  );
};

export default TagSelect;
