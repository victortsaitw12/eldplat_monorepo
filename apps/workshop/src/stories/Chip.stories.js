import { Chip } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Chip",
  component: Chip,
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
      description: "Chip content",
    },
    variant: {
      control: "select",
      description: "Chip type variant",
      options: ["default", "outline", "text", "link", "transparent"],
    },
    styleName: {
      control: "text",
      description: "Customized class name",
    },
  },
  args: {
    children: "Food",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    styleName: "chip-primary",
  },
};

export const Secondary = {
  args: {
    styleName: "chip-secondary",
  },
};

export const Danger = {
  args: {
    styleName: "chip-danger",
  },
};

export const Success = {
  args: {
    styleName: "chip-success",
  },
};

export const Warning = {
  args: {
    styleName: "chip-warning",
  },
};

export const Small = {
  args: {
    styleName: "chip-sm",
  },
};

export const Medium = {
  args: {
    styleName: "chip-md",
  },
};

export const Large = {
  args: {
    styleName: "chip-lg",
  },
};
