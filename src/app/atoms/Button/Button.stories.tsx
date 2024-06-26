import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    icon: faArrowAltCircleDown,
    label: 'Select color',
    onClick: () => {}
  },
};
