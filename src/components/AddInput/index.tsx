import React, { useContext } from "react";
import { BodySTY } from "./style";
import { Pane, Text, TextInput, Button, PlusIcon } from "evergreen-ui";
import {
  I_Company_Context,
  CompanyContext
} from "@contexts/companyContext/companyProvider";
// { [key: string]: any }

interface I_AddInput {
  inputArr: { [key: string]: any }[];
  buttonName: string;
  placeholder: string;
  handleInputAdd: () => void;
  handleInputRemove: (id: number) => void;
  handleValue: (e: any, id: number) => void;
  handleChangeRule: () => void;
}

const AddInput = ({
  inputArr,
  buttonName,
  placeholder,
  handleInputAdd,
  handleInputRemove,
  handleValue,
  handleChangeRule
}: I_AddInput) => {
  return (
    <BodySTY>
      <Pane>
        {inputArr.map((item, index: React.Key | null | undefined) => {
          return (
            <Pane key={index}>
              <TextInput
                marginTop={10}
                placeholder={placeholder}
                value={item.working_Hours_Name}
                onChange={(e: any) => {
                  // handleValue(e, item.working_Hours_code);
                  // handleChangeRule();
                }}
              />
              <Text
                marginLeft={16}
                cursor="pointer"
                onClick={() => {
                  // handleInputRemove(item.working_Hours_code);
                }}
              >
                –
              </Text>
            </Pane>
          );
        })}
        <Button
          className="add-rule-btn"
          marginY={8}
          iconBefore={PlusIcon}
          onClick={(e: any) => {
            e.preventDefault();
            // handleInputAdd();
          }}
        >
          {buttonName}
        </Button>
      </Pane>
    </BodySTY>
  );
};

export default AddInput;
