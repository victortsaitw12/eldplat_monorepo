import { Select } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      description: "Select type variant",
      options: [
        "default",
        "readOnly",
        "disabled",
        "error",
        "search",
        "reset-option",
      ],
    },
    children: {
      control: "array",
      description: "Select content",
    },
    label: {
      control: "text",
      description: "Select label",
    },
  },
  args: {
    children: ["選項1", "選項2", "選項3"],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
  args: {},
};

export const Label = {
  args: {
    label: "標籤",
  },
};

export const ReadOnly = {
  args: {
    variant: "readOnly",
  },
};

export const Error = {
  args: {
    variant: "error",
  },
};

export const Disabled = {
  args: {
    variant: "disabled",
  },
};
