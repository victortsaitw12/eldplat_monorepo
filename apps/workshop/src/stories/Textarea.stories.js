import { Textarea } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Textarea",
  component: Textarea,
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
      description: "textarea placeholder",
    },
    value: {
      control: "text",
      description: "textarea value",
    },
    handleInput: {
      control: "function",
      description: "Handle textarea event",
    },
    readOnly: {
      control: "boolean",
      description: "Set textarea to read only",
    },
    disabled: {
      control: "boolean",
      description: "Set textarea to disabled",
    },
    minLength: {
      control: "number",
      description: "Set textarea minimum length",
    },
    maxLength: {
      control: "number",
      description: "Set textarea maximum length",
    },
    rows: {
      control: "number",
      description: "Set textarea initial rows",
    },
    showCount: {
      control: "boolean",
      description: "Set show data count of textarea",
    },
    resizable: {
      control: "boolean",
      description: "Set if textarea is resizable",
    },
  },
  args: {
    placeholder: "Type something...",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
  args: {},
};

export const Label = {
  args: {
    label: "Story",
  },
};

export const Description = {
  args: {
    label: "Story",
    description: "Please provide a story",
  },
};

export const Hint = {
  args: {
    hint: "Please provide valid story",
  },
};

export const Error = {
  args: {
    error: true,
    value: "There's no Cindy",
  },
};

export const ErrorWithHint = {
  args: {
    error: true,
    value: "There's no Cindy",
    hint: "Something's wrong",
  },
};

export const Clearable = {
  args: {
    clearable: true,
  },
};

export const ResizeDisabled = {
  args: {
    resizable: false,
    rows: 4,
  },
};

export const ShowCount = {
  args: {
    showCount: true,
  },
};
