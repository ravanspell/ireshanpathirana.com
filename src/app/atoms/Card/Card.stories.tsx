import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <div>This is text content</div>,
  },
};
