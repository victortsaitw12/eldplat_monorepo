import { Button } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
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
      description: "Button content",
    },
    variant: {
      control: "select",
      description: "Button type variant",
      options: ["default", "outline", "outlineHover", "text", "link", "ghost"],
    },
    styleName: {
      control: "text",
      description: "Customized class name",
    },
    tooltip: {
      control: "text",
      description: "Button tooltip",
    },
    tooltipDirect: {
      control: "select",
      description: "tooltip direction",
      options: ["default", "top", "right", "bottom"],
    },
    type: {
      control: "text",
      description: "Button type. ex: submit...",
    },
    disabled: {
      control: "boolean",
      description: "If Button is disabled",
    },
  },
  args: {
    children: "Click",
    styleName: "btn-md",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    styleName: "btn-primary",
  },
};

export const Secondary = {
  args: {
    styleName: "btn-secondary",
  },
};

export const Danger = {
  args: {
    styleName: "btn-danger",
  },
};

export const Success = {
  args: {
    styleName: "btn-success",
  },
};

export const Warning = {
  args: {
    styleName: "btn-warning",
  },
};

export const Small = {
  args: {
    styleName: "btn-sm",
  },
};

export const Medium = {
  args: {
    styleName: "btn-md",
  },
};

export const Large = {
  args: {
    styleName: "btn-lg",
  },
};
