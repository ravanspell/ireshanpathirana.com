import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    label: 'My Tag',
    id: 'my-tag'
  },
};
