import { Divider } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Divider",
  component: Divider,
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
      description: "Divider type variant",
      options: ["default", "horizontal", "vertical"],
    },
    styleName: {
      control: "text",
      description: "Customized class name",
    },
    width: {
      control: "text",
      description: "Set divider width",
    },
    height: {
      control: "text",
      description: "Set divider height",
    },
  },
  args: { variant: "default", width: "100px", height: "0" },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Horizontal = {
  args: { variant: "horizontal", width: "100px", height: "0" },
};

export const Vertical = {
  args: { variant: "vertical", width: "0", height: "100px" },
};
