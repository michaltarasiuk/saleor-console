import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Checkbox} from "@/components/Checkbox";

const meta = {
  component: Checkbox,
  argTypes: {
    children: {
      name: "Label",
      type: {
        name: "string",
        required: true,
      },
    },
    defaultSelected: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isReadOnly: {
      control: {
        type: "boolean",
      },
    },
    autoFocus: {
      control: {
        type: "boolean",
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    primaryContent: {
      table: {
        disable: true,
      },
    },
    secondaryContent: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Checkbox",
  args: {
    value: "value",
    children: "Label",
  },
};
