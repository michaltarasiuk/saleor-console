import type {Meta, StoryObj} from "@storybook/nextjs-vite";
import type {TooltipTriggerProps} from "react-aria";
import type {TooltipProps} from "react-aria-components";

import {Button} from "@/components/Button";
import {Tooltip, TooltipTrigger} from "@/components/Tooltip";

interface TooltipExampleProps
  extends Pick<
      TooltipTriggerProps,
      "isDisabled" | "delay" | "closeDelay" | "defaultOpen"
    >,
    Pick<
      TooltipProps,
      "placement" | "containerPadding" | "offset" | "shouldFlip"
    > {}

function TooltipExample({
  isDisabled,
  delay,
  closeDelay,
  defaultOpen,
  placement,
  containerPadding,
  offset,
  shouldFlip,
}: TooltipExampleProps) {
  return (
    <TooltipTrigger
      isDisabled={isDisabled}
      delay={delay}
      closeDelay={closeDelay}
      defaultOpen={defaultOpen}>
      <Button>Hover me</Button>
      <Tooltip
        placement={placement}
        containerPadding={containerPadding}
        offset={offset}
        shouldFlip={shouldFlip}>
        This is a tooltip message.
      </Tooltip>
    </TooltipTrigger>
  );
}

const meta = {
  component: TooltipExample,
  argTypes: {
    isDisabled: {
      control: "boolean",
    },
    delay: {
      control: "number",
    },
    closeDelay: {
      control: "number",
    },
    defaultOpen: {
      control: "boolean",
    },
    placement: {
      control: "select",
      options: [
        "bottom",
        "bottom left",
        "bottom right",
        "bottom start",
        "bottom end",
        "top",
        "top left",
        "top right",
        "top start",
        "top end",
        "left",
        "left top",
        "left bottom",
        "start",
        "start top",
        "start bottom",
        "right",
        "right top",
        "right bottom",
        "end",
        "end top",
        "end bottom",
      ] satisfies TooltipExampleProps["placement"][],
    },
    containerPadding: {
      control: "number",
      description:
        "The placement padding that should be applied between the element and its surrounding container",
    },
    offset: {
      control: "number",
      description:
        "The additional offset applied along the main axis between the element and its anchor element",
    },
    shouldFlip: {
      control: "boolean",
      description:
        "Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient space to render",
    },
  },
} satisfies Meta<typeof TooltipExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Tooltip",
  args: {
    offset: 10,
  },
};
