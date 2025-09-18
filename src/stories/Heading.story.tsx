import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {Heading, HeadingGroup} from "@/components/Heading";

function HeadingDemo() {
  return (
    <>
      <Heading>Heading 1</Heading>
      <HeadingGroup>
        <Heading>Heading 2</Heading>
        <HeadingGroup>
          <Heading>Heading 3</Heading>
        </HeadingGroup>
      </HeadingGroup>
    </>
  );
}

const meta = {
  component: HeadingDemo,
} satisfies Meta<typeof HeadingDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Heading",
};
