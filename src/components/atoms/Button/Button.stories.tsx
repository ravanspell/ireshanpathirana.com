import type { Meta, StoryObj } from '@storybook/nextjs';

import Button from './Button';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: faArrowAltCircleDown,
    label: 'My button',
    onClick: () => {},
  },
};
