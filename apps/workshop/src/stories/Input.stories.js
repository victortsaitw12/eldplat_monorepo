import { Input } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    styleName: {
      control: "text",
      description: "Customized class name",
    },
    placeholder: {
      control: "text",
      description: "Input placeholder",
    },
    type: {
      control: "text",
      description: "Input type. ex: email, number, password...",
    },
    value: {
      control: "text",
      description: "Input value",
    },
    handleInput: {
      control: "function",
      description: "Handle input event",
    },
    readOnly: {
      control: "boolean",
      description: "Set input to read only",
    },
    disabled: {
      control: "boolean",
      description: "Set input to disabled",
    },
    error: {
      control: "boolean",
      description: "Set true if input error",
    },
    errorMessage: {
      control: "text",
      description: "Set error message",
    },
    minLength: {
      control: "number",
      description: "Set minimum text",
    },
    maxLength: {
      control: "number",
      description: "Set maximum text",
    },
  },
  args: {
    placeholder: "Type something...",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
  args: {
    type: "text",
  },
};

export const Borderless = {
  args: {
    type: "text",
    styleName: "borderless",
  },
};

export const Password = {
  args: {
    type: "password",
    canPreview: true,
  },
};

export const Label = {
  args: {
    type: "text",
    label: "Name",
  },
};

export const Hint = {
  args: {
    type: "text",
    hint: "Please provide valid input",
  },
};

export const Error = {
  args: {
    type: "text",
    error: true,
    value: "There's no Cindy",
  },
};

export const ErrorWithHint = {
  args: {
    type: "text",
    error: true,
    value: "There's no Cindy",
    hint: "Invalid member name",
  },
};

export const Clearable = {
  args: {
    type: "text",
    clearable: true,
  },
};
