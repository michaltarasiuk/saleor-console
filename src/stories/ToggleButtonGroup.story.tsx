import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Text} from "@/components/Text";
import {ToggleButton, ToggleButtonGroup} from "@/components/ToggleButtonGroup";

function ToggleButtonGroupDemo() {
  return (
    <ToggleButtonGroup>
      <ToggleButton>
        <Text emphasis="semibold">15%</Text>
        <Text>$7.50</Text>
      </ToggleButton>
      <ToggleButton>
        <Text emphasis="semibold">20%</Text>
        <Text>$5.99</Text>
      </ToggleButton>
      <ToggleButton>
        <Text emphasis="semibold">25%</Text>
        <Text>$9.49</Text>
      </ToggleButton>
      <ToggleButton>
        <Text emphasis="semibold">None</Text>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

const meta = {
  component: ToggleButtonGroupDemo,
} satisfies Meta<typeof ToggleButtonGroupDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "ToggleButtonGroup",
};
