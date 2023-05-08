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
  apiData?: any;
}

// { value: "TW", label: "台灣" },
// { value: "JP", label: "日本" }

const TagSelect: React.FC<Props> = ({ options, handleCustomData, apiData }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  // useEffect(() => {
  //   console.log("apiData", apiData);
  //   // 語言
  //   const updateLangData = apiData?.map(
  //     (obj: { language_Code: string; language_Name: string }) => {
  //       return {
  //         value: obj.language_Code,
  //         label: obj.language_Name
  //       };
  //     }
  //   );
  //   setSelectedOptions(updateLangData);
  //   console.log("🎃🎃🎃🎃🎃🎃🎃");
  // }, [apiData]);

  const handleChangeSelect = (e: any) => {
    // console.log("e", e); // e.target.value => "TW"
    const optArr = options.filter((v) => {
      if (e.target.value === "no") return;
      return v.value === e.target.value;
    });
    optArr.filter((opt) => {
      if (selectedOptions.includes(opt)) {
        return;
      } else {
        setSelectedOptions((prev) => [...prev, optArr[0]]);
        handleCustomData((prev: any) => [...prev, optArr[0]]);
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
