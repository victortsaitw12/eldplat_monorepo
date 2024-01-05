import { List } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/List",
  component: List,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: "array",
      description: "List content",
    },
    variant: {
      control: "select",
      description: "List type variant",
      options: ["bordered", "borderless"],
    },
    styleName: {
      control: "text",
      description: "Customized class name",
    },
  },
  args: {
    variant: "bordered",
    children: ["編輯紀錄", "刪除文章"],
    styleName: "list-group-item-primary",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const borderless = {
  args: {
    variant: "borderless",
  },
};

export const bordered = {
  args: {
    variant: "bordered",
  },
};
