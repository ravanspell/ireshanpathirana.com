import type { Meta, StoryObj } from "@storybook/react";

import Section from "./Section";

const meta: Meta<typeof Section> = {
  component: Section,
};
export default meta;

type Story = StoryObj<typeof Section>;

export const Primary: Story = {
  args: {
    id: "story-id",
    children: <div>this is section content</div>,
    headerText: "My section Header",
  },
};
