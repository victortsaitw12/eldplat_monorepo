import { Toggle } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Toggle",
  component: Toggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: "text",
      description: "Toggle content",
    },
    styleName: {
      control: "text",
      description: "Customized class name",
    },
    disabled: {
      control: "boolean",
      description: "If toggle is disabled",
    },
    labelBefore: {
      control: "text",
      description: "Texts that show before the toggle",
    },
    labelAfter: {
      control: "text",
      description: "Texts that show after the toggle",
    },
    oneSideLabel: {
      control: "object",
      description: "Texts of current state that show after the toggle",
    },
    isOn: {
      control: "boolean",
      description: "Set if toggle is on",
    },
    onToggle: {
      control: "function",
      description: "Function that control and store toggle state",
    },
  },
  args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {},
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const WithLabels = {
  args: {
    labelBefore: "Off",
    labelAfter: "On",
  },
};

export const OneSideLabel = {
  args: {
    oneSideLabel: ["Off", "On"],
  },
};

export const Small = {
  args: {
    styleName: "sm",
    labelAfter: "Small toggle",
  },
};

export const Medium = {
  args: {
    styleName: "md",
    labelAfter: "Medium toggle",
  },
};

export const Large = {
  args: {
    styleName: "lg",
    labelAfter: "Large toggle",
  },
};
