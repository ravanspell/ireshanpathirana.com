// Button.stories.ts

// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/your-renderer';

import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
};
export default meta;

type Story = StoryObj<typeof Typography>;


export const Primary: Story = {
  args: {
    text: 'this is text',
  },
};