import type { Meta, StoryObj } from "@storybook/react";
import Password from ".";

const meta = {
  title: "Forms/Password",
  component: Password,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithChecker: Story = {
  args: {
    strengthChecker: true,
  },
};

export const WithoutChecker: Story = {
  args: {
    strengthChecker: false,
  },
};
