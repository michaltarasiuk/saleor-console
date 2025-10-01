import type {Meta, StoryObj} from "@storybook/nextjs-vite";

import {IconButton} from "@/components/IconButton";
import {Sheet, SheetTrigger} from "@/components/Sheet";
import {HamburgerIcon} from "@/icons/HamburgerIcon";
import {cn} from "@/utils/cn";

type SheetTriggerProps = React.ComponentProps<typeof SheetTrigger>;
type SheetProps = React.ComponentProps<typeof Sheet>;

type SheetStoryProps = Pick<SheetTriggerProps, "defaultOpen"> &
  Pick<SheetProps, "side">;

function SheetStory({defaultOpen, side}: SheetStoryProps) {
  return (
    <SheetTrigger defaultOpen={defaultOpen}>
      <IconButton variant="outline" className={cn("p-small-100")}>
        <HamburgerIcon />
      </IconButton>
      <Sheet side={side} />
    </SheetTrigger>
  );
}

const meta = {
  component: SheetStory,
  argTypes: {
    defaultOpen: {
      control: "boolean",
    },
    side: {
      control: "select",
      options: ["start", "end"] satisfies SheetProps["side"][],
    },
  },
} satisfies Meta<typeof SheetStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Sheet",
};
