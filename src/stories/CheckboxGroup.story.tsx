import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Checkbox} from "@/components/Checkbox";
import {CheckboxGroup} from "@/components/CheckboxGroup";

type CheckboxGroupProps = React.ComponentProps<typeof CheckboxGroup>;

function CheckboxGroupDemo(props: CheckboxGroupProps) {
  return (
    <CheckboxGroup {...props}>
      <Checkbox value="1">Label 1</Checkbox>
      <Checkbox value="2">Label 2</Checkbox>
      <Checkbox value="3">Label 3</Checkbox>
    </CheckboxGroup>
  );
}

const meta = {
  component: CheckboxGroupDemo,
  argTypes: {
    variant: {
      control: "select",
      options: ["base", "group"] satisfies CheckboxGroupProps["variant"][],
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
    isInvalid: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof CheckboxGroupDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "CheckboxGroup",
};
