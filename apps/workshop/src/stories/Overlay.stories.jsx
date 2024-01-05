import { Button, Overlay } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Overlay",
  component: Overlay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "center",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: "text",
      description: "Overlay content",
    },
    styleName: {
      control: "text",
      description: "Customized class name",
    },
    closeable: {
      control: "boolean",
      description: "Set if the overlay is closeable",
    },
    show: {
      control: "boolean",
      description: "Customized class name",
    },
    handleShow: {
      control: "function",
      description: "Handle overlay function",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example = {
  render: () => (
    <div
      style={{
        height: "30vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button>Background Button</Button>
      <Overlay show />
    </div>
  ),
};
