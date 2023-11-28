import { Pane, Text, SelectField, IconButton, CrossIcon } from "evergreen-ui";
import { useEffect, useState } from "react";
import { BodySTY } from "./style";

interface Option {
  label: string;
  value: string;
  placeholder?: boolean;
}

interface Props {
  options: Option[];
  handleCustomData: (t: any) => void;
  editData?: any;
}

const TagGenerator: React.FC<Props> = ({
  options,
  handleCustomData,
  editData
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useEffect(() => {
    editData && setSelectedOptions(editData);
  }, [editData]);

  return (
    <BodySTY>
    </BodySTY>
  );
};

export default TagGenerator;
