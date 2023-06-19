import { useState } from "react";

interface ListData {
  [key: string]: any;
}

// working_Hours_Code: any | string;
// working_Hours_Name: string;

const Parent = () => {
  const [inputList, setInputList] = useState([]);

  function handleAddInput(idx: number, value: string) {
    const data = {
      working_Hours_Code: (idx + 1).toString(),
      working_Hours_Name: value
    };

    const newInputList = [...inputList];
  }

  function handleRemoveInput(idx: number, value: string) {
    const data = {
      working_Hours_Code: (idx + 1).toString(),
      working_Hours_Name: value
    };
  }

  function handleChange(idx: number, value: string) {
    const data = {
      working_Hours_Code: (idx + 1).toString(),
      working_Hours_Name: value
    };
  }

  return (
    <Child
      inputList={inputList}
      onAddInput={handleAddInput}
      onRemoveInput={handleRemoveInput}
      onChange={handleChange}
    />
  );
};

interface ChildProps {
  inputList: ListData[];
  onAddInput: (idx: number, value: string) => void;
  onRemoveInput: (idx: number, value: string) => void;
  onChange: (idx: number, value: string) => void;
}

function Child({ inputList, onAddInput, onRemoveInput, onChange }: ChildProps) {
  return (
    <div>
      {inputList.map((input) => (
        <div key={input.value}>...</div>
      ))}
    </div>
  );
}

export default Parent;
