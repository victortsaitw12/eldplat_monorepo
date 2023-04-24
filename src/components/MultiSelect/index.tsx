import { useState, useCallback, useEffect } from "react";
import {
  SelectMenu,
  Position,
  Group,
  TagInput,
  IconButton,
  CaretDownIcon
} from "evergreen-ui";
import { MultiSelectSTY } from "./style";

type MutiSelectProps = {
  name: string;
  handleMultiSelect: (name: string, selected: Array<any>) => void;
  optionData: any;
};

export default function MultiSelect({
  name,
  handleMultiSelect,
  optionData
}: MutiSelectProps) {
  const options = optionData;
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState<Array<any>>([]);
  useEffect(() => {
    handleMultiSelect(name, selected);
  }, [selected]);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <MultiSelectSTY className="multiSelectSTY">
      <Group className="evergreen-group">
        <SelectMenu
          isMultiSelect
          position={Position.TOP_RIGHT}
          options={options}
          title="選擇駕駛分類"
          selected={selected.map((item) => item.value)}
          onSelect={(item) => {
            const addSelected = [...selected, item];
            setSelected(addSelected);
          }}
          onDeselect={(item) => {
            const removeSelectedIndex = selected.indexOf(item);
            const removeSelected = selected.filter(
              (_item, i) => i !== removeSelectedIndex
            );
            setSelected(removeSelected);
          }}
        >
          <Group className="evergreen-group">
            <TagInput
              tagProps={{
                color: "#E2EDFF"
              }}
              className="evergreen-tagInput"
              inputProps={{ placeholder: "" }}
              values={selected.map((item) => item.label)}
              onChange={(values) => {
                const updatedSelected = selected.filter((_item, i) =>
                  values.includes(_item.label)
                );
                setSelected(updatedSelected);
              }}
              onRemove={handleClick}
            />
            <IconButton
              disabled={isLoading}
              icon={CaretDownIcon}
              onClick={handleClick}
              style={{ height: "100%", borderLeft: "none" }}
            />
          </Group>
        </SelectMenu>
      </Group>
    </MultiSelectSTY>
  );
}
