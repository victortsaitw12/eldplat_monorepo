import React, { useEffect, useState } from "react";

import Image from "next/image";

import {
  TextInput,
  RadioGroup,
  ChevronDownIcon,
  ChevronUpIcon
} from "evergreen-ui";

import ReplacementAnalysisSTY, { InputBoxSTY } from "./style";

interface I_Input {
  [key: string]: any;
}
interface I_Radio {
  [key: string]: any;
}
interface I_sampleData {
  [key: string]: any;
}

const sampleData: I_sampleData = [
  {
    id: 0,
    item: [
      {
        id: 0,
        title: "生命週期估計",
        inputItem: [
          {
            id: 0,
            type: "input",
            title: "Estimated Vehicle Life",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 1,
            type: "input",
            title: "Estimated Annual Usage",
            label: {
              unit: "miles",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 2,
            type: "input",
            title: "Estimated Fuel Efficiency",
            label: {
              unit: "MPG (US)",
              currency: "$"
            },
            defaultValue: 0
          }
        ]
      },
      {
        id: 1,
        title: "Acquisition",
        inputItem: [
          {
            id: 0,
            type: "input",
            title: "Purchase Price",
            label: {
              currency: "$"
            },
            defaultValue: 0
          }
        ]
      },
      {
        id: 2,
        title: "Disposal",
        inputItem: [
          {
            id: 0,
            type: "input",
            title: "Estimated Vehicle Life",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 1,
            type: "radio",
            title: "Estimated Vehicle Life",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0,
            options: [
              {
                label: "Double Declining",
                value: "1"
              },
              {
                label: "Sum of Years",
                value: "2"
              }
            ],
            radioName: "sampleRadio-1"
          }
        ]
      }
    ]
  },
  {
    id: 1,
    className: "row",
    item: [
      {
        id: 0,
        title: "生命週期估計",
        inputItem: [
          {
            id: 0,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 1,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 2,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 3,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 4,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 5,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          }
        ]
      },
      {
        id: 1,
        title: "生命週期估計",
        inputItem: [
          {
            id: 0,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 1,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 2,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 3,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 4,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          },
          {
            id: 5,
            type: "input",
            title: "Year",
            label: {
              unit: "months",
              currency: "$"
            },
            defaultValue: 0
          }
        ]
      }
    ]
  }
];

function Input(props: I_Input) {
  const clickButton = (element: any, type: number) => {
    const input = element.currentTarget.parentNode.previousSibling;
    const inputValue: number | string = parseInt(input.value);

    if (type) input.value = inputValue + 1;
    else input.value = inputValue - 1;
  };

  useEffect(() => {
    const inputElement = document.getElementsByClassName(
      props.inputType.className
    );
    const inputElementArray = Object.keys(inputElement).map(
      (item, key) => inputElement[key]
    );

    inputElementArray.map((item) => {
      const itemInput = item as HTMLElement;
      const unitElement = item.parentNode?.querySelector(
        ".unit"
      ) as HTMLElement;
      const currencyElement = item.parentNode?.querySelector(
        ".currency"
      ) as HTMLElement;
      const arrowElement = item.parentNode?.querySelector(
        ".arrow-button"
      ) as HTMLElement;
      const inputPaddingLeft =
        currencyElement?.offsetLeft + currencyElement?.offsetWidth;
      const inputPaddingRight =
        itemInput.offsetWidth - unitElement?.offsetLeft + 5;

      itemInput.style.paddingLeft = `${inputPaddingLeft}px`;
      itemInput.style.paddingRight = `${inputPaddingRight}px`;
      arrowElement.style.paddingRight = `${inputPaddingRight}px`;
    });
  });

  return (
    <div className="input-wrap">
      <span className="title">{props.title ? props.title : ""}</span>
      <span className="input">
        {props.currency ? <div className="currency">{props.currency}</div> : ""}
        <TextInput {...props.inputType} />
        <div className="arrow-button">
          <button
            className="up"
            onClick={(e: { [key: string]: any }) => clickButton(e, 1)}
          >
            <ChevronUpIcon />
          </button>
          <button
            className="down"
            onClick={(e: { [key: string]: any }) => clickButton(e, 0)}
          >
            <ChevronDownIcon />
          </button>
        </div>
        {props.unitLabel ? <div className="unit">{props.unitLabel}</div> : ""}
      </span>
    </div>
  );
}

function Radio(props: I_Radio) {
  const [Value, setValue]: any = useState();

  return (
    <div className="input-wrap radio">
      <span className="title">{props.title ? props.title : ""}</span>
      <span className="input">
        <RadioGroup
          {...props.inputType}
          value={Value}
          onChange={(event) => setValue(event.target.value)}
        />
      </span>
    </div>
  );
}

function ReplacementAnalysis() {
  return (
    <ReplacementAnalysisSTY>
      <div className="analysis-chart">
        <Image
          src="/images/sampleChart.svg"
          alt="sample-img"
          width={1271}
          height={400}
          className="sample-img"
        />
      </div>
      <div className="input-group">
        {sampleData.map((boxItem: { [key: string]: any }) => {
          return (
            <InputBoxSTY
              className={`input-box lifecycle ${boxItem.className ?? ""}`}
              key={boxItem.id}
            >
              {boxItem.item.map((inputBoxItem: { [key: string]: any }) => {
                return (
                  <div className="box-item" key={inputBoxItem.id}>
                    <div className="title">{inputBoxItem.title}</div>
                    {inputBoxItem.inputItem.map(
                      (item: { [key: string]: any }) => {
                        switch (item.type) {
                          case "input":
                            return (
                              <Input
                                title={item.title ?? ""}
                                unitLabel={item.label?.unit ?? ""}
                                currency={item.label?.currency ?? ""}
                                inputType={{
                                  type: "number",
                                  width: "100%",
                                  className: "input-dom",
                                  defaultValue: item.defaultValue ?? ""
                                }}
                                key={item.id}
                              />
                            );
                          case "radio":
                            return (
                              <Radio
                                title={item.title ?? ""}
                                unitLabel={item.label?.unit ?? ""}
                                currency={item.label?.currency ?? ""}
                                inputType={{
                                  options: item.options ?? [
                                    { label: "", value: "" }
                                  ],
                                  size: 16,
                                  name: item.radioName ?? "name"
                                }}
                                key={item.id}
                              />
                            );
                        }
                      }
                    )}
                  </div>
                );
              })}
            </InputBoxSTY>
          );
        })}
      </div>
    </ReplacementAnalysisSTY>
  );
}

export default ReplacementAnalysis;
