import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {TextField} from "@/components/TextField";

const meta = {
  component: TextField,
  argTypes: {
    isInvalid: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
    isReadOnly: {
      control: "boolean",
    },
    autoFocus: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "TextField",
  args: {
    label: "Label",
  },
};
