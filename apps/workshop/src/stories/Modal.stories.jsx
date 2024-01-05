import { Button, Modal } from "baseui/lib";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
    // layout: "center",
    // layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: "text",
      description: "Modal content",
    },
    styleName: {
      control: "text",
      description: "Customized class name",
    },
    onClose: {
      control: "function",
      description: "On close button click event",
    },
  },
  args: {
    styleName: "bd-1 bd-primary",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example = {
  args: {
    children: (
      <div className="mt-5 text-right">
        <div>
          <div> modal</div>
        </div>
        <div>
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </div>
        <div className="flex-all-center mt-3">
          <Button type="button" styleName="mr-2 btn-sm">
            <span>Cancel</span>
          </Button>
          <Button type="button" styleName="btn-sm">
            <span>OK</span>
          </Button>
        </div>
      </div>
    ),
  },
};

export const Full = {
  args: {
    styleName: "full",
    children: (
      <img
        width="200"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg"
      />
    ),
  },
};
