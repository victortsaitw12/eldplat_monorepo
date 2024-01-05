import { Button, ButtonGroup, Divider } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ButtonGroup",
  component: ButtonGroup,
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
      description: "ButtonGroup content (Button component)",
    },
    variant: {
      control: "select",
      description: "Button group type variant",
      options: ["default", "horizontal", "vertical"],
    },
    styleName: {
      control: "text",
      description: "Customized class name",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Horizontal = {
  render: () => (
    <ButtonGroup>
      <Button variant="text" styleName="btn-secondary">
        B
      </Button>
      <Button variant="text" styleName="btn-secondary">
        B
      </Button>
      <Divider variant="vertical" styleName="mg-0" height="20px" />
      <Button variant="text" styleName="btn-secondary">
        B
      </Button>
      <Button variant="text" styleName="btn-secondary">
        B
      </Button>
    </ButtonGroup>
  ),
};

export const Vertical = {
  render: () => (
    <ButtonGroup variant="vertical">
      <Button variant="text" styleName="btn-secondary">
        B
      </Button>
      <Divider styleName="mg-0" width="25px" />
      <Button variant="text" styleName="btn-secondary">
        B
      </Button>
      <Button variant="text" styleName="btn-secondary">
        B
      </Button>
      <Button variant="text" styleName="btn-secondary">
        B
      </Button>
    </ButtonGroup>
  ),
};
