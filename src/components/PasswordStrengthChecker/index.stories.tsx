import type { Meta, StoryObj } from "@storybook/react";
import PasswordStrengthChecker from "./";
import { PasswordStrength } from "@/interfaces/passwordStrength";

const meta = {
  title: "Components/PasswordStrengthChecker",
  component: PasswordStrengthChecker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: { strength: { controls: "type" } },
} satisfies Meta<typeof PasswordStrengthChecker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Weak: Story = {
  args: {
    strength: PasswordStrength.WEAK,
  },
};

export const Fair: Story = {
  args: {
    strength: PasswordStrength.FAIR,
  },
};

export const Good: Story = {
  args: {
    strength: PasswordStrength.GOOD,
  },
};

export const Strong: Story = {
  args: {
    strength: PasswordStrength.STRONG,
  },
};
